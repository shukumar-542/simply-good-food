
import { authOptions } from "@/utils/authOptions"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }




























// import NextAuth from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../../utils/mongodb";
// import bcrypt from "bcrypt";


// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error("Missing credentials");
//         }

//         const { email, password } = credentials;

//         if (!email || !password) {
//           throw new Error("Missing email or password");
//         }

//         const client = await clientPromise;
//         const db = client.db("simple-food");
//         const user = await db.collection("users").findOne({ email });

//         if (user && bcrypt.compareSync(password, user.password)) {
//           return { id: user._id.toString(), name: user.name, email: user.email };
//         }

//         return null;
//       },
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login",
//     signOut: "/logout",
//     error: "/error",
//     verifyRequest: "/verify-request",
//   },
//   debug: true,
// };

// const handler = NextAuth(authOptions);

// export async function POST(req: NextRequest) {
//   return handler(req);
// }

// export async function GET(req: NextRequest) {
//   return handler(req);
// }
