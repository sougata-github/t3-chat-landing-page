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
        {/* top gradient */}
        <div className="absolute inset-0 top-[-400px] h-[280px] w-full lg:w-[800px] left-[40%] bg-[radial-gradient(ellipse_at_center,_#fd0e85_100%)] blur-[200px] opacity-90 pointer-events-none overflow-hidden" />

        <Navbar />
        <main className="max-w-7xl px-4 flex flex-col mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
