import Link from "next/link";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {personalInfo.name}. Crafted with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            GitHub
          </Link>
          <Link
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
          >
            Let&apos;s connect →
          </Link>
        </div>
      </div>
    </footer>
  );
}
