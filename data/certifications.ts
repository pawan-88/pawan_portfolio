export type Certification = {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Certificate",
    organization: "Meta / Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org",
  },
  {
    id: "cert-2",
    title: "AWS Cloud Practitioner Essentials",
    organization: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/training",
  },
  {
    id: "cert-3",
    title: "Google Data Analytics Professional Certificate",
    organization: "Google / Coursera",
    date: "2023",
    credentialUrl: "https://www.coursera.org",
  },
  {
    id: "cert-4",
    title: "Python for Everybody Specialization",
    organization: "University of Michigan",
    date: "2023",
    credentialUrl: "https://www.coursera.org",
  },
];
