"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";

function FloatingCards() {
  return (
    <div className="flex flex-col gap-2.5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.55 }}
        className="rounded-xl border border-white/10 bg-background/90 p-3 shadow-2xl backdrop-blur-xl sm:p-3.5"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent sm:h-8 sm:w-8">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold leading-snug text-white sm:text-xs">
              {personalInfo.roleTitle}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-[10px] text-emerald-400 sm:text-[11px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for projects
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.55 }}
        className="rounded-xl border border-white/10 bg-background/90 p-3 shadow-2xl backdrop-blur-xl sm:p-3.5"
      >
        <div className="flex items-start gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary sm:h-8 sm:w-8">
            <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <p className="text-[11px] leading-snug text-muted sm:text-xs">
            Let&apos;s build something{" "}
            <span className="font-medium text-accent">amazing together!</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function HeroProfile() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
      <motion.div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto"
      >
        <div className="rounded-[1.75rem] bg-gradient-to-br from-accent/50 via-secondary/30 to-accent/20 p-[2px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="overflow-hidden rounded-[1.65rem] bg-[#0a0f1e]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} — ${personalInfo.roleTitle}`}
                fill
                priority
                unoptimized
                className="object-cover object-[center_12%] brightness-[1.02] contrast-[1.04]"
                sizes="(max-width: 768px) 340px, 420px"
              />

              {/* Cards on chest — lower-right, clear of face */}
              <div className="absolute bottom-[6%] right-[4%] z-20 w-[52%] max-w-[200px] sm:bottom-[8%] sm:right-[5%] sm:max-w-[210px]">
                <FloatingCards />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/25 bg-background/95 px-4 py-1.5 text-[11px] font-medium text-accent shadow-lg backdrop-blur-md sm:text-xs"
        >
          Backend Engineer · Pune, India
        </motion.div>
      </motion.div>
    </div>
  );
}
