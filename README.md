# Vonlan Constructions (Pvt) Ltd — Website

Multi-page marketing site for Vonlan Constructions, a Sri Lankan infrastructure
contractor and subsidiary of Sanken Construction.

## Stack

- **Next.js 14** (App Router) · **TypeScript**
- **Tailwind CSS** (brand tokens in `tailwind.config.ts` under `extend.colors.brand`)
- **Framer Motion** (animations) · **Lucide React** (icons)
- **React Hook Form** + **Zod** (contact & careers forms)
- **next/font** — DM Sans (body) + Sora (display)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

### Environment

Copy or edit `.env.local`:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-v3-site-key
```

The contact form loads Google reCAPTCHA v3 (invisible) only when a real key is
set; otherwise it is a no-op so forms work in development without friction.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes (homepage, about, services, projects, credentials, careers, contact) + `sitemap.ts`, `robots.ts` |
| `components/` | UI: `Nav`, `Footer`, `Logo`, cards, badges, forms, hero, etc. |
| `lib/data/` | Single source of truth for all content (projects, sectors, directors, news, credentials, careers, about, site config) |
| `public/logo.jpeg` | Brand logo (white CSS filter applied on dark surfaces via `Logo` `variant="dark"`) |

All copy and the full project database are extracted from
`Vonlan_Website_Content_Pack.docx` into typed modules under `lib/data/`.

## Routes

- `/` · `/about` · `/projects` · `/projects/[slug]` · `/credentials` · `/careers` · `/contact`
- `/services/[sector]` — `water-supply`, `highways-bridges`, `power-energy`, `buildings`, `irrigation`, `sea-airport`
- `/achivements` → **301/308 permanent redirect** → `/credentials` (in `next.config.mjs`)
- `/sitemap.xml`, `/robots.txt`

## Note on `next.config`

The brief specified `next.config.ts`. TypeScript config files are only read by
Next.js 15+; this project targets **Next.js 14**, which loads `next.config.mjs`.
The requested `/achivements → /credentials` permanent redirect lives there and is
fully functional. (Migrating to Next 15 would allow renaming it to `.ts` verbatim.)

## Imagery

Site photography lives in `public/images/` and is wired through `lib/images.ts`:

- `hero-*.jpg` — three full-bleed hero slides (crossfade slideshow).
- `sector-<slug>.jpg` — one image per sector (cards, service headers, project fallback).
- `project-<slug>.jpg` — dedicated photos for the ten priority case studies.
- Page headers (`about`, `credentials`, `careers`, `contact`) use `PAGE_IMAGES`.

> **These are AI-generated mock images (made with Canva) standing in for real
> Vonlan project photography.** Replace them with real site/drone photos before
> launch — keep the same filenames in `public/images/` and no code changes are
> needed. Director portraits use generated initials avatars (not stock faces);
> swap in real headshots when available.

Anywhere a unique photo is still genuinely missing (e.g. extra gallery shots),
the UI shows an honest "photography to follow" note rather than an empty box.
