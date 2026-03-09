import Link from "next/link";
import { Project } from "@/types/portfolio";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";

type ProjectCardProps = {
  project: Project;
  href?: string;
};

export function ProjectCard({ project, href = "/projekty" }: ProjectCardProps) {
  return (
    <Link
      href={`${href}#${project.slug}`}
      className="group editorial-card flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/25"
    >
      <div
        className={cn(
          "mb-4 flex h-44 items-end rounded-2xl border border-line/80 p-4",
          project.coverToneClass,
        )}
      >
        {/* TODO: Replace with final project cover image. */}
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Case study preview
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-xl">{project.name}</h3>
        <p className="text-sm font-medium text-muted">{project.scope}</p>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
