import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Onest } from "next/font/google";
import type { Metadata } from "next";

const onest = Onest({
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
      <body className={`${onest.className} antialiased dark`}>
        <div className="absolute inset-0 top-[-280px] h-[280px] w-full bg-[radial-gradient(ellipse_at_center,_rgba(249,43,129,0.8)_50%,_transparent_80%)] blur-[200px] opacity-80 pointer-events-none overflow-hidden" />
        <Navbar />
        <main className="max-w-5xl px-4 flex flex-col overflow-y-auto mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
