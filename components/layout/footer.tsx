import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 py-10">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-zinc-400">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
