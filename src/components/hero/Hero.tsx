"use client";

import { motion } from "framer-motion";
import { GetStartedButton, ShinyButton } from "./HeroButtons";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
    },
  },
};

const Hero = () => {
  return (
    <section className="pt-16 md:pt-20">
      <motion.div variants={itemVariants} initial="initial" animate="animate">
        <ShinyButton />
      </motion.div>

      <motion.div
        className="flex flex-col gap-6 item-center justify-center text-center mt-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-semibold"
          variants={itemVariants}
        >
          The Fastest AI Chatbot
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-md max-md:max-w-xs mx-auto"
          variants={itemVariants}
        >
          Experience the fastest, most versatile AI chat app built to deliver
          instant, intelligent responses.
        </motion.p>

        <motion.div
          className="flex items-center justify-center mt-2"
          variants={itemVariants}
        >
          <GetStartedButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
