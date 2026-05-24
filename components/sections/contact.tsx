"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something extraordinary"
          description="Initialize collaboration — send a message and I'll respond within 24–48 hours."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <MotionContainer className="lg:col-span-2">
            <MotionItem>
              <Card className="glass-card h-full">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>Quick Connect</CardTitle>
                    <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                      <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      {personalInfo.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-zinc-400">
                  <p>
                    <strong className="text-white">{personalInfo.name}</strong>
                    <br />
                    {personalInfo.location}
                  </p>
                  <p>{personalInfo.email}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:scale-105 hover:border-violet-500/40 hover:text-white"
                      >
                        <social.icon className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionItem>
          </MotionContainer>

          <MotionContainer className="lg:col-span-3">
            <MotionItem>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Send a secure message</CardTitle>
                  <p className="text-sm text-zinc-400">
                    Form opens your mail client with a pre-filled payload.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or role..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      {submitted ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Opening mail client...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                  {submitted ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 text-sm text-emerald-400"
                    >
                      Mail client launched. If it did not open, email me directly.
                    </motion.p>
                  ) : null}
                </CardContent>
              </Card>
            </MotionItem>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
}
