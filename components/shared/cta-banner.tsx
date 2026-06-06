"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to build something that drives results?",
  description = "Book a free consultation — let's discuss your product, timeline, and business goals.",
}: CtaBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="container py-12"
    >
      <div className="gradient-border glass-card flex flex-col items-center gap-6 rounded-2xl p-8 text-center sm:flex-row sm:justify-between sm:text-left lg:p-10">
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
          <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">{description}</p>
        </div>
        <MagneticButton>
          <Button asChild size="lg" className="shrink-0">
            <Link href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </MagneticButton>
      </div>
    </motion.div>
  );
}
