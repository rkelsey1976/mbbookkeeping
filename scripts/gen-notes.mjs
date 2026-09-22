// Regenerate src/lib/serviceAreaNotes.ts, preserving any copy already written.
import { writeFileSync, readFileSync, existsSync } from 'node:fs';

const areas = (await import('../src/lib/areas.ts')).getBristolAreas();
const services = (await import('../src/lib/services.ts')).SERVICES;

let existing = {};
if (existsSync('src/lib/serviceAreaNotes.ts')) {
  try { existing = (await import('../src/lib/serviceAreaNotes.ts')).SERVICE_AREA_NOTES; } catch {}
}

const header = `// Per-combination copy for the service × neighbourhood pages.
//
// WHY THIS FILE EXISTS
// Those pages are built from area data plus service data, so two pages that
// share an area differ only by the service name — measured at 95% identical,
// which reads as doorway pages. This is the one place for copy that is true
// of *this service* in *this area* and nowhere else.
//
// HOW TO FILL IT IN
// Two or three sentences per entry, in Kyran's voice. The specifics carry it:
// the substrate, the typical property here, what actually fails locally,
// access and scaffold. For example:
//
//   'silicone-rendering/eastville':
//     "Eastville's Victorian terraces were mostly rendered in sand-and-cement " +
//     "in the 1970s, and that's what fails first on the north-facing gables. " +
//     "We strip back to brick, repoint, then apply silicone over a mesh base. " +
//     "The terraces are tight for scaffold, so we work one elevation at a time.",
//
// Leave an entry as '' and the page omits the block — nothing breaks, the page
// is just less distinct until the copy arrives.
//
// Regenerate (keeps existing copy):  node scripts/gen-notes.mjs
// Check what's outstanding:          node scripts/notes-coverage.mjs

export const SERVICE_AREA_NOTES: Record<string, string> = {`;

let body = '';
for (const svc of services) {
  body += `\n  // ---------- ${svc.shortName} ----------\n`;
  for (const area of areas) {
    const key = `${svc.slug}/${area.slug}`;
    const val = (existing[key] ?? '').replace(/'/g, "\\'");
    body += `  '${key}': '${val}',${' '.repeat(Math.max(1, 46 - key.length - val.length))}// ${area.name}\n`;
  }
}

writeFileSync('src/lib/serviceAreaNotes.ts', `${header}${body}};

export const getNote = (service: string, area: string): string =>
  SERVICE_AREA_NOTES[\`\${service}/\${area}\`] ?? '';
`);
console.log(`  ${services.length} services × ${areas.length} areas = ${services.length * areas.length} slots`);
