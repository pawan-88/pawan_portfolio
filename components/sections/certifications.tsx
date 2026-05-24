"use client";

import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding" aria-label="Certifications">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials & continuous learning"
          description="Industry-recognized certifications validating core engineering competencies."
        />

        <MotionContainer className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <MotionItem key={cert.id}>
              <Card className="glass-card group h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                    <Award className="h-6 w-6 text-violet-300" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">{cert.title}</CardTitle>
                    <p className="mt-1 text-sm text-zinc-400">
                      {cert.organization} · {cert.date}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
