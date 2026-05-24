"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal";

type ProfileAvatarProps = {
  size?: "hero" | "about" | "sm";
  className?: string;
  showGlow?: boolean;
};

const sizeMap = {
  hero: {
    wrapper: "h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72",
    image: 288,
    ring: "p-[3px]",
  },
  about: {
    wrapper: "h-32 w-32 sm:h-36 sm:w-36",
    image: 144,
    ring: "p-[2px]",
  },
  sm: {
    wrapper: "h-20 w-20",
    image: 80,
    ring: "p-[2px]",
  },
};

export function ProfileAvatar({
  size = "hero",
  className,
  showGlow = true,
}: ProfileAvatarProps) {
  const config = sizeMap[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative mx-auto shrink-0", config.wrapper, className)}
    >
      {showGlow ? (
        <>
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl"
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500/40 via-transparent to-cyan-400/40 blur-md"
            aria-hidden
          />
        </>
      ) : null}

      <motion.div
        className={cn(
          "relative h-full w-full rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400",
          config.ring
        )}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-full bg-zinc-950 shadow-2xl shadow-violet-950/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-1"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-900">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} profile photo`}
                width={config.image}
                height={config.image}
                priority={size === "hero"}
                className="h-full w-full scale-[1.08] object-cover object-[center_15%] brightness-[0.97] contrast-[1.05] saturate-[0.95]"
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-zinc-950/50 via-transparent to-violet-950/20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-emerald-500/30 bg-zinc-950/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300 backdrop-blur-md sm:text-xs"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Available
      </motion.div>
    </motion.div>
  );
}
