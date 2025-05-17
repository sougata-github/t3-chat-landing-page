"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface Props {
  tier: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  isPrimary: boolean;
}

const PricingCard = ({
  tier,
  description,
  features,
  price,
  buttonText,
  isPrimary,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          delay: isPrimary ? 0.2 : 0,
        },
      }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col px-6 py-4 rounded-xl cursor-pointer max-w-md w-full",
        isPrimary ? "relative z-20" : "bg-muted-foreground/5"
      )}
    >
      {isPrimary && (
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="size-120 rounded-full bg-[radial-gradient(circle,_rgba(229,43,129,1)_40%,_#fd0e85_50%,_transparent_90%)] blur-[160px] opacity-90" />
        </div>
      )}

      {/* card header */}
      <div className="mt-5 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{tier}</h2>
        <span className="inline-flex items-center gap-1 text-3xl sm:text-4xl font-bold">
          ${price} <span className="text-muted-foreground text-sm">/month</span>
        </span>

        <p className="text-muted-foreground">{description}</p>

        <Button
          className={cn(
            "py-6 mt-5 text-base rounded-full w-full",
            isPrimary &&
              "relative bg-pink-700 text-white transition duration-300 hover:bg-pink-700/90 shadow-xl shadow-pink-700/40"
          )}
          asChild
          size="lg"
        >
          <Link
            href={
              isPrimary
                ? "https://t3.chat/settings/subscription"
                : "https://t3.chat/chat"
            }
          >
            {buttonText}
          </Link>
        </Button>
      </div>

      <Separator className="my-10" />

      <ul className="flex flex-col gap-4 py-8">
        {features.map((feature) => (
          <li key={feature} className="inline-flex gap-4 items-center">
            <CheckCircle2
              className={cn(
                "size-5",
                isPrimary ? "text-pink-700" : "text-muted-foreground"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
