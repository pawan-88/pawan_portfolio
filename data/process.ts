export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand your business goals, users, and constraints before writing a single line of code.",
  },
  {
    step: 2,
    title: "Planning",
    description: "Define scope, milestones, and success metrics so every sprint moves the needle.",
  },
  {
    step: 3,
    title: "Design",
    description: "Craft intuitive flows and premium interfaces that build trust with your customers.",
  },
  {
    step: 4,
    title: "Development",
    description: "Build with clean architecture, regular updates, and transparent communication.",
  },
  {
    step: 5,
    title: "Testing",
    description: "Validate performance, security, and edge cases before anything reaches production.",
  },
  {
    step: 6,
    title: "Deployment",
    description: "Launch confidently with monitoring, documentation, and post-launch support.",
  },
];
