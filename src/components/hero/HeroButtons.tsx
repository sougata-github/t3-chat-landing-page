"use client";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

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
  return (
    <Button className="group rounded-full gap-0.5" size="lg">
      Get Started
      <ChevronRight className="size-4 transition group-hover:translate-x-0.5 -mt-[0.02px]" />
    </Button>
  );
};
