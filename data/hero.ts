import {
  Brain,
  Globe,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Specialization = {
  label: string;
  icon: LucideIcon;
};

export const specializations: Specialization[] = [
  { label: "AI Solutions", icon: Brain },
  { label: "Web Applications", icon: Globe },
  { label: "Automation Systems", icon: Workflow },
  { label: "SaaS Platforms", icon: Layers },
];

export const heroStats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "AI Integrations" },
  { value: "100%", label: "Client Satisfaction" },
] as const;

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "Django",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AI Development",
  "Machine Learning",
  "Chatbot Development",
  "OpenAI",
  "Docker",
  "AWS",
] as const;
