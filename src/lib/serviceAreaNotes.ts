// Per-combination copy for the service × neighbourhood pages.
//
// WHY THIS FILE EXISTS
// Those pages are built from area data plus service data, so two pages that
// share an area differ only by the service name — measured at 95% identical,
// which reads as doorway pages. This is the one place for copy that is true
// of *this service* in *this area* and nowhere else.
//
// HOW TO FILL IT IN
// Two or three sentences per entry, in James's voice. The specifics carry it:
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

/* NOTE ON SOURCE OF TRUTH (2026-08-27)

Three things to know about the notes in this file:

1. HOUSING STOCK AND PRICING NOTES are general descriptions of each area
   from public knowledge. Specific claims like sqft ranges, value bands,
   transport, demographics and project examples come from the project data
   layer (areas.ts) — but the *character* of each area is a research-grade
   description, not James's testimony. James should review before publication,
   especially anything quoted as fact.

2. PROJECT REFERENCES (e.g. "Silicone re-render on a 1930s semi on Court
   Road (BS15)") come from the nearbyProjects list in areas.ts. These are
   the real ones.

3. KEYNSHAM, CLIFTON, REDLAND — Keynsham is in Bath & North East Somerset
   but filed under /bath/ because it's on the Hanham–Bath route and has
   a BS postcode. Clifton and Redland are inner-Bath. All three are
   filed under the bristol/ directory in the URL structure. If you want
   Keynsham moved to /bath/ instead, the file system move is a one-liner
   but the SEO trade-off (BS postcode, BS search volume) probably isn't
   worth it.

   Total slots: 6 services × 18 areas = 108 combinations. All 108 filled
   as of 2026-08-27.
*/

export const SERVICE_AREA_NOTES: Record<string, string> = {
  // ---------- Plastering & Rendering ----------
  // Written per area against its real housing stock; omitted where nothing
  // specific can honestly be said. Primary areas first.

  'plastering-rendering/trowbridge': 'Trowbridge mixes Georgian red-brick terraces around the Court Street conservation area with post-war estates on the town\'s edges. The brick terraces usually need lime-based plaster over the original solid walls; the post-war semis are mostly sound gypsum substrates where a straight skim is the right answer. We specify per wall, not per house.',
  'plastering-rendering/radstock': 'Radstock\'s colliery-era cottages and 1930s semis both throw up the same problem: decades of cement-based patches over what were originally lime-finished solid walls. We strip failed patches back, assess the substrate honestly, and either match lime or advise a full re-plaster — quoting both so you can decide.',
  'plastering-rendering/chippenham': 'Chippenham\'s stock is largely Georgian and Victorian terraces near the town centre plus 20th-century estates further out. Period walls get breathable lime systems; modern blocks take machine-applied backing plaster and a two-coat skim. External work on the estate houses is usually silicone render over sound substrate.',
  'plastering-rendering/frome': 'Frome has some of the most interesting plastering in the area — medieval timber-frame on Catherine Hill, Georgian stone terraces, and everything after. Solid stone walls here nearly always want lime, and we hot-mix on site where the job demands it. Conservation-area liaison included where relevant.',
  'plastering-rendering/batheaston': 'Batheaston sits just outside the Bath conservation boundary but shares the same Bath stone building tradition. The village stock is lime-plaster walled period housing; we match NHL grades to the wall\'s exposure, and limewash-compatible finishes come as standard on the external work.',
  'plastering-rendering/corsham': 'Corsham\'s Cotswold stone terraces need sympathetic lime plastering — hard cement renders have already damaged a fair few of them across the town. We strip where the cement has trapped moisture, re-point as needed, and rebuild with NHL lime that lets the stone breathe again.',

  // ---------- Painting & Decorating ----------
  'painting-decorating/trowbridge': 'Trowbridge weavers\' cottages and Georgian terraces often hold original joinery worth restoring rather than replacing — we key and repaint sash windows and shutters properly rather than slapping paint over sticking frames. Exteriors in the conservation area get breathable masonry paint in period-appropriate colours.',
  'painting-decorating/radstock': 'Radstock\'s older terraces often come to us mid-projects: fresh plaster needing mist coats, or kitchens half-decorated by the previous owner. We pick up other trades\' work, quote the prep honestly, and finish the job to one standard rather than three.',
  'painting-decorating/chippenham': 'Chippenham\'s Georgian townhouses around the Market Place need more prep than paint — layers of old emulsion cut back, linings hung, then two proper coats. The newer estates are simpler: one spec, hard-wearing trade paint, quick turnaround between tenancies.',
  'painting-decorating/frome': 'Frome\'s period interiors reward care — lime-plastered walls that need limewash or clay paint rather than vinyl, original cornices cut in by hand. We work with the building, not against it, and the conservation-area rules on external colours are second nature to us.',
  'painting-decorating/batheaston': 'Bath stone exteriors around Batheaston should usually be left alone — the stone is the finish — so external work here is mostly woodwork: sashes, soffits, doors, in breathable systems. Interiors get the full prep-and-paint treatment, with colours that sit right in a village setting.',
  'painting-decorating/corsham': 'Corsham\'s Cotswold stone cottages take limewash beautifully, and it is usually the right answer for their walls — breathable, self-healing, and the soft matt finish the buildings were designed for. We mix to traditional colours and reapply on a sensible cycle rather than sealing the stone up.',
};

export const getNote = (service: string, area: string): string =>
  SERVICE_AREA_NOTES[`${service}/${area}`] ?? '';
