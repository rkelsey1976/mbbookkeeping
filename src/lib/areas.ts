// Areas served by MB Bookkeeping & Payroll Solutions.
// PITCH MOCK data layer — Bristol city + South Gloucestershire ring, the
// Bristol-first catchment: Bristol city areas lead, the office sits in
// Yate (BS37) on the North-East edge. 20 areas chosen to cover the whole
// of Bristol without thinning each page's copy.
//
// Every intro MUST reference at least one entry from that area's landmarks[]
// (the landmark-reference rule from the KD playbook).

export type Area = {
  slug: string;
  name: string;
  postcode: string;
  type: string;         // city | town | suburb
  region: string;       // grouping for AreaCoverage
  blurb: string;
  intro: string;
  longIntro: string;
  landmarks: string[];
  propertyTypes: string[];
  nearbyAreas: string[];
  tier: 'primary' | 'secondary';
  /** Local project/work references shown on the area hub. */
  nearbyProjects?: string[];
  costVariation?: string;
  metaDescription?: string;
};

export const AREAS: Area[] = [
  {
    slug: 'clifton',
    name: 'Clifton',
    postcode: 'BS8',
    type: 'suburb',
    region: 'Bristol City',
    blurb: 'Consultancies, creative agencies and professional practices around the Suspension Bridge.',
    intro: 'Clifton\'s consultancies and creative agencies — cloud-first bookkeeping.',
    longIntro:
      'Clifton is Bristol\'s professional heartland: creative agencies around Whiteladies Road, consultancies and financial firms in the Georgian terraces, and the steady flow of limited-company professionals who work globally and live locally. Our Clifton clients want cloud-first, low-touch bookkeeping — everything in Xero, receipts photographed from the phone, a monthly call that lands in the diary and a report they actually read.',
    landmarks: ['Clifton Suspension Bridge', 'Whiteladies Road', 'Clifton Village', 'Clifton Downs'],
    propertyTypes: ['Creative agencies', 'Consultancies and professional practices', 'Georgian-period office conversions'],
    nearbyAreas: ['redland', 'cotham', 'westbury-on-trym'],
    tier: 'primary',
    costVariation: 'Clifton clients typically take fuller cloud-accounting packages with lower hands-on time — pricing reflects the light-touch model.',
  },
  {
    slug: 'redland',
    name: 'Redland & Cotham',
    postcode: 'BS6',
    type: 'suburb',
    region: 'Bristol City',
    blurb: 'Independent professionals and small practices between the Downs and the city.',
    intro: 'Redland and Cotham professionals — Self Assessment and tidy cloud books.',
    longIntro:
      'Redland and Cotham are full of professionals whose tax affairs outgrew "a spreadsheet and a January panic" — consultants with multiple income streams, landlords with a property or three, and small practices that need a monthly ledger without the fuss. The short train hop from Yate makes the quarterly in-person easy, though most of it runs happily in the cloud.',
    landmarks: ['Redland Green', 'Cotham Hill', 'Redland railway station', 'Bristol Zoo Gardens site'],
    propertyTypes: ['Professional home offices', 'Small practice offices', 'Buy-to-let portfolios'],
    nearbyAreas: ['clifton', 'bishopston', 'stoke-bishop'],
    tier: 'primary',
  },
  {
    slug: 'bishopston',
    name: 'Bishopston & Gloucester Road',
    postcode: 'BS7',
    type: 'suburb',
    region: 'Bristol City',
    blurb: 'Gloucester Road — the most independent high street in Britain.',
    intro: 'Gloucester Road independents — from cafés to record shops, books that keep up.',
    longIntro:
      'Gloucester Road famously claims the longest stretch of independent shops in the country, and those businesses run on passion and long hours — not bookkeeping. Card payments, festival weekends and seasonal swings make weekly reconciliation genuinely valuable here: takings matched to the bank, suppliers paid on time, and a monthly report that shows which lines actually make money.',
    landmarks: ['Gloucester Road', 'St Andrew\'s Park', 'Bristol North Swimming Pool', 'Arches at Montpelier station'],
    propertyTypes: ['Cafés, bars and takeaways', 'Independent retail', 'Creative workshops'],
    nearbyAreas: ['redland', 'st-george', 'horfield'],
    tier: 'primary',
    costVariation: 'Hospitality and retail clients on Gloucester Road usually take weekly bookkeeping — the rhythm follows the card takings.',
  },
  {
    slug: 'downend',
    name: 'Downend',
    postcode: 'BS16',
    type: 'suburb',
    region: 'North Bristol',
    blurb: 'Page Park, the High Street, and a strong independent business strip.',
    intro: 'Downend\'s High Street independents — bookkeeping that fits a busy local patch.',
    longIntro:
      'Downend\'s High Street and Page Park anchor a business community of cafés, salons, trades and professional services that has stayed genuinely local even as Bristol has grown around it. Our Downend clients are typically owner-operators — one or two staff, real footfall, and no time for admin. Weekly bookkeeping, quarterly VAT and an annual Self Assessment, all handled from Yate without the business lifting a finger.',
    landmarks: ['Page Park', 'Downend High Street', 'Vernon Roundabout', 'Christ Church'],
    propertyTypes: ['Independent cafés and salons', 'Trade businesses', 'Home-based businesses'],
    nearbyAreas: ['mangotsfield', 'kingswood', 'fishponds'],
    tier: 'primary',
  },
  {
    slug: 'filton',
    name: 'Filton',
    postcode: 'BS34',
    type: 'suburb',
    region: 'North Bristol',
    blurb: 'Aerospace country — engineering suppliers and technical SMEs.',
    intro: 'Filton\'s engineering and technical SMEs — precise books for precise businesses.',
    longIntro:
      'Filton\'s economy is built on aerospace — Airbus, Rolls-Royce and GKN are the giants, but the supply chain of precision engineering and technical SMEs around Filton Airfield and the business parks is where we fit. These firms need disciplined bookkeeping: job costing, export paperwork, and monthly accounts their accountants can rely on. It is detailed work, and that suits us fine.',
    landmarks: ['Filton Airfield', 'Aerospace Bristol (Concorde)', 'Abbey Wood retail park', 'University of the West of England'],
    propertyTypes: ['Engineering SMEs', 'Technical consultancies', 'Contract manufacturers'],
    nearbyAreas: ['stoke-gifford', 'bradley-stoke', 'patchway'],
    tier: 'primary',
  },
  {
    slug: 'stoke-gifford',
    name: 'Stoke Gifford',
    postcode: 'BS34',
    type: 'suburb',
    region: 'North Bristol',
    blurb: 'From Little Stoke to the Parkway station — a young, growing business base.',
    intro: 'Stoke Gifford and Parkway — startups and trades serving north Bristol.',
    longIntro:
      'Stoke Gifford sits between UWE, Bristol Parkway station and the growing Harry Stoke developments — a young business base of trades, delivery firms and startups. Many are first-time company owners who have just outgrown spreadsheets, which makes the cloud-accounting setup and a simple monthly rhythm exactly the right service.',
    landmarks: ['Bristol Parkway station', 'University of the West of England', 'Little Stoke Park', 'Harry Stoke new neighbourhood'],
    propertyTypes: ['Startups and home offices', 'Trade businesses', 'Small e-commerce firms'],
    nearbyAreas: ['filton', 'bradley-stoke', 'patchway'],
    tier: 'primary',
  },
  {
    slug: 'patchway',
    name: 'Patchway & Charlton Hayes',
    postcode: 'BS34',
    type: 'suburb',
    region: 'North Bristol',
    blurb: 'The new quarter at Charlton Hayes plus Patchway\'s established firms.',
    intro: 'Patchway and Charlton Hayes — new cafés, trades and small offices.',
    longIntro:
      'Charlton Hayes is one of the newest neighbourhoods in South Gloucestershire, and its café and retail strip is growing every year alongside Patchway\'s established firms and the Cribbs Causeway economy on the doorstep. Young businesses here need the basics done brilliantly: books from day one, VAT registered at the right moment, and payroll ready the moment the first employee arrives.',
    landmarks: ['Charlton Hayes village square', 'Cribbs Causeway', 'Patchway railway station', 'Scott Park'],
    propertyTypes: ['New cafés and retail units', 'Trade businesses', 'Small offices'],
    nearbyAreas: ['filton', 'stoke-gifford', 'bradley-stoke'],
    tier: 'primary',
  },
  {
    slug: 'kingswood',
    name: 'Kingswood',
    postcode: 'BS15',
    type: 'suburb',
    region: 'East Bristol',
    blurb: 'A high street with its own identity, just over the Bristol boundary.',
    intro: 'Kingswood businesses — bookkeeping and payroll from a South Glos neighbour.',
    longIntro:
      'Kingswood has the feel of a town that has always run its own businesses — the High Street, the regenerating industrial units, and a steady supply of new independent ventures. Being just over the boundary in South Gloucestershire, we know the patch well: hospitality payroll, retail bookkeeping, and the trade businesses that work out of the old industrial estates.',
    landmarks: ['Kingswood High Street', 'Kingswood Heritage Museum', 'Trobble\'s Mill', 'St Mary\'s Church'],
    propertyTypes: ['Hospitality venues', 'Independent shops', 'Trade and light-industrial firms'],
    nearbyAreas: ['downend', 'mangotsfield', 'st-george'],
    tier: 'primary',
  },
  {
    slug: 'fishponds',
    name: 'Fishponds',
    postcode: 'BS16',
    type: 'suburb',
    region: 'East Bristol',
    blurb: 'High Street businesses and a growing student economy.',
    intro: 'Fishponds High Street — bookkeeping for shops, takeaways and trades.',
    longIntro:
      'Fishponds\' High Street serves a proper mixed economy — long-standing shops, food businesses, and the student market that grows every year with UWE nearby. Our Fishponds work is classic small-business bookkeeping: ledgers, VAT with the hospitality and retail rhythms, and payroll for the businesses that employ staff across multiple sites.',
    landmarks: ['Fishponds High Street', 'Oldbury Court Estate', 'Vassalls Park', 'Fishponds railway station site'],
    propertyTypes: ['Shops and takeaways', 'Hospitality venues', 'Trade businesses'],
    nearbyAreas: ['downend', 'mangotsfield', 'st-george'],
    tier: 'primary',
  },
  {
    slug: 'yate',
    name: 'Yate',
    postcode: 'BS37',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'Where our office is — from Yate shopping centre to the industrial estate.',
    intro: 'Bookkeeping and payroll for Yate businesses, from our office on Reed Road.',
    longIntro:
      'MB Bookkeeping & Payroll Solutions has its office on Reed Road in Yate, and this is the community right on our doorstep. From the shops around Yate Shopping Centre to the trades and light industry off Station Road, Yate businesses are exactly the size we are built for — established, busy, and without an in-house finance person. We are five minutes away for a face-to-face meeting, and most of our Yate clients see us monthly to walk through their numbers over a coffee.',
    landmarks: ['Yate Shopping Centre', 'Yate train station', 'Station Road industrial estate', 'Kingsgate Park'],
    propertyTypes: ['High-street shops and cafés', 'Trade and construction firms', 'Professional home offices', 'Light industrial units'],
    nearbyAreas: ['chipping-sodbury', 'bradley-stoke', 'winterbourne', 'frampton-cotterell'],
    tier: 'primary',
    metaDescription: 'Bookkeeping & payroll in Yate BS37. Our office is on Reed Road — ledgers, VAT, payroll and management accounts for local businesses. Free consultation.',
  },
  {
    slug: 'chipping-sodbury',
    name: 'Chipping Sodbury',
    postcode: 'BS37',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'Independent High Street businesses, a mile from our office.',
    intro: 'Chipping Sodbury\'s independents — bookkeeping that keeps pace with a busy High Street.',
    longIntro:
      'Chipping Sodbury\'s High Street is one of the best-preserved market town streets in the West Country, and its independent shops, cafés and professional practices run on tight margins and long hours. We are barely a mile away on Reed Road, which makes us effectively the local bookkeeper for Sodbury businesses: payroll for High Street staff, VAT returns for hospitality, and management accounts that show the owner exactly which days and lines actually pay.',
    landmarks: ['Chipping Sodbury High Street', 'The Horseshoe', 'Clock Tower', 'Broad Street'],
    propertyTypes: ['Independent shops and cafés', 'Professional practices', 'Period market-town premises'],
    nearbyAreas: ['yate', 'bradley-stoke', 'winterbourne'],
    tier: 'primary',
    metaDescription: 'Bookkeeping & payroll for Chipping Sodbury businesses. High Street shops, cafés and practices — VAT, payroll and monthly accounts.',
  },
  {
    slug: 'bradley-stoke',
    name: 'Bradley Stoke',
    postcode: 'BS32',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'The largest new town in Europe — consultants, contractors and home offices.',
    intro: 'Bradley Stoke\'s professional and home-based businesses — cloud bookkeeping that fits around the day job.',
    longIntro:
      'Bradley Stoke grew into one of the largest new towns in Europe, and its business base reflects that: consultants, contractors, limited-company professionals and a wave of home-based businesses around the Willow Brook centre and the Aztec West edge. These are exactly the clients we set up on cloud accounting — Xero or QuickBooks, bank feeds, automated rules — so the books mostly run themselves and our monthly session is a short review, not a data-entry job.',
    landmarks: ['Aztec West business park', 'Willow Brook Centre', 'Savages Wood', 'Three Brooks nature reserve'],
    propertyTypes: ['Home offices', 'Consultancy businesses', 'Small professional offices'],
    nearbyAreas: ['yate', 'filton', 'stoke-gifford'],
    tier: 'primary',
    metaDescription: 'Bookkeeping & payroll for Bradley Stoke BS32 businesses. Consultants, contractors and home offices — cloud accounting, VAT and self assessment.',
  },
  {
    slug: 'winterbourne',
    name: 'Winterbourne',
    postcode: 'BS36',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'Village-trading heart of the Frome valley — trades, salons and family firms.',
    intro: 'Bookkeeping for Winterbourne and Frampton Cotterell family businesses.',
    longIntro:
      'Winterbourne and its neighbour Frampton Cotterell run as one community along the Bristol Road, full of family-run trades, salons and small firms that have traded for years without formal books. We bring order without changing how they work — receipts in, ledgers tidy, VAT filed — and because we are just down the A432 in Yate, the monthly visit is easy and the relationship stays personal.',
    landmarks: ['Winterbourne Medieval Barn', 'Frome Valley Walkway', 'The White Horse', 'Frampton Cotterell village centre'],
    propertyTypes: ['Village high street businesses', 'Trade and construction firms', 'Family-run shops'],
    nearbyAreas: ['yate', 'frampton-cotterell', 'mangotsfield'],
    tier: 'primary',
    metaDescription: 'Bookkeeping & payroll for Winterbourne BS36 and Frampton Cotterell. Family firms, trades and salons — books, VAT and payroll sorted.',
  },
  {
    slug: 'frampton-cotterell',
    name: 'Frampton Cotterell',
    postcode: 'BS36',
    type: 'village',
    region: 'South Gloucestershire',
    blurb: 'A proper village with a proper business community.',
    intro: 'Frampton Cotterell trades and village businesses, looked after from next door in Yate.',
    longIntro:
      'Frampton Cotterell keeps a genuine village business community — builders, electricians, pubs, salons and farm-adjacent enterprises around the Brockeridge. Being the next village to our Reed Road office, we treat Frampton as home turf: same-day document collection, a monthly face-to-face, and books that stay clean between visits.',
    landmarks: ['The Royal Oak', 'Brockeridge Common', 'St Peter\'s Church', 'Frome Valley Walkway'],
    propertyTypes: ['Village pubs and shops', 'Trade businesses', 'Rural and equestrian enterprises'],
    nearbyAreas: ['winterbourne', 'yate', 'mangotsfield'],
    tier: 'primary',
  },
  {
    slug: 'mangotsfield',
    name: 'Mangotsfield & Emersons Green',
    postcode: 'BS16',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'From the old village to the Emersons Green retail park — a fast-growing patch.',
    intro: 'Mangotsfield and Emersons Green businesses — from village salons to new retail units.',
    longIntro:
      'Mangotsfield\'s old village and Emersons Green\'s retail park represent two ends of the same patch: long-standing family businesses side by side with new ventures serving the growing housing estates. We look after both — payroll for the care and hospitality employers, bookkeeping for the trades working across Bristol, and VAT for the expanding retail and food businesses around the Emersons Green centre.',
    landmarks: ['Emersons Green retail park', 'Mangotsfield United FC', 'Rodway Hill', 'Mangotsfield village centre'],
    propertyTypes: ['Retail and food businesses', 'Care sector employers', 'Trade and construction firms'],
    nearbyAreas: ['downend', 'winterbourne', 'kingswood'],
    tier: 'primary',
  },
  {
    slug: 'thornbury',
    name: 'Thornbury',
    postcode: 'BS35',
    type: 'town',
    region: 'South Gloucestershire',
    blurb: 'A market town with a castle, a High Street, and businesses that plan long-term.',
    intro: 'Thornbury businesses get proper management accounts — market-town firms that plan ahead.',
    longIntro:
      'Thornbury\'s High Street and its castle anchor a business community that skews professional: solicitors, financial advisers, farm-adjacent enterprises and quality independent retail. These are firms that want more than a shoebox service — monthly management accounts, VAT with actual planning behind it, and payroll run properly for their staff. Thornbury is one of our furthest regular patches, and the monthly visit is always worth the drive.',
    landmarks: ['Thornbury Castle', 'St Mary Street', 'The Plain', 'Mundy Playing Fields'],
    propertyTypes: ['Professional practices', 'Quality independent retail', 'Farm-adjacent enterprises'],
    nearbyAreas: ['yate', 'chipping-sodbury', 'bradley-stoke'],
    tier: 'primary',
    costVariation: 'Thornbury firms often take fuller management-account packages — pricing shifts toward the monthly pack rather than basic bookkeeping.',
  },
  {
    slug: 'portishead',
    name: 'Portishead',
    postcode: 'BS20',
    type: 'town',
    region: 'North Somerset',
    blurb: 'A marina town of professionals, marine trades and home offices.',
    intro: 'Portishead\'s professionals and marine trades — bookkeeping across the bridge.',
    longIntro:
      'Portishead has grown from dock town to one of the most desirable towns on the North Somerset coast, with a business base of consultancies, marine services, and home-based professionals who chose the sea view over the city commute. We already serve clients across North Somerset from Yate — the M4/M5 links make it an easy run — and the cloud-first model means the marina is just a meeting spot.',
    landmarks: ['Portishead Marina', 'Portishead Pier and lighthouse', 'Lake Grounds', 'Port Marine'],
    propertyTypes: ['Professional home offices', 'Marine and leisure trades', 'Consultancy businesses'],
    nearbyAreas: ['nailsea', 'clevedon', 'clifton'],
    tier: 'primary',
  },
  {
    slug: 'nailsea',
    name: 'Nailsea',
    postcode: 'BS48',
    type: 'town',
    region: 'North Somerset',
    blurb: 'A commuter town with a strong independent shopping quarter.',
    intro: 'Nailsea businesses — bookkeeping and payroll for the High Street and beyond.',
    longIntro:
      'Nailsea\'s Crown Glass shopping quarter and its established trading estates give the town a balanced business base — retail, trades and professional services. Nailsea clients tend to want the full package: books, VAT and payroll handled together, with one monthly call covering the lot. That bundled rhythm is exactly how we price, so it works cleanly.',
    landmarks: ['Nailsea High Street', 'Tithe Barn', 'Nailsea & Backwell railway station', 'Golden Valley'],
    propertyTypes: ['Independent retail', 'Trade businesses', 'Professional practices'],
    nearbyAreas: ['portishead', 'clevedon', 'backwell'],
    tier: 'primary',
  },
  {
    slug: 'clevedon',
    name: 'Clevedon',
    postcode: 'BS21',
    type: 'town',
    region: 'North Somerset',
    blurb: 'Victorian seaside town, working pier, and a thriving visitor economy.',
    intro: 'Clevedon hospitality and visitor businesses — payroll and VAT with seasonal rhythm.',
    longIntro:
      'Clevedon\'s pier and seafront draw visitors year-round, and its hospitality businesses live by the seasons — busy summers, quieter winters, staff hours that swing accordingly. Payroll with genuine seasonal variation, VAT returns that capture the visitor economy properly, and a monthly rhythm that flexes with the calendar — that is the Clevedon pattern.',
    landmarks: ['Clevedon Pier', 'Clevedon seafront', 'Hill Road independent quarter', 'Walton Park'],
    propertyTypes: ['Hospitality venues', 'Visitor retail', 'Holiday lets'],
    nearbyAreas: ['portishead', 'nailsea', 'weston-super-mare'],
    tier: 'primary',
  },
  {
    slug: 'keynsham',
    name: 'Keynsham',
    postcode: 'BS31',
    type: 'town',
    region: 'Bath & North East Somerset',
    blurb: 'Between Bristol and Bath — a proper market town business base.',
    intro: 'Keynsham businesses — served from Yate along the A4174 ring.',
    longIntro:
      'Keynsham sits squarely between Bristol and Bath, and its High Street and Keynsham trade park businesses appreciate a bookkeeper who is near without being in the middle of the city. From trades firms to cafés to professional practices, the Keynsham pattern is steady monthly bookkeeping with a personal visit — the A4174 makes it a 25-minute door-to-door.',
    landmarks: ['Keynsham High Street', 'Keynsham Abbey grounds', 'The Amenity Green (Former Cadburys site)', 'Durley Chine'],
    propertyTypes: ['High Street businesses', 'Trade and construction firms', 'Professional practices'],
    nearbyAreas: ['saltford', 'bath', 'bradley-stoke'],
    tier: 'primary',
  },
];

