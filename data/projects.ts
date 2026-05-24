export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
  size?: "large" | "medium" | "small";
};

export const projects: Project[] = [
  {
    id: "ai-saas",
    title: "AI SaaS Platform",
    description:
      "Multi-tenant AI workspace with document ingestion, model routing, usage billing, and admin analytics.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    size: "large",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description:
      "Headless commerce storefront with cart, checkout, inventory sync, and merchant dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
  },
  {
    id: "devops-dashboard",
    title: "DevOps Dashboard",
    description:
      "Real-time infrastructure health monitor with deployment history, alerts, and incident timeline.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    tech: ["Next.js", "WebSockets", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
  },
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description:
      "Low-latency messaging platform with presence indicators, media sharing, and room permissions.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3a7a0bdd?w=1200&q=80",
    tech: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    github: "https://github.com",
    live: "https://example.com",
    size: "small",
  },
  {
    id: "analytics",
    title: "Analytics Platform",
    description:
      "Event tracking and funnel analytics suite with cohort views and exportable executive reports.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tech: ["TypeScript", "Python", "FastAPI", "ClickHouse", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    size: "small",
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Content-managed portfolio builder with drag-and-drop sections, theme presets, and SEO tooling.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tech: ["Next.js", "Sanity", "Tailwind", "Vercel", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    size: "large",
  },
];
