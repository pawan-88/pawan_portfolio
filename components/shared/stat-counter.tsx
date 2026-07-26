"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  /** e.g. "20+", "100%", "3+" */
  value: string;
  className?: string;
};

/**
 * Animated count-up for stat values like "20+" or "100%".
 * Parses the numeric part and preserves the suffix.
 */
export function StatCounter({ value, className }: StatCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const reducedMotion = useReducedMotion();
  const { count, ref } = useCountUp(target, 1800);

  return (
    <span
      ref={ref as unknown as React.RefObject<HTMLSpanElement>}
      className={cn("tabular-nums", className)}
    >
      {reducedMotion ? target : count}
      {suffix}
    </span>
  );
}
