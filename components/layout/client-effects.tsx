"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () =>
    import("@/components/shared/particle-background").then((m) => m.ParticleBackground),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/shared/cursor-glow").then((m) => m.CursorGlow),
  { ssr: false }
);

const AiAssistant = dynamic(
  () => import("@/components/layout/ai-assistant").then((m) => m.AiAssistant),
  { ssr: false }
);

const WhatsAppButton = dynamic(
  () => import("@/components/layout/whatsapp-button").then((m) => m.WhatsAppButton),
  { ssr: false }
);

export function ClientEffects() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <AiAssistant />
      <WhatsAppButton />
    </>
  );
}
