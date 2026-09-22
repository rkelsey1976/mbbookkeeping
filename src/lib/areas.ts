// Areas covered by Aspect Builds & Maintenance Ltd (aspectbuilds.co.uk).
//
// Ported from the live site: the 25 slugs under /areas-covered/ come from the
// sitemap (sitemap-0.xml), and the intro/longIntro copy is ported from the
// live area pages. Every entry carries city: 'bath' — Aspect's coverage is
// Bath + BANES plus the neighbouring Wiltshire/Somerset market towns, not
// Bath. The template's Bath pages are updated separately;
// getBathAreas() legitimately returns an empty array here.
//
// Honesty rules for this data:
//  - propertyTypes / demographics / transport are qualitative descriptions.
//    No invented pound figures, no invented sq ft ranges.
//  - landmarks are real, locally known points only.
//  - nearbyProjects is populated ONLY where the live /projects/ pages
//    evidence a real project; empty elsewhere rather than padded.
//  - tier: primary = Bath city + immediate villages; secondary = larger
//    towns (Trowbridge, Chippenham, Frome, Keynsham, Bradford on Avon,
//    Radstock, Midsomer Norton, Corsham); tertiary = the rest.
//
// Do not hardcode area counts in page copy — derive them from
// getBathAreas().length / AREAS.length.

// Services that earn a matrix page in secondary areas (GSC demand, Sept 2026).
export const KEY_SERVICES = new Set([
  'extension-builders',
  'renovation',
  'kitchen-fitters',
  'windows-doors',
  // Added 2026-09-09: GSC shows 'decorators in {village}' demand
  // (batheaston, bathampton, 'redecoration in chippenham' 18 imp) and the
  // secondary tier had no painting page at all.
  'painting-decorating',
]);

export type Area = {
  slug: string;
  name: string;
  city: 'bath' | 'bath';
  postcode: string;
  type: string;
  blurb: string;
  // Short intro for the hero section
  intro: string;
  // Long-form intro used as the meaty first paragraph under the H1
  longIntro: string;
  // Typical property types (qualitative — no invented figures)
  propertyTypes: string[];
  // Real local landmarks / features
  landmarks: string[];
  // Areas nearby that we also serve (for cross-linking)
  nearbyAreas: string[];
  tier: 'primary' | 'secondary' | 'tertiary';
  // Pricing note (qualitative — consent requirements, access, ground conditions)
  costVariation: string;
  // Real projects, evidenced on the live /projects/ pages (empty where none)
  nearbyProjects: string[];
  // Transport access notes
  transport: string;
  // Subtle demographics
  demographics: string;
  // Meta description
  metaDescription: string;
  // SEO title template
  titleTemplate: string;
  /** Geographic group — used to present coverage honestly (Trowbridge is not
      a Bath neighbourhood). One of: 'Bath City' | 'Bath Surrounding Villages'
      | 'West Wiltshire' | 'Somer Valley'. */
  region: 'Bath City' | 'Bath Surrounding Villages' | 'West Wiltshire' | 'Somer Valley';
};

export const AREAS: Area[] = [
  // =================== BATH CITY DISTRICTS ===================
  {
    slug: 'central-bath-districts',
    name: 'Central Bath',
    city: 'bath',
    postcode: 'BA1',
    type: 'UNESCO-listed Georgian core',
    blurb: "Bath's historic centre — Grade I and II listed Georgian terraces, ashlar stone and conservation consent on almost every street.",
    intro:
      'Preserving Georgian heritage with authentic craftsmanship, traditional lime masonry and premium internal property modernisations across the Royal Crescent, the Circus, the Abbey and Pulteney Bridge.',
    longIntro:
      "Working within Central Bath — from the Georgian townhouses around the Royal Crescent and the Circus to the terraces closer to Bath Abbey and Pulteney Bridge — demands absolute respect for architectural heritage and strict adherence to conservation guidelines. Much of the fabric is Grade I or Grade II listed, and the planning environment is exacting: consent is routine, materials are scrutinised, and heritage officers expect traditional methods done properly. Our team specialises in managing the complex logistics of city-centre builds — scaffolding on busy streets, resident parking permits, deliveries on narrow lanes — while matching historic ashlar stonework, executing traditional raking and lime mortar repointing, and sympathetically upgrading internal living spaces without compromising the period character that makes these buildings what they are.",
    propertyTypes: [
      'Grade I and Grade II listed Georgian townhouses',
      'Ashlar-fronted terraces around the Crescents and Squares',
      'Georgian apartments converted within larger period buildings',
      'Mews and back-lane cottages',
      'Commercial and mixed-use period buildings',
    ],
    landmarks: [
      'Royal Crescent',
      'The Circus',
      'Bath Abbey',
      'Pulteney Bridge',
      'The Roman Baths',
      'Queen Square',
      'Milsom Street',
      'The Assembly Rooms',
    ],
    nearbyAreas: ['bathwick', 'lansdown', 'widcombe', 'oldfield-park', 'bear-flat'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Heritage premium — listed building consent and conservation area approvals take time and constrain materials, and city-centre access (scaffolding, parking permits, delivery windows) adds real logistics cost. Every project is quoted as a fixed price after the free site visit.',
    nearbyProjects: [
      'Loft extension in central Bath — full case study on our Projects page',
      'Countryside landscaping project in the hills above Bath — case study on our Projects page',
    ],
    transport:
      'Bath Spa station is within walking distance of most of the centre. The city is served by the A4, A36 and A46, but central streets are largely pedestrianised or permit-controlled, so scaffolding and material drops are planned and booked in advance.',
    demographics:
      'Owner-occupiers of listed Georgian townhouses and apartments, second-home owners, and landlords in the student belt — all of whom expect premium standards and careful project management.',
    metaDescription:
      'Premium property renovations, traditional lime mortar repointing and Grade II listed restorations across Central Bath. Fully accredited and insured.',
    titleTemplate: 'Specialist Heritage Builders Central Bath | Aspect Builds',
  },
  {
    slug: 'bathwick',
    name: 'Bathwick',
    city: 'bath',
    postcode: 'BA2',
    type: 'Georgian conservation neighbourhood',
    blurb: "Georgian Bath east of the river — Great Pulteney Street, Sydney Gardens and the Holburne Museum, inside the World Heritage Site.",
    intro:
      "Sympathetic Georgian townhouse renovations, premium internal refurbishments and period-appropriate upgrades for properties within one of Bath's finest conservation neighbourhoods.",
    longIntro:
      "Bathwick — taking in Great Pulteney Street, the Holburne Museum setting and the elegant terraces running east from Pulteney Bridge — sits firmly within Bath's World Heritage Site, and the planning environment here is exacting, and rightly so. Our experience working within this designation means we understand what consent is required, how to specify materials and methods that will satisfy conservation officers, and how to deliver internal modernisation — updated kitchens, bathrooms and living spaces — without compromising the period envelope that makes these properties so desirable. Bathwick estate lease considerations and conservation officer pre-application engagement are managed as part of our standard project scope, so owners know where they stand before work begins.",
    propertyTypes: [
      'Georgian townhouses on the Bathwick estate streets',
      'Regency-era terraces around Great Pulteney Street',
      'Period apartments converted within larger houses',
      'Victorian villas on the slopes of Bathwick Hill',
      'Modern apartment developments on Bathwick Hill',
    ],
    landmarks: [
      'Great Pulteney Street',
      'The Holburne Museum',
      'Sydney Gardens',
      'Pulteney Bridge',
      'Bathwick Hill',
      'The Kennet & Avon Canal',
      'The University of Bath on Claverton Down',
    ],
    nearbyAreas: ['central-bath-districts', 'larkhall', 'bathampton', 'batheaston'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'World Heritage Site planning constraints and Bathwick estate lease considerations shape both specification and programme. Heritage-grade materials and consent steps are quoted transparently after the free site visit — never assumed.',
    nearbyProjects: [],
    transport:
      'Ten to fifteen minutes on foot from Bath Spa station across Pulteney Bridge. Buses run along Bathwick Street and Sydney Place; the canal towpath and river walk link Bathwick to the centre on foot or by bike.',
    demographics:
      'Established professional owner-occupiers in the Georgian stock, with a premium rental market in the converted period buildings. Owners here invest properly in their properties.',
    metaDescription:
      'Georgian townhouse renovations, internal refurbishments and sympathetic period upgrades in Bathwick, Bath. Experienced heritage builders.',
    titleTemplate: 'Bathwick Builders | Georgian Townhouses | Aspect Builds',
  },
  {
    slug: 'lansdown',
    name: 'Lansdown',
    city: 'bath',
    postcode: 'BA1',
    type: 'Georgian and Regency hilltop',
    blurb: "Bath at its most architecturally distinguished — sweeping Regency crescents, Beckford's Tower and substantial Georgian villas on the hill above the city.",
    intro:
      "Premium renovations, listed building work and heritage refurbishments for Lansdown's elevated Georgian and Regency properties — where expectations are highest.",
    longIntro:
      "Lansdown is Bath at its most architecturally distinguished — sweeping Regency terraces like Lansdown Crescent, the eccentric silhouette of Beckford's Tower on the hill above, substantial Georgian villas, and some of the city's finest period interiors. Work here is never routine. Every project demands rigorous attention to period detail: correctly specified lime renders and mortars, accurate sash window restoration or replacement, period-appropriate internal finishes, and the kind of project management that protects premium properties throughout the build process. Our team is experienced in the Listed Building consent process and conservation officer liaison that many Lansdown properties require before works can proceed.",
    propertyTypes: [
      'Regency terraces on Lansdown Crescent and its streets (often listed)',
      'Substantial Georgian villas with parkland gardens',
      'Premium period townhouses with original interiors',
      'Converted apartments within listed buildings',
      'Modern detached homes on the hillside edges',
    ],
    landmarks: [
      'Lansdown Crescent',
      "Beckford's Tower",
      'Bath Racecourse',
      'Lansdown Golf Club',
      'The hilltop views back over the city',
      'The Georgian and Regency villa streets',
    ],
    nearbyAreas: ['central-bath-districts', 'weston-bath', 'oldfield-park'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Listed Building consent management, conservation officer liaison and premium-site logistics — including property protection protocols — are standard at this level of work, and they are reflected in the programme and the fixed quote, not hidden in it.',
    nearbyProjects: [],
    transport:
      'Lansdown sits above the city off the A4187 Lansdown Road, with buses up the hill from the centre. Access for scaffolding and materials on the crescents is arranged in advance around resident parking.',
    demographics:
      'Affluent owner-occupiers of listed Georgian and Regency properties, plus downsizers in the villas — clients who expect the same standards they would insist on in Bath itself.',
    metaDescription:
      'Premium Georgian and Regency property renovations, listed building work and heritage refurbishments in Lansdown, Bath. Fully accredited and insured.',
    titleTemplate: 'Premium Builders & Heritage Specialists Lansdown | Aspect Builds',
  },
  {
    slug: 'oldfield-park',
    name: 'Oldfield Park',
    city: 'bath',
    postcode: 'BA2',
    type: 'Victorian terrace heartland',
    blurb: "Bath's dense Victorian terrace grid around Moorland Road — the space-maximisation heart of the city.",
    intro:
      "Victorian terrace renovations, structural open-plan conversions and quality refurbishments for one of Bath's most densely residential neighbourhoods.",
    longIntro:
      "Oldfield Park is Bath's engine room — a dense grid of Victorian terraces around Moorland Road's independent shops, housing a mix of owner-occupiers and landlord investors who want genuine quality at realistic cost. The opportunity here is space maximisation: removing chimney breast walls, installing structural steel for open-plan kitchen-diners, converting cellars into usable rooms, and adding rear extensions that genuinely transform how a property lives. Our team understands the structural limitations and possibilities of Victorian terrace construction inside-out — the irregular floor joists, shared chimney stacks and shallow foundations typical of this stock — and delivers projects that add real value without cutting corners on building control compliance.",
    propertyTypes: [
      'Victorian two-up two-down terraces',
      'Bay-fronted Victorian terraces on the main streets',
      'Converted flats and student lets',
      'Small period cottages off Moorland Road',
      'Houses with cellar conversion potential',
    ],
    landmarks: [
      "Moorland Road's independent shops",
      'Oldfield Park railway station',
      'The dense Victorian terrace grid',
      'Victoria Park (at the foot of the hill)',
      'The Two Tunnels Greenway portal at nearby Bloomfield',
      'The Twerton and Bear Flat boundaries',
    ],
    nearbyAreas: ['central-bath-districts', 'bear-flat', 'combe-down', 'twerton', 'weston-bath'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Victorian terrace structural quirks — irregular floor joists, shared chimney stacks, shallow foundations — are assessed and managed as standard, so the fixed quote reflects the real work rather than an optimistic starting point.',
    nearbyProjects: [],
    transport:
      "Oldfield Park station sits on the Bath–Bath line at the heart of the neighbourhood, and the Lower Bath Road corridor links it to the city centre in minutes. Buses run along Moorland Road and the A367.",
    demographics:
      "A mix of first-time buyers, long-term owner-occupiers and landlord investors — one of Bath's most actively renovated neighbourhoods.",
    metaDescription:
      'Victorian terrace renovations, open-plan extensions and full property refurbishments in Oldfield Park, Bath. Transparent pricing, fully insured.',
    titleTemplate: 'Oldfield Park Builders | Victorian Terrace | Aspect Builds',
  },
  {
    slug: 'larkhall',
    name: 'Larkhall',
    city: 'bath',
    postcode: 'BA1',
    type: 'Victorian village-suburb',
    blurb: "Victorian terraces and a village feel on the London Road corridor — side-returns, lofts and conservation constraints.",
    intro:
      "Side-return extensions, loft conversions and Conservation Area renovations for Larkhall's tightly packed Victorian terraces.",
    longIntro:
      "Larkhall's narrow Victorian terraces, clustered around the independent shops and community feel of the London Road corridor, are popular with young families who've outgrown the house but love the neighbourhood too much to leave. That makes side-return extensions and loft conversions the two projects we're asked for most here — both need careful handling on tight plots, shared party walls and a Conservation Area designation that governs anything visible from the street. We manage that planning process alongside the build itself, so homeowners get the extra space without a stalled application.",
    propertyTypes: [
      'Narrow Victorian terraces (two-up two-down and bay-fronted)',
      'Victorian end-of-terrace and corner-shop properties',
      'Edwardian semis on the wider streets',
      'Period cottages in the old village lanes',
      'Modern infill on former industrial plots',
    ],
    landmarks: [
      'The Larkhall parade of independent shops',
      'Alice Park',
      "St Saviour's Church",
      'The London Road (A4) corridor',
      "Larkhall's Conservation Area streets",
      'The slopes toward Bathampton Down',
    ],
    nearbyAreas: ['bathwick', 'bathampton', 'batheaston', 'central-bath-districts'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Conservation Area planning constraints, narrow-plot side-return logistics and party wall agreements with neighbouring terraces are managed as standard on every Larkhall project — priced into the fixed quote from the start.',
    nearbyProjects: [],
    transport:
      'On the A4 London Road with frequent buses into Bath city centre in ten to fifteen minutes; Bath Spa station is a twenty-minute walk or a short bus ride.',
    demographics:
      'Young families and long-term residents in the terraces — the kind of neighbourhood where owners extend rather than move.',
    metaDescription:
      'Victorian terrace extensions, loft conversions and Conservation Area renovations in Larkhall, Bath. Fully insured local builders with transparent pricing.',
    titleTemplate: 'Larkhall Builders | Victorian Terrace Extensions | Aspect Builds',
  },
  {
    slug: 'bear-flat',
    name: 'Bear Flat',
    city: 'bath',
    postcode: 'BA2',
    type: 'Victorian and Edwardian ridge',
    blurb: "Characterful ridge south of the centre — substantial Victorian and Edwardian homes around the Wellsway parade.",
    intro:
      "Victorian and Edwardian property renovations, quality extensions and sympathetic refurbishments for Bear Flat's characterful elevated residential neighbourhood.",
    longIntro:
      "Bear Flat sits on the high ridge south of the city centre, its independent shops and cafés along Wellsway giving way to streets lined with substantial Victorian and Edwardian properties that attract buyers looking for space, character and views. These are desirable homes that owners invest in properly — and they deserve builders who understand the structural particulars of late-Victorian construction: the chimney arrangements, the timber-framed floor structures, the solid external walls that make insulation retrofits more complex than in modern housing. Our team brings that specialist knowledge to every Bear Flat project, from rear kitchen extensions and basement conversions through to full-house renovation programmes, with elevated site access and Conservation Area considerations managed end-to-end.",
    propertyTypes: [
      'Substantial Victorian and Edwardian family houses (solid-wall construction)',
      'Late-Victorian terraces with bay fronts and chimney stacks',
      'Period semis and villas on the higher streets',
      'Homes with basement and lower-ground-floor potential',
      '1930s houses on the approach to Odd Down',
    ],
    landmarks: [
      'The Bear Flat shopping parade on Wellsway',
      'The Devonshire Tunnel portal of the Two Tunnels Greenway',
      'The ridge views over Bath city centre',
      'Bloomfield Rise',
      'The Wellsway (A367) corridor',
      'Beechen Cliff above the district',
    ],
    nearbyAreas: ['oldfield-park', 'combe-down', 'lyncombe', 'central-bath-districts'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Elevated site access, Victorian structural assessment and the insulation complexities of solid-wall construction are assessed at survey; Conservation Area status in parts of Bear Flat is confirmed before any external work is quoted.',
    nearbyProjects: [],
    transport:
      'On the A367 Wellsway with regular buses into the centre in ten minutes or so; the city centre is a twenty-five-minute walk downhill, and the Two Tunnels Greenway runs close by for cyclists.',
    demographics:
      'Families and professionals buying Victorian and Edwardian houses for space, character and views — and investing in them properly.',
    metaDescription:
      'Victorian and Edwardian property renovations, extensions and sympathetic refurbishments in Bear Flat, Bath. Accredited, insured local builders.',
    titleTemplate: 'Bear Flat Builders | Victorian Edwardian | Aspect Builds',
  },
  {
    slug: 'lyncombe',
    name: 'Lyncombe',
    city: 'bath',
    postcode: 'BA2',
    type: 'Stone hillside enclave',
    blurb: "A quiet stone-built hillside enclave south of the centre, between Widcombe and Combe Down — villas, cottages and sloping gardens.",
    intro:
      "Stone property renovations, hillside garden landscaping and sympathetic heritage refurbishments for Lyncombe's quiet elevated enclave south of the city centre.",
    longIntro:
      "Lyncombe occupies a distinctive hillside position between the city centre and Combe Down, combining stone-built Victorian villas, terraced cottages and a handful of larger detached properties set into the hillside with significant garden potential. Work here spans the full range of what we do: heritage stone repairs and lime repointing on the older stock; substantial rear and lower-ground extensions that exploit the slope; and high-quality internal refurbishments that bring older interiors up to contemporary standards without sacrificing period character. The hillside setting requires careful site logistics — sloped garden engineering, stone property structural assessment and Conservation Area compliance — all of which our team manages as a matter of course.",
    propertyTypes: [
      'Stone-built Victorian villas',
      'Terraced cottages set into the hillside',
      'Larger detached houses with sloping gardens',
      'Period apartments in converted villas',
      'Cottages along the old turnpike roads',
    ],
    landmarks: [
      'Lyncombe Vale',
      'The Two Tunnels Greenway through the valley',
      'The terraced cottages of Lyncombe Hill',
      'Prior Park Landscape Garden (nearby)',
      'The churchyard of St Mary the Virgin, Lyncombe',
      'The wooded valley south of the city centre',
    ],
    nearbyAreas: ['combe-down', 'widcombe', 'bear-flat', 'central-bath-districts'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Hillside site logistics, sloped garden engineering and stone-property structural assessment are all addressed from the initial consultation, so the fixed quote covers the real ground conditions rather than discovering them mid-build.',
    nearbyProjects: [],
    transport:
      'A ten to fifteen-minute walk or short bus ride from Bath Spa station, up Lyncombe Hill from the Widcombe side or via the Wellsway from Bear Flat. Steep access shapes scaffolding and deliveries, which we plan in advance.',
    demographics:
      'Established owner-occupiers in the stone stock, with buyers seeking quiet, character and gardens minutes from the centre.',
    metaDescription:
      'Stone property renovations, hillside garden schemes and sympathetic refurbishments in Lyncombe, Bath. Experienced heritage builders.',
    titleTemplate: 'Lyncombe Builders | Stone Hillside Homes | Aspect Builds',
  },
  {
    slug: 'widcombe',
    name: 'Widcombe',
    city: 'bath',
    postcode: 'BA2',
    type: 'Hillside terraces by the canal',
    blurb: 'Hillside terraces rising from the canal locks to Prior Park — Georgian and Victorian housing on steep ground.',
    intro:
      "Period terrace renovations, hillside garden projects and sympathetic internal refurbishments for one of Bath's most characterful hillside neighbourhoods.",
    longIntro:
      "Widcombe rises steeply from the Avon and the Widcombe flight of locks on the Kennet & Avon Canal up toward Prior Park at the top of the hill, its terraces of Georgian and Victorian housing presenting a unique set of structural and logistical challenges. Sloped rear gardens often need engineered retaining solutions before any building work can begin; party walls on tightly packed terraces require careful structural assessment; and the Conservation Area designation means external alterations must be handled with precision and planning awareness. Our team has extensive experience across Widcombe's housing stock — delivering everything from full internal refurbishments and Victorian terrace modernisations to external masonry repairs and hillside landscaping schemes.",
    propertyTypes: [
      'Georgian terraces on Claverton Street and Widcombe Parade',
      'Victorian hillside terraces on stepped streets',
      'Period cottages along the canal',
      'Converted flats within period buildings',
      'Houses with sloping rear gardens needing retaining solutions',
    ],
    landmarks: [
      'The Widcombe flight of canal locks',
      'Bath Spa station',
      'Prior Park and the Palladian Bridge',
      'The Kennet & Avon Canal towpath',
      'Claverton Street and Widcombe Parade',
      'The hillside terraces rising to Prior Park',
    ],
    nearbyAreas: ['central-bath-districts', 'lyncombe', 'combe-down', 'bear-flat'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Steep access, shared party walls and Conservation Area compliance are managed from the first site visit through to completion — retaining and hillside groundwork is surveyed and priced up front, not added later.',
    nearbyProjects: [],
    transport:
      'Bath Spa station is effectively on the doorstep, and the city centre is five minutes away across the river. Buses run along Claverton Street; the canal towpath connects to Bathwick and the Two Tunnels Greenway.',
    demographics:
      'Professional families and commuters who want village character minutes from the station, in period housing they are willing to invest in.',
    metaDescription:
      'Period terrace renovations, hillside garden landscaping and sympathetic refurbishments in Widcombe, Bath. Fully insured local builders.',
    titleTemplate: 'Widcombe Builders | Period Terrace | Aspect Builds',
  },
  {
    slug: 'weston-bath',
    name: 'Weston',
    city: 'bath',
    postcode: 'BA1',
    type: 'Edwardian and post-war family belt',
    blurb: "West Bath's extension-friendly family belt — Edwardian semis, inter-war bungalows and post-war homes around the old village.",
    intro:
      "House extensions, structural renovations and modern family home improvements for Weston's diverse mix of Edwardian semis and post-war residential properties.",
    longIntro:
      "Weston offers something different from Bath's Georgian core — around the old village High Street and All Saints Church, a substantial stock of Edwardian semis, inter-war bungalows and post-war houses that are ideally suited to modern extension and reconfiguration. Rear extensions, side returns and loft conversions regularly add significant floor area and market value to these properties without the listed building constraints that apply elsewhere in the city. Our team works across Weston regularly, understanding the typical plot sizes, soil conditions and permitted development opportunities that allow homeowners to transform their space efficiently and cost-effectively.",
    propertyTypes: [
      'Edwardian semi-detached family homes',
      'Inter-war bungalows on generous plots',
      'Post-war detached and semi-detached houses',
      'Modern infill on former garden plots',
      'Period cottages around the old village core',
    ],
    landmarks: [
      'The old Weston High Street',
      'All Saints Church',
      'The hillside rising toward Lansdown',
      'Royal Victoria Park (at the foot of the hill)',
      'The Lower Bath Road corridor',
      "Weston's allotment slopes",
    ],
    nearbyAreas: ['lansdown', 'central-bath-districts', 'saltford'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Permitted development opportunities, Edwardian and post-war structural considerations and the varied plot gradients are all assessed at the initial site visit, so the fixed quote matches the real ground conditions.',
    nearbyProjects: [],
    transport:
      'Along the A431 and Lower Bath Road corridors with buses into the centre in ten to fifteen minutes; Bath Spa station a short drive or bus ride; open countryside toward Lansdown within minutes.',
    demographics:
      'Families extending rather than moving, plus long-term owner-occupiers in the inter-war bungalows — one of the most extension-focused parts of Bath.',
    metaDescription:
      'House extensions, structural renovations and family home improvements in Weston, Bath. Trusted local builders with transparent fixed-price quotes.',
    titleTemplate: 'Weston Builders | Extensions Family Homes | Aspect Builds',
  },
  {
    slug: 'twerton',
    name: 'Twerton',
    city: 'bath',
    postcode: 'BA1',
    type: 'Riverside terraced district',
    blurb: "Riverside district west of Oldfield Park — solid Victorian and inter-war terraces around Twerton Park, home of Bath City FC since 1932.",
    intro:
      "Quality renovations, structural property improvements and practical home upgrades for Twerton's mix of terraced housing and riverside residential properties.",
    longIntro:
      "Twerton has long been one of Bath's most practical residential communities — working-class in its roots, home to Twerton Park and Bath City FC since 1932, with solid Victorian and inter-war terraced housing that rewards investment when the work is done properly. Owner-occupiers here want genuine build quality, clear communication and honest pricing without the inflated rates that follow a Bath postcode. Our approach is the same regardless of project value: thorough structural assessment, clean-site working practices and results that last. From kitchen and bathroom refurbishments to full structural renovation programmes, we deliver consistently across Twerton, with riverside damp management handled from the initial survey through to handover.",
    propertyTypes: [
      'Victorian terraced housing (solid, well-built stock)',
      'Inter-war terraces and semis',
      'Riverside flats and converted industrial buildings',
      'Ex-local housing on the Whiteway',
      'Small period cottages in the older lanes',
    ],
    landmarks: [
      'Twerton Park (home of Bath City FC since 1932)',
      'The River Avon riverside path',
      "Twerton's local high street",
      'The Whiteway estate on the hill above',
      'The riverside route into the city centre',
      'The former industrial riverside frontage',
    ],
    nearbyAreas: ['oldfield-park', 'southdown', 'weston-bath', 'central-bath-districts'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Victorian terrace structural assessment, party wall considerations and riverside proximity damp management are handled from the initial survey through to handover — priced honestly, without a Bath postcode premium.',
    nearbyProjects: [],
    transport:
      'On the A4 Lower Bath Road west of Oldfield Park with frequent buses into the centre in around fifteen minutes; Twerton is a twenty-minute walk from Bath Spa station along the river.',
    demographics:
      'Long-established owner-occupier community alongside a growing share of first-time buyers who recognise the value in the solid Victorian stock.',
    metaDescription:
      'Quality home renovations, property refurbishments and structural improvements in Twerton, Bath. Honest pricing and reliable local builders.',
    titleTemplate: 'Twerton Builders | Affordable Renovations | Aspect Builds',
  },
  {
    slug: 'combe-down',
    name: 'Combe Down',
    city: 'bath',
    postcode: 'BA2',
    type: "Quarryman's stone plateau",
    blurb: "The stone plateau above Bath, sitting atop the very quarries that built the city — Bath stone cottages and Victorian villas.",
    intro:
      "Authentic Bath stone restoration, heritage masonry repairs and high-quality renovations for Combe Down's distinctive quarryman's village architecture.",
    longIntro:
      "Combe Down sits atop the very quarries that provided the Bath stone used to build the city below, and its housing reflects that heritage directly — solid stone-built cottages and larger Victorian villas whose character depends entirely on the quality of masonry work applied to them. Incorrect mortar specification, inappropriate cement pointing or poorly matched stone repairs can cause irreversible damage to these structures. Our team brings a thorough understanding of Bath stone's properties — its porosity, its weathering characteristics and how to match it accurately — ensuring every repair and restoration enhances rather than compromises the building's long-term integrity, with Bath stone sourcing and lime mortar specification built into every project scope.",
    propertyTypes: [
      'Solid Bath stone cottages (quarryman-built)',
      'Larger Victorian stone villas',
      'Period stone semis and terraces',
      'Bungalows on the plateau edges',
      'Stone-built homes with vaulted cellars',
    ],
    landmarks: [
      'The quarry workings beneath the plateau',
      'Combe Down Tunnel on the Two Tunnels Greenway',
      'Ralph Allen Drive',
      'The Bath stone cottage streets',
      "St Luke's Church",
      'The views across the Midford valley',
    ],
    nearbyAreas: ['lyncombe', 'widcombe', 'southdown'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Bath stone sourcing, lime mortar specification matched to the original substrate and Conservation Area planning compliance are built into every Combe Down project scope — heritage-grade materials cost more and are quoted openly.',
    nearbyProjects: [],
    transport:
      'A short bus ride up Ralph Allen Drive from the city centre, or reached via the Wellsway; the Two Tunnels Greenway connects the plateau to Midford and Bath by bike.',
    demographics:
      "Owner-occupiers with a strong sense of the plateau's heritage — many families have been here for generations and expect stonework done the traditional way.",
    metaDescription:
      'Heritage stone restoration, Bath stone masonry and premium property renovations in Combe Down. Accredited specialists with conservation experience.',
    titleTemplate: 'Combe Down Builders | Stone Cottage Heritage | Aspect Builds',
  },
  {
    slug: 'southdown',
    name: 'Southdown',
    city: 'bath',
    postcode: 'BA2',
    type: 'Post-war estate district',
    blurb: "Established post-war and mid-century estates on Bath's southern edge — Poets' Corner streets, wide plots and extension-friendly stock.",
    intro:
      "Home extensions, loft conversions and thorough property renovations for Southdown's established post-war and mid-century residential community.",
    longIntro:
      "Southdown's mid-century estates — including the Poets' Corner streets named for Chaucer, Milton and Shelley — offer solid, well-built housing that, with the right structural investment, can be transformed into genuinely spacious family homes. The typical plot sizes allow for meaningful rear extensions; the roof profiles on many properties suit dormer loft conversions well; and the relative simplicity of the construction means structural interventions are often more straightforward than in Bath's older terraced stock. Our team works efficiently with these property types, delivering extensions and conversions that maximise the permitted development opportunities available and deliver strong returns on investment.",
    propertyTypes: [
      '1950s-60s semi-detached family homes',
      'Mid-century detached houses on generous plots',
      '1960s-70s terraced streets',
      'Bungalows on the estate edges',
      'Modern infill developments',
    ],
    landmarks: [
      "Poets' Corner — Chaucer, Milton and Shelley roads",
      'The Southdown shopping parade',
      'The green edges toward Englishcombe',
      'Odd Down Park & Ride (nearby)',
      'The Lyncombe Vale greenway below the estate',
      'Bath city centre, fifteen minutes down Wellsway',
    ],
    nearbyAreas: ['combe-down', 'twerton', 'lyncombe'],
    tier: 'secondary',
    region: 'Bath City',
    costVariation:
      'Mid-century structural methods, estate road access and permitted development envelope assessments are addressed proactively at every Southdown project — the simpler construction often makes these the most cost-effective extensions we build.',
    nearbyProjects: [],
    transport:
      'Connected to the city via the Wellsway and the Odd Down Park & Ride, with regular buses into the centre in around fifteen minutes.',
    demographics:
      'Established owner-occupier families, many of whom have watched the estate mature for decades and now invest in extending rather than moving.',
    metaDescription:
      'Home extensions, loft conversions and quality property renovations in Southdown, Bath. Experienced local builders with full insurance.',
    titleTemplate: 'Southdown Builders | Home Extensions | Aspect Builds',
  },

  // =================== SURROUNDING VILLAGES ===================
  {
    slug: 'bathampton',
    name: 'Bathampton',
    city: 'bath',
    postcode: 'BA2',
    type: 'Canalside village',
    blurb: 'Canalside village east of the city on the Kennet and Avon corridor — cottages, villas and water-proximate homes needing specialist care.',
    intro:
      'Canalside home repairs, structural improvements and premium internal finishes for properties along the Avon and Kennet corridor.',
    longIntro:
      "Bathampton's riverside and canalside properties — many within sight of the Kennet and Avon towpath and the George Inn — face persistent moisture challenges that standard builders often misdiagnose. Our team brings specific experience with water-proximate structural improvements: from damp remediation and tanking to high-quality internal finishes that withstand the unique environmental demands of the Avon valley. Riverside and canalside damp management, flood-risk structural considerations and water-adjacent access logistics are part of our standard approach here, not an afterthought discovered halfway through the job.",
    propertyTypes: [
      'Period cottages in the village core',
      'Victorian and Edwardian villas along the main roads',
      'Riverside and canalside houses near the towpath',
      'Modern infill developments on the village edges',
      'Converted mill and outbuilding homes',
    ],
    landmarks: [
      'The Kennet and Avon Canal towpath',
      'The George Inn at Bathampton',
      'The River Avon meadows',
      'Bathampton Down and the golf course above',
      'St Nicholas Church',
      'The Towpath and Mill Lane crossings',
    ],
    nearbyAreas: ['batheaston', 'bathford', 'bathwick', 'larkhall'],
    tier: 'secondary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Riverside and canalside damp management, flood-risk structural considerations and water-adjacent access logistics are part of our standard approach — assessed and priced at the free site visit.',
    nearbyProjects: [],
    transport:
      'First stop out of Bath on the A4 and on the Bath to Weymouth line (no station); buses along the A4 reach the centre in about fifteen minutes, and the canal towpath runs directly into Bath on foot or by bike.',
    demographics:
      'A mix of long-standing village families, commuters into Bath and owners of riverside properties who accept that water-proximate homes need specialist maintenance.',
    metaDescription:
      'Canalside home repairs, structural improvements and high-quality internal finishes across Bathampton. Fully insured local builders.',
    titleTemplate: 'Bathampton Builders | Canalside Specialists | Aspect Builds',
  },
  {
    slug: 'batheaston',
    name: 'Batheaston',
    city: 'bath',
    postcode: 'BA1',
    type: 'Village beneath Little Solsbury Hill',
    blurb: 'Village property care beneath Little Solsbury Hill — period cottages, Victorian terraces and the listed toll bridge to Bathampton.',
    intro:
      'Local village property care, sympathetic cottage modernisations and reliable ongoing domestic maintenance by trusted local tradespeople.',
    longIntro:
      "Batheaston sits beneath Little Solsbury Hill and alongside the Grade II listed toll bridge crossing to Bathampton, and its mix of period cottages, Victorian terraces and modern infill developments requires a builder who understands the nuances of village-scale construction. Our team delivers everything from sensitive period cottage modernisations to full domestic maintenance programmes, always with the same rigorous project management and clean-site protocols we apply to our largest Central Bath commissions. Village access routes, neighbouring property considerations and local conservation overlay requirements are handled end-to-end, so owners get city-agency standards without leaving the village.",
    propertyTypes: [
      'Period stone cottages in the village core',
      'Victorian terraces along the High Street',
      'Modern infill developments on the fringes',
      'Detached houses on the hillside roads',
      'Cottages with steep sloping gardens',
    ],
    landmarks: [
      'Little Solsbury Hill',
      'The Grade II listed toll bridge',
      'Batheaston High Street',
      'The River Avon at the eastern edge',
      'St John the Baptist Church',
      'The Fosse Way route through the village',
    ],
    nearbyAreas: ['bathampton', 'bathford', 'larkhall', 'bathwick'],
    tier: 'primary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Village access routes, neighbouring property considerations and local conservation overlay requirements are handled end-to-end and reflected in the fixed quote from the outset.',
    nearbyProjects: [
      'Heritage renovation in Batheaston — full case study on our Projects page',
    ],
    transport:
      'On the eastern approach into Bath via the A4, with buses into the centre in around fifteen minutes; the A46 links the village to the M4 and the wider region for trades and materials.',
    demographics:
      'Village families and commuters who value the setting beneath Solsbury Hill, plus owners of period cottages who want sympathetic, ongoing property care.',
    metaDescription:
      'Village property care, cottage modernisations and domestic maintenance in Batheaston. Trusted local builders with transparent pricing.',
    titleTemplate: 'Batheaston Builders | Property Care | Aspect Builds',
  },
  {
    slug: 'bathford',
    name: 'Bathford',
    city: 'bath',
    postcode: 'BA1',
    type: 'Hillside stone village',
    blurb: 'Hillside stone village climbing from the Avon valley toward Bathford Hill — cottages, retaining walls and 18th-century houses.',
    intro:
      "Hillside stone cottage refurbishments, structural brickwork and traditional masonry updates for properties set in Bathford's distinctive landscape.",
    longIntro:
      "Bathford's elevated position — the village climbs from the valley floor up toward Bathford Hill, past grand 18th-century houses like Eagle House — and its historic stone architecture present unique construction challenges: structural underpinning on sloping ground, matching local Bath stone on exposure-facing elevations. Our experience with hillside properties means we understand the drainage, retaining wall and structural requirements that keep these homes sound for another century. Hillside scaffolding, retaining wall assessment and sloped-site logistics are all managed within our standard project scope, on the same fixed-quote basis as every other village we cover.",
    propertyTypes: [
      'Hillside stone cottages',
      'Grand 18th-century houses including Eagle House',
      'Victorian and Edwardian village homes',
      'Detached houses on the sloping roads',
      'Period properties needing underpinning assessments',
    ],
    landmarks: [
      'Eagle House (18th-century)',
      'Bathford Hill',
      'The River Avon and the railway viaduct below',
      'The churchyard of St Saviour',
      'The Ashfield and Warleigh boundaries',
      'The village slopes and terraced lanes',
    ],
    nearbyAreas: ['bathampton', 'batheaston', 'box'],
    tier: 'secondary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Hillside scaffolding, retaining wall assessment and sloped-site logistics are managed within our standard project scope — quoted as one fixed price after the site visit, with the ground conditions priced in from day one.',
    nearbyProjects: [],
    transport:
      'Reached off the A4 between Bath and Corsham, with buses on the A4 corridor into Bath in fifteen minutes or so; Bathford station on the Bath line sits in the valley below the village.',
    demographics:
      'Village families and professional commuters who value the hillside setting, with a strong core of long-term owner-occupiers in the stone stock.',
    metaDescription:
      "Hillside stone cottage refurbishments, structural brickwork and traditional masonry updates in Bathford. Accredited and insured.",
    titleTemplate: 'Bathford Builders | Stone Cottage | Aspect Builds',
  },
  {
    slug: 'dunkerton',
    name: 'Dunkerton',
    city: 'bath',
    postcode: 'BA2',
    type: 'Home-village on the Cam Brook',
    blurb: "Aspect Builds' home village on the A367 between Bath and Peasedown St John — where James and the team are based, covering the Cam Brook valley and the surrounding lanes.",
    intro:
      "Builders based right here in Dunkerton — extensions, loft conversions, renovations and village-home maintenance delivered from our own doorstep, with the fixed-price process we run everywhere else.",
    longIntro:
      "Dunkerton is where Aspect Builds is based — the yard is at 2 Fir Tree Cottages, and most days start here before the vans head out across Bath and BANES. The village itself sits in the Cam Brook valley on the A367 corridor, a mix of stone cottages, former farm buildings and newer estates, with the old Somerset Coal Canal route running close by and Combe Hay's locks just up the valley. Working this close to home means we know the local ground, the housing stock and the trades around the village — and a Dunkerton project gets the shortest-notice site visit and the most direct supervision of any job we run, because the boss is five minutes away.",
    propertyTypes: [
      'Stone cottages along the Cam Brook valley',
      'Converted farm buildings and barns',
      'Newer estate homes off the A367',
      'Period properties needing lime and stone care',
      'Bungalows ripe for loft conversion or extension',
    ],
    landmarks: [
      "St Mary Magdalene's church",
      'The Cam Brook and the old Somerset Coal Canal route',
      "Combe Hay locks and the flight up the valley",
      'The A367 corridor to Bath and Radstock',
      'Peasedown St John over the hill',
      'The village lanes and Camerton boundary',
    ],
    nearbyAreas: ['southdown', 'combe-down', 'twerton', 'radstock'],
    tier: 'secondary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Being our home village, Dunkerton projects carry no travel premium at all — the same fixed-price quote process applies, and site visits here are same-week as standard.',
    nearbyProjects: [],
    transport:
      'On the A367 between Bath and Peasedown St John — ten minutes from Bath city centre, with the bus corridor running straight through the village.',
    demographics:
      'A mix of long-established village families, commuters on the A367 and retired owners in the valley cottages — all within our home patch.',
    metaDescription:
      "Builders in Dunkerton — Aspect Builds' home village. Extensions, loft conversions, renovations and maintenance from the team based at 2 Fir Tree Cottages. Free site visits.",
    titleTemplate: "Builders in Dunkerton | Aspect Builds' Home Village",
  },

  {
    slug: 'saltford',
    name: 'Saltford',
    city: 'bath',
    postcode: 'BA1',
    type: 'Riverside village',
    blurb: 'Riverside village between Bath and Bath — a period core by the lock and marina, surrounded by family estate roads.',
    intro:
      "Riverside home extensions, structural renovations and garden landscaping for Saltford's mix of period cottages and family homes along the Avon.",
    longIntro:
      "Saltford sits directly on the Avon between Bath and Bath, and its housing reflects that setting — a village core of older cottages close to the lock and marina, surrounded by family houses on quieter estate roads set slightly back from the water. Riverside plots bring specific ground and drainage conditions we've dealt with repeatedly, and the village's period core means some projects fall within local planning constraints that need managing from the outset. Whether it's a full rear extension or a garden landscaping scheme that makes the most of a riverside plot, we bring the same structural rigour we apply to our larger Bath commissions.",
    propertyTypes: [
      'Older cottages in the village core near the lock',
      'Family houses on the estate roads set back from the river',
      'Riverside homes on the Avon',
      'Period semis and detached villas along the A4',
      'Homes with sloping gardens toward the valley',
    ],
    landmarks: [
      'Saltford Lock and marina on the Avon',
      'The River Avon Trail',
      'Saltford railway station (reopened on the Bath to Bath line)',
      'The village high street and conservation streets',
      'Saltford Golf Club on the hillside above',
      'The Kelston roundabout and A4 corridor',
    ],
    nearbyAreas: ['keynsham', 'weston-bath'],
    tier: 'secondary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Riverside drainage and ground conditions, village-core planning constraints and sloped garden landscaping near the Avon are handled as part of our standard scope and priced at the site visit.',
    nearbyProjects: [],
    transport:
      'On the A4 between Bath and Bath with regular buses both ways, its own station on the Bath to Bath line, and the Bath and Bath Railway Path along the river for cyclists.',
    demographics:
      'Commuter families into Bath and Bath, village downsizers and owners of riverside properties who accept the maintenance that comes with the setting.',
    metaDescription:
      'Riverside home extensions, structural renovations and garden landscaping in Saltford. Fully insured local builders with transparent pricing.',
    titleTemplate: 'Saltford Builders | Riverside Extensions | Aspect Builds',
  },
  {
    slug: 'keynsham',
    name: 'Keynsham',
    city: 'bath',
    postcode: 'BS31',
    type: 'Riverside market town',
    blurb: "Market town between Bath and Bath — 1930s semis and post-war estates alongside the new Somerdale development on the old Cadbury's site.",
    intro:
      "Rear extensions, structural steel knock-throughs and open-plan family living upgrades across Keynsham's riverside and suburban housing stock.",
    longIntro:
      "Keynsham has changed shape substantially since the old Cadbury's factory site gave way to new-build housing on the Somerdale side of town, sitting alongside long-established 1930s semis and post-war estates on the other. That mix gives homeowners real scope to extend and reconfigure — structural steel for open-plan kitchen-diners, rear extensions that open onto the garden, and garage conversions that turn dead space into a usable room. We work across both the older housing stock and the newer developments, with the same fixed-quote pricing and site management either way, and riverside proximity to the Avon and Chew is assessed at the initial site visit.",
    propertyTypes: [
      'Inter-war semi-detached housing (the backbone of the town)',
      'Post-war estate housing on the Chandag and Park Estate sides',
      'New-build homes on the Somerdale development',
      'Period properties near the High Street and Temple Street',
      'Riverside homes along the Avon and Chew',
    ],
    landmarks: [
      'The Somerdale development on the former Cadbury site',
      'Keynsham High Street and the Civic Centre',
      'Keynsham railway station on the Bath to Bath line',
      'The River Chew and Memorial Park',
      'Fry House and the Somerdale gardens',
      'The A4 corridor between Bath and Bath',
    ],
    nearbyAreas: ['saltford'],
    tier: 'secondary',
    region: 'Bath Surrounding Villages',
    costVariation:
      'Riverside proximity to the Avon and Chew, 1930s-semi structural considerations and newer-development permitted development rights are all assessed at the initial site visit — one fixed quote, no provisional sums.',
    nearbyProjects: [],
    transport:
      'Directly on the London to Bath railway line with frequent services into both Bath and Bath, on the A4 between the two cities, and connected by the Bath and Bath Railway Path for cyclists.',
    demographics:
      'Families and commuters using the fast rail links into both cities, plus established owner-occupiers in the 1930s and post-war stock investing in extensions and reconfigurations.',
    metaDescription:
      'House extensions, open-plan reconfigurations and structural renovations in Keynsham. Transparent, fixed-quote pricing from local builders.',
    titleTemplate: 'Keynsham Builders | House Extensions | Aspect Builds',
  },

  // =================== WILTSHIRE ===================
  {
    slug: 'bradford-on-avon',
    name: 'Bradford on Avon',
    city: 'bath',
    postcode: 'BA15',
    type: 'Stone mill town',
    blurb: "One of the region's finest period towns — weavers' cottages, Georgian townhouses and the Tythe Barn, steep streets down to the river.",
    intro:
      'Sympathetic heritage remodelling, lime repointing and bespoke period joinery installations — for the town that demands the highest standards of period care.',
    longIntro:
      "Bradford on Avon possesses one of the finest concentrations of period properties in the region — from the iconic Tythe Barn to weavers' cottages and Georgian townhouses lining the steep streets down to the river. Our team brings the same exacting standard to every project here: traditional lime mortars hand-mixed to match the original substrate, period joinery fabricated or restored to original profiles, and structural interventions that preserve the building's integrity without compromising its character. Steep street access, riverside flood considerations and conservation area planning constraints are managed comprehensively within every project.",
    propertyTypes: [
      "Weavers' cottages on the steep streets",
      'Georgian townhouses on the way down to the river',
      'Saxon-medieval stone buildings around the church and barn',
      'Victorian villas on the higher ground',
      'Converted mill and industrial buildings',
    ],
    landmarks: [
      'The Tythe Barn',
      'The Saxon church of St Laurence',
      'The Bradford on Avon Town Bridge and lock-up',
      'The Kennet and Avon Canal wharf',
      'Westbury Gardens and the riverside',
      "The Shambles and the town's stone streets",
    ],
    nearbyAreas: ['trowbridge', 'batheaston', 'box'],
    tier: 'secondary',
    region: 'West Wiltshire',
    costVariation:
      'Steep street access, riverside flood considerations and conservation area planning constraints are managed comprehensively within every project — the fixed quote includes the access planning these steep streets demand.',
    nearbyProjects: [],
    transport:
      'Its own station on the Wessex main line into Bath (about twelve minutes) and onwards to Bath and London; reached by road off the A363, with Bath a short drive over the hill or a pleasant route along the river valley.',
    demographics:
      'Period-home enthusiasts and families who commute to Bath by rail, plus a growing retirement market — owners who consistently choose heritage-grade work over quick fixes.',
    metaDescription:
      'Sympathetic heritage remodelling, lime repointing and bespoke period joinery in Bradford on Avon. FMB-accredited local builders.',
    titleTemplate: 'Bradford on Avon Builders | Heritage Lime | Aspect Builds',
  },
  {
    slug: 'trowbridge',
    name: 'Trowbridge',
    city: 'bath',
    postcode: 'BA14',
    type: 'Wiltshire county town',
    blurb: "Wiltshire's county town — post-1960s estate plots built for wraparounds, and a Georgian and Victorian conservation centre around Fore Street.",
    intro:
      "Rear, side-return, wraparound and double-storey extensions across Wiltshire's county town — plus renovations and period property care, from the Georgian centre out to the estates.",
    longIntro:
      "What you can build in Trowbridge depends almost entirely on which half of the town you are in. The estates built from the 1960s onwards — Studley Green, Hilperton Marsh, Paxcroft Mead — generally have the plot width and the permitted development rights to take a proper rear or wraparound extension without a full planning application, which is why space-adding work is worth doing there. The Georgian and Victorian centre around Fore Street and Court Street is largely Conservation Area, so the same extension needs a different approach: planning consent, sympathetic materials, and a realistic conversation about what the council will actually pass before anyone draws anything. We work across both, and we will tell you at the site visit which category your property falls into and what that means for cost and timescale. It is exactly this balance — extensions and renovations on the estate stock, double-storey and over-structure additions, and careful period work in the town centre — that drives most of the building work we carry out in Trowbridge.",
    propertyTypes: [
      'Post-1960s estate housing at Studley Green, Hilperton Marsh and Paxcroft Mead',
      'Georgian and Victorian town-centre properties in the Conservation Area',
      'Inter-war and post-war semis across the suburbs',
      'Modern developments on the town edges',
      'Former mill and industrial buildings converted to homes',
    ],
    landmarks: [
      'Fore Street and Court Street (the conservation centre)',
      'Trowbridge Museum in the old cloth mill',
      'The People\'s Park',
      'Trowbridge railway station on the Wessex main line',
      'The Paxcroft Mead and Studley Green estates',
      'Hilperton Marina on the Kennet and Avon Canal',
    ],
    nearbyAreas: ['bradford-on-avon', 'melksham', 'frome', 'chippenham'],
    tier: 'primary',
    region: 'West Wiltshire',
    costVariation:
      'Town-centre Conservation Area compliance, estate-housing permitted development assessment and structural surveys tailored to build era are handled from the first site visit — the fixed quote states plainly which regime your property falls under and what that means for cost and timescale.',
    nearbyProjects: [],
    transport:
      'Trowbridge station sits on the Wessex main line with through services to Bath, Bath and London; the A361 and A363 link the town to the A4 and M4 corridors, making logistics straightforward for plant and materials.',
    demographics:
      'Families and commuters drawn by the main-line rail links and comparatively attainable prices, plus long-established households across the estates — the town renews its housing stock constantly.',
    metaDescription:
      'House extensions in Trowbridge — rear, side-return, wraparound and double-storey. Fixed-price itemised quotes, free site visit, £10M insured.',
    titleTemplate: 'House Extensions Trowbridge | Rear & Wraparound | Aspect Builds',
  },
  {
    slug: 'melksham',
    name: 'Melksham',
    city: 'bath',
    postcode: 'SN12',
    type: 'Wiltshire market town',
    blurb: 'Wiltshire market town on the Avon — inter-war and post-war estates with a growing modern fringe and a compact historic core.',
    intro:
      'Whole-home modernisation, extensions and structural reconfiguration across the inter-war, post-war and newer housing that makes up most of Melksham.',
    longIntro:
      "Melksham's housing is dominated by the inter-war and post-war estates that spread out from a compact historic core near the Market Place and the River Avon, with newer developments on the town's edges and a steady stream of whole-home modernisation work. Typical projects here are opening up compartmentalised layouts, installing structural steel for open-plan kitchen-diners, and adding rear extensions on plots wide enough to take them. The town is also a natural link between our Bath base and the wider Wiltshire corridor, and the same fixed-price, itemised-quote discipline applies whether the job is a single knock-through or a full modernisation programme.",
    propertyTypes: [
      'Inter-war semi-detached housing',
      'Post-war estate housing across the town',
      'Modern developments on the edges',
      'Period properties near the Market Place',
      'Homes on the older Bath Road corridor',
    ],
    landmarks: [
      'The Market Place and historic core',
      'Melksham House and its grounds',
      'The River Avon and King George V Park',
      'Melksham railway station (restored main-line service)',
      'The spa and Assembly Hall fronting the park',
      'The Semington and Beanacre road links',
    ],
    nearbyAreas: ['trowbridge', 'chippenham', 'corsham'],
    tier: 'secondary',
    region: 'West Wiltshire',
    costVariation:
      'Estate-access logistics and permitted development rights on the newer stock are standard considerations; period work near the Market Place is assessed on its own merits at the site visit.',
    nearbyProjects: [],
    transport:
      'On the A350 and A365 between Chippenham and Trowbridge, with a restored railway station on the main line and straightforward access to both Bath and the M4 for materials and logistics.',
    demographics:
      'Established families and military-and-commuter households using the A corridor and main line, with steady modernisation demand across the inter-war and post-war stock.',
    metaDescription:
      'Home renovations, extensions and structural modernisation in Melksham. Transparent, fixed-quote local builders covering the town and estates.',
    titleTemplate: 'Melksham Builders | Home Modernisation | Aspect Builds',
  },
  {
    slug: 'chippenham',
    name: 'Chippenham',
    city: 'bath',
    postcode: 'SN15',
    type: 'Wiltshire market town',
    blurb: "Wiltshire's largest town in our patch — post-war estates and 1970s developments around a historic centre by the River Avon.",
    intro:
      "Full-scale modern home modernisations, structural knock-throughs and contemporary extensions — transforming Chippenham's diverse housing stock.",
    longIntro:
      "Chippenham's mix of post-war estates, 1970s developments and newer build communities — spreading out from the historic centre around Yelde Hall and Monkton Park on the River Avon — presents a broad range of structural opportunities. Our work here centres on whole-home modernisations: opening up compartmentalised layouts, installing structural steel for open-plan living, and delivering contemporary extensions that transform how families use their homes. Estate-access logistics, permitted development rights on newer properties and drainage and soil conditions across the town's varied terrain are all standard considerations, and every project receives the same rigorous project management regardless of scale.",
    propertyTypes: [
      'Post-war estate housing across the town',
      '1970s developments with compartmentalised layouts',
      'Newer build communities on the edges',
      'Period properties near the historic centre and Yelde Hall',
      'Homes along the River Avon at Monkton Park',
    ],
    landmarks: [
      'Yelde Hall in the historic centre',
      'Monkton Park and the River Avon',
      'Chippenham railway station (a fast link to Bath and beyond)',
      'The post-war estates to the north and south of town',
      'The historic town bridge and market streets',
      'The old town conservation streets',
    ],
    nearbyAreas: ['corsham', 'melksham', 'box'],
    tier: 'primary',
    region: 'West Wiltshire',
    costVariation:
      'Estate-access logistics, permitted development rights on newer properties and drainage and soil conditions across the town\'s varied terrain are all standard considerations — assessed and fixed-priced at the site visit.',
    nearbyProjects: [],
    transport:
      'A fast main-line station into Bath (around thirteen minutes) and onward to Bath and London, sitting on the A4 and close to junction 17 of the M4 — the best-connected town in our coverage area.',
    demographics:
      'Commuter families using the M4 and main-line rail links, plus long-standing residents across the post-war estates — a town with constant renovation and extension activity.',
    metaDescription:
      'Full-scale home modernisations, open-plan structural knock-throughs and extensions in Chippenham. Transparent, fixed-quote pricing.',
    titleTemplate: 'Chippenham Builders | Home Extensions | Aspect Builds',
  },
  {
    slug: 'corsham',
    name: 'Corsham',
    city: 'bath',
    postcode: 'SN13',
    type: 'Historic stone town',
    blurb: 'Historic market town beneath Corsham Court — Cotswold stone cottages, a conservation High Street and oolitic limestone to match.',
    intro:
      "Character cottage updates, historic stone masonry and high-street standard finishes — preserving Corsham's distinctive market-town identity.",
    longIntro:
      "Corsham's historic High Street, overlooked by Corsham Court, and its surrounding stone cottages represent a unique concentration of Cotswold-style building stock. Our work here focuses on preserving that character — from matching the distinctive oolitic limestone to reinstating traditional lime renders and ensuring new additions sit comfortably within the existing streetscape. Every project, whether a cottage modernisation or a larger-scale conversion, receives the same meticulous material specification. High Street conservation zone compliance, Bath stone sourcing and matching, and town-centre traffic management for site logistics are all part of the standard scope.",
    propertyTypes: [
      'Cotswold stone cottages around the High Street',
      'Georgian and Regency properties on the Court streets',
      'Victorian villas along the Bath Road corridor',
      'Almshouse-adjacent period stock in the town core',
      'Modern estates on the town edges',
    ],
    landmarks: [
      'Corsham Court and its parkland',
      'The historic High Street and its almshouses',
      'The Hungerford Almshouses in the town centre',
      'The Pickwick road toward Bath',
      'Corsham railway station (on the main line)',
      'The stone masonry heritage of the town',
    ],
    nearbyAreas: ['box', 'chippenham', 'bathford'],
    tier: 'primary',
    region: 'West Wiltshire',
    costVariation:
      'High Street conservation zone compliance, Bath stone sourcing and matching, and town-centre traffic management for site logistics are planned into every Corsham project — priced openly, not discovered mid-build.',
    nearbyProjects: [],
    transport:
      'On the A4 between Chippenham and Bath with a station on the Bath to London main line; the A350 links north to the M4, making it straightforward for materials and plant.',
    demographics:
      'Owner-occupiers who value the town\'s stone character, military families connected to the nearby establishments, and commuters on the London line.',
    metaDescription:
      'Character cottage updates, historic stone masonry and high-street standard finishes in Corsham. Fully accredited and insured local builders.',
    titleTemplate: 'Corsham Builders | Stone Cottage | Aspect Builds',
  },
  {
    slug: 'box',
    name: 'Box',
    city: 'bath',
    postcode: 'SN13',
    type: 'Quarrying valley village',
    blurb: 'Valley village between Bath and Corsham — quarry heritage, Brunel\'s Tunnel and valley-side period properties needing specialist care.',
    intro:
      "Period property maintenance, lime mortar repointing and historic valley-side home care — preserving Box's distinctive architectural character.",
    longIntro:
      "Box sits within a steep river valley — the same ground Brunel tunnelled through for the Great Western Railway — whose period properties, from stone farmhouses to former quarry workers' cottages, demand specialist care. Incorrect mortar mixes, inappropriate modern renders and poor drainage management can rapidly degrade these structures. Our approach uses traditional materials and techniques specified to the building's age and construction type, with valley-side scaffolding access, road-narrow site logistics and historic stone matching built into every project from day one.",
    propertyTypes: [
      "Former quarry workers' cottages",
      'Stone farmhouses on the valley sides',
      'Victorian and Edwardian village housing',
      'Detached homes on the higher ground',
      'Period properties needing lime mortar repointing',
    ],
    landmarks: [
      "Brunel's Box Tunnel on the Great Western Railway",
      'The old stone quarries beneath the valley',
      'Box Mill and the Bybrook river',
      "St Thomas à Becket Church",
      'The valley-side lanes and terrace rows',
      'The recreation ground and moor at the village core',
    ],
    nearbyAreas: ['corsham', 'bathford', 'chippenham'],
    tier: 'secondary',
    region: 'West Wiltshire',
    costVariation:
      'Valley-side scaffolding access, road-narrow site logistics and historic stone matching are built into every Box project from day one — the fixed quote reflects the access reality of a steep, narrow-lane village.',
    nearbyProjects: [
      'Rendering and decoration project at Chilcompton — see our Projects page for the approach used',
    ],
    transport:
      'Reached off the A4 and the B3109 between Bath and Corsham, with the A4 corridor giving straightforward access into Bath in about fifteen minutes by car.',
    demographics:
      'Village families and period-property owners — a community with a strong sense of its quarrying heritage and the building stock that came with it.',
    metaDescription:
      "Period property maintenance, lime mortar repointing and historic valley-side home care in Box. Accredited heritage builders.",
    titleTemplate: 'Box Builders | Period Property | Aspect Builds',
  },
  {
    slug: 'frome',
    name: 'Frome',
    city: 'bath',
    postcode: 'BA11',
    type: 'Independent market town',
    blurb: "One of the country's most creative small towns — steeply terraced streets, hillside plots and industrial conversions.",
    intro:
      "Period property renovations, terraced hillside extensions and heritage building conversions for one of Somerset's most distinctive market towns.",
    longIntro:
      "Frome's reputation as one of the country's most creative small towns is matched by a genuinely distinctive building stock — steeply terraced streets like Trinity and Catherine Hill, Georgian townhouses around the centre, and a growing number of former industrial and commercial buildings being converted into homes and studios. The terrain alone demands experience: sloped-site excavation, retaining structures and party-wall assessments on tightly packed terraces are a regular part of our work here. We bring that same structural rigour to full home renovations and conversions for the town's steadily growing community of homeowner-investors.",
    propertyTypes: [
      'Steeply terraced period housing around Trinity and Catherine Hill',
      'Georgian townhouses around the town centre',
      'Former industrial and commercial buildings converted to homes and studios',
      'Period cottages on the hillside streets',
      'Modern estates on the town edges',
    ],
    landmarks: [
      'Catherine Hill and the independent quarter',
      'Trinity Street and the steep terrace lanes',
      'The Frome Festival and market scene',
      'The historic Cheap Street with its water channel',
      'Frome railway station on the Bath line',
      'The wool and textile heritage in the town fabric',
    ],
    nearbyAreas: ['trowbridge', 'radstock', 'midsomer-norton', 'frome'],
    tier: 'primary',
    region: 'Somer Valley',
    costVariation:
      'Steep terraced-street access, retaining wall construction on sloped plots and former commercial or industrial building conversions are all managed within our standard project scope — the terrain is priced in from the first visit.',
    nearbyProjects: [
      'Garage conversion in Frome — full case study on our Projects page',
    ],
    transport:
      'On the A361 and A362, with its own station on the line into Bath and Weymouth; Bath is a straightforward drive over the A36, and the town sits within easy reach of both Bath and the Somer Valley.',
    demographics:
      "The town's well-documented community of independent makers, families and homeowner-investors — a market town with an unusually young, renovation-minded population.",
    metaDescription:
      'Period property renovations, terraced hillside extensions and heritage building conversions in Frome. Accredited local builders.',
    titleTemplate: 'Frome Builders | Period Renovations | Aspect Builds',
  },

  // =================== SOMER VALLEY ===================
  {
    slug: 'radstock',
    name: 'Radstock',
    city: 'bath',
    postcode: 'BA3',
    type: 'Former coalfield town',
    blurb: "Former mining town at the foot of the Somer Valley — terraced miners' cottages and Victorian housing, renovated properly.",
    intro:
      "Terraced property renovations, structural updates and quality home improvements across Radstock's former coalfield housing stock.",
    longIntro:
      "Radstock's streets of terraced miners' cottages and Victorian housing were built for the Somerset coalfield workforce — a history the town now preserves at Radstock Museum, housed in the old Market Hall — and the town has spent the decades since reinventing itself without losing that solid, no-nonsense housing stock. Owners here want the same thing we hear across the Somer Valley: genuine build quality and honest pricing, without a Bath postcode premium attached. Former mine-shaft records are a real consideration on some sites, and we survey for them as standard before any groundwork begins. From kitchen and bathroom refurbishments to full structural renovations, we apply the same rigorous project management regardless of project size — and that honest, fixed-price refurbishment work is exactly what Radstock owners ask us for.",
    propertyTypes: [
      "Terraced miners' cottages",
      'Victorian terraced housing',
      'Inter-war and post-war semis on the town edges',
      'Detached homes on the higher ground at Writhlington and Peasedown',
      'Modern estates on the former colliery land',
    ],
    landmarks: [
      'Radstock Museum in the old Market Hall',
      'The Somer Valley FM and town conservation centre',
      'The former colliery sites and miner-cottage streets',
      'The Norton Radstock viaduct',
      'The Two Tunnels Greenway terminus',
      'The Wellow Brook and the town park',
    ],
    nearbyAreas: ['midsomer-norton', 'westfield', 'frome', 'twerton'],
    tier: 'primary',
    region: 'Somer Valley',
    costVariation:
      'Former mine-shaft survey requirements, terraced-cottage structural assessment and party wall considerations are addressed proactively on every Radstock project — groundwork is only quoted once the surveys are in, so there are no surprises.',
    nearbyProjects: [],
    transport:
      'On the A367 from Bath (about half an hour) and the A362 toward Frome, served by buses across the Somer Valley; the Two Tunnels traffic-free route connects to Bath by bike.',
    demographics:
      'Long-established Somer Valley families and newer commuters priced out of Bath — owners who consistently ask for genuine quality and honest pricing, and expect exactly what the quote says.',
    metaDescription:
      'Terraced property renovations, structural updates and honest, fixed-price building work in Radstock. Fully insured local builders.',
    titleTemplate: 'Radstock Builders | Terraced Renovations | Aspect Builds',
  },
  {
    slug: 'midsomer-norton',
    name: 'Midsomer Norton',
    city: 'bath',
    postcode: 'BA3',
    type: 'Somer Valley town',
    blurb: 'Somer Valley town with a conservation High Street, viaduct and terraced Victorian housing — plus estate extensions further out.',
    intro:
      "Home renovations, structural extensions and terraced property updates for Midsomer Norton's mix of period high-street buildings and residential estates.",
    longIntro:
      "Midsomer Norton's town centre still carries the character of its coal-mining and market-town history — a conservation area around the High Street and the Norton Radstock viaduct, surrounded by terraced Victorian housing and later estate development further out. We see a steady mix of work here: structural extensions and loft conversions on the residential estates, and more careful heritage-aware renovation for period properties closer to the centre. Sloped sites are common on the valley's edges, and we plan retaining and drainage work into every project from the outset rather than treating it as an afterthought.",
    propertyTypes: [
      'Terraced Victorian housing near the High Street',
      'Period high-street buildings in the conservation area',
      'Post-war and modern estate housing on the outskirts',
      'Semis and detached homes on the valley slopes',
      'Houses needing sloped-site retaining solutions',
    ],
    landmarks: [
      'The High Street conservation area',
      'The Norton Radstock viaduct',
      'The Somer River and riverside walks',
      'The former coalfield railway heritage',
      'The South Wansdyke and Silver Street lanes',
      'The town park and bowling green',
    ],
    nearbyAreas: ['radstock', 'westfield', 'frome'],
    tier: 'secondary',
    region: 'Somer Valley',
    costVariation:
      'Town-centre Conservation Area compliance, sloped valley-edge site logistics and terraced Victorian structural assessment are managed as standard across Midsomer Norton — retaining and drainage is planned in from the outset.',
    nearbyProjects: [],
    transport:
      'On the A367 between Bath and Radstock with frequent buses into Bath in around half an hour; the A37 runs south toward Shepton Mallet for the wider Somerset corridor.',
    demographics:
      'Families and long-term residents across the estates, with town-centre property owners investing in heritage-aware renovation of the Victorian stock.',
    metaDescription:
      'Home renovations, structural extensions and terraced property updates in Midsomer Norton. Transparent, fixed-quote local builders.',
    titleTemplate: 'Midsomer Norton Builders | Home Renovations | Aspect Builds',
  },
  {
    slug: 'westfield',
    name: 'Westfield',
    city: 'bath',
    postcode: 'BA3',
    type: 'Post-industrial Somer Valley district',
    blurb: 'Somer Valley district between Radstock and Midsomer Norton — post-war housing built on former colliery land, now steadily modernised.',
    intro:
      'Extensions, refurbishments and structural improvements across the post-war housing estates of the Somer Valley.',
    longIntro:
      "Westfield grew as the housing district between Radstock and Midsomer Norton, its post-war estates built to house the coalfield workforce and now home to the families and commuters who make the Somer Valley their own. The stock is dominated by solid post-war semis, terraces and bungalows — well-built housing that rewards structural investment, with plot sizes that generally take a rear extension and roofs that often suit dormer loft conversions. Typical work here is whole-home refurbishment, structural extensions and the practical upgrades that bring 1950s and 1960s housing up to modern family standards, all delivered on the same fixed-quote basis as the rest of our Somer Valley coverage.",
    propertyTypes: [
      'Post-war semi-detached estate housing',
      '1950s-60s terraced streets',
      'Bungalows popular with downsizers',
      'Detached homes on the higher ground',
      'Modern infill on former colliery land',
    ],
    landmarks: [
      'The Somer Valley between Radstock and Midsomer Norton',
      'The former colliery heritage sites',
      'Westfield trading estate and the local employment belt',
      'The Foxcote and Haydon boundaries',
      'The greenway routes toward Radstock',
      'The valley-side footpaths and cycle links',
    ],
    nearbyAreas: ['radstock', 'midsomer-norton'],
    tier: 'secondary',
    region: 'Somer Valley',
    costVariation:
      'Post-war construction is generally straightforward to assess, so quotes here are among the most predictable we give — the same fixed-price, itemised-quote discipline as everywhere else.',
    nearbyProjects: [],
    transport:
      'Served by the A367 corridor between Radstock and Midsomer Norton with buses into Bath in around half an hour; local schools, shops and the trading estate sit within the district itself.',
    demographics:
      'Younger families and first-time buyers alongside long-standing Somer Valley households — an area where good value building work is genuinely appreciated.',
    metaDescription:
      'Home extensions, refurbishments and structural improvements in Westfield, Somer Valley. Transparent fixed quotes from local builders.',
    titleTemplate: 'Westfield Builders | Somer Valley Homes | Aspect Builds',
  },
];

// Helpers
export const getArea = (slug: string): Area | undefined =>
  AREAS.find((a) => a.slug === slug);

export const getAreasByCity = (city: 'bath'): Area[] =>
  AREAS.filter((a) => a.city === city);

export const getBathAreas = (): Area[] => getAreasByCity('bath');

// Legacy export — the KD template's Bristol pages import this name.
// Aspect trades in Bath only, so it returns an empty list.
export const getBristolAreas = (): Area[] => [];

/** Region order for coverage presentation. Bath first, then rings outward. */
export const REGION_ORDER = ['Bath City', 'Bath Surrounding Villages', 'West Wiltshire', 'Somer Valley'] as const;

export type Region = (typeof REGION_ORDER)[number];

export const getAreasByRegion = (): { region: Region; areas: Area[] }[] =>
  REGION_ORDER.map((region) => ({
    region,
    areas: AREAS.filter((a) => a.region === region),
  })).filter((g) => g.areas.length > 0);
