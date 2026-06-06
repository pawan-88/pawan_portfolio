export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "MVPs usually take 4–8 weeks. Full SaaS platforms run 2–4 months. I provide a clear timeline and milestones during our discovery call so you know exactly what to expect.",
  },
  {
    id: "process",
    question: "What does your development process look like?",
    answer:
      "Discovery → Planning → Design → Development → Testing → Deployment. You get regular updates, demo checkpoints, and transparent communication at every stage.",
  },
  {
    id: "revisions",
    question: "Do you include revisions?",
    answer:
      "Yes. Each phase includes structured revision rounds. Scope changes are discussed upfront so there are no surprises — we align before building.",
  },
  {
    id: "support",
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. I offer maintenance packages covering bug fixes, performance monitoring, feature updates, and deployment support after go-live.",
  },
  {
    id: "pricing",
    question: "How is pricing structured?",
    answer:
      "Fixed-price for defined scopes, or milestone-based for larger projects. After understanding your requirements, I share a detailed proposal with cost breakdown.",
  },
  {
    id: "remote",
    question: "Do you work with remote clients?",
    answer:
      "Yes — I work with clients across India and globally. Calls via Google Meet, updates via WhatsApp/Slack, and async collaboration through GitHub.",
  },
];
