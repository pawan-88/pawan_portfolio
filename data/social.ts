import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/pawansanap",
    icon: Github,
    label: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pawansanap8619/",
    icon: Linkedin,
    label: "Visit LinkedIn profile",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    label: "Visit Twitter profile",
  },
  {
    name: "Email",
    href: "mailto:pawansanap8619@gmail.com",
    icon: Mail,
    label: "Send email",
  },
];
