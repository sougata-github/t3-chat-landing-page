"use client";

import { footerLinks } from "@/constants";
import { BotMessageSquare } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:pt-20 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="#" className="flex items-center gap-1">
              <BotMessageSquare className="text-pink-700" />
              <span className="text-xl font-bold ml-1.5">T3.Chat</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              The fastest AI chatbot for all your needs.
            </p>
          </div>

          {footerLinks.map(({ section, links }) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} T3 Chat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
