"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

export const ShinyButton = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          {/* <div className="inline-flex items-center mr-2">
            <span className="size-2 bg-pink-500 rounded-full absolute" />
            <span className="size-2 bg-pink-500 rounded-full animate-ping" />
          </div> */}
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
      className="relative overflow-hidden bg-white text-black rounded-full font-medium text-sm flex items-center justify-center h-9 w-36 text-center gap-2"
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
