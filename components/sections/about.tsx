"use client";

import { focusAreas } from "@/data/skills";
import { personalInfo } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="Engineering with precision and product thinking"
          description="A developer focused on shipping reliable systems, elegant interfaces, and measurable business outcomes."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <MotionContainer className="space-y-6">
            <MotionItem>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-zinc-400">
                  <p>
                    I am a full stack developer from {personalInfo.location}, building
                    production-ready applications across web, backend, and data workflows.
                    I combine engineering discipline with modern UI craft to deliver
                    experiences that feel premium and perform under load.
                  </p>
                  <p>
                    My work spans SaaS platforms, e-commerce systems, analytics dashboards,
                    and automation pipelines — always with maintainable architecture and
                    recruiter-friendly clarity.
                  </p>
                </CardContent>
              </Card>
            </MotionItem>
          </MotionContainer>

          <MotionContainer className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <MotionItem key={area.title}>
                <Card className="glass-card group h-full transition-transform duration-300 hover:-translate-y-1 hover:border-violet-500/30">
                  <CardHeader>
                    <CardTitle className="text-base">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400">{area.description}</p>
                  </CardContent>
                </Card>
              </MotionItem>
            ))}
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
