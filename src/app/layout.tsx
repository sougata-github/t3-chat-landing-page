import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T3 Chat",
  description: "The Fastest AI Chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased dark`}>
        <div className="absolute inset-0 top-[-150px] hidden md:block h-[400px] w-full bg-[radial-gradient(ellipse_at_center,_rgba(255,105,180,0.7)_20%,_rgba(249,43,129,0.5)_50%,_transparent_80%)] blur-[200px] opacity-75 pointer-events-none overflow-hidden" />
        <Navbar />
        <main className="max-w-5xl px-4 flex flex-col overflow-y-auto mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
