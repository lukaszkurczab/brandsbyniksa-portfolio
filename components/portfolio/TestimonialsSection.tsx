import { testimonials } from "@/data/portfolio";
import { TestimonialCard } from "@/components/portfolio/cards/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <Section className="hairline-divider">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Tak mówią klienci"
            title="Efekty współpracy widoczne w jakości i spójności marki"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delayMs={index * 70}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
