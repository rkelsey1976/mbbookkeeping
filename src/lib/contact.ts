// Single source of truth for how people reach MB Bookkeeping & Payroll Solutions.
// Ported from mbbookkeepingandpayrollsolutions.co.uk (verified live: header bar
// + footer + contact page, Sept 2026).
//
// MB Bookkeeping & Payroll Solutions — Yate, South Gloucestershire.
// These are the LIVE site's values; trust these over any template placeholder.
//
// MOCKUP NOTE: this is a pitch mock, not a live client build.

export const PHONE = {
  /** Mobile — dial string, no spaces. Primary click-to-call. */
  tel: '+447828742991',
  /** How it is written on the page. */
  display: '07828 742991',
  /** E.164, for schema.org. */
  international: '+447828742991',
};

/** Landline — secondary contact, shown in footer/topbar like the live site. */
export const LANDLINE = {
  tel: '+441454447343',
  display: '01454 447343',
  international: '+441454447343',
};

/** The mobile. Not shown on the site — reserved for WhatsApp. */
export const MOBILE = {
  tel: '+447828742991',
  display: '07828 742991',
  international: '+447828742991',
};

/**
 * WhatsApp mobile in international format, digits only, no '+'.
 * MB's mobile is the primary contact number on the live site, so WhatsApp
 * is ON for the mock. Set to '' to hide.
 */
export const WHATSAPP_NUMBER = '447828742991';

/** Prefilled first message. Keep it short — it is editable before sending. */
export const WHATSAPP_MESSAGE = "Hi MB Bookkeeping — I'd like a free consultation about my bookkeeping/payroll.";

export const whatsappHref = (message: string = WHATSAPP_MESSAGE) =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : null;

/**
 * Profiles that are demonstrably the same business, for schema.org `sameAs`.
 * Only add a URL you have opened and confirmed. A sameAs pointing at a 404
 * is worse than no sameAs.
 *
 * MOCKUP NOTE: the live site footer shows Facebook + Instagram icons but the
 * profile URLs were not scraped — verify with the client before launch.
 */
export const PROFILES: string[] = [];

/**
 * Company registration. The live site shows NO company number and the
 * business may be a sole trader — DO NOT INVENT. Empty until confirmed.
 */
export const COMPANY = {
  legalName: 'MB Bookkeeping & Payroll Solutions',
  number: '',
  incorporated: '',
};

export const EMAIL = 'info@mbbookkeepingandpayrollsolutions.co.uk';

export const ADDRESS = {
  street: '18 Reed Road',
  locality: 'Yate',
  city: 'Bristol',
  postcode: 'BS37 7DR',
  /** Geo for schema (Yate, South Gloucestershire). */
  lat: 51.5406,
  lng: -2.4118,
};

export const HOURS = [
  { days: 'Monday – Friday', opens: '08:30', closes: '17:30' },
  { days: 'Saturday', opens: '', closes: '' },
  { days: 'Sunday', opens: '', closes: '' },
];

export const BRAND = {
  /** Trading name as it appears on the site. */
  name: 'MB Bookkeeping & Payroll',
  /** Full name for schema + footer. */
  fullName: 'MB Bookkeeping & Payroll Solutions',
  shortName: 'MB',
  domain: 'mbbookkeepingandpayrollsolutions.co.uk',
  url: 'https://mbbookkeepingandpayrollsolutions.co.uk',
  tagline: 'Bookkeeping & payroll for Bristol and South Gloucestershire',
  established: '',
  /**
   * Trust numbers shown in the StatsBar.
   * MOCKUP NOTE: the live site publishes NO review counts, years or
   * accreditations. These are PITCH PLACEHOLDERS for the mock only —
   * replace with verified values before any live build. Deliberately
   * modest + clearly replaceable.
   */
  stats: [
    { value: 'Xero', label: 'certified adviser' },
    { value: 'QuickBooks', label: 'ProAdvisor' },
    { value: 'MTD', label: 'fully compliant' },
    { value: 'Free', label: 'first consultation' },
  ],
};