"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  className?: string;
  separator?: string;
};

/**
 * Infinite marquee strip (pauses on hover). Content is duplicated so the
 * -50% translate loops seamlessly.
 */
export function Marquee({ items, className, separator = "✦" }: MarqueeProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div className="animate-marquee flex w-max items-center gap-6">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 text-sm font-medium text-muted transition-colors hover:text-white"
          >
            {item}
            <span className="text-[10px] text-accent/60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
