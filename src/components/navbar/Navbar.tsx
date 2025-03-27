"use client";

import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <motion.header className="sticky top-0 py-6 bg-transparent">
      <nav className="max-w-5xl mx-auto md:flex items-center w-full justify-between px-8 lg:px-4 hidden">
        {/* logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-pink-500 outline-2 outline-pink-400">
            <Image
              src={logo}
              alt="logo"
              className="w-[20px]"
              priority
              unoptimized
            />
          </div>

          <span className="text-xl font-bold">T3.Chat</span>
        </Link>

        {/* links */}
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-sm text-muted-foreground hover:text-white transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}

          <Button className="ml-4 text-sm rounded-lg" asChild>
            <Link href="/">Try for free</Link>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
