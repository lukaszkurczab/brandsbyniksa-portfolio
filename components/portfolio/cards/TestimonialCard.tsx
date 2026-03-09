import { Testimonial } from "@/types/portfolio";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="editorial-card h-full space-y-5 p-6">
      <p className="text-base leading-relaxed text-foreground/90">“{testimonial.quote}”</p>
      <div className="space-y-1 border-t border-line pt-4 text-sm text-muted">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p>{testimonial.brand}</p>
        <p>{testimonial.scope}</p>
      </div>
    </article>
  );
}
