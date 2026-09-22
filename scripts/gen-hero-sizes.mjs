// Generates responsive variants of the hero images.
//
// The heroes were single 1600px files served to every device — a 360px
// phone was downloading 148KB to paint 360 CSS pixels, which is what put
// LCP at 5.6s on a throttled mobile run.

import { execSync } from 'node:child_process';
import { readdirSync, existsSync, mkdirSync, statSync } from 'node:fs';
import path from 'node:path';

const WIDTHS = [480, 800, 1200, 1600];
const OUT = 'public/heroes/r';

const sources = [
  'public/hero-home.webp',
  ...readdirSync('public/heroes')
    .filter((f) => f.endsWith('.webp'))
    .map((f) => path.join('public/heroes', f)),
];

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

let made = 0;
for (const src of sources) {
  if (statSync(src).isDirectory()) continue;
  const stem = path.basename(src, '.webp');
  for (const w of WIDTHS) {
    const out = `${OUT}/${stem}-${w}.webp`;
    if (existsSync(out)) continue;
    // -resize W 0 keeps the aspect ratio; q 76 is where these photos stop
    // gaining visible detail.
    execSync(`cwebp -quiet -q 76 -resize ${w} 0 "${src}" -o "${out}"`);
    made++;
  }
}
console.log(`  ${made} variants written to ${OUT}/`);
