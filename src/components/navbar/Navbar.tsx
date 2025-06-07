"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.header className="sticky top-0 py-6 bg-transparent z-40 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto flex items-center w-full justify-between px-8 lg:px-4">
        {/* logo */}
        <Link href="#" className="flex items-center gap-1.5">
          <Image
            quality={100}
            unoptimized
            height={32}
            width={32}
            src="/t3-chat-logo.png"
            alt="logo"
          />
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

            <Button className="text-sm rounded-md" asChild variant="ghost">
              <Link href="https://t3.chat/chat">Try for free</Link>
            </Button>
          </ul>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
