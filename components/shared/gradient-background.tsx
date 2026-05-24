"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function GradientBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.12),_transparent_45%)]" />
      <motion.div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl"
        animate={reducedMotion ? undefined : { x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl"
        animate={reducedMotion ? undefined : { scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
    </div>
  );
}
