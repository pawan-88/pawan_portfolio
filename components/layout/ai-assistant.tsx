"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, X } from "lucide-react";
import { aiQuestions, aiGreeting } from "@/data/ai-assistant";
import { personalInfo } from "@/data/personal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Message = {
  role: "assistant" | "user";
  text: string;
};

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: aiGreeting },
  ]);

  const askQuestion = (question: string, answer: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/30 transition-transform hover:scale-105"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AI Assistant</p>
                <p className="text-xs text-muted">Ask about my services</p>
              </div>
            </div>

            <div className="max-h-64 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-secondary/20 text-white"
                        : "bg-white/5 text-muted"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-white/10 p-3">
              {aiQuestions.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => askQuestion(q.question, q.answer)}
                  className="w-full rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-left text-xs text-muted transition-colors hover:border-accent/20 hover:text-white"
                >
                  {q.question}
                </button>
              ))}
              <Button asChild size="sm" className="mt-2 w-full">
                <Link href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
