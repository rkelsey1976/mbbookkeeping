// Maps each case study to the service page that owns it — the link down
// from a case study to the money page.
//
// MOCKUP STATUS: MB's live site publishes no case studies, and we will not
// invent client stories for a real business. CASE_SERVICE ships EMPTY.
// When the client supplies real client stories (with permission), add them
// here and to src/content/case-studies/ with the same shape.
//
// The service pages' case-study band renders nothing when this map has no
// entries — the honest state for a pitch mock.

import type { Service } from './services';
import { getService } from './services';

const CASE_SERVICE: Record<string, string> = {};

export const getServiceForCase = (caseId: string): Service | undefined => {
  const slug = CASE_SERVICE[caseId];
  return slug ? getService(slug) : undefined;
};

/** Reverse lookup: every case study belonging to a service, strongest first. */
export const getCasesForService = (serviceSlug: string): string[] =>
  Object.entries(CASE_SERVICE)
    .filter(([, svc]) => svc === serviceSlug)
    .map(([caseId]) => caseId);