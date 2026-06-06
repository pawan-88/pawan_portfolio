export type PhilosophyCard = {
  id: string;
  quote: string;
  context: string;
};

export const philosophyCards: PhilosophyCard[] = [
  {
    id: "p1",
    quote: "Code is easy. Solving business problems is hard.",
    context:
      "Every project starts with understanding the outcome — not the stack. I focus on what moves revenue, saves time, or unlocks growth.",
  },
  {
    id: "p2",
    quote: "AI can generate code. Understanding users creates products.",
    context:
      "Tools accelerate delivery, but empathy and clarity define products people actually pay for and recommend.",
  },
  {
    id: "p3",
    quote: "Great software is not built with features. It is built with clarity.",
    context:
      "The best systems do fewer things exceptionally well. I design for simplicity, reliability, and measurable business impact.",
  },
  {
    id: "p4",
    quote: "Change is part of building. Systems should expect it.",
    context:
      "Architecture, workflows, and codebases that adapt gracefully — so your product evolves without breaking trust.",
  },
];
