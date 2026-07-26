"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

type BigMarqueeProps = {
  text: string;
  /** Positive scrolls left, negative scrolls right */
  baseVelocity?: number;
  outlined?: boolean;
  className?: string;
};

/**
 * Lusion-style giant type strip: huge outlined text that drifts sideways
 * and accelerates with your scroll velocity (direction-aware).
 */
export function BigMarquee({
  text,
  baseVelocity = 2,
  outlined = true,
  className,
}: BigMarqueeProps) {
  const reducedMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 350,
  });
  const velocityFactor = useTransform(smoothVelocity, [-1500, 1500], [-4, 4], {
    clamp: true,
  });
  const directionRef = useRef(baseVelocity < 0 ? -1 : 1);

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reducedMotion) return;
    let moveBy = directionRef.current * Math.abs(baseVelocity) * (delta / 1000);
    const vf = velocityFactor.get();
    // Flip direction with scroll direction, Lusion-style
    if (vf < -0.1) directionRef.current = -Math.sign(baseVelocity) || -1;
    else if (vf > 0.1) directionRef.current = Math.sign(baseVelocity) || 1;
    moveBy += directionRef.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const item = (
    <span
      className={cn(
        "px-6 text-6xl font-bold uppercase tracking-tight sm:text-7xl lg:text-8xl",
        outlined
          ? "text-transparent [-webkit-text-stroke:1px_rgba(248,250,252,0.22)]"
          : "text-white/90"
      )}
    >
      {text}
      <span className="px-6 text-accent/40">✦</span>
    </span>
  );

  return (
    <div
      className={cn("relative select-none overflow-hidden py-6", className)}
      aria-hidden
    >
      <motion.div
        className="flex w-max whitespace-nowrap will-change-transform"
        style={reducedMotion ? undefined : { x }}
      >
        {item}
        {item}
        {item}
        {item}
      </motion.div>
    </div>
  );
}
