export type CaseStudy = {
  id: string;
  title: string;
  problem?: string;
  solution?: string;
  highlights?: string[];
  technology: string[];
  impact?: string;
  demoUrl?: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "crm-ai-suit",
    title: "CRM + AI Suit",
    problem:
      "Recruitment, CRM, and screening lived in separate tools — so TA teams could not run a single, reliable hiring workflow from opportunity to interview feedback.",
    solution:
      "Merged the AI Interview Platform, Resume Screening System, and CRM Automation Platform into one CRM + AI Suit that covers customer onboarding, candidate management, AI interviews, and reporting.",
    highlights: [
      "Developed an AI-powered interview platform using Python, FastAPI, PostgreSQL, and OpenAI APIs to automate technical screening and AI-driven voice interviews.",
      "Designed and developed scalable REST APIs for interview management, candidate onboarding, scheduling, evaluation, and reporting.",
      "Integrated OpenAI APIs for role-based interview question generation, candidate response evaluation, and AI-generated interview reports.",
      "Built interview templates, question bank management, ATS-based resume matching, and automated candidate assessment workflows.",
      "Implemented secure candidate authentication, interview scheduling, real-time interview monitoring, and interview integrity features.",
      "Optimized backend performance using asynchronous programming, efficient database queries, Redis caching, and scalable API design.",
      "Integrated the CRM with the AI Interview platform to manage the end-to-end recruitment lifecycle, from customer onboarding and opportunity creation to candidate management and interview tracking.",
      "Designed recruitment workflows where candidates are mapped to specific opportunities, enabling TA teams to conduct AI-powered L1 interviews through the interview platform.",
      "Managed the complete interview lifecycle, including AI L1 screening, TA evaluation, manager feedback, and customer interview feedback through a centralized recruitment system.",
      "Implemented role-based access control (RBAC) to manage permissions and access across recruitment, CRM, interview, and management modules.",
      "Collaborated with management on product architecture, technical decisions, feature planning, and AI-driven product development.",
      "Report directly to the CEO and Director on product development, technical architecture, project progress, and delivery.",
    ],
    technology: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Redis",
      "REST APIs",
      "RBAC",
    ],
    impact:
      "One recruitment system for CRM, ATS matching, AI L1 interviews, and stakeholder feedback — from opportunity creation through delivery reporting.",
    accent: "from-accent/20 to-secondary/10",
  },
  {
    id: "dentalcare-pro",
    title: "DentalCare-Pro",
    problem:
      "The clinic needed a conversion-focused website that could explain treatments clearly and make booking simple for new patients.",
    solution:
      "Built a polished dental marketing site with treatment highlights, trust-building layout, and a clear path to book a visit.",
    technology: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    impact: "A live patient-facing presence that presents services and drives appointment inquiries.",
    demoUrl: "https://dentalcare-pro-navy.vercel.app/",
    accent: "from-secondary/20 to-accent/10",
  },
  {
    id: "ridekin-blog",
    title: "RideKin Blogging Website",
    problem:
      "The brand needed a content-driven site to share family cycling adventures, stories, and trip inspiration in one place.",
    solution:
      "Built a RideKin blogging and adventure website with a clean reading experience, structured posts, and a layout made for discovery.",
    technology: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    impact: "Live at ride-kin-cycling-adventure-website-pi.vercel.app — family cycling stories and adventure content, ready to browse.",
    demoUrl: "https://ride-kin-cycling-adventure-website-pi.vercel.app/",
    accent: "from-accent/15 to-secondary/15",
  },
  {
    id: "aarogya-mandir",
    title: "Aarogya Mandir Fitness Website",
    problem:
      "The fitness center needed a digital presence for weight-loss and weight-gain programs, BMI checks, and consultation leads.",
    solution:
      "Delivered a conversion-ready fitness website with program pages, BMI calculator, contact details, and a consultation form.",
    technology: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    impact: "Live at aarogya-mandir-fitness-website.vercel.app — programs, BMI check, and lead capture in one place.",
    demoUrl: "https://arogya-mandir-fitness-website.vercel.app/",
    accent: "from-secondary/15 to-accent/20",
  },
  {
    id: "dr-dhanshree-dental",
    title: "Dr. Dhanshree's Dental Clinic Website",
    problem:
      "The Lohegaon clinic needed a professional site covering implants, braces, smile design, and easy appointment booking.",
    solution:
      "Built a full clinic website with treatments, dentist profile, patient stories, FAQ, location, and WhatsApp/call booking.",
    technology: ["Next.js", "React", "Tailwind CSS"],
    impact: "Live at drdhanshreedental.in — a complete clinic presence for patients in Lohegaon, Pune.",
    demoUrl: "https://drdhanshreedental.in/",
    accent: "from-accent/20 to-secondary/10",
  },
];
