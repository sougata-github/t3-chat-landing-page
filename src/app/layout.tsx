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
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <main className="max-w-5xl px-4 flex flex-col overflow-y-auto mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
