import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";
export const authOptions : NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
              name: "Credentials",
              credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
              },
              async authorize(credentials) {
                if (!credentials) {
                  throw new Error("Missing credentials");
                }
        
                const { email, password } = credentials;
        
                if (!email || !password) {
                  throw new Error("Missing email or password");
                }
        
                const client = await clientPromise;
                const db = client.db("simple-food");
                const user = await db.collection("users").findOne({ email });
        
                if (user && bcrypt.compareSync(password, user.password)) {
                  return { id: user._id.toString(), name: user.name, email: user.email };
                }
        
                return null;
              },
            }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
    verifyRequest: "/verify-request",
  },
  debug: true,
};

