import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { SplitText } from "@/components/shared/split-text";
import { RollingText } from "@/components/shared/rolling-text";
import { MagneticButton } from "@/components/shared/magnetic-button";

const socials = [
  { label: "GitHub", href: personalInfo.github },
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "WhatsApp", href: personalInfo.whatsapp },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] pt-20">
      {/* Lusion-style giant call-to-action */}
      <div className="container pb-16 text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          Is your big idea ready to go wild?
        </p>
        <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          <SplitText text="Let's work" by="words" trigger="inView" />
          <br />
          <SplitText
            text="together!"
            by="chars"
            trigger="inView"
            delay={0.3}
            className="text-gradient"
          />
        </h2>
        <div className="mt-10 flex justify-center">
          <MagneticButton strength={0.35}>
            <Link
              href={personalInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              <RollingText text="Start a project →" />
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {personalInfo.name}. Crafted with Next.js & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
              >
                <RollingText text={s.label} />
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
            >
              <RollingText text="Let's connect →" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
