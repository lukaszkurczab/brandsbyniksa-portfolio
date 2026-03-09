# BrandsByNiksa Portfolio v2

Nowoczesne portfolio marki osobistej zbudowane w `Next.js + TypeScript + Tailwind`.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 3
- API route: `POST /api/contact`

## Uruchomienie

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
npm run start
```

## Kluczowe miejsca edycji contentu

- `data/portfolio.ts` - projekty, usługi, proces, opinie, media, copy sekcji
- `components/portfolio/HeroSection.tsx` - hero i CTA
- `components/portfolio/ContactSection.tsx` - kontakt + dane kontaktowe
- `components/portfolio/ProjectsCatalog.tsx` - logika filtrów na `/projekty`

## TODO pod finalizację

- Podmiana placeholderów obrazów/video
- Dodanie finalnego copy i metryk case studies
- Opcjonalna rozbudowa `/projekty/[slug]`
