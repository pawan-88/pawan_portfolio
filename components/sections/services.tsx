"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { CtaBanner } from "@/components/shared/cta-banner";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding" aria-label="Services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What I build for clients"
          description="End-to-end development focused on outcomes — not feature lists."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="gradient-border glass-card group p-6 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <p className="mt-4 border-t border-white/5 pt-4 text-xs font-medium text-accent/90">
                {service.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <CtaBanner title="Not sure which service fits?" description="Tell me about your project — I'll recommend the right approach." />
    </section>
  );
}
