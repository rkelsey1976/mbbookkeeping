// Analytics configuration.
//
// Nothing here loads until someone accepts cookies. The banner writes a
// decision to localStorage; only "accepted" causes the GA4 script to be
// injected. A visitor who rejects, or who never answers, loads no
// third-party script at all — which is what the cookie policy has to say.
//
// Leave GA4_ID empty and the whole analytics path is inert: no banner
// reason, no script, no cookies. Same pattern as the WhatsApp number.

/**
 * GA4 Measurement ID, e.g. 'G-XXXXXXXXXX'.
 * From Google Analytics → Admin → Data Streams.
 *
 * Set empty to make the whole analytics path inert again (no script, no
 * cookies); the banner still governs the Google Maps embed.
 */
export const GA4_ID = 'G-QYJ0MV76GF';

/** localStorage key holding the visitor's decision. */
export const CONSENT_KEY = 'kd-cookie-consent';

/** How long a decision stands before we ask again. ICO guidance is 6 months. */
export const CONSENT_MONTHS = 6;
