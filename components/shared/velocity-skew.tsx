"use client";

import { type ReactNode } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Lusion-style scroll feel: content skews a touch in the scroll direction
 * proportional to velocity, springing back to rest when scrolling stops.
 */
export function VelocitySkew({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 250, damping: 50 });
  const skewY = useTransform(smooth, [-2500, 2500], ["-1.6deg", "1.6deg"], {
    clamp: true,
  });

  if (reducedMotion) return <>{children}</>;

  return <motion.div style={{ skewY }}>{children}</motion.div>;
}
