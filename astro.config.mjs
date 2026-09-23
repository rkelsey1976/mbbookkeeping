// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://www.kdplasteringrenderingservices.co.uk';
const PAGES = './src/pages';
const BLOG = './src/content/blog';

// ─────────────────────────────────────────────────────────────────────────────
// Sitemap lastmod / priority / changefreq
//
// The sitemap previously emitted bare <loc> tags — 158 URLs with no dates and
// no weighting, which tells a crawler nothing about what changed or what
// matters. Everything below is derived, never hand-maintained, so it cannot
// drift from the site.
// ─────────────────────────────────────────────────────────────────────────────

/** @param {string} url */
const pathOf = (url) => (url.replace(SITE, '').replace(/\/$/, '') || '/');

/** Map a URL back to the file that produces it, so git can date it. */
/** @param {string} path @returns {string | null} */
function sourceFor(path) {
  if (path === '/') return join(PAGES, 'index.astro');

  const parts = path.replace(/^\//, '').split('/');

  // Blog posts are content-collection markdown.
  if (parts[0] === 'blog' && parts.length === 2) {
    const md = join(BLOG, `${parts[1]}.md`);
    return existsSync(md) ? md : join(PAGES, 'blog', '[...slug].astro');
  }

  // Static routes: /about-us/ -> about-us.astro, /blog/ -> blog/index.astro
  for (const candidate of [
    join(PAGES, `${parts.join('/')}.astro`),
    join(PAGES, parts.join('/'), 'index.astro'),
  ]) {
    if (existsSync(candidate)) return candidate;
  }

  // Dynamic routes — walk back looking for the [param] template that built it.
  for (let i = parts.length; i > 0; i--) {
    const parent = parts.slice(0, i - 1).join('/');
    for (const pattern of ['[slug].astro', '[area].astro', '[...slug].astro']) {
      const c1 = join(PAGES, parent, pattern);
      if (existsSync(c1)) return c1;
      const c2 = join(PAGES, parent, parts[i - 1], pattern);
      if (existsSync(c2)) return c2;
    }
    // /our-services/{svc}-bristol/ and /our-services/{svc}-bristol/{area}/
    const tpl = parts.length === 3
      ? join(PAGES, 'our-services', '[service]-bristol', '[area].astro')
      : join(PAGES, 'our-services', '[slug]-bristol', 'index.astro');
    if (parts[0] === 'our-services' && existsSync(tpl)) return tpl;
  }
  return null;
}

/** @param {string} file @returns {Date | null} */
const gitDate = (file) => {
  try {
    const out = execSync(`git log -1 --format=%aI -- "${file}"`, {
      encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out) : null;
  } catch { return null; }
};

/** @param {string} path @returns {Date | undefined} */
function lastmodFor(path) {
  const src = sourceFor(path);
  if (!src) return undefined;

  // Blog markdown carries its own dates — those beat the file's git history,
  // which changes for a typo fix.
  if (src.endsWith('.md')) {
    try {
      const fm = readFileSync(src, 'utf8').match(/^---[\s\S]*?---/)?.[0] ?? '';
      const updated = fm.match(/^updated:\s*(\d{4}-\d{2}-\d{2})/m);
      const published = fm.match(/^published:\s*(\d{4}-\d{2}-\d{2})/m);
      const d = updated?.[1] ?? published?.[1];
      if (d) return new Date(d);
    } catch { /* fall through */ }
  }

  // Data-driven pages change when their data changes, not just their template,
  // so take whichever is newer.
  const deps = [src];
  if (path.startsWith('/our-services/') || path.startsWith('/bristol/') || path.startsWith('/bath/')) {
    deps.push('./src/lib/services.ts', './src/lib/areas.ts');
  }
  const dates = deps.map(gitDate).filter(Boolean);
  if (dates.length) return new Date(Math.max(...dates.map(Number)));

  try { return statSync(src).mtime; } catch { return undefined; }
}

/** @param {string} path @returns {number} */
function priorityFor(path) {
  if (path === '/') return 1.0;
  const parts = path.replace(/^\//, '').split('/');

  if (parts[0] === 'our-services') {
    if (parts.length === 1) return 0.8;                 // hub
    if (parts.length === 2) return 0.9;                 // service x city — the money pages
    return 0.8;                                          // service x area
  }
  if (parts[0] === 'bristol' || parts[0] === 'bath') return parts.length === 1 ? 0.8 : 0.7;
  if (parts[0] === 'blog') return parts.length === 1 ? 0.6 : 0.6;
  if (['contact', 'our-work'].includes(parts[0])) return 0.7;
  if (['privacy', 'terms', 'cookies'].includes(parts[0])) return 0.3;
  return 0.5;                                            // about-us, faqs, how-we-work
}

/** @param {string} path @returns {'weekly' | 'monthly'} */
const changefreqFor = (path) => (path === '/' ? 'weekly' : 'monthly');


// https://astro.build/config
export default defineConfig({
  site: 'https://www.mbbookkeepingandpayrollsolutions.co.uk',

  // Every canonical, internal link and sitemap entry carries a trailing slash,
  // and the build is directory-style (/page/index.html). Declared rather than
  // left to defaults so dev/preview 404 the slashless form instead of serving
  // both, and so Netlify has one policy to match.
  trailingSlash: 'always',
  build: { format: 'directory' },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // The style guide is noindex — keep it out of the sitemap too, so we
      // aren't sending search engines contradictory signals.
      // /thanks/ is noindex: it is a conversion confirmation, not a landing
      // page. Left in the sitemap it can rank, and anyone arriving on it from
      // search fires a conversion that never happened.
      filter: (page) => !['/style-guide', '/logo-lab', '/thanks', '/404'].some((p) => page.includes(p)),
      /** @param {import('@astrojs/sitemap').SitemapItem} item */
      serialize(item) {
        const path = pathOf(item.url);
        const lastmod = lastmodFor(path);
        /** @type {import('@astrojs/sitemap').SitemapItem} */
        const out = { ...item, priority: priorityFor(path),
          changefreq: /** @type {import('@astrojs/sitemap').SitemapItem['changefreq']} */ (changefreqFor(path)) };
        if (lastmod) out.lastmod = lastmod.toISOString();
        return out;
      },
    }),
  ],
});