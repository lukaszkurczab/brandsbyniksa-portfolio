"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/cards/ProjectCard";
import { Tag } from "@/components/ui/Tag";
import { ProjectCategory } from "@/types/portfolio";
import { cn } from "@/lib/cn";

export function ProjectsCatalog() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-line bg-white/80 text-muted hover:text-foreground",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.slug} id={project.slug} className="scroll-mt-28">
            <ProjectCard project={project} href="/projekty" />
          </div>
        ))}
      </div>

      <p className="text-sm text-muted">
        <Tag className="mr-2">TODO</Tag>
        Rozszerz każdy projekt o osobny case study route (`/projekty/[slug]`) po dostarczeniu pełnych materiałów.
      </p>
    </div>
  );
}
