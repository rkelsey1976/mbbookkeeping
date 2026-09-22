// Single source of truth for how people reach Aspect Builds.
// Ported from aspectbuilds.co.uk (verified live: footer + contact page).
//
// Aspect Builds & Maintenance Ltd — James, Dunkerton, Bath.
// Phone/email/address below are the LIVE site's values; trust these over
// any template placeholder. WhatsApp button hidden until a confirmed
// mobile is supplied (a chat button that errors is worse than none).

export const PHONE = {
  /** Dial string, no spaces. */
  tel: '+447498158747',
  /** How it is written on the page. */
  display: '07498 158747',
  /** E.164, for schema.org. */
  international: '+447498158747',
};

/** The mobile. Not shown on the site — reserved for WhatsApp. */
export const MOBILE = {
  tel: '',
  display: '',
  international: '',
};

/**
 * WhatsApp mobile in international format, digits only, no '+'.
 * Empty string hides the WhatsApp button entirely (deliberate).
 */
export const WHATSAPP_NUMBER = '447498158747';

/** Prefilled first message. Keep it short — it is editable before sending. */
export const WHATSAPP_MESSAGE = "Hi Aspect Builds — I'd like a quote for my project.";

export const whatsappHref = (message: string = WHATSAPP_MESSAGE) =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : null;

/**
 * Profiles that are demonstrably the same business, for schema.org `sameAs`.
 * Only add a URL you have opened and confirmed. A sameAs pointing at a 404
 * is worse than no sameAs.
 */
export const PROFILES: string[] = [
  // TrustATrader — 16 reviews, 4.7. Verified live in the current site's footer.
  'https://www.trustatrader.com/traders/aspect-builds-maintenance-ltd-interior-refurbishment-bath-south',

  // Facebook + Instagram — linked from the live site footer.
  'https://www.facebook.com/profile.php?id=61590355720472',
  'https://www.instagram.com/aspectbuilds1/',

  // Companies House. Authoritative third-party confirmation of the entity.
  'https://find-and-update.company-information.service.gov.uk/company/16033975',

  // Google Business Profile — verified from the live site footer.
  'https://g.page/r/CSgqcByy81a7EBM/review',
];

export const COMPANY = {
  legalName: 'Aspect Builds & Maintenance Ltd',
  /** Companies House — verified against live site footer/schema
      (find-and-update.company-information.service.gov.uk/company/16033975). */
  number: '16033975',
  incorporated: '2015-03-12',
};

export const EMAIL = 'james.aspectbuilds@gmail.com';

export const ADDRESS = {
  street: '2 Fir Tree Cottages',
  locality: 'Dunkerton',
  city: 'Bath',
  postcode: 'BA2 8BS',
  /** Geo for schema (Dunkerton, south-west of Bath). */
  lat: 51.3562,
  lng: -2.3661,
};

export const HOURS = [
  { days: 'Monday – Friday', opens: '08:00', closes: '18:00' },
  { days: 'Saturday', opens: '09:00', closes: '13:00' },
  { days: 'Sunday', opens: '', closes: '' },
];

export const BRAND = {
  /** Trading name as it appears on the site. */
  name: 'Aspect Builds',
  /** Full legal name for schema + footer. */
  fullName: 'Aspect Builds & Maintenance Ltd',
  shortName: 'Aspect',
  domain: 'aspectbuilds.co.uk',
  url: 'https://aspectbuilds.co.uk',
  tagline: 'Premium construction across Bath & BANES',
  established: '2004',
  /** Trust numbers shown in the StatsBar — from the live site. */
  stats: [
    { value: '5.0', label: 'Google rating' },
    { value: '22+', label: 'years in Bath' },
    { value: '£10M+', label: 'public liability' },
    { value: 'MCIOB', label: 'chartered builder' },
  ],
};