"use client";

import { cn } from "@/lib/utils";

type RollingTextProps = {
  text: string;
  className?: string;
};

/**
 * Lusion's nav-link hover: two stacked copies of the label inside an
 * overflow mask — on hover the first rolls up and out while the duplicate
 * rolls in from below, character-staggered.
 */
export function RollingText({ text, className }: RollingTextProps) {
  const chars = Array.from(text);

  return (
    <span
      className={cn(
        "group/roll relative inline-block overflow-hidden align-bottom",
        className
      )}
      aria-label={text}
    >
      {/* Visible layer */}
      <span className="flex" aria-hidden>
        {chars.map((ch, i) => (
          <span
            key={`a-${i}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/roll:-translate-y-full"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
      {/* Incoming duplicate */}
      <span className="absolute inset-0 flex" aria-hidden>
        {chars.map((ch, i) => (
          <span
            key={`b-${i}`}
            className="inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/roll:translate-y-0"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
