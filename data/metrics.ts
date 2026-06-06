export type Metric = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
};

export const clientMetrics: Metric[] = [
  { id: "projects", value: 20, suffix: "+", label: "Projects Delivered" },
  { id: "ai", value: 10, suffix: "+", label: "AI Integrations" },
  { id: "uptime", value: 99, suffix: "%", label: "Uptime Focus" },
  { id: "responsive", value: 100, suffix: "%", label: "Responsive Delivery" },
];
