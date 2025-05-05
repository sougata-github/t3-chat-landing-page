"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

export function AvailableForHire() {
  return (
    <div className="inline-flex items-center gap-2 mb-10 py-1 px-3 rounded-full outline outline-1 outline-white/20">
      <span className="size-2 bg-lime-500 rounded-full absolute" />
      <span className="size-2 bg-lime-500 rounded-full animate-ping" />
      <p className="text-white/60 text-xs">Available for hire</p>
    </div>
  );
}

export const ShinyButton = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-sm">t3.chat app now available</span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export const GetStartedButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href="#"
      className="relative overflow-hidden bg-primary-pink rounded-full font-medium text-sm flex items-center justify-center h-9 w-36 text-center gap-2 transition-shadow duration-300 hover:shadow-[0_0_20px_3px_rgba(255,105,180,0.4)]"
    >
      Get Started
      <motion.div
        className="flex items-center justify-center rounded-full"
        initial={false}
        animate={{ y: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: hovered ? 0.5 : 1,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          <ChevronRight className="size-4" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: hovered ? 1 : 0.5,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0"
        >
          <ArrowRight className="size-4" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};
