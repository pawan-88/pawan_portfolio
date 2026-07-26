"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  /** "words" (default) or "chars" */
  by?: "words" | "chars";
  /** Animate immediately vs when scrolled into view */
  trigger?: "mount" | "inView";
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const itemVariants: Variants = {
  hidden: { y: "110%", rotate: 4, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Lusion-style masked text reveal — each word/char rises out of an
 * overflow-hidden mask with a slight rotation, staggered.
 */
export function SplitText({
  text,
  className,
  by = "words",
  trigger = "inView",
  delay = 0,
  stagger = 0.045,
  as: Tag = "span",
}: SplitTextProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const units =
    by === "chars" ? Array.from(text) : text.split(/(\s+)/).filter(Boolean);

  const MotionTag = motion[Tag] as typeof motion.span;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-60px" } })}
      aria-label={text}
    >
      {units.map((unit, i) =>
        /^\s+$/.test(unit) ? (
          <span key={i}>{" "}</span>
        ) : (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              variants={itemVariants}
              className="inline-block will-change-transform"
              aria-hidden
            >
              {unit}
            </motion.span>
          </span>
        )
      )}
    </MotionTag>
  );
}
