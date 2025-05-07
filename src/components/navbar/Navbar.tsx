"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <motion.header className="sticky top-0 py-6 bg-transparent z-40 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto flex items-center w-full justify-between px-8 lg:px-4">
        {/* logo */}
        <Link href="/" className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ff3e78"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle-icon lucide-message-circle -mt-0.5"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>

          <span className="text-xl font-bold">T3.Chat</span>
        </Link>

        {/* links */}
        <div className="flex gap-4 items-center">
          <ul className="md:flex items-center gap-4 hidden">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-sm text-muted-foreground hover:text-white transition-all font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Button className="text-sm rounded-full" asChild variant="outline">
              <Link href="/">Try for free</Link>
            </Button>
          </ul>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
