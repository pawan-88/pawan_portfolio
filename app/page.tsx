import { HeroSection } from "@/components/sections/hero";
import { StatementSection } from "@/components/sections/statement";
import { PhilosophySection } from "@/components/sections/philosophy";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { GitHubActivitySection } from "@/components/sections/github-activity";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { ClientResultsSection } from "@/components/sections/client-results";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { BigMarquee } from "@/components/shared/big-marquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BigMarquee text="Backend Engineer — AI Developer — Full Stack" baseVelocity={2} />
      <StatementSection />
      <PhilosophySection />
      <FeaturedWorkSection />
      <GitHubActivitySection />
      <ServicesSection />
      <ProcessSection />
      <ClientResultsSection />
      <TestimonialsSection />
      <FaqSection />
      <BigMarquee text="Let's work together" baseVelocity={-2} />
      <ContactSection />
    </>
  );
}
