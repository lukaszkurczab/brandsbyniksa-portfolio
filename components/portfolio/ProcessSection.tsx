import { processSteps } from "@/data/portfolio";
import { ProcessStep } from "@/components/portfolio/cards/ProcessStep";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <Section className="hairline-divider">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Mój proces pracy"
            title="Przejrzysty workflow od discovery do wdrożenia"
            description="Każdy etap ma konkretny cel i zamienia pomysły w uporządkowany system marki."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 70}>
              <ProcessStep item={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
