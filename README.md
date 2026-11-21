# Anfal Karim: essays and drawings on architecture

A portfolio and publication site built with Astro.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Deploys as a plain static site (Vercel, Netlify, Cloudflare Pages or GitHub Pages). Once it has a domain, add it to `astro.config.mjs` as `site` to turn on canonical URLs and the sitemap.

## Where things live

| What | Where |
| --- | --- |
| Name, city, email, one-line statement | `src/site.config.ts` |
| Tools, languages (add education and CV rows here when ready) | `src/pages/about.astro` |
| Essays | `src/content/essays/*.mdx` |
| Projects | `src/content/projects/*.mdx` |

## Publish a new essay

Add one `.mdx` file to `src/content/essays/`. Copy the frontmatter of an existing essay and change it. The sheet number (A-101, A-102…), reading time, register row, timeline point and footer revision table all update automatically.

- `style` must be one of: Gothic, Mughal, Modernist, Organic, Vernacular, Brutalist (add more in `src/content.config.ts`).
- `cover.id` is the `photo-…` part of an `images.unsplash.com` URL. Credit the photographer in `credit` / `creditUrl`.
- Margin note (red pencil in the margin on desktop, tap-to-open on phones): `<Note n={1}>Text of the note.</Note>`
- Photo inside the essay: `<Figure id="photo-…" alt="…" caption="…" credit="…" creditUrl="…" />` (add `wide` to let it run into the margin).

## Design system in one paragraph

Two "papers" from an architect's print room: **cyanotype** blue (covers, indexes, projects) and **whiteprint** (essays, for long reading; it turns into a night print in dark mode). Linework is white on blue, the accent is canary trace-paper yellow, and margin notes are architects' red redlines. Photos print as cyanotypes and develop into colour on hover or with the "Show in colour" button. Drawing conventions carry real information: sheet numbers, grid bubbles, level markers, the title-block footer with its revision table. Type: Archivo (expanded for display), Literata for essays, Martian Mono only for drawing annotations. Tokens live in `src/styles/global.css`.
