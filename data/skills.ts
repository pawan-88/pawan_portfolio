export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern interfaces with performance-first rendering and motion design.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Reliable APIs, authentication flows, and service-oriented architecture.",
    skills: ["Node.js", "Python", "FastAPI", "Django", "REST", "GraphQL"],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Structured data modeling with scalable persistence layers.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL", "Indexing"],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automated delivery pipelines and observable production systems.",
    skills: ["Docker", "CI/CD", "AWS", "Vercel", "Nginx", "Monitoring"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Developer productivity and collaboration across teams.",
    skills: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Linux"],
  },
];

export const focusAreas = [
  {
    title: "Full Stack Development",
    description: "End-to-end product delivery from UI to API and deployment.",
  },
  {
    title: "Backend Systems",
    description: "Scalable services, caching strategies, and secure data flows.",
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure automation, observability, and release reliability.",
  },
  {
    title: "AI Integrations",
    description: "LLM-powered features, automation pipelines, and intelligent UX.",
  },
] as const;
