import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Meta title-um TechMaster la irunthu CSE_Hub ku maathiyachu!
export const metadata: Metadata = {
  title: "CSE_Hub - Core CS Concepts",
  description: "A platform to learn DBMS, OS, Algorithms and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-200 min-h-screen flex flex-col`}>
        
        <Navbar />
        
        {/* pt-16 is crucial here to push content down below the fixed navbar */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}