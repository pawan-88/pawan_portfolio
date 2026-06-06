import {
  Bot,
  Cloud,
  Code2,
  Globe,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "ai",
    title: "AI Development",
    description: "Custom AI agents, LLM integrations, and intelligent automation for your product.",
    outcome: "Ship AI features that solve real workflow problems — not demos.",
    icon: Bot,
  },
  {
    id: "web",
    title: "Web Development",
    description: "High-performance web apps with premium UX and conversion-focused design.",
    outcome: "Turn visitors into leads with fast, polished digital experiences.",
    icon: Globe,
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "Multi-tenant platforms with billing, auth, analytics, and scalable architecture.",
    outcome: "Launch subscription products built for growth from day one.",
    icon: Layers,
  },
  {
    id: "api",
    title: "API Development",
    description: "Secure, documented APIs that connect your systems and power integrations.",
    outcome: "Reliable backends that your team and partners can depend on.",
    icon: Code2,
  },
  {
    id: "automation",
    title: "Automation Solutions",
    description: "Workflow automation that eliminates repetitive tasks and human error.",
    outcome: "Save hours weekly and reduce operational costs measurably.",
    icon: Workflow,
  },
  {
    id: "cloud",
    title: "Cloud Integration",
    description: "Deployment pipelines, monitoring, and cloud-native infrastructure setup.",
    outcome: "Production systems with 99%+ uptime and confident releases.",
    icon: Cloud,
  },
];
