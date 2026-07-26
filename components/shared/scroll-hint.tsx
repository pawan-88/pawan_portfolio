"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Lusion's "scroll to explore" hint — fades out once you start scrolling. */
export function ScrollHint() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none mt-12 hidden items-center gap-3 lg:flex"
      aria-hidden
    >
      <span className="relative h-10 w-px overflow-hidden bg-white/15">
        <motion.span
          className="absolute left-0 top-0 h-3 w-px bg-accent"
          animate={{ y: [-12, 40] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll to explore
      </span>
    </motion.div>
  );
}
