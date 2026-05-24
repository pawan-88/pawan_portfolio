export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Freelance & Product Projects",
    role: "Full Stack Developer",
    duration: "2023 — Present",
    location: "Pune, India",
    achievements: [
      "Delivered 10+ production web applications across SaaS, e-commerce, and internal tools.",
      "Improved page performance and Core Web Vitals through optimized rendering and asset strategy.",
      "Integrated payment gateways, role-based auth, and analytics dashboards for client products.",
    ],
  },
  {
    id: "exp-2",
    company: "Data & Analytics Initiatives",
    role: "Data Analyst / Python Developer",
    duration: "2022 — Present",
    location: "Remote",
    achievements: [
      "Built Python pipelines for data cleaning, visualization, and reporting workflows.",
      "Designed Power BI dashboards for business stakeholders with actionable KPI tracking.",
      "Applied ML experimentation for forecasting and classification use cases.",
    ],
  },
  {
    id: "exp-3",
    company: "Web Engineering Practice",
    role: "Frontend & Backend Engineer",
    duration: "2021 — 2023",
    location: "Pune, India",
    achievements: [
      "Developed responsive interfaces with React ecosystems and component-driven design.",
      "Implemented Django and FastAPI services with PostgreSQL and MongoDB backends.",
      "Established Git-based workflows, code reviews, and deployment automation.",
    ],
  },
];
