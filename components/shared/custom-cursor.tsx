"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Lusion-style custom cursor: a small dot that tracks instantly plus a
 * trailing ring on a spring. The ring expands over interactive elements
 * and shows a "View" label over case-study cards ([data-cursor="view"]).
 */
export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "link" | "view">(
    "default"
  );
  const [isTouch, setIsTouch] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only enable on precise pointers (desktop)
    const fine = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!fine);
    if (!fine || reducedMotion) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) {
        setHoverState("view");
      } else if (target.closest("a, button, [role='button'], input, textarea")) {
        setHoverState("link");
      } else {
        setHoverState("default");
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion, x, y]);

  if (isTouch || reducedMotion) return null;

  const ringSize =
    hoverState === "view" ? 88 : hoverState === "link" ? 48 : 32;

  return (
    <>
      {/* Instant dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[150] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && hoverState !== "view" ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        aria-hidden
      />
      {/* Trailing ring / morph */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[149] flex items-center justify-center rounded-full border border-accent/50 backdrop-blur-[2px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          backgroundColor:
            hoverState === "view"
              ? "rgba(0, 245, 212, 0.9)"
              : hoverState === "link"
              ? "rgba(0, 245, 212, 0.08)"
              : "rgba(0, 245, 212, 0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        aria-hidden
      >
        <motion.span
          className="select-none text-[11px] font-semibold uppercase tracking-wider text-background"
          animate={{ opacity: hoverState === "view" ? 1 : 0, scale: hoverState === "view" ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
}
