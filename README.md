# KD Plastering & Rendering Services

Marketing site for KD Plastering & Rendering Services, Bristol.
Astro 7 + Tailwind 4, deployed on Netlify.

- **Live:** https://www.kdplasteringrenderingservices.co.uk
- **Design system:** `/style-guide` (noindex) — renders the live tokens and
  computes contrast ratios at runtime, so it cannot drift from the CSS.

## Development

```bash
npm install
astro dev --background     # manage with: astro dev status | logs | stop
npm run build
```

## Conventions

- Components reference **semantic tokens only** (`--text`, `--accent`,
  `--surface`), never the primitives beneath them. See `src/styles/global.css`.
- Brand orange `#ff6b1a` is a **fill** colour — 2.7:1 on white. Use
  `--accent-text` for orange text on light, `--accent-on-dark` on dark, and
  `--on-accent` for text sitting on an orange fill.
- Images are pre-generated at the size they render. See `scripts/`.

## Image pipeline

`scripts/prepare-logos.sh` trims and normalises manufacturer logos dropped
into `public/logos/raw/`.
