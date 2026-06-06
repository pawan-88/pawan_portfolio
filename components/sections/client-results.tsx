"use client";

import { clientMetrics } from "@/data/metrics";
import { SectionHeader } from "@/components/shared/section-header";
import { useCountUp } from "@/hooks/use-count-up";

function MetricCard({
  value,
  suffix,
  label,
  prefix,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="gradient-border glass-card p-8 text-center">
      <p className="font-mono text-4xl font-bold text-white sm:text-5xl">
        {prefix}
        {count}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function ClientResultsSection() {
  return (
    <section id="results" className="section-padding" aria-label="Client Results">
      <div className="container">
        <SectionHeader
          eyebrow="Results"
          title="Numbers that build trust"
          description="Consistent delivery, reliable systems, and outcomes clients can measure."
          align="center"
          className="mx-auto text-center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientMetrics.map((metric) => (
            <MetricCard
              key={metric.id}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              prefix={metric.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
