"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Subtle animated film-grain texture over the whole page — the finishing
 * touch that gives flat dark backgrounds a premium, tactile feel.
 */
export function GrainOverlay() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden opacity-[0.05] mix-blend-overlay"
      aria-hidden
    >
      <div
        className={`absolute -inset-[100%] ${reducedMotion ? "" : "animate-grain"}`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  );
}
