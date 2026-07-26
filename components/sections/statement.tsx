"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const STATEMENT =
  "I combine engineering, AI, and design to build digital products that feel alive — from campaign-ready websites to full-scale SaaS platforms, crafted to capture attention and deliver results.";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block will-change-transform">
      {word}
    </motion.span>
  );
}

/**
 * Lusion-style scroll-linked statement: a giant paragraph where each word
 * brightens as you scroll through the section — reading pace = scroll pace.
 */
export function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section ref={ref} className="section-padding" aria-label="Statement">
      <div className="container">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-accent/80">
          Bold ideas, brought to life
        </p>
        {reducedMotion ? (
          <p className="max-w-4xl text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.25]">
            {STATEMENT}
          </p>
        ) : (
          <p className="max-w-4xl text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.25]">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <span key={i}>
                  <Word word={word} progress={scrollYProgress} range={[start, end]} />{" "}
                </span>
              );
            })}
          </p>
        )}
      </div>
    </section>
  );
}
