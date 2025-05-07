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
    <section className="py-16 md:py-20 relative">
      {/* grain effect */}
      <div className="absolute top-40 inset-0 grain-overlay" />

      <motion.div variants={itemVariants} initial="initial" animate="animate">
        <ShinyButton />
      </motion.div>
      <motion.div
        className="flex flex-col gap-6 items-center justify-center text-center mt-10 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
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

        {/* hero video */}
        <motion.div
          className="md:mt-24 mt-14 rounded-lg"
          variants={itemVariants}
        >
          <motion.video
            controls={false}
            autoPlay
            muted
            playsInline
            loop
            className="rounded-lg"
          >
            <source src="/t3-chat-hero.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* hero gradient */}
        <div className="absolute top-90 lg:h-[900px] lg:w-[900px] md:h-[400px] md:w-[400px] -translate-x-1/2 left-1/2 rounded-full bg-[radial-gradient(circle,__rgba(299,43,129,1)_40%,_#fd0e85_50%,_transparent_90%)] blur-[80px] opacity-90 max-md:hidden -z-10" />
      </motion.div>
    </section>
  );
};

export default Hero;
