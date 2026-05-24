"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-20"
      aria-label="Hero"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-200">
            <Sparkles className="mr-1 h-3 w-3" />
            Available for new opportunities
          </Badge>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-300/90">
            Premium Developer Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">Engineering</span>
            <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            {personalInfo.title}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            {personalInfo.intro}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
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
          </div>
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
