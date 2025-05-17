import { BotMessageSquare } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="relative py-12 md:py-20 my-5 md:my-10 overflow-hidden">
      <div className="absolute top-20 inset-0 grain-overlay" />

      <div className="max-md:hidden absolute top-90 inset-0 flex items-center justify-center -z-10">
        <div className="md:size-80 rounded-full bg-[radial-gradient(circle,_rgba(229,43,129,1)_60%,_#f10428_40%,_#fd0e85_75%,_transparent_90%)] blur-[120px] opacity-100" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h1 className="text-sm md:text-base font-medium text-muted-foreground">
            Start for free
          </h1>
          <p className="text-xl md:text-4xl font-semibold mt-4 max-w-lg mx-auto">
            Experience lightning-fast AI
          </p>
        </div>

        <Button
          asChild
          className="md:text-base group rounded-full gap-2 items-center bg-pink-700 text-white transition duration-300 hover:bg-pink-700/90 shadow-[0_0_25px_5px_rgba(219,39,119,0.4)] py-6"
          size="lg"
        >
          <Link href="https://t3.chat/chat">
            <BotMessageSquare className="size-5" />
            Get Started Today
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
