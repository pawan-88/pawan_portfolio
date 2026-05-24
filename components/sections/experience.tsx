"use client";

import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding" aria-label="Experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Timeline of impact"
          description="Roles and milestones that shaped my engineering journey."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden
          />

          <MotionContainer className="space-y-8">
            {experience.map((item, index) => (
              <MotionItem key={item.id}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className="hidden md:block" />
                  <Card className="glass-card relative ml-10 md:ml-0">
                    <span className="absolute -left-[2.65rem] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400 bg-zinc-950 md:left-1/2 md:-translate-x-1/2">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                    </span>
                    <CardContent className="p-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-violet-300">
                        {item.duration}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-cyan-300/90">
                        {item.company} · {item.location}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-2 text-sm text-zinc-400 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet-400"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </MotionItem>
            ))}
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
