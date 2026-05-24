"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding" aria-label="Skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Curated engineering capability stack"
          description="Categorized expertise across the full product delivery lifecycle."
        />

        <MotionContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <MotionItem key={category.id}>
              <Card className="glass-card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <p className="text-sm text-zinc-400">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Badge variant="secondary" className="cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
