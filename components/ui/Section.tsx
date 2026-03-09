import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export function Section({ id, className, innerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-spacing scroll-mt-28", className)}>
      <div className={cn("section-shell", innerClassName)}>{children}</div>
    </section>
  );
}
