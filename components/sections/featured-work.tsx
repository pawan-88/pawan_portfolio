"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedWorkSection() {
  return (
    <section id="work" className="section-padding" aria-label="Featured Work">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Work"
          title="Case studies that drive business impact"
          description="Real problems. Thoughtful solutions. Outcomes that matter to your bottom line."
        />

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group"
            >
              <div
                className={cn(
                  "gradient-border glass-card overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,245,212,0.08)]",
                  `bg-gradient-to-br ${study.accent}`
                )}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      Case Study {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                      {study.title}
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                          Problem
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                          Solution
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                        Technology
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.technology.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        Business Impact
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                        {study.impact}
                      </p>
                    </div>

                    <Button
                      asChild
                      variant="secondary"
                      className="w-fit transition-transform group-hover:scale-[1.02]"
                    >
                      <Link href={study.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <CtaBanner title="Want results like these for your business?" />
    </section>
  );
}
