"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { heroStats, specializations, techStack } from "@/data/hero";
import { HeroProfile } from "@/components/sections/hero-profile";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SplitText } from "@/components/shared/split-text";
import { ScrambleText } from "@/components/shared/scramble-text";
import { Marquee } from "@/components/shared/marquee";
import { ScrollHint } from "@/components/shared/scroll-hint";
import { StatCounter } from "@/components/shared/stat-counter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-12 sm:pb-16" aria-label="Hero">
      <div className="container">
        {/* Main two-column hero */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <ScrambleText text="Hi, Welcome" delay={400} />
            </p>

            <h1 className="display-text font-bold text-white">
              <SplitText text={personalInfo.headline} by="words" trigger="mount" delay={0.3} />
            </h1>

            <p className="mt-4 text-lg font-medium leading-snug text-accent/90 sm:text-xl">
              {personalInfo.title}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {personalInfo.subheading}
            </p>

            <p className="mt-6 text-sm text-muted">Specializing in</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {specializations.map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/90 sm:text-sm"
                >
                  <item.icon className="h-3.5 w-3.5 text-accent" />
                  {item.label}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <MagneticButton>
                <Button asChild size="lg">
                  <Link href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild size="lg" variant="secondary">
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Projects
                  </Link>
                </Button>
              </MagneticButton>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-3 border-l-2 border-accent/50 pl-4 sm:mt-10"
            >
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Percieve. Design. Develop — I partner with founders and businesses to
                turn ideas into products that deliver measurable outcomes.
              </p>
            </motion.div>

            <ScrollHint />
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <HeroProfile />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-6 border-y border-white/[0.06] py-8 sm:grid-cols-4 sm:gap-4 lg:mt-16"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="text-center sm:text-left"
            >
              <p className="font-mono text-2xl font-bold text-white sm:text-3xl">
                <StatCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-8 sm:p-6"
        >
          <div className="shrink-0">
            <p className="text-sm font-semibold text-white">Tech Stack</p>
            <div className="mt-1 h-0.5 w-12 bg-accent" />
          </div>
          <Marquee items={techStack} className="min-w-0 flex-1 py-1.5" />
        </motion.div>
      </div>
    </section>
  );
}
