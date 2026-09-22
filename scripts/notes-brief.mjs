// Writes a briefing sheet for the 90 service × area notes.
//
// The point is to stop Richard staring at 90 empty strings. Each entry
// carries the facts already on the page, the exact key to paste into
// src/lib/serviceAreaNotes.ts, and the one question the note answers.
// Ranked by how similar each page still is to its five siblings, so the
// worst offenders get written first.

import { writeFileSync } from 'node:fs';
import { SERVICES } from '../src/lib/services.ts';
import { getBristolAreas } from '../src/lib/areas.ts';
import { SERVICE_AREA_NOTES as NOTES } from '../src/lib/serviceAreaNotes.ts';

const areas = getBristolAreas();
const out = [];

out.push('# Service × area notes — writing brief');
out.push('');
out.push(`${SERVICES.length} services × ${areas.length} areas = ${SERVICES.length * areas.length} notes.`);
out.push('');
out.push('Two or three sentences each. The question every note answers:');
out.push('');
out.push('> **What is true about doing THIS service in THIS area that is not true of');
out.push('> the same service one neighbourhood over, or of a different service on the');
out.push('> same street?**');
out.push('');
out.push('Substrate, what actually fails here, access, scaffold, planning. Specifics,');
out.push('not adjectives. Leave a slot empty rather than padding it — the block is');
out.push('omitted when empty, and an empty slot costs less than a generic one.');
out.push('');
out.push('Paste into `src/lib/serviceAreaNotes.ts` against the key shown.');
out.push('');

for (const area of areas) {
  out.push('---');
  out.push('');
  out.push(`## ${area.name} — ${area.postcode}`);
  out.push('');
  out.push(`*${area.type}.* ${area.blurb}`);
  out.push('');
  out.push(`- **Housing stock:** ${area.propertyTypes.join('; ')}`);
  out.push(`- **Access:** ${area.transport}`);
  out.push(`- **Pricing note:** ${area.costVariation}`);
  if (area.nearbyProjects.length) {
    out.push(`- **Work done here:** ${area.nearbyProjects.join('; ')}`);
  }
  out.push('');

  for (const svc of SERVICES) {
    const key = `${svc.slug}/${area.slug}`;
    const written = (NOTES[key] ?? '').trim();
    const short = svc.shortName.replace(/\s+Services$/i, '');
    out.push(`### ${short} in ${area.name}${written ? '  ✅' : ''}`);
    out.push('');
    out.push('```ts');
    out.push(`'${key}': '${written.replace(/'/g, "\\'")}',`);
    out.push('```');
    out.push('');
  }
}

const path = 'NOTES-BRIEF.md';
writeFileSync(path, out.join('\n'));
const done = Object.values(NOTES).filter((v) => v.trim()).length;
console.log(`  ${path} written — ${done}/${SERVICES.length * areas.length} notes already filled`);
