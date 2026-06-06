export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technology: string[];
  impact: string;
  demoUrl: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-interview",
    title: "AI Interview Platform",
    problem:
      "HR teams spent 15+ hours weekly screening candidates manually, with inconsistent evaluation and slow hiring cycles.",
    solution:
      "Built an AI-driven interview system with structured scoring, automated question generation, and recruiter dashboards.",
    technology: ["Next.js", "OpenAI", "PostgreSQL", "WebRTC"],
    impact: "Reduced screening time by 70% and improved candidate-to-offer conversion by 35%.",
    demoUrl: "https://example.com",
    accent: "from-accent/20 to-secondary/10",
  },
  {
    id: "resume-screening",
    title: "Resume Screening System",
    problem:
      "Recruiters were overwhelmed by high-volume applications with no standardized way to rank fit against role requirements.",
    solution:
      "Designed an NLP pipeline that parses resumes, scores role alignment, and surfaces top candidates with explainable insights.",
    technology: ["Python", "FastAPI", "LangChain", "Redis"],
    impact: "Cut initial review time from days to minutes across 500+ applications per role.",
    demoUrl: "https://example.com",
    accent: "from-secondary/20 to-accent/10",
  },
  {
    id: "warehouse",
    title: "Warehouse Management System",
    problem:
      "Inventory tracking relied on spreadsheets, causing stock mismatches, delayed fulfillment, and revenue leakage.",
    solution:
      "Delivered a real-time WMS with barcode scanning, automated reorder alerts, and role-based operational dashboards.",
    technology: ["React", "Node.js", "MongoDB", "Docker"],
    impact: "Improved inventory accuracy to 99% and reduced fulfillment errors by 45%.",
    demoUrl: "https://example.com",
    accent: "from-accent/15 to-secondary/15",
  },
  {
    id: "crm-automation",
    title: "CRM Automation Platform",
    problem:
      "Sales teams lost leads due to manual follow-ups, fragmented data, and no visibility into pipeline health.",
    solution:
      "Built a CRM with automated workflows, lead scoring, email sequences, and executive reporting in one unified platform.",
    technology: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    impact: "Increased qualified lead response rate by 60% and shortened sales cycle by 3 weeks.",
    demoUrl: "https://example.com",
    accent: "from-secondary/15 to-accent/20",
  },
];
