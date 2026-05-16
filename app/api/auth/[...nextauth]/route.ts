import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as any;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) return null; 
          
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) return null; 
          
          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      }
    })
  ],
  session: { strategy: "jwt" as any },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { 
    signIn: "/login" 
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };