"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projectTypes = [
  "AI Application",
  "SaaS Platform",
  "Web Application",
  "Automation",
  "API / Integration",
  "Other",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const text = encodeURIComponent(
      `Hi Pawan! 👋 New project inquiry from your portfolio:\n\n` +
        `*Name:* ${data.get("name")}\n` +
        `*Email:* ${data.get("email")}\n` +
        `*Project Type:* ${data.get("projectType")}\n` +
        `*Budget:* ${data.get("budget")}\n\n` +
        `*Message:*\n${data.get("message")}`
    );
    window.open(`${personalInfo.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something extraordinary"
          description="Tell me about your project. I'll respond within 24 hours with next steps."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="gradient-border glass-card p-8">
              <p className="text-sm text-muted">Quick connect</p>
              <p className="mt-4 text-2xl font-semibold text-white">{personalInfo.name}</p>
              <p className="mt-2 text-muted">{personalInfo.location}</p>
              <p className="mt-1 text-sm text-accent">{personalInfo.availability}</p>

              <div className="mt-8 flex flex-col gap-3">
                <Button asChild variant="secondary" className="justify-start">
                  <Link href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 text-green-400" />
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="justify-start">
                  <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 text-blue-400" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="justify-start">
                  <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 text-white" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="justify-start">
                  <Link href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4 text-accent" />
                    {personalInfo.email}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="gradient-border glass-card space-y-5 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-muted">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-muted">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm text-muted">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="" className="bg-background">
                      Select type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-background">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm text-muted">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="" className="bg-background">
                      Select range
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-background">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project, goals, and timeline..."
                  required
                />
              </div>

              <MagneticButton>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {submitted ? "Opening WhatsApp..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
