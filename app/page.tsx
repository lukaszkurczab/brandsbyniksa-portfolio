import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { FeaturedProjectsSection } from "@/components/portfolio/FeaturedProjectsSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MediaSection } from "@/components/portfolio/MediaSection";
import { ProcessSection } from "@/components/portfolio/ProcessSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <MediaSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
