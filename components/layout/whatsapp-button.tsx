"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href={personalInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-400 shadow-lg shadow-green-500/10 backdrop-blur-xl transition-all hover:scale-105 hover:bg-green-500/20 hover:text-green-300"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Link>
    </motion.div>
  );
}
