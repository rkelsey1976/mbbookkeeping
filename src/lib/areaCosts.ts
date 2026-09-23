// Joins a service's cost guide to an area's actual business stock.
//
// MOCKUP STATUS: MB's pricing is quote-led, and we will not fabricate
// area-level price variation for a real business. Every row ships the
// service's standard range unchanged. When real area variation emerges
// (e.g. Clifton's light-touch packages), add the row here.

export type CostRow = { type: string; lowEnd: string; highEnd: string };

export const getAreaCosts = (service: string, area: string) => {
  // Returns undefined — template falls back to the service's standard guide.
  return undefined;
};