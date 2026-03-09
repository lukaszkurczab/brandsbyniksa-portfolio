import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/cards/ProjectCard";
import { buttonStyles } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjectsSection() {
  return (
    <Section id="wybrane-projekty" className="hairline-divider">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Wybrane projekty"
            title="Projekty, które łączą estetykę i wynik"
            description="Każdy case jest zaprojektowany tak, aby marka była spójna wizualnie i czytelna strategicznie."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link href="/projekty" className={buttonStyles("secondary", "md")}>
            Przejdź do wszystkich projektów
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
