// Reviews for MB Bookkeeping & Payroll Solutions.
//
// MOCKUP STATUS: the live site publishes NO client reviews and we will not
// invent any (CPRs 2008 — fabricated testimonials are actionable, and this
// is a pitch mock for a real business). REVIEWS ships EMPTY.
//
// The review components in this template render nothing when the array is
// empty — which is the honest state for a pitch. When the client supplies
// real quotes (Google reviews, emails, WhatsApp thank-yous), add them here
// with the same shape and every surface lights up.

export type Review = {
  name: string;
  area: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  source: 'Google' | 'TrustATrader' | 'Client email';
};

export const REVIEWS: Review[] = [];

/**
 * Aggregate rating for schema. EMPTY because we have zero verified reviews.
 * Wire only what the client's Google Business Profile actually shows.
 */
export const AGGREGATE = {
  rating: null as number | null,
  count: null as number | null,
};

/**
 * Reviews for a service (optionally area-scoped). Returns [] while REVIEWS
 * is empty — the honest pitch state.
 */
export const reviewsFor = (key: string): Review[] => REVIEWS;
