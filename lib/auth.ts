import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) {
        console.error("No email found in the user object");
        return false;
      }

      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          console.log(`Creating new user with email: ${user.email}`);
          await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              avatarUrl: user.image,
            },
          });
        } else {
          console.log(`User with email ${user.email} already exists.`);
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }

      // Returning a true value indicates a successful sign-in
      return true;
    },
  },
  pages: {
    signIn: "/review",
    error: "/review",
  },
  session: {
    maxAge: 1 * 24 * 60 * 60, // 1 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
