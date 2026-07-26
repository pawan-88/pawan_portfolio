"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01<>/_\\|=+*";

type ScrambleTextProps = {
  text: string;
  className?: string;
  /** ms per decode step */
  speed?: number;
  delay?: number;
};

/**
 * Decode/scramble effect — characters cycle through glyphs before
 * locking into place, left to right. Triggers when scrolled into view.
 */
export function ScrambleText({
  text,
  className,
  speed = 35,
  delay = 0,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion) return;

    let frame = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame++;
        const locked = Math.floor(frame / 2);
        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < locked) return ch;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (locked >= text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [started, text, speed, delay, reducedMotion]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
