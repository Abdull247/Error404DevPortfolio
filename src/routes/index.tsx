import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";
import { Ticker } from "@/components/ticker";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-hatch sm:p-3">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to work
      </a>
      <div className="min-h-dvh overflow-x-hidden border-ink bg-paper sm:min-h-[calc(100dvh-1.5rem)] sm:border">
        <SiteHeader />
        <main>
          <Hero />
          <Ticker />
          <SelectedWork />
          <AboutSection />
          <StackSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
