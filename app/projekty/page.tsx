import { ProjectsCatalog } from "@/components/portfolio/ProjectsCatalog";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export default function ProjectsPage() {
  return (
    <main>
      <Section className="pt-10 md:pt-16">
        <Reveal className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Projekty
          </p>
          <h1 className="font-heading text-5xl leading-tight md:text-6xl">
            Case studies przygotowane pod dalszą rozbudowę
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            Filtruj projekty według kategorii i przejdź do wybranych realizacji.
            Struktura jest gotowa do rozszerzenia o pełne opisy procesu i wyników.
          </p>
        </Reveal>
      </Section>

      <Section className="hairline-divider pt-8 md:pt-10">
        <ProjectsCatalog />
      </Section>
    </main>
  );
}
