import Link from "next/link";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { buttonStyles } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="kontakt" className="hairline-divider">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-7">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Kontakt
            </p>
            <h2 className="font-heading text-4xl leading-tight md:text-5xl">
              Masz projekt, ale nie wiesz jak go rozwinąć?
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Napisz do mnie. Zaproponuję kierunek współpracy, który będzie
              dopasowany do etapu Twojej marki i celów biznesowych.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted">
            <p>
              E-mail: <span className="text-foreground">niksa.kontakt@gmail.com</span>
            </p>
            <p>
              Instagram: <span className="text-foreground">niksa.creative</span>
            </p>
          </div>

          <Link href="mailto:niksa.kontakt@gmail.com" className={buttonStyles("secondary", "md")}>
            Napisz maila
          </Link>
        </Reveal>

        <Reveal delayMs={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
