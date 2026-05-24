"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProfileAvatar } from "@/components/shared/profile-avatar";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-20"
      aria-label="Hero"
    >
      <motion.div
        className="pointer-events-none absolute right-0 top-1/3 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-20 blur-3xl lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 opacity-15 blur-3xl lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute right-8 top-28 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-xl lg:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-xl">
          <Image
            src={personalInfo.profileImage}
            alt=""
            fill
            className="object-cover object-[center_15%] brightness-90 saturate-90"
            aria-hidden
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-transparent to-cyan-500/30 mix-blend-color"
            aria-hidden
          />
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-32 left-8 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl backdrop-blur-xl lg:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          className="relative h-20 w-20 overflow-hidden rounded-xl"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={personalInfo.profileImage}
            alt=""
            fill
            className="object-cover object-[center_15%] scale-110 brightness-75 contrast-125 grayscale"
            aria-hidden
          />
          <div className="absolute inset-0 bg-violet-950/40 mix-blend-multiply" aria-hidden />
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-24 right-12 hidden overflow-hidden rounded-full border border-white/10 bg-zinc-950/80 p-1 shadow-xl backdrop-blur-md lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="relative h-16 w-16 overflow-hidden rounded-full"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={personalInfo.profileImage}
            alt=""
            fill
            className="object-cover object-[center_15%]"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <motion.div
            className="order-2 text-center lg:order-1 lg:text-left"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Badge className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
              <Sparkles className="mr-1 h-3 w-3" />
              Available for new opportunities
            </Badge>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-300/90">
              Premium Developer Portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Engineering</span>
              <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl lg:mx-0">
              {personalInfo.title}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 lg:mx-0">
              {personalInfo.intro}
            </p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Button asChild size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:scale-105 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProfileAvatar size="hero" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
            aria-label="Scroll to about section"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
