# Redirect map — cut-over from live aspectbuilds.co.uk
## (generated 2026-09-09, GSC export Sept 2026)

## What changes at cut-over

| Live URL | v2 URL | Why |
|---|---|---|
| `/about/` | `/about-us/` | rebuild uses explicit slug |
| `/faq/` | `/faqs/` | plural |
| `/services/` | `/our-services/` | KD-era name removed |
| `/projects/` (index) | `/our-work/` | listing moved to gallery |
| `/projects/{case}/` ×10 | **unchanged** — real case-study pages at the same URLs | rebuilt as full narrative pages, not redirects |
| `/how-we-work/` | `/about-us/` | process section lives on About |
| `/locations/` | `/bath/` | coverage hub replaces locations list |
| `/builders-bath/` | `/bath-builders-bath/` | hub slug aligned with the 13 money URLs |
| `/bath-plastering-decorating/` (+areas) | `/bath-plastering-rendering/` (+areas) | service renamed; Painting & Decorating is new |
| `/areas-covered/{area}/` ×27 | `/bath/{area}/` | area hubs moved under /bath/ |
| old `/services/{category}/` IA (6 pages) | matching money pages | old category IA retired |
| `/privacy-policy/` | `/privacy/` | slug |
| combined area pages (frome-radstock-midsomer-norton, saltford-keynsham) | `/bath/frome/`, `/bath/saltford/` | replaced by per-area hubs |
| `/our-services/{slug}-bath|bristol/` | `/bath-{slug}/` | KD-era matrix shape removed |

## Unchanged (no redirect needed)
- `/` `/contact/` `/privacy/` `/terms/` `/blog/`
- All 12 service hub URLs that match (bath-kitchen-fitters, bath-windows-doors, ...)
- All 22 blog post slugs (1:1)

## Traffic backing the targets (GSC, 12mo)
- /about/ 307 imp — to /about-us/
- /locations/ 146 imp — to /bath/
- /services/ 128 imp — to /our-services/
- /services/heritage-restoration/ 95 imp — to /bath-heritage-restoration/
- /projects/frome-garage-conversion/ 94 imp — to /bath-new-build/
- /services/property-care/ 91 imp — to /bath-property-maintenance/
- /services/extensions/ 72 imp — to /bath-extension-builders/
- /areas-covered/trowbridge/ 429 imp — pattern → /bath/trowbridge/

## Post-launch checklist
1. Deploy, then curl-test every rule (spot-check 10 high-traffic ones).
2. GSC: submit new sitemap; watch Coverage for soft-404s on old URLs.
3. Remove any /tools/fb-ad-extensions artifact (2 imp, test URL).
4. Keep rules at least 12 months; drop after GSC shows old URLs fully deindexed.
