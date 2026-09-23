// Services offered by MB Bookkeeping & Payroll Solutions (Yate, South Glos).
// PITCH MOCK data layer — replaces the Aspect construction services entirely.
//
// 5 services are VERIFIED from the live site (mbbookkeepingandpayrollsolutions.co.uk
// /services/, Sept 2026). 3 more are the PITCH PROPOSAL (marked unverified) —
// they're services a bookkeeper of this type almost certainly offers, included
// in the mock to show the client what coverage COULD look like. Every one is
// flagged so nothing unverified ships to a live build.
//
// Live-site service descriptions (the five confirmed ones) were ported
// near-verbatim from /services/ — they're the client's own approved copy.

export type ServiceFaq = { question: string; answer: string };

export type CaseStudy = {
  title: string;
  location: string;            // area slug
  propertyType: string;
  problem: string;
  solution: string;
  duration: string;            // human readable
  costRange: string;           // human readable
  result: string;
  beforeAlt: string;
  afterAlt: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  city: 'bristol';
  tagline: string;
  bathTagline?: string; // kept for template compat; unused for MB
  intro: string;
  longIntro: string;
  whatWeDo: string[];
  problems: string[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
  materials: { manufacturer: string; products: string[]; notes: string }[];
  costGuide: {
    perSquareMetre: string;
    perPropertyType: { type: string; lowEnd: string; highEnd: string }[];
    factorsAffectingPrice: string[];
    includes: string[];
    excludes: string[];
  };
  faq: ServiceFaq[];
  caseStudy?: CaseStudy;
  relatedServices: string[];
  heroImageAlt: string;
  category: 'bookkeeping' | 'payroll' | 'tax' | 'cloud' | 'reporting';
  metaDescription: string;
  titleTemplate: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'bookkeeping',
    name: 'Bookkeeping Yate & Bristol',
    shortName: 'bookkeeping',
    city: 'bristol',
    tagline: 'Accurate books, every month, without you lifting a finger.',
    intro: 'Purchase and sales ledger management, data entry and bank reconciliations — handled with precision so your accounts are always ready.',
    longIntro:
      'Bookkeeping is the core of every healthy business, and it is what we do best. We manage your purchase and sales ledgers with precision — recording invoices, receipts and payments accurately — so cash flow is always tracked, accounts remain balanced, and you keep a reliable financial overview. Accurate data entry eliminates errors and keeps your records organised, and regular bank reconciliations align your records with your statements, catching discrepancies early and giving you a true picture of your financial health. Whether you are a sole trader in Yate or a limited company in central Bristol, your books stay current, clean and ready for reporting, analysis or audit.',
    whatWeDo: [
      'Purchase ledger — supplier invoices recorded, approved and scheduled for payment',
      'Sales ledger — customer invoices raised, receipts matched, debtors tracked',
      'Day-to-day data entry handled carefully and error-checked',
      'Bank, credit card and PayPal/Stripe reconciliations — weekly or monthly',
      'Cash flow tracked so you always know where the business stands',
      'Records kept organised and audit-ready year-round',
    ],
    problems: [
      'A shoebox of receipts and an inbox of invoices that never gets shorter',
      'Bank statements that never quite match the books',
      'Unpaid customer invoices nobody has chased',
      'Year-end panic because the records are six months behind',
      'No idea what the business actually made last month',
    ],
    benefits: [
      'Books kept current weekly or monthly — never a year-end scramble',
      'Discrepancies caught early, before they become expensive problems',
      'Know your true cash position at any point in the month',
      'Every invoice, receipt and payment recorded accurately and on time',
      'Your accountant receives clean records — usually cutting their bill',
      'Hours back every week to spend on the business, not the admin',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We look at your current setup, software and transaction volumes, and agree exactly what you need covered.' },
      { title: 'Pick-up or cloud handover', description: 'Send documents digitally or hand over receipts — whatever suits the way you already work.' },
      { title: 'Ledgers brought current', description: 'First pass brings purchase and sales ledgers up to date and flags anything outstanding.' },
      { title: 'Bank reconciliation', description: 'Every account reconciled against statements; discrepancies identified and resolved with you.' },
      { title: 'Monthly reporting', description: 'A plain-English summary of where the money went — profit, cash flow, and anything needing attention.' },
      { title: 'Ongoing rhythm', description: 'Same time every week or month. Your books simply stay done.' },
    ],
    materials: [
      { manufacturer: 'Xero', products: ['Xero accounting', 'Xero Me'], notes: 'Cloud ledger management and bank feeds.' },
      { manufacturer: 'QuickBooks', products: ['QuickBooks Online'], notes: 'Popular with small Bristol businesses; full ledger support.' },
      { manufacturer: 'Sage', products: ['Sage Accounting', 'Sage 50'], notes: 'Long-established systems — we work with whatever you already run.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Sole trader / micro business', lowEnd: 'from £60', highEnd: '£120 / month' },
        { type: 'Small limited company', lowEnd: '£120', highEnd: '£250 / month' },
        { type: 'Growing business (high volume)', lowEnd: '£250', highEnd: 'quoted' },
      ],
      factorsAffectingPrice: [
        'Number of transactions per month',
        'How organised the records arrive (shoebox vs clean cloud data)',
        'Number of bank accounts and payment platforms',
        'Whether VAT returns are included',
      ],
      includes: [
        'All ledger management and data entry',
        'Bank reconciliations',
        'Monthly summary report',
        'Queries answered by phone or email',
      ],
      excludes: [
        'Year-end accounts and Corporation Tax (your accountant — we hand over clean records)',
        'Payroll (see our payroll service)',
      ],
    },
    faq: [
      { question: 'Do I need to change accountant to use your bookkeeping?', answer: 'No. We work alongside your existing accountant. In fact most accountants love us — they receive clean, reconciled records at year-end, which usually reduces their bill.' },
      { question: 'How often should my books be done?', answer: 'Weekly suits businesses with high transaction volumes; monthly is fine for most small businesses. We agree the rhythm at the free consultation and stick to it.' },
      { question: 'What if my books are months behind?', answer: 'That is one of the most common reasons people call us. We quote a one-off catch-up to bring everything current, then move you onto a simple monthly rhythm so it never happens again.' },
      { question: 'Do you work from my office or remotely?', answer: 'Almost everything is done remotely and securely in the cloud, with a monthly call or visit to go through your reports. On-site days across Bristol and South Gloucestershire can be arranged.' },
      { question: 'Which software do you support?', answer: 'Xero, QuickBooks and Sage — plus spreadsheets if that is where you are. If you are still on paper, we will migrate you to the cloud as part of the setup.' },
      { question: 'Are you Making Tax Digital ready?', answer: 'Yes. Cloud bookkeeping with digital VAT returns is exactly what MTD requires, and everything we set up is compliant from day one.' },
    ],
    relatedServices: ['bank-reconciliation', 'vat-returns', 'management-accounts'],
    heroImageAlt: 'MB Bookkeeping — organised ledger and cloud accounting for a Bristol small business',
    category: 'bookkeeping',
    metaDescription: 'Bookkeeping & small business accounting support in Yate & Bristol. Ledgers, data entry and reconciliations done accurately every month — clean figures for your accountant. Free consultation.',
    titleTemplate: 'Bookkeeping & Small Business Accounting Yate & Bristol | MB Bookkeeping',
  },

  {
    slug: 'payroll',
    name: 'Payroll Management',
    shortName: 'payroll run',
    city: 'bristol',
    tagline: 'Your staff paid correctly and on time, every time.',
    intro: 'Salaries, deductions, pensions and HMRC compliance — handled end to end so payroll is one less thing to worry about.',
    longIntro:
      'Payroll management is time-consuming and complex, but it is an essential part of every business. From calculating salaries and deductions to ensuring tax compliance, we handle everything. Payslips go out on time, pensions and student loans are deducted correctly, and your Real Time Information (RTI) filings reach HMRC on deadline, every month. Whether you have two employees or fifty across Bristol and South Gloucestershire, your payroll keeps running correctly — and your staff stay paid, happy and compliant — while safeguarding you against costly compliance errors.',
    whatWeDo: [
      'Gross-to-net salary calculations, including overtime, bonuses and commissions',
      'Payslips delivered to every employee, on time, every pay period',
      'PAYE and National Insurance calculated and reported to HMRC under RTI',
      'Auto-enrolment pension assessment, deductions and provider submissions',
      'Student loan, attachment of earnings and benefit-in-kind handling',
      'Starters, leavers and P45s processed without fuss',
      'Year-end P60s and full-year summaries',
    ],
    problems: [
      'Payroll eating a whole day of the boss\'s month — every month',
      'Panic every time an employee starts, leaves or changes hours',
      'Worry about pension auto-enrolment deadlines',
      'HMRC letters about late or incorrect RTI submissions',
      'Payslips produced late and staff asking questions',
    ],
    benefits: [
      'Payslips accurate and on time, every pay run — guaranteed by our checklist process',
      'RTI submissions to HMRC on deadline, no late-filing penalties',
      'Auto-enrolment handled — assessments, deductions and provider liaison',
      'Employees get a contact for payroll queries — not the boss',
      'Changes in legislation handled quietly in the background',
      'Scales from two employees to fifty without you doing anything differently',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We review your pay frequencies, employee count, pensions and any current payroll setup.' },
      { title: 'Setup & migration', description: 'Employees, pay rates, pension schemes and YTD figures loaded — mid-year moves are routine.' },
      { title: 'Monthly data exchange', description: 'You send hours or salary changes by a simple deadline each month.' },
      { title: 'Processing & checking', description: 'We calculate, double-check deductions, and send you a summary for approval before anything is paid.' },
      { title: 'Payslips & RTI', description: 'Payslips issued, FPS submitted to HMRC on or before payday, payments scheduled.' },
      { title: 'Year-end', description: 'P60s issued, year-end declarations made, new tax year rates loaded automatically.' },
    ],
    materials: [
      { manufacturer: 'Sage', products: ['Sage Payroll'], notes: 'Full RTI payroll for growing teams.' },
      { manufacturer: 'Xero', products: ['Xero Payroll'], notes: 'Payroll inside your Xero subscription.' },
      { manufacturer: 'BrightPay', products: ['BrightPay Connect'], notes: 'A small-employer favourite — simple and HMRC-recognised.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Per payslip', lowEnd: 'from £4', highEnd: '£8' },
        { type: 'Monthly payroll (1–10 staff)', lowEnd: 'from £30', highEnd: '£70 / month' },
        { type: 'Weekly payroll', lowEnd: 'from £25', highEnd: '£60 / week' },
      ],
      factorsAffectingPrice: [
        'Number of employees',
        'Pay frequency (weekly costs more runs than monthly)',
        'Pension scheme complexity',
        'Volume of starters, leavers and variable hours',
      ],
      includes: [
        'All calculations, payslips and RTI submissions',
        'Auto-enrolment administration',
        'Starters/leavers and P45s',
        'Year-end P60s',
      ],
      excludes: [
        'Workplace pension provider fees (paid direct to the provider)',
        'Employment law advice',
      ],
    },
    faq: [
      { question: 'Can you take over payroll mid-year?', answer: 'Yes, routinely. We bring over year-to-date figures so employees\' tax codes and pension deductions continue seamlessly — usually from your current software\'s starter leaver forms or a P45/P46 handover.' },
      { question: 'What is RTI and does it affect me?', answer: 'Real Time Information — HMRC requires every payment to employees to be reported on or before payday. Miss it and penalties follow. It is the core of what we do, and it is never late.' },
      { question: 'Do you handle workplace pensions?', answer: 'Yes — auto-enrolment assessment every pay run, deductions, and liaison with your pension provider (NEST, The People\'s Pension, Smart or your own). Re-enrolment and declarations handled too.' },
      { question: 'How do employees get their payslips?', answer: 'Securely by email or through an employee portal, your choice. Paper payslips can be arranged.' },
      { question: 'What does it cost?', answer: 'Most small Bristol businesses pay from £30/month for up to ten employees, or around £4–£8 per payslip. The free consultation confirms your exact figure — quoted before any work starts.' },
      { question: 'We pay weekly — is that a problem?', answer: 'Not at all. Weekly payrolls are a well-oiled routine here. The per-run fee is slightly lower and the deadline discipline is the same.' },
    ],
    relatedServices: ['bookkeeping', 'self-assessment', 'vat-returns'],
    heroImageAlt: 'MB Bookkeeping — payroll management for a Bristol business',
    category: 'payroll',
    metaDescription: 'Payroll services in Yate & Bristol. Payslips, PAYE, RTI and auto-enrolment pensions handled end to end — HMRC-compliant, on time, every run. Free consultation.',
    titleTemplate: 'Payroll Services Yate & Bristol | Accountancy Support | MB Bookkeeping',
  },

  {
    slug: 'vat-returns',
    name: 'VAT Returns & Making Tax Digital',
    shortName: 'VAT return',
    city: 'bristol',
    tagline: 'MTD-compliant VAT, filed on time, every quarter.',
    intro: 'Quarterly VAT returns prepared from your reconciled records and filed digitally — no penalties, no surprises.',
    longIntro:
      'VAT is where unorganised books get expensive: late filings, errors on reclaimed input tax, and penalty points under the new points-based system. We prepare your quarterly VAT return directly from properly reconciled records, check it with you before filing, and submit it digitally under Making Tax Digital. Because the return comes from clean books rather than a scramble, reclaiming what you are owed and paying only what you owe stops being a quarterly drama and becomes a five-minute sign-off.',
    // PITCH — unverified service (not on live site)
    whatWeDo: [
      'Quarterly (or monthly) VAT return preparation and digital filing',
      'VAT scheme advice — Flat Rate, Cash Accounting, Standard',
      'MTD-compliant digital records setup',
      'Input tax review — making sure you reclaim everything you can',
      'EC sales and reverse charge handling',
      'HMRC correspondence on your behalf',
    ],
    problems: [
      'The VAT deadline arrives and the records are not ready',
      'Not sure which VAT scheme actually suits the business',
      'Worried about the points-based penalty system',
      'Reverse charge VAT on construction work — a mystery',
      'Overpaying VAT because reclaimable expenses are missed',
    ],
    benefits: [
      'Returns filed on time, every quarter — penalty-proof',
      'Correct scheme choice can genuinely save money — we check it annually',
      'MTD compliance built in, not bolted on',
      'Input tax maximised — you reclaim everything you are entitled to',
      'No surprise HMRC letters',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We review your VAT registration, current scheme and transaction patterns.' },
      { title: 'Scheme check', description: 'We model whether Flat Rate or Cash Accounting would leave you better off — many businesses have never checked.' },
      { title: 'Records aligned', description: 'Your bookkeeping rhythm produces MTD-ready digital records automatically.' },
      { title: 'Quarterly preparation', description: 'Return drafted from reconciled records with a clear summary of what changed.' },
      { title: 'Your sign-off', description: 'You approve the figures — nothing is filed that you have not seen.' },
      { title: 'Filed & confirmed', description: 'Submitted digitally, confirmation stored, payment scheduled.' },
    ],
    materials: [
      { manufacturer: 'HMRC', products: ['MTD-compliant software only'], notes: 'All filings made through recognised software — spreadsheets alone stopped counting in 2022.' },
      { manufacturer: 'Xero', products: ['Xero VAT returns'], notes: 'Direct MTD filing from reconciled books.' },
      { manufacturer: 'QuickBooks', products: ['QuickBooks VAT'], notes: 'Automatic VAT tracking on every transaction.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'VAT return (from your bookkeeping)', lowEnd: 'from £50', highEnd: '£120 / quarter' },
        { type: 'Standalone return (books not kept by us)', lowEnd: 'from £90', highEnd: '£180 / quarter' },
        { type: 'Scheme review & advice', lowEnd: 'from £95', highEnd: 'one-off' },
      ],
      factorsAffectingPrice: [
        'Whether we already keep your books',
        'Number of sales/purchase transactions',
        'Scheme complexity (reverse charge, EC sales)',
      ],
      includes: ['Preparation, checking and digital filing', 'MTD compliance', 'HMRC correspondence'],
      excludes: ['VAT inspections and disputes', 'Bookkeeping itself (priced separately or as a bundle)'],
    },
    faq: [
      { question: 'What is Making Tax Digital?', answer: 'HMRC\'s programme requiring VAT-registered businesses to keep digital records and file returns through compatible software. It is now mandatory for virtually all VAT-registered businesses, and Income Tax Self Assessment follows from April 2026 for the self-employed over £50,000.' },
      { question: 'Could a different VAT scheme save me money?', answer: 'Sometimes — genuinely. Flat Rate suits some small service businesses; Cash Accounting helps businesses whose customers pay slowly. We model your actual figures rather than guessing, as part of the first quarter\'s work.' },
      { question: 'I am behind on VAT returns — can you fix it?', answer: 'Yes. Bring the records (or the shoebox) and we will prepare the outstanding returns, get them filed, and agree a payment plan with HMRC if needed. It is less painful than it feels right now.' },
      { question: 'Do I still need an accountant if you do my VAT?', answer: 'For year-end accounts and tax planning, usually yes — and we hand your accountant clean, reconciled records, which typically reduces their fee. Some clients\' accountants are happy for us to handle the whole compliance stack.' },
    ],
    relatedServices: ['bookkeeping', 'self-assessment', 'management-accounts'],
    heroImageAlt: 'MB Bookkeeping — Making Tax Digital compliant VAT returns',
    category: 'tax',
    metaDescription: 'VAT returns & Making Tax Digital in Yate & Bristol. Quarterly returns prepared from clean books, filed on time. Scheme advice included.',
    titleTemplate: 'VAT Returns & MTD Accounting Yate & Bristol | MB Bookkeeping',
  },

  {
    slug: 'self-assessment',
    name: 'Self Assessment Tax Returns',
    shortName: 'self assessment',
    city: 'bristol',
    tagline: 'Your tax return done properly, long before the January deadline.',
    intro: 'For sole traders, directors and landlords — accurate returns, every allowance claimed, filed well before the deadline.',
    longIntro:
      'The January 31st scramble is optional. We prepare Self Assessment returns for sole traders, company directors, landlords and anyone with tax to declare — from properly kept records, so every legitimate allowance and expense is claimed and nothing is estimated. Because we keep (or tidy) your books through the year, the return is largely assembled before Christmas, checked with you in plain English, and filed in good time. If you have missed previous years, we handle prior-year returns and negotiate with HMRC on your behalf.',
    // PITCH — unverified service (not on live site)
    whatWeDo: [
      'Self Assessment registration and UTR applications',
      'Annual tax returns for sole traders, directors and landlords',
      'Books brought up to date before preparation (or kept current all year)',
      'Every allowance and expense legitimately claimed',
      'Prior-year catch-up returns',
      'Payments-on-account explained and planned for',
    ],
    problems: [
      'A paper bag of receipts and a January deadline',
      'Not sure what can legally be claimed as an expense',
      'Penalties and interest from late filings',
      'Payments on account arriving as a shock each July',
      'Rental income and employment income tangled together',
    ],
    benefits: [
      'Filed early — no January stress, no penalties, no interest',
      'Tax bill known in advance, with payments-on-account planned',
      'Every legitimate allowance claimed — most first-time clients have been overpaying',
      'Plain-English walkthrough of the return before it goes in',
      'One fixed fee, quoted upfront',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We map your income sources — self-employment, employment, property, dividends.' },
      { title: 'Records gathered', description: 'A simple checklist of what we need — or we keep the books current all year so there is no gather.' },
      { title: 'Return prepared', description: 'Drafted from reconciled figures with a summary of allowances claimed.' },
      { title: 'Plain-English review', description: 'We walk you through the figures and the tax due before filing.' },
      { title: 'Filed & payment planned', description: 'Submitted, tax calculated, payments-on-account diarised.' },
      { title: 'Year-round', description: 'Mid-year check-ins stop surprises — you always know roughly what you owe.' },
    ],
    materials: [
      { manufacturer: 'HMRC', products: ['Self Assessment online'], notes: 'Filed under MTD ITSA rules where they apply.' },
      { manufacturer: 'Xero', products: ['Xero for sole traders'], notes: 'Light-touch bookkeeping that makes the return near-automatic.' },
      { manufacturer: 'FreeAgent', products: ['FreeAgent'], notes: 'Popular with contractors and freelancers — free with many bank accounts.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Simple return (employment + one income)', lowEnd: 'from £120', highEnd: '£180' },
        { type: 'Sole trader return (books included)', lowEnd: 'from £180', highEnd: '£350' },
        { type: 'Landlord return (1–3 properties)', lowEnd: 'from £180', highEnd: '£350' },
        { type: 'Prior-year catch-up (per year)', lowEnd: 'from £100', highEnd: 'quoted' },
      ],
      factorsAffectingPrice: [
        'Number of income sources',
        'State of the records',
        'Number of properties',
        'Whether books need catching up first',
      ],
      includes: ['Preparation, filing and HMRC correspondence', 'Allowance maximisation review', 'Plain-English walkthrough'],
      excludes: ['Tax investigation cover (available separately)', 'Company corporation tax returns'],
    },
    faq: [
      { question: 'I have missed a few years — how bad is it?', answer: 'Common, fixable, and best faced sooner rather than later. We prepare the outstanding returns in date order, file them, and agree time-to-pay with HMRC where the tax is a stretch. Penalties for unprompted disclosure are far gentler than waiting to be caught.' },
      { question: 'Do directors need a Self Assessment return?', answer: 'Usually yes — directors\' salary, dividends and benefits all need declaring even when PAYE covers the basics. We prepare directors\' returns as routine.' },
      { question: 'What expenses can I claim?', answer: 'Whatever is wholly and exclusively for the business — with sensible records. The free consultation includes a claims review; most sole traders have been leaving money with HMRC.' },
      { question: 'What are payments on account?', answer: 'Advance payments towards next year\'s tax, due 31 January and 31 July. They catch new sole traders by surprise. We forecast them so they are planned, not a shock.' },
      { question: 'When is the deadline?', answer: 'Online filings are due 31 January for the previous tax year — but our working deadline is Christmas, so your return is filed, checked and paid-for in your head long before the real one.' },
      { question: 'Is Making Tax Digital going to change this?', answer: 'From April 2026, self-employed people and landlords with income over £50,000 must keep digital records and file quarterly via recognised software. Everything we set up is MTD-ready, so the change is administrative, not painful.' },
    ],
    relatedServices: ['bookkeeping', 'vat-returns', 'payroll'],
    heroImageAlt: 'MB Bookkeeping — Self Assessment returns for Bristol sole traders',
    category: 'tax',
    metaDescription: 'Self Assessment tax return help in Yate & Bristol. Sole traders, directors and landlords — filed early, allowances claimed, working with your accountant. Fixed fee.',
    titleTemplate: 'Self Assessment Tax Return Help Yate & Bristol | MB Bookkeeping',
  },

  {
    slug: 'bank-reconciliation',
    name: 'Bank Reconciliation',
    shortName: 'bank recs',
    city: 'bristol',
    tagline: 'Your books and your bank, agreeing, every single month.',
    intro: 'Regular reconciliations that align your records with your statements — catching errors and discrepancies before they cost you.',
    longIntro:
      'We perform regular bank reconciliations to align your internal records with your bank statements. This process identifies discrepancies early, prevents fraud, and guarantees accuracy — with reliable reconciliations you always have a true picture of your financial health and business performance. Duplicate payments, missed invoices, bank errors and forgotten subscriptions all surface in a proper reconciliation; left alone they silently drain the business. We reconcile bank accounts, credit cards, merchant accounts (SumUp, iZettle, Stripe) and loan balances, weekly or monthly depending on volume.',
    // VERIFIED — "Bank Reconciliations" is a live-site service; copy ported and expanded.
    whatWeDo: [
      'Current account, savings and credit card reconciliations',
      'Merchant and payment-platform reconciliation (SumUp, Stripe, iZettle)',
      'Loan and hire purchase balance tracking',
      'Discrepancy investigation and resolution',
      'Duplicate and fraudulent transaction spotting',
      'Monthly reconciliation summary with anything flagged',
    ],
    problems: [
      'Bank balance and book balance that never match',
      'Old unexplained differences pushed from month to month',
      'Duplicate supplier payments discovered at year-end',
      'Card takings that do not reach the bank statement',
      'Subscriptions still running for software you cancelled',
    ],
    benefits: [
      'A book balance you can actually trust at any moment',
      'Errors and duplicates caught within weeks, not at year-end',
      'Fraud and unusual activity flagged early',
      'Clean reconciled records make VAT and year-end dramatically cheaper',
      'Cash flow forecasts built on real numbers',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We list every account, card and payment platform the business runs.' },
      { title: 'Backlog cleared', description: 'Old unreconciled items investigated and cleared — the "difference" account emptied.' },
      { title: 'Rhythm set', description: 'Weekly or monthly reconciliation, matching your transaction volume.' },
      { title: 'Reconcile & flag', description: 'Every account matched; anything odd listed for your decision.' },
      { title: 'Monthly summary', description: 'One line per account: reconciled, difference £0.00 — or exactly what is outstanding and why.' },
      { title: 'Ongoing', description: 'Same time every period. Differences never roll forward.' },
    ],
    materials: [
      { manufacturer: 'Xero', products: ['Bank feeds & rules'], notes: 'Automated feeds with human-checked matching.' },
      { manufacturer: 'QuickBooks', products: ['Bank connections'], notes: 'Live feeds reconciled weekly.' },
      { manufacturer: 'Sage', products: ['Bank reconciliation module'], notes: 'For established Sage 50 users.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Included with monthly bookkeeping', lowEnd: '£0', highEnd: '(bundled)' },
        { type: 'Standalone monthly reconciliation', lowEnd: 'from £45', highEnd: '£95 / month' },
        { type: 'Catch-up of a backlog', lowEnd: 'from £150', highEnd: 'quoted' },
      ],
      factorsAffectingPrice: ['Number of accounts and platforms', 'Transaction volume', 'Size of any existing backlog'],
      includes: ['All accounts reconciled', 'Discrepancy investigation', 'Monthly summary'],
      excludes: ['Debt collection', 'Cash-flow lending decisions'],
    },
    faq: [
      { question: 'My books and bank never match — can that be fixed?', answer: 'Almost always. Old differences are just unreconciled items compounding. We clear the backlog once, then keep every account agreed monthly so it never rebuilds.' },
      { question: 'How often should reconciliation happen?', answer: 'Monthly for most businesses, weekly for retail, hospitality or anyone taking card payments. High volume hides errors fast.' },
      { question: 'Do you reconcile card readers like SumUp?', answer: 'Yes — card settlements, fees and refunds reconciled against both the reader report and the bank credit. That is where most unexplained differences live.' },
      { question: 'Is this included in your bookkeeping service?', answer: 'Yes — reconciliation is part of proper bookkeeping, not an extra. The standalone price exists for businesses whose books are kept elsewhere but want the accounts verified.' },
      { question: 'What if you find a duplicate payment?', answer: 'We flag it with the evidence, and you chase the refund — or we draft the email for you. Most clients recover more than the service costs in year one.' },
      { question: 'Can you spot fraud?', answer: 'Regular reconciliation is the single best early-warning system a small business has — unfamiliar transactions, changed bank details and duplicate invoices all surface quickly.' },
    ],
    relatedServices: ['bookkeeping', 'management-accounts', 'vat-returns'],
    heroImageAlt: 'MB Bookkeeping — bank reconciliations for Bristol businesses',
    category: 'bookkeeping',
    metaDescription: 'Bank reconciliations in Yate & Bristol. Books matched to bank, card and merchant accounts — discrepancies caught early, monthly summary.',
    titleTemplate: 'Bank Reconciliation Yate & Bristol | MB Bookkeeping',
  },

  {
    slug: 'management-accounts',
    name: 'Regular Financial Reports',
    shortName: 'management accounts',
    city: 'bristol',
    tagline: 'Know your numbers monthly — profit, cash flow, and what to do next.',
    intro: 'Clear, accurate monthly reports — profit and loss, cash flow and the numbers that drive confident decisions.',
    longIntro:
      'Our regular financial reports provide detailed insights into your business. From cash flow to profit and loss, we deliver clear, accurate updates that empower you to make confident decisions and keep the business on track for sustainable growth. This is not a spreadsheet dump: each month you get a one-page summary in plain English — what you earned, what you spent, what you are owed, what you owe, and the two or three numbers worth acting on. For growing Bristol businesses this is the difference between steering and guessing.',
    // VERIFIED — "Regular Financial Reports" is a live-site service; copy ported and expanded.
    whatWeDo: [
      'Monthly or quarterly management accounts',
      'Profit & loss, balance sheet and cash flow reporting',
      'Debtor and creditor summaries with chase lists',
      'Budget vs actual comparison as the business grows',
      'KPI tracking — gross margin, overheads, breakeven',
      'A one-page plain-English summary every month',
    ],
    problems: [
      'Running the business from the bank balance alone',
      'Profitable on paper but always short of cash',
      'Customers owing money nobody is chasing',
      'No idea whether this month was better than last',
      'Big decisions made on gut feel',
    ],
    benefits: [
      'Decisions made on real numbers, monthly',
      'Cash crunches seen two months ahead',
      'Overdue invoices surfaced and chased systematically',
      'Margins by product/service line, not just in total',
      'Your accountant\'s year-end bill gets smaller every time',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We identify the numbers that actually drive your business — every business has three or four that matter.' },
      { title: 'Baseline set', description: 'Current position established, prior year loaded for comparison.' },
      { title: 'Monthly pack', description: 'P&L, cash flow, debtors/creditors and your KPIs — typically 3-4 pages, never 40.' },
      { title: 'Review call', description: '15 minutes a month walking through what changed and what to do about it.' },
      { title: 'Quarterly deep-dive', description: 'Trends, budget vs actual, and a fresh look at the KPIs as the business evolves.' },
      { title: 'Year-end handover', description: 'Clean, reconciled management records to your accountant — their job shrinks, so does their fee.' },
    ],
    materials: [
      { manufacturer: 'Xero', products: ['Xero reports'], notes: 'Standard and custom reports straight from the ledger.' },
      { manufacturer: 'QuickBooks', products: ['QBO reporting'], notes: 'Dashboards plus our plain-English layer.' },
      { manufacturer: 'Excel', products: ['Bespoke reporting packs'], notes: 'For businesses not yet on the cloud — same pack, from your spreadsheet.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Monthly pack + call', lowEnd: 'from £80', highEnd: '£180 / month' },
        { type: 'Quarterly pack', lowEnd: 'from £120', highEnd: '£260 / quarter' },
        { type: 'Budgeting & forecasting project', lowEnd: 'from £250', highEnd: 'quoted' },
      ],
      factorsAffectingPrice: ['Whether books are kept by us', 'Reporting frequency', 'Number of KPIs and cost centres'],
      includes: ['Report pack', 'Review call', 'Year-end handover to your accountant'],
      excludes: ['Audit', 'Tax planning (we coordinate with your accountant)'],
    },
    faq: [
      { question: 'I am a small business — do I really need management accounts?', answer: 'If you make decisions about hiring, pricing or spending, you need the numbers those decisions depend on. Our smallest client pack is three pages and takes the guesswork out of exactly that.' },
      { question: 'What is the difference between management accounts and year-end accounts?', answer: 'Year-end accounts look backward, for HMRC and Companies House. Management accounts look forward, for you — monthly, in time to act, in plain English.' },
      { question: 'Will this replace my accountant?', answer: 'No — it complements them. Your accountant handles year-end and tax; we feed them clean monthly numbers. Most accountants charge less when the records arrive tidy and reconciled.' },
      { question: 'What KPIs will you track?', answer: 'The ones that move your business — usually gross margin, overhead ratio, debtor days and cash runway. We agree them in the first month and revisit quarterly.' },
      { question: 'How long does the monthly call take?', answer: '15 minutes. Enough to cover what changed and the two or three actions worth taking. If it needs longer, we schedule it — the call is not a timer.' },
      { question: 'Can you help me forecast cash flow?', answer: 'Yes — a 13-week cash flow is one of the most useful things a small business can have, and a natural part of the monthly pack once the data supports it.' },
    ],
    relatedServices: ['bookkeeping', 'bank-reconciliation', 'self-assessment'],
    heroImageAlt: 'MB Bookkeeping — monthly management accounts for a Bristol business',
    category: 'reporting',
    metaDescription: 'Regular financial reports for Yate & Bristol businesses. Monthly profit & loss, cash flow and KPIs in plain English. 15-minute review calls.',
    titleTemplate: 'Management Accounts Yate & Bristol | MB Bookkeeping',
  },

  {
    slug: 'cloud-accounting',
    name: 'Cloud Accounting Setup',
    shortName: 'cloud setup',
    city: 'bristol',
    tagline: 'Xero, QuickBooks or Sage — set up properly, from day one.',
    intro: 'Migration to modern cloud software with clean opening balances, bank feeds and rules that keep the books half-done automatically.',
    longIntro:
      'Modern, secure and accessible bookkeeping starts with the right software, set up properly. Moving from spreadsheets or shoebox receipts to Xero, QuickBooks or Sage transforms how a small business runs: bank feeds fetch transactions automatically, invoices go out from your phone, and Making Tax Digital compliance arrives as a by-product. The difference between cloud software that helps and cloud software that frustrates is almost always the setup — clean opening balances, the right chart of accounts, bank rules that match how you actually trade. We migrate Bristol businesses onto cloud accounting with data intact and the owner confident by the end of the first month.',
    // PITCH — unverified service (not on live site)
    whatWeDo: [
      'Software selection advice — Xero vs QuickBooks vs Sage for your business',
      'Full migration: chart of accounts, opening balances, contacts, history',
      'Bank feed connections for every account',
      'Automated rules that code the repetitive transactions',
      'Training for you and your team — plain English, on your data',
      'App stack advice: receipts, invoicing, POS and payroll add-ons',
    ],
    problems: [
      'A spreadsheet system only one person understands',
      'Software bought years ago and barely used',
      'Bank feeds disconnected and nobody noticed',
      'A chart of accounts with 200 categories and no logic',
      'MTD deadlines arriving with no compliant software in place',
    ],
    benefits: [
      'Books accessible anywhere, from any device',
      'Bank feeds do the data entry you used to do by hand',
      'MTD compliance as a by-product of good setup',
      'Live cash position on your phone',
      'Your bookkeeping monthly fee drops once the system works properly',
    ],
    processSteps: [
      { title: 'Free consultation', description: 'We assess your current setup, volumes and what you actually need — sometimes the answer is "stay where you are".' },
      { title: 'Software chosen', description: 'Recommendation with reasons and monthly costs, no commission games.' },
      { title: 'Migration', description: 'Opening balances, contacts and history moved; trial balance reconciled to the old system.' },
      { title: 'Automation built', description: 'Bank rules, recurring invoices, supplier defaults — the software starts doing the work.' },
      { title: 'Training', description: 'A working session on your own data, plus cheat-sheets you keep.' },
      { title: 'First month support', description: 'We check the first month together and fix anything awkward while it is cheap to fix.' },
    ],
    materials: [
      { manufacturer: 'Xero', products: ['Xero plans', 'Hubdoc'], notes: 'Our recommendation for most small Bristol businesses.' },
      { manufacturer: 'QuickBooks', products: ['QuickBooks Online', 'QBO Self-Employed'], notes: 'Strong for contractors and the self-employed.' },
      { manufacturer: 'Sage', products: ['Sage Business Cloud'], notes: 'For businesses already invested in the Sage ecosystem.' },
    ],
    costGuide: {
      perSquareMetre: '',
      perPropertyType: [
        { type: 'Setup & migration', lowEnd: 'from £180', highEnd: '£450 one-off' },
        { type: 'Training session (2 hours)', lowEnd: 'from £95', highEnd: 'per session' },
        { type: 'Ongoing support', lowEnd: 'from £25', highEnd: '£50 / month' },
      ],
      factorsAffectingPrice: ['Years of history to migrate', 'Number of bank accounts', 'Complexity of the old system'],
      includes: ['Full migration with reconciled balances', 'Bank rules and automation', 'Training + cheat sheets'],
      excludes: ['Software subscription (paid direct to the vendor)', 'Historic data beyond 2 years (archived)'],
    },
    faq: [
      { question: 'Which is best — Xero, QuickBooks or Sage?', answer: 'Depends on the business: Xero for most SMEs, QuickBooks for contractors and self-employed, Sage where there is an existing investment or payroll tie-in. We model your volumes and recommend with reasons — and we hold no commission from any of them.' },
      { question: 'Will I lose my historical data?', answer: 'We migrate at least two years of transaction history plus all contacts and opening balances. Older data is archived and retrievable — nothing is destroyed.' },
      { question: 'How long does a migration take?', answer: 'Most small businesses are live within two weeks, including training. Year-end timing is avoided — we usually cut over at a quarter or year boundary.' },
      { question: 'Can you train my admin person?', answer: 'Yes — the training session is on your own data, and the cheat-sheets stay in the office. Follow-up sessions are priced separately and rarely needed.' },
      { question: 'What does the software itself cost?', answer: 'Typically £12–£35/month depending on the product and tier. We set expectations before you buy — the subscription is paid to the vendor, not to us.' },
      { question: 'Does this make me MTD compliant?', answer: 'Yes — MTD requires digital records and compatible software, which is exactly what a proper cloud setup delivers. VAT returns then file directly from the system.' },
    ],
    relatedServices: ['bookkeeping', 'vat-returns', 'management-accounts'],
    heroImageAlt: 'MB Bookkeeping — cloud accounting setup in Bristol',
    category: 'cloud',
    metaDescription: 'Cloud accounting setup in Yate & Bristol. Xero, QuickBooks and Sage migration, bank feeds, automation and training. MTD-ready from day one.',
    titleTemplate: 'Cloud Accounting Setup Yate & Bristol | MB Bookkeeping',
  },
];

// ── helpers (same API the template expects) ──

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export type ServiceCategory =
  | 'bookkeeping' | 'payroll' | 'tax' | 'cloud' | 'reporting';

export const getServicesByCategory = (cat: ServiceCategory): Service[] =>
  SERVICES.filter((s) => s.category === cat);

export const getRelatedServices = (slug: string): Service[] => {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
};

export const serviceHook = (service: Service): string =>
  service.titleTemplate.split('|').pop()!.trim();

/**
 * Trust chip for the hero on service pages. MB's verifiable claim:
 * the first consultation is free and there is no lock-in.
 */
export const warrantyBadge = (): string => 'Free consultation · no obligation';

/**
 * Tagline for the city the page is on. Kept for template compat.
 */
export const getTagline = (service: Service, city: string): string =>
  city === 'bath' && service.bathTagline ? service.bathTagline : service.tagline;