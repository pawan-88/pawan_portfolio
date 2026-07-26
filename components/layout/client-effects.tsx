"use client";

import dynamic from "next/dynamic";

const MoonlightBackground = dynamic(
  () =>
    import("@/components/shared/moonlight-background").then(
      (m) => m.MoonlightBackground
    ),
  { ssr: false }
);

const ParticleBackground = dynamic(
  () =>
    import("@/components/shared/particle-background").then((m) => m.ParticleBackground),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/shared/cursor-glow").then((m) => m.CursorGlow),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/shared/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const GrainOverlay = dynamic(
  () => import("@/components/shared/grain-overlay").then((m) => m.GrainOverlay),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () => import("@/components/layout/smooth-scroll").then((m) => m.SmoothScroll),
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
      <SmoothScroll />
      <MoonlightBackground />
      <ParticleBackground />
      <CursorGlow />
      <CustomCursor />
      <GrainOverlay />
      <AiAssistant />
      <WhatsAppButton />
    </>
  );
}
