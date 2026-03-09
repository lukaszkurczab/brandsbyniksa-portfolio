import { serviceGroups } from "@/data/portfolio";
import { ServiceCard } from "@/components/portfolio/cards/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <Section id="uslugi" className="hairline-divider">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Co robię"
            title="Usługi dopasowane do rozwoju marki osobistej"
            description="Od strategii po realizację contentu. Każdy obszar jest gotowy do pracy samodzielnie lub w pakiecie."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {serviceGroups.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
