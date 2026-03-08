# brandsbyniksa-portfolio

Portfolio one-page dla marki osobistej (design + budowa marek osobistych) oparte na Next.js, TypeScript i SCSS Modules.

## Stack

- Next.js 16 (App Router)
- TypeScript
- SCSS Modules + `app/globals.scss`
- API route: `POST /api/contact`

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Aplikacja domyślnie działa pod adresem `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Test endpointu kontaktowego

Przykład poprawnego requestu:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Anna Kowalska","email":"anna@example.com","message":"Chcę omówić nową markę."}'
```

## GitHub remote

Po ręcznym utworzeniu repo w GitHub UI:

```bash
git remote add origin <URL_DO_REPO>
git push -u origin main
```

## Deploy

Repo jest gotowe do wdrożenia na Vercel (import projektu z GitHub).
