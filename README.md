# CompliTech OÜ — Business Website

Static multilingual business card website for [complitech.ee](https://complitech.ee), built with Astro 5, Tailwind CSS 4, and deployed to GitHub Pages.

## Languages

| Locale | URL |
|--------|-----|
| English (default) | `/` |
| Russian | `/ru/` |

Architecture supports adding Estonian (`/et/`), German (`/de/`), and Polish (`/pl/`) by adding translation JSON files and thin page wrappers.

## Development

```bash
npm install
npm run optimize-images   # converts logos to public/images/
npm run dev               # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. Push this repository to GitHub
2. In **Settings → Pages**, set source to **GitHub Actions**
3. Configure DNS for custom domain:
   - `CNAME` record: `complitech.ee` → `<username>.github.io`
   - Enable custom domain in repo Settings → Pages
   - Enforce HTTPS

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

## Project Structure

```
src/
├── i18n/          # Translation JSON files and helpers
├── layouts/       # Base HTML layout with SEO
├── components/    # Page sections (Hero, About, Brands, etc.)
└── pages/         # Locale entry points (/, /ru/)
public/
├── CNAME          # Custom domain for GitHub Pages
└── images/        # Optimized logo assets (generated)
```

## Adding a New Language

1. Create `src/i18n/<locale>.json` with translated strings
2. Register locale in `src/i18n/config.ts` and `src/i18n/ui.ts`
3. Add `src/pages/<locale>/index.astro` importing `<HomePage locale="<locale>" />`
4. Update sitemap i18n config in `astro.config.mjs`
