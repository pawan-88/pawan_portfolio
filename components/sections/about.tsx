"use client";

import { focusAreas } from "@/data/skills";
import { personalInfo } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="Engineering with precision and product thinking"
          description="A developer focused on shipping reliable systems, elegant interfaces, and measurable business outcomes."
        />

        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
          <MotionContainer>
            <MotionItem>
              <div className="flex flex-col items-center gap-4 lg:sticky lg:top-28">
                <ProfileAvatar size="about" showGlow={false} />
                <div className="text-center">
                  <p className="font-semibold text-white">{personalInfo.name}</p>
                  <p className="mt-1 flex items-center justify-center gap-1 text-sm text-zinc-400">
                    <MapPin className="h-3.5 w-3.5 text-violet-400" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </MotionItem>
          </MotionContainer>

          <div className="grid gap-8 lg:grid-cols-2">
            <MotionContainer className="space-y-6 lg:col-span-2">
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

            <MotionContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
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
      </div>
    </section>
  );
}