// ── helpers (same API the template expects) ──

export const getArea = (slug: string): Area | undefined =>
  AREAS.find((a) => a.slug === slug);

export const AREA_SLUGS = AREAS.map((a) => a.slug);

export const getNearbyAreas = (slug: string): Area[] => {
  const area = getArea(slug);
  if (!area) return [];
  return area.nearbyAreas
    .map((s) => getArea(s))
    .filter((a): a is Area => Boolean(a));
};

export const REGION_ORDER = ['Bristol City', 'North Bristol', 'East Bristol', 'South Gloucestershire', 'Bath & North East Somerset', 'North Somerset'];

export const getAreasByRegion = (region: string): Area[] =>
  AREAS.filter((a) => a.region === region);
// Services that also build matrix pages for SECONDARY-tier areas.
// For the pitch mock every service covers every area — the Bristol region
// matrix is the thing we are selling. Narrow this to a subset when the
// client signs and demand-tiering replaces the full matrix.
export const KEY_SERVICES = new Set<string>([
  'bookkeeping',
  'payroll',
  'vat-returns',
  'self-assessment',
  'bank-reconciliation',
  'management-accounts',
  'cloud-accounting',
]);

/** Region grouping type used by AreaCoverage/AreaIndex. */
export type Region =
  | 'Bristol City'
  | 'North Bristol'
  | 'East Bristol'
  | 'South Gloucestershire'
  | 'Bath & North East Somerset'
  | 'North Somerset';


/** Inert for MB (no Bath/second-city split). Primary-tier areas. */
export const getBathAreas = (): Area[] =>
  AREAS.filter((a) => a.tier === 'primary');
