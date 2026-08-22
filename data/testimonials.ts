export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Pawan transformed our hiring workflow with an AI platform that actually works in production. Response times dropped and our team finally has visibility into every stage.",
    author: "Startup Founder",
    role: "CEO",
    company: "HR Tech Startup",
  },
  {
    id: "t2",
    quote:
      "We needed a CRM that fit our sales process — not the other way around. The automation alone saved us 20 hours a week and our pipeline has never been clearer.",
    author: "Operations Lead",
    role: "Head of Sales",
    company: "B2B SaaS Company",
  },
  {
    id: "t3",
    quote:
      "Clear communication, on-time delivery, and a clinic website our patients actually use. Booking inquiries started coming in as soon as the site went live.",
    author: "Clinic Owner",
    role: "Director",
    company: "Dental Practice",
  },
];
