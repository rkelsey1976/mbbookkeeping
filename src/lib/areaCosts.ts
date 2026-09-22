// Joins a service's cost guide to an area's actual housing stock.
//
// Why this exists: the service × area pages were rendering almost nothing
// but area data, so the six pages that share an area differed only by a
// swapped noun — measured at 92% identical. This block varies on BOTH
// axes (the area supplies the property mix, the service supplies the
// price) using copy that was already written and checked, rather than
// inventing local detail.
//
// The matcher is deliberately conservative. A wrong price is far worse
// than a missing row, so anything it cannot confidently classify — flats,
// HMOs, townhouses, mixed-use — is dropped rather than guessed at.

import type { Area } from './areas';
import type { Service } from './services';

export type CostRow = {
  /** The area's own phrasing, so the row reads local. */
  label: string;
  /** The cost-guide band it was matched to, named so the basis is visible. */
  basis: string;
  lowEnd: string;
  highEnd: string;
};

/** Beds are written as "3-bed" or "2-3 bed"; take the top of the range. */
function maxBeds(s: string): number | null {
  const m = s.match(/(\d)\s*-\s*(\d)\s*bed/i) ?? s.match(/(\d)\s*-\s*bed/i) ?? s.match(/(\d)\s*bed/i);
  if (!m) return null;
  return Number(m[2] ?? m[1]);
}

/** Which cost-guide key, if any, this property type maps to. */
function costKeyFor(propertyType: string): string | null {
  const t = propertyType.toLowerCase();

  // Unpriceable by house shape — a flat is one leaseholder in a block, an
  // HMO is a landlord job, mixed-use is quoted per elevation on survey.
  if (/apartment|flat|hmo|multi-occupancy|townhouse/.test(t)) return null;
  if (/mixed (residential|commercial)|commercial \/ residential|residential \/ commercial/.test(t)) {
    return 'Commercial unit (per elevation)';
  }

  if (/bungalow/.test(t)) return 'Bungalow (single storey)';
  if (/terrace/.test(t)) return '2-bed terraced house';
  if (/semi/.test(t)) return '3-bed semi-detached';
  if (/cottage/.test(t)) return '2-bed terraced house';

  if (/detached/.test(t)) {
    const beds = maxBeds(t);
    if (/executive/.test(t) || (beds !== null && beds >= 5)) return '5-bed executive detached';
    return '4-bed detached';
  }
  return null;
}

/**
 * Cost rows for this service in this area. Empty when the service is not
 * priced by house shape (plastering is interior work, quoted by room and
 * area) or when nothing in the local stock matched confidently.
 */
export function getAreaCosts(service: Service, area: Area): CostRow[] {
  const bands = new Map(service.costGuide.perPropertyType.map((p) => [p.type, p]));

  const rows: CostRow[] = [];
  const seen = new Set<string>();

  for (const pt of area.propertyTypes) {
    const key = costKeyFor(pt);
    if (!key) continue;
    const band = bands.get(key);
    if (!band) continue;          // this service does not price that shape
    if (seen.has(key)) continue;  // one row per band, first local phrasing wins
    seen.add(key);
    rows.push({
      // Strip the sq ft / value parenthetical — the area page already
      // carries it, and it fights with the price column.
      label: pt.replace(/\s*\([^)]*\)\s*$/, '').trim(),
      basis: band.type,
      lowEnd: band.lowEnd,
      highEnd: band.highEnd,
    });
  }
  return rows;
}
