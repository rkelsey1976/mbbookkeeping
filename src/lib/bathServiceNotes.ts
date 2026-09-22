// Bath-specific copy, one slot per service.
//
// Bath is not Bath with a different postcode. The stock is Georgian
// limestone rather than brick and pebbledash, a large share is listed or
// in a conservation area, and the render specification follows from that —
// which renders are appropriate on a lime-built wall is a trade judgement,
// not something to be generated.
//
// So the pages carry the technical spec that is true in both cities, the
// Bath constraints that are already recorded in the area data, and this
// slot for the part only James can write. Empty slots are omitted rather
// than padded.
//
// Check what's outstanding: node scripts/notes-coverage.mjs

export const BATH_SERVICE_NOTES: Record<string, string> = {
  'builders-bath': '',
  'kitchen-fitters': '',
  'extension-builders': '',
  'loft-conversion': '',
  'renovation': '',
  'heritage-restoration': '',
  'new-build': '',
  'stone-walling': '',
  'landscaping': '',
  'plastering-rendering': '',
  'painting-decorating': '',
  'property-maintenance': '',
  'windows-doors': '',
  'bathroom-installers': '',
};

export const getBathNote = (service: string): string =>
  BATH_SERVICE_NOTES[service] ?? '';
