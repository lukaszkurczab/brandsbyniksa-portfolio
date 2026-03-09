import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}> 
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl leading-tight md:text-5xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
