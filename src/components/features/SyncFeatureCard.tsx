"use client";

import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { Check, RefreshCw } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { Switch } from "../ui/switch";

const SyncFeatureCard = () => {
  return (
    <FeatureCard
      title="Cloud Sync"
      description="Keep conversations safe and accessible across devices."
      className="lg:col-span-3"
    >
      <div className="flex flex-col gap-6 sm:gap-4 pt-4 pb-6">
        <Sync />
      </div>
    </FeatureCard>
  );
};

export default SyncFeatureCard;

const Sync = () => {
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [syncState, setSyncState] = useState<"syncing" | "synced" | "disabled">(
    "syncing"
  );
  const [syncTime, setSyncTime] = useState("just now");

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    if (syncEnabled) {
      setSyncState("syncing");

      // After 2 seconds, show synced state
      timeout1 = setTimeout(() => {
        setSyncState("synced");
        setSyncTime("just now");
      }, 2000);

      // After 5 seconds, automatically turn off sync
      timeout2 = setTimeout(() => {
        setSyncEnabled(false);
      }, 5000);
    } else {
      setSyncState("disabled");
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [syncEnabled]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium">Enable Sync</h2>
        <Switch
          checked={syncEnabled}
          onCheckedChange={setSyncEnabled}
          className="data-[state=checked]:bg-pink-700"
        />
      </div>

      <div className="space-y-4">
        <div className="rounded-lg bg-zinc-900 p-4 border border-zinc-800">
          <div className="text-sm text-zinc-400 mb-2">Sync Status</div>
          <AnimatePresence mode="wait">
            {syncState === "syncing" && (
              <motion.div
                key="syncing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="flex items-center gap-2"
              >
                <RefreshCw className="size-5 text-pink-700 animate-spin" />
                <span className="text-zinc-200">Syncing...</span>
              </motion.div>
            )}
            {syncState === "synced" && (
              <motion.div
                key="synced"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="flex items-center gap-2"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-pink-700/20 text-pink-700">
                  <Check className="size-4" />
                </div>
                <span className="text-zinc-200">Synced {syncTime}</span>
              </motion.div>
            )}

            {syncState === "disabled" && (
              <motion.div
                key="disabled"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="text-zinc-400"
              >
                Sync disabled. New messages won&apos;t be backed up.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{
            opacity: syncEnabled ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className="text-xs text-zinc-500"
        >
          Your threads sync automatically when new messages are sent.
        </motion.div>
      </div>
    </div>
  );
};
