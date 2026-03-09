import { ProcessStep as ProcessStepType } from "@/types/portfolio";

type ProcessStepProps = {
  item: ProcessStepType;
};

export function ProcessStep({ item }: ProcessStepProps) {
  return (
    <article className="editorial-card h-full space-y-4 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {item.step}
      </p>
      <h3 className="font-heading text-2xl">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
    </article>
  );
}
