import { MediaItem } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type MediaTileProps = {
  item: MediaItem;
};

export function MediaTile({ item }: MediaTileProps) {
  return (
    <article
      className={cn(
        "editorial-card group relative overflow-hidden p-4",
        item.spanClass,
        item.toneClass,
      )}
    >
      {/* TODO: Replace placeholder with final photo/video thumbnail. */}
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-foreground/5" />
      </div>
      <div className="relative z-10 mt-auto space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {item.type}
        </p>
        <h3 className="font-heading text-lg">{item.title}</h3>
      </div>
    </article>
  );
}
