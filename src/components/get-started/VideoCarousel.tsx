"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import { steps } from "@/constants";
import { cn } from "@/lib/utils";

const VideoCarousel = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null); // null = not started
  const [showReplay, setShowReplay] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, steps.length);
  }, []);

  // Play next video or show replay if it's the last one
  const playNextVideo = () => {
    if (activeStep === null) return;

    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => (prev ?? 0) + 1);
    } else {
      setShowReplay(true);
    }
  };

  // Play video on activeStep change & pause others
  useEffect(() => {
    if (activeStep === null) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeStep) {
        video.currentTime = 0;
        video.play().catch((err) => console.error("Video play error:", err));
      } else {
        video.pause();
      }
    });
  }, [activeStep]);

  // Trigger playback when section comes into view
  useEffect(() => {
    if (isInView && activeStep === null) {
      setActiveStep(0);
    }
  }, [isInView, activeStep]);

  const handleReplay = () => {
    setShowReplay(false);
    setActiveStep(0);
  };

  return (
    <div ref={containerRef} className="mt-20 sm:px-10 md:px-1 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start space-x-4 p-4 rounded-xl transition-all duration-300",
                activeStep === index ? "bg-muted-foreground/5" : ""
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  activeStep === index
                    ? "bg-muted-foreground/10"
                    : "bg-secondary"
                )}
              >
                {activeStep !== null && activeStep > index ? (
                  <Check className="size-4 sm:size-5 text-pink-700" />
                ) : (
                  <span className="max-md:text-sm text-pink-700 font-medium">
                    {index + 1}
                  </span>
                )}
              </div>
              <div>
                <h3
                  className={cn(
                    "text-lg font-medium mb-2",
                    activeStep === index ? "text-primary" : "text-white"
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-xs md:max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
          <AnimatePresence mode="wait">
            {steps.map(
              (step, index) =>
                activeStep === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={step.video}
                      className="size-full object-cover"
                      muted
                      playsInline
                      autoPlay
                      onEnded={playNextVideo}
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Overlay for Replay Button */}
          {showReplay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center z-10"
            >
              <button
                onClick={handleReplay}
                className="bg-muted-foreground/10 hover:bg-muted-foreground/15 transition duration-300 rounded-full p-2"
              >
                <RotateCcw className="size-5 text-pink-700" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
