import { mediaItems } from "@/data/portfolio";
import { MediaTile } from "@/components/portfolio/cards/MediaTile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MediaSection() {
  return (
    <Section id="foto-video" className="hairline-divider">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Foto & Video"
            title="Nowoczesne materiały wizualne do social media"
            description="Galeria pokazuje charakter pracy: clean kadry, lekki editorial look i materiały gotowe pod publikację."
          />
        </Reveal>

        <div className="grid auto-rows-[150px] grid-cols-1 gap-4 md:grid-cols-4">
          {mediaItems.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 50} className="h-full">
              <MediaTile item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
