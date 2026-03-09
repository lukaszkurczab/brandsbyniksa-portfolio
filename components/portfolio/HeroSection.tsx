import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section id="start" className="pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Creative direction / Branding / Social Media
          </p>
          <div className="space-y-5">
            <h1 className="font-heading text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Strategia. Design. Content.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Pomagam budować wyrazistą i rozpoznawalną obecność w social mediach,
              łącząc estetykę premium ze strategicznym porządkiem marki.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projekty" className={buttonStyles("primary", "lg")}>
              Zobacz projekty
            </Link>
            <Link href="/#kontakt" className={buttonStyles("secondary", "lg")}>
              Współpraca
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="editorial-card relative h-[420px] overflow-hidden p-5 sm:h-[500px]">
            {/* TODO: Replace with final hero image / collage / mockup. */}
            <div className="absolute inset-5 rounded-[1.4rem] border border-line/80 bg-gradient-to-br from-white via-rose/10 to-sage/20" />
            <div className="absolute left-10 top-10 w-fit rounded-full border border-line bg-white/85 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted">
              BrandsByNiksa
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-line bg-white/90 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Visual direction</p>
              <p className="mt-2 font-heading text-2xl">Minimal. Premium. Wyróżniająco.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
