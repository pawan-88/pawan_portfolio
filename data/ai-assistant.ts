export type AiQuestion = {
  id: string;
  question: string;
  answer: string;
};

export const aiQuestions: AiQuestion[] = [
  {
    id: "services",
    question: "What services do you provide?",
    answer:
      "I build AI-powered applications, SaaS platforms, web apps, APIs, automation systems, and cloud integrations — end to end from discovery to deployment.",
  },
  {
    id: "tech",
    question: "What technologies do you use?",
    answer:
      "Next.js, React, TypeScript, Python, Node.js, PostgreSQL, and modern AI stacks (OpenAI, LangChain). I choose tools based on your product goals, not trends.",
  },
  {
    id: "cost",
    question: "How much will my project cost?",
    answer:
      "Projects typically range from ₹50,000 for focused MVPs to ₹5,00,000+ for full SaaS platforms. Book a free consultation and I'll provide a tailored estimate.",
  },
  {
    id: "timeline",
    question: "How long does development take?",
    answer:
      "MVPs: 4–8 weeks. Full products: 2–4 months. Timeline depends on scope — I provide a clear roadmap during our discovery call.",
  },
];

export const aiGreeting =
  "Hi — I'm Pawan's assistant. Ask about services, pricing, or timelines, or book a consultation directly.";
