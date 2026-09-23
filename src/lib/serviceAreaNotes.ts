// Per-combination copy for the service × area pages.
//
// WHY THIS FILE EXISTS
// Those pages are built from area data plus service data, so two pages that
// share an area differ only by the service name — which reads as doorway
// pages. This is the one place for copy that is true of a specific pairing
// only ("card takings reconciled weekly for Gloucester Road cafés").
//
// MOCKUP STATUS: seeded with notes for the flagship combinations used on
// the mock's showcase pages. Empty slots are omitted rather than padded.
// Fill these before any live build — the script scripts/notes-coverage.mjs
// reports coverage.

export const SERVICE_AREA_NOTES: Record<string, string> = {
  // Yate — office-town pairings
  'bookkeeping:yate':
    'Yate businesses get the full home-town service: a monthly face-to-face at your place or ours on Reed Road, ledgers reconciled weekly if card takings make that worthwhile, and a direct line to the person who actually does your books.',
  'payroll:yate':
    'Yate employers — from the Station Road industrial estate to the High Street — pay from £30/month for a 1–10 person payroll, with RTI never late and pensions administered as part of the run.',
  'vat-returns:yate':
    'Yate VAT clients file from reconciled books with a scheme check every year. Most Yate businesses we see should be on a different scheme than the one they registered for — we model it with your actual figures.',
  'self-assessment:yate':
    'Yate sole traders and landlords file well before the January deadline, with payments-on-account forecast so July and January hold no surprises.',
  'bank-reconciliation:yate':
    'Yate businesses on card terminals — the cafés and shops around Yate Shopping Centre especially — benefit from weekly reconciliation of card settlements against the bank, where most unexplained differences hide.',
  'management-accounts:yate':
    'Yate owner-managers get a three-page monthly pack and a 15-minute call: what you earned, what you spent, who owes you, and the two numbers worth acting on this month.',
  'cloud-accounting:yate':
    'Yate businesses still on spreadsheets get a full Xero or QuickBooks setup with bank feeds and rules — usually live within two weeks, with training on your own data.',

  // Chipping Sodbury — High Street pairings
  'bookkeeping:chipping-sodbury':
    'Chipping Sodbury\'s High Street independents run on long hours and thin margins — books kept weekly, supplier invoices scheduled so early-payment discounts are never missed, and a monthly report that shows exactly which lines carry the business.',
  'payroll:chipping-sodbury':
    'High Street hospitality in Sodbury runs on variable hours — payroll handled weekly with overtime and split shifts calculated properly, payslips out on time, every time.',

  // Bradley Stoke — professional/contractor pairings
  'cloud-accounting:bradley-stoke':
    'Bradley Stoke\'s consultants and contractors are the classic cloud-accounting client: everything in Xero or QuickBooks, receipts photographed from the phone, and a monthly review that takes fifteen minutes.',
  'self-assessment:bradley-stoke':
    'Bradley Stoke\'s limited-company consultants juggle salary, dividends and expenses — the return is assembled year-round from cloud records, filed at Christmas, not January.',

  // Clifton — light-touch professional pairings
  'bookkeeping:clifton':
    'Clifton clients get the low-touch model: bank feeds and rules do the heavy lifting, receipts come in by app, and your monthly call lands in the diary at Whiteladies Road or wherever suits.',
  'management-accounts:clifton':
    'Clifton agencies and consultancies get a monthly pack built around utilisation and debtor days — the numbers a professional-services business actually steers by.',

  // Bishopston — hospitality pairings
  'bank-reconciliation:bishopston':
    'Gloucester Road card takings reconciled weekly — reader settlements matched to the bank, festival weekends reconciled by the Tuesday, and discrepancies caught while the receipt is still in the till drawer.',
  'bookkeeping:bishopston':
    'Gloucester Road independents get weekly books that follow the takings — festival weekends, seasonal swings and card fees all handled as routine.',

  // Thornbury — management accounts focus
  'management-accounts:thornbury':
    'Thornbury\'s professional firms plan long-term, so the monthly pack carries budget-vs-actual and margin-by-service-line — market-town firms that plan, not just record.',

  // Clevedon — seasonal hospitality
  'payroll:clevedon':
    'Clevedon\'s hospitality payroll flexes with the season — summer staff surges, winter hours, and holiday accrual handled properly rather than estimated.',

  // Keynsham
  'bookkeeping:keynsham':
    'Keynsham businesses get steady monthly bookkeeping with a personal visit — the A4174 makes our Reed Road office a 25-minute run from the High Street.',

  // Portishead
  'cloud-accounting:portishead':
    'Portishead\'s home-based professionals get the marina-side setup: Xero configured for multiple income streams, with a quarterly in-person at the marina and everything else in the cloud.',
};

export const getNote = (service: string, area: string): string =>
  SERVICE_AREA_NOTES[`${service}:${area}`] ?? '';