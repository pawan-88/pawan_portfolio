"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding overflow-hidden" aria-label="Process">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="How we work together"
          description="A transparent, structured approach from first call to production launch."
        />

        <div ref={containerRef} className="relative">
          <div className="absolute left-0 top-8 hidden h-px w-full bg-white/10 lg:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-8 hidden h-px bg-gradient-to-r from-accent to-secondary lg:block"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-4 lg:overflow-x-auto lg:pb-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border glass-card min-w-[260px] flex-1 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-bold text-accent">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/10 lg:hidden" />
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner />
    </section>
  );
}
