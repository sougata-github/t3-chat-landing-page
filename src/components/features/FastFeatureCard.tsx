"use client";

import { cn } from "@/lib/utils";
import { Bot, SmileIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aiMessage, userMessge } from "@/constants";
import FeatureCard from "./FeatureCard";

const FastFeatureCard = () => {
  return (
    <FeatureCard
      title="Blazingly-fast responses"
      description="Get instant answers to your questions."
    >
      <div className="flex flex-col gap-4 py-10 h-[220px]">
        <Message role="user" message={userMessge} delay={0.4} />
        <Message role="ai" message={aiMessage} delay={0.8} />
      </div>
    </FeatureCard>
  );
};

interface MessageProps {
  role: "user" | "ai";
  message: string;
  delay: number;
}

const Message = ({ role, message, delay }: MessageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isTypingBot, setIsTypingBot] = useState(true);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsTypingBot(false);
      }, 2000 + delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 5 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "flex gap-2",
        role === "user" ? "justify-end" : "justify-start"
      )}
    >
      {/* avatar */}
      <div
        className={cn(
          "rounded-full p-2 outline h-fit transition duration-300",
          role === "user" ? "order-2" : "order-1"
        )}
      >
        {role === "user" ? (
          <SmileIcon className="size-5 text-white" />
        ) : (
          <Bot className="size-5 text-white" />
        )}
      </div>

      {/* message */}
      <motion.div
        className={cn(
          "rounded-2xl py-2 px-4 md:max-w-[180px]",
          role === "user"
            ? "order-1 bg-pink-700"
            : "order-2 bg-muted-foreground/5"
        )}
      >
        {role === "ai" && isTypingBot ? (
          <LoadingDots />
        ) : (
          <p>
            {message.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.8,
                  delay: isInView ? index * 0.1 : 0,
                }}
                className="text-sm"
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

const LoadingDots = () => {
  return (
    <div className="flex space-x-1 mt-2">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="size-2 rounded-full bg-muted-foreground/60"
          initial={{ y: 0 }}
          whileInView={{ y: [0, -5, 0] }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: dot * 0.2,
          }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
};

export default FastFeatureCard;
