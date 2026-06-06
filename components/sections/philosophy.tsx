"use client";

import { motion } from "framer-motion";
import { philosophyCards } from "@/data/philosophy";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding" aria-label="Philosophy">
      <div className="container">
        <SectionHeader
          eyebrow="Philosophy"
          title="Building with clarity, not complexity"
          description="The best products start with the right questions — not the latest frameworks."
        />

        <div className="space-y-6">
          {philosophyCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="gradient-border glass-card group p-8 sm:p-10 lg:p-12"
            >
              <blockquote className="text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                &ldquo;{card.quote}&rdquo;
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted transition-colors group-hover:text-muted/90">
                {card.context}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
      <CtaBanner title="Have a problem worth solving?" />
    </section>
  );
}
