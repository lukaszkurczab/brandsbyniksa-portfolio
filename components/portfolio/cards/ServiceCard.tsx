import { ServiceGroup } from "@/types/portfolio";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: ServiceGroup;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={cn("editorial-card h-full space-y-5 border p-6", service.accentClass)}>
      <div className="space-y-2">
        <h3 className="font-heading text-2xl">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
