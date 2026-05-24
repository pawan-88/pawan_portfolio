"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Flagship systems & product work"
          description="A bento-style showcase of production-grade builds across AI, commerce, and infrastructure."
        />

        <MotionContainer className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <MotionItem
              key={project.id}
              className={cn(
                "min-h-[320px]",
                project.size === "large" && "sm:col-span-2 lg:row-span-2",
                project.featured && project.size !== "large" && "lg:col-span-2",
                !project.featured && project.size === "small" && "lg:col-span-1"
              )}
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="secondary">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
