// Bath-specific copy slots — OBSOLETE for the MB mock.
//
// MB serves the Bristol region from Yate; there is no second city and no
// Bath-side copy. Kept as an inert stub because template pages import
// getBathNote/getBathAreas unconditionally. Everything returns empty, so
// the consuming slots omit themselves.

export const BATH_SERVICE_NOTES: Record<string, string> = {};

export const getBathNote = (service: string): string =>
  BATH_SERVICE_NOTES[service] ?? '';

/** Inert for MB — returns the primary-tier areas (no Bath split). */
export const getBathAreas = () => [];