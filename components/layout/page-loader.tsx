"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personal";

/**
 * Lusion-style entrance: percentage counter climbs to 100, name reveals
 * through a mask, then the loader splits open like a curtain.
 */
export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      // Ease-out: fast at first, slows near the end
      const remaining = 100 - value;
      value += Math.max(1, Math.round(remaining * 0.12));
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 350);
      }
      setProgress(value);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100]"
          aria-live="polite"
          aria-label="Loading"
          exit={{ pointerEvents: "none" as const }}
        >
          {/* Curtain halves */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-background"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-background"
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Center content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
              >
                Hi, Welcome
              </motion.p>

              <div className="mt-4 overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="text-2xl font-semibold text-white sm:text-3xl"
                >
                  {personalInfo.name}
                </motion.h2>
              </div>

              <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Big percentage counter, bottom-right (Lusion signature) */}
            <p className="absolute bottom-8 right-8 font-mono text-6xl font-bold tabular-nums text-white/15 sm:text-8xl">
              {progress}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
