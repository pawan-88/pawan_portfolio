"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { RollingText } from "@/components/shared/rolling-text";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <nav
        className="container flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="#home" className="text-lg font-semibold text-white">
          Pawan<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative py-1 text-sm transition-colors",
                  activeId === link.href
                    ? "text-white"
                    : "text-muted hover:text-white"
                )}
              >
                <RollingText text={link.label} />
                {activeId === link.href ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-accent"
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
          <Link href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Consultation
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/[0.06] bg-background md:hidden"
          >
            <ul className="container space-y-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
