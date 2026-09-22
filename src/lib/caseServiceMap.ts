// Maps each case study to the service page that owns it — the link down
// from a case study to the money page.
//
// NOTE: heritage-restoration has NO real case study yet. The live site's
// batheaston-heritage-renovation page is a hero-only stub (no narrative,
// no photos) — adding it as a study would fabricate evidence. James can
// supply photos + story later; until then the service page honestly shows
// none.
import type { Service } from './services';
import { getService } from './services';

const CASE_SERVICE: Record<string, string> = {
  'bath-countryside-landscaping':      'landscaping',
  'bath-loft-extension':               'loft-conversion',
  'chilcompton-rendering-decoration':  'plastering-rendering',
  'custom-cabinet-build':              'kitchen-fitters',
  'custom-kitchen-refit':              'kitchen-fitters',
  'frome-garage-conversion':           'new-build',
  'garden-wall-landscaping':           'stone-walling',
  'greenhouse-base-build':             'property-maintenance',
  'luxury-bathroom-refit':             'bathroom-installers',
  'midford-garden-extension':          'extension-builders',
};

export const getServiceForCase = (caseId: string): Service | undefined => {
  const slug = CASE_SERVICE[caseId];
  return slug ? getService(slug) : undefined;
};

/** Reverse lookup: every case study belonging to a service, strongest first.
    Used by the service pages' case-study band and the case pages' related links. */
export const getCasesForService = (serviceSlug: string): string[] => {
  const cases = Object.entries(CASE_SERVICE)
    .filter(([, svc]) => svc === serviceSlug)
    .map(([caseId]) => caseId);
  // Kitchen has two; the full refit tells the better story — lead with it.
  const order = ['custom-kitchen-refit', 'midford-garden-extension', 'bath-loft-extension',
                 'luxury-bathroom-refit', 'batheaston-heritage-renovation'];
  return cases.sort((a, b) => {
    const ai = order.indexOf(a); const bi = order.indexOf(b);
    return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  });
};
