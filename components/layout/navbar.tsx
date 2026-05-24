"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6"
        aria-label="Main navigation"
      >
        <Link href="#home" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-bold text-white">
            {personalInfo.initials}
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            {personalInfo.name.split(" ")[0]}.
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors hover:text-white",
                  activeId === link.href ? "text-white" : "text-zinc-400"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="secondary">
            <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-4 w-full" variant="secondary">
              <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
