import {
  MediaItem,
  ProcessStep,
  Project,
  ProjectCategory,
  ServiceGroup,
  Testimonial,
} from "@/types/portfolio";

export const navigationLinks = [
  { label: "Projekty", href: "/projekty" },
  { label: "Foto&Video", href: "/#foto-video" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Kontakt", href: "/#kontakt" },
];

// TODO: Replace copy and links with final brand-approved navigation labels.

export const projects: Project[] = [
  {
    slug: "roundnet-poland",
    name: "Roundnet Poland",
    scope: "Social Media & Content",
    description:
      "Nowy kierunek komunikacji turniejowej i content, który zwiększył zaangażowanie społeczności sportowej.",
    category: "Social Media",
    tags: ["Strategia SM", "Content plan", "Reels"],
    coverToneClass: "bg-rose/20",
  },
  {
    slug: "krakow-open",
    name: "Kraków Open",
    scope: "Foto & Social Media",
    description:
      "Spójna oprawa wizualna wydarzenia i szybka produkcja materiałów live pod social media.",
    category: "Foto & Video",
    tags: ["Foto eventowe", "Social media", "Relacje"],
    coverToneClass: "bg-sage/25",
  },
  {
    slug: "aurelia-amour",
    name: "Aurelia Amour",
    scope: "Branding",
    description:
      "Delikatna identyfikacja premium z wyrazistym stylem wizualnym i gotowym systemem publikacji.",
    category: "Branding",
    tags: ["Identyfikacja", "Paleta", "Księga marki"],
    coverToneClass: "bg-terracotta/20",
  },
  {
    slug: "fitaly",
    name: "Fitaly",
    scope: "Branding & SM",
    description:
      "Repozycjonowanie marki wellness: nowa estetyka, storytelling i plan komunikacyjny na kwartał.",
    category: "Social Media",
    tags: ["Branding", "Storytelling", "Prowadzenie kont"],
    coverToneClass: "bg-foreground/10",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Branding",
    description:
      "Buduję spójny język wizualny i fundament marki osobistej, który wyróżnia Cię na rynku.",
    items: [
      "Identyfikacja wizualna",
      "Moodboard marki",
      "Paleta kolorów",
      "Typografia",
      "Indywidualny styl SM",
      "Księga marki",
    ],
    accentClass: "border-rose/40",
  },
  {
    title: "Social Media Strategy",
    description:
      "Tworzę strategiczny kierunek komunikacji, który łączy estetykę z celami biznesowymi.",
    items: [
      "Strategia SM",
      "Analiza marki i konkurencji",
      "Content plan",
      "Storytelling marki",
      "Prowadzenie kont",
    ],
    accentClass: "border-terracotta/40",
  },
  {
    title: "Content Creation",
    description:
      "Produkuję materiały, które wyglądają premium i działają naturalnie w kanałach social.",
    items: ["Foto", "Video / Reels", "Montaż", "UGC", "Produkcja contentu do SM"],
    accentClass: "border-sage/50",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Poznaję Twoją markę, cele i odbiorców, aby zbudować kierunek dopasowany do realnych potrzeb.",
  },
  {
    step: "02",
    title: "Strategia",
    description:
      "Układam strukturę komunikacji, ton marki i roadmapę działań, które prowadzą do spójności.",
  },
  {
    step: "03",
    title: "Kreacja",
    description:
      "Projektuję identyfikację i content, dbając o detal, rytm publikacji i estetykę premium.",
  },
  {
    step: "04",
    title: "Wdrożenie",
    description:
      "Przekładam koncept na działania operacyjne i materiały gotowe do codziennego użycia.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Niksa poukładała cały wizerunek mojej marki. Po miesiącu komunikacja była spójna i dużo pewniejsza.",
    author: "Natalia S.",
    brand: "Mentorka biznesowa",
    scope: "Branding + SM Strategy",
  },
  {
    quote:
      "Współpraca była konkretna i bardzo estetyczna. Materiały foto/video od razu podniosły poziom marki.",
    author: "Karolina M.",
    brand: "Studio movement",
    scope: "Content Creation",
  },
  {
    quote:
      "Najbardziej cenię połączenie strategii i designu. Każda decyzja miała uzasadnienie biznesowe.",
    author: "Aurelia A.",
    brand: "Marka beauty premium",
    scope: "Branding",
  },
];

export const mediaItems: MediaItem[] = [
  {
    title: "Sesja brandingowa",
    type: "Foto",
    toneClass: "bg-rose/30",
    spanClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Reels backstage",
    type: "Video",
    toneClass: "bg-foreground/10",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Miniatura kampanii",
    type: "Foto",
    toneClass: "bg-terracotta/20",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "UGC set",
    type: "Video",
    toneClass: "bg-sage/25",
    spanClass: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Editorial details",
    type: "Foto",
    toneClass: "bg-foreground/5",
    spanClass: "md:col-span-2 md:row-span-1",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Branding",
  "Social Media",
  "Foto & Video",
];

export const aboutParagraphs = [
  "Jestem Niksa i łączę creative direction z pragmatycznym podejściem do marek osobistych. Projektuję komunikację, która wygląda elegancko i jednocześnie wspiera sprzedaż usług.",
  "Pracuję z ekspertkami, które chcą mówić wyraźnym głosem i budować zaufanie przez spójny wizerunek. Dbam o strategię, estetykę i użyteczność codziennych materiałów.",
  "Współpraca ze mną to porządek, klarowny proces i styl, który można skalować razem z marką.",
];

// TODO: Replace placeholders in projects/testimonials/media with final assets and case-study metrics.
