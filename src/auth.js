import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./utils/mongodb.ts";
// import { getUserByEmail } from "./data/users";

export const {
   
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;

                try {

                    const client = await clientPromise;
                    const db = client.db("simple-food");
                    const user = await db.collection("users").findOne(credentials?.email);
                    console.log(user);
                    if (user) {
                        const isMatch = user?.password === credentials.password;

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),


    ],
});