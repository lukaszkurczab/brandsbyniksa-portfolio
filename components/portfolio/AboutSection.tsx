import Link from "next/link";
import { aboutParagraphs } from "@/data/portfolio";
import { buttonStyles } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <Section id="o-mnie" className="hairline-divider">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="editorial-card h-[420px] overflow-hidden p-5">
            {/* TODO: Replace with final portrait photo. */}
            <div className="h-full rounded-[1.4rem] border border-line/80 bg-foreground/5" />
          </div>
        </Reveal>

        <Reveal delayMs={120} className="space-y-6">
          <SectionHeading
            eyebrow="O mnie"
            title="Tworzę marki osobiste, które są estetyczne i konkretne"
          />

          <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link href="/#kontakt" className={buttonStyles("secondary", "md")}>
            Porozmawiajmy o Twojej marce
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
