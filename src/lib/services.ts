// Services offered by Aspect Builds & Maintenance Ltd (aspectbuilds.co.uk).
// 14 services — slugs match the LIVE site URLs (/bath-kitchen-fitters/ etc.)
// so the rebuild preserves every existing service URL and its link equity.
//
// All copy is trade-specific (building/construction) and Bath-local.
// Content depth: every service has long-form intro, cost guide, process
// steps, materials list, problems we solve, benefits, full FAQ, a
// real-world case study, related services, and the structured data
// fields needed to produce a comprehensive Service + Offer JSON-LD
// block. This is what makes the site rank like a 50k-grade build.

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
  city: 'bath' | 'bath';
  tagline: string;
  // Bath-side tagline. Set only where `tagline` names Bath; Bath pages
  // fall back to `tagline` when this is absent. See getTagline().
  bathTagline?: string;
  // Above-the-fold, H1-subheading paragraph (1-2 sentences)
  intro: string;
  // Long-form intro used as the meaty first paragraph under the H1.
  // 500-800 chars. Bath-specific, mentions trade systems by name.
  longIntro: string;
  // 6-8 punchy bullets describing what the service covers
  whatWeDo: string[];
  // Common problems customers come to us with — what we solve
  problems: string[];
  // Benefits of choosing this service — 6-8 specific, with numbers
  benefits: string[];
  // Step-by-step process — 8-12 detailed steps
  processSteps: { title: string; description: string }[];
  // Materials / systems we use — manufacturer + product
  materials: { manufacturer: string; products: string[]; notes: string }[];
  // Cost guide — per-m² + per-property-type ranges
  costGuide: {
    perSquareMetre: string;
    perPropertyType: { type: string; lowEnd: string; highEnd: string }[];
    factorsAffectingPrice: string[];
    includes: string[];
    excludes: string[];
  };
  // Service-specific FAQ (10-12 questions, each answered in 2-4 sentences)
  faq: ServiceFaq[];
  // A real-world case study
  caseStudy: CaseStudy;
  // Named jobs within this service that people search for by name, and that
  // GBP lists as separate services. Each gets an anchored block so a GBP
  // entry can deep-link to it instead of needing a thin page of its own.
  subServices?: { id: string; name: string; summary: string }[];
  // Slugs of related services customers often combine
  relatedServices: string[];
  // Image alt text for the hero/feature photo
  heroImageAlt: string;
  // Service category for badge styling
  category: 'rendering' | 'plastering' | 'insulation' | 'structural' | 'interiors'
    | 'external' | 'grounds' | 'heritage' | 'glazing' | 'maintenance';
  // Meta description (155 chars ideal)
  metaDescription: string;
  // Service meta for SEO title (50-60 chars ideal)
  titleTemplate: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'builders-bath',
    name: 'Builders in Bath',
    shortName: 'Builders in Bath',
    city: 'bath',
    tagline: 'Builders in Bath. 22 years trading. Zero surprises.',
    intro: 'Aspect Builds is a general contractor in Bath providing fixed-price contracts across extensions, loft conversions, heritage restoration, new builds, and full house refurbishments.',
    longIntro: 'Bath homeowners have been burned by day-rate builders and open-ended estimates. Aspect Builds is the opposite: every project — from a £10,000 bathroom to a £500,000 full build — runs on a fixed-price contract, one project manager, and a crew of CSCS cardholders who treat your home like our own. Twenty-two years in Bath, 200+ completed projects, and the same standard on every one.',
    whatWeDo: [
      'Fixed-price itemised quotes — what we quote is what you pay',
      'One project manager, one timeline, one contract',
      'Listed-building experience (conservation officers, lime mortars, Bath stone)',
      'Daily site tidy — your home stays liveable during the work',
      '£10M+ public liability and AXA-verified',
      'MCIOB chartered, CSCS cardholders, City & Guilds / NVQ qualified',
    ],
    problems: [
      'Day-rate builders who let costs drift — Aspect quotes fixed and holds the price',
      'Open-ended estimates with hidden extras — every Aspect quote is itemised line by line',
      'Projects that stall with no point of contact — one project manager, start to finish',
      'Cowboy work with no paperwork — Building Control sign-off and certificates on every job',
      'Sites left filthy — daily tidy-ups and protected access are standard',
      'No aftercare once the invoice clears — we come back if anything needs attention',
    ],
    benefits: [
      'Fixed-price itemised quotes — what we quote is what you pay, no day rates',
      'One project manager, one timeline, one contract from start to handover',
      '22+ years trading in Bath with 200+ completed projects behind us',
      '£10M+ public liability, AXA-verified — certificates available on request',
      'MCIOB chartered builder leading every project',
      'Listed-building experience — conservation officers, lime mortars, Bath stone',
      'Daily site tidy — your home stays liveable during the work',
      '16 TrustATrader reviews and 5-star Google rating from real Bath customers',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the project property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your Bath project works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [

    ],
    costGuide: {
      perSquareMetre: 'No specific per-m² figure — priced per project at the fixed-price site visit',
      perPropertyType: [

      ],
      factorsAffectingPrice: [

      ],
      includes: [

      ],
      excludes: [

      ],
    },
    faq: [
      { question: 'How much does it cost to hire a builder in Bath?', answer: 'Single-room renovations start around £15,000. Whole-house renovations in Bath range from £60,000 to £250,000+. House extensions typically cost £2,500-£3,500 per square metre in the Bath area. We provide fixed-price itemised quotes after a free site survey.' },
      { question: 'How do I find a good builder in Bath?', answer: 'Look for: (1) verified Google reviews on the GBP profile, (2) TrustATrader or Checkatrade membership, (3) £10M+ public liability insurance, (4) MCIOB or similar professional body membership, (5) a permanent local office address, (6) fixed-price contracts in writing. Aspect Builds ticks all six.' },
      { question: 'Do you handle planning permission in Bath?', answer: 'Yes — full planning management is included in every fixed-price quote. We handle pre-applications, full planning drawings, design-and-access statements, and listed-building consent applications where required.' },
      { question: 'Are you insured?', answer: 'Yes — £10M+ public liability and AXA-verified. Every project is fully covered. Documentation available on request.' },
      { question: 'What areas do you cover?', answer: 'Bath, Bath, Keynsham, Bradford on Avon, Chippenham, Corsham, Trowbridge, Frome, Radstock, Midsomer Norton, Wells, Glastonbury, and the surrounding villages. We work within a 20-mile radius of our Dunkerton office.' },
      { question: 'Do you work on listed buildings?', answer: 'Yes — we work with conservation officers, use traditional materials (lime mortar, Bath stone, period-appropriate ironmongery), and handle listed-building consent applications. We\'ve completed heritage work in Bathampton, Batheaston, Widcombe, and across central Bath.' },
      { question: 'Can I live in my home during the work?', answer: 'Yes — most of our projects are in occupied homes. We isolate work areas, dust-sheet, clean daily, and respect your space. For larger projects, we can phase the work so you only have one room out of action at a time.' },
      { question: 'How long does a typical project take?', answer: 'Single-room renovations: 2-4 weeks. Bathrooms: 3-4 weeks. Kitchens: 4-6 weeks. Loft conversions: 6-10 weeks. House extensions: 8-16 weeks. Whole-house renovations: 3-6 months. New builds: 4-9 months. We give you a clear timeline before any work starts.' },
    ],
    caseStudy: {
      title: 'Aspect Builds construction project, Bath',
      location: 'bath-loft-extension',
      propertyType: 'Bath property',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Aspect Builds construction project, Bath — before',
      afterAlt: 'Aspect Builds construction project, Bath — finished work',
    },
    relatedServices: [],
    heroImageAlt: 'Aspect Builds construction project in Bath — completed building work',
    category: 'structural',
    metaDescription: 'Fixed-price builders in Bath. 22+ years, £10M+ insured, MCIOB chartered. Extensions, lofts, heritage, refurbishments — one PM, zero surprises.',
    titleTemplate: 'Builders in Bath | 22 Years Trading, £10M Insured | Aspect Builds',
  },
  {
    slug: 'kitchen-fitters',
    name: 'Kitchen Fitters Bath',
    shortName: 'kitchen refit',
    city: 'bath',
    tagline: 'Kitchen fitters in Bath. Designed, supplied, expertly installed.',
    intro: 'Bespoke kitchen design, supply, and expert installation across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full project management from rip-out to final polish, with one project manager on every job.',
    longIntro: 'A kitchen refit fails on coordination — plumber waits for electrician, tiler waits for plasterer, and you live weeks without a sink. We run kitchens as one managed project: design with 3D visuals, supply at trade prices from Howdens, Magnet and Wren, structural work and building regs handled in-house, then plumbing, electrics, tiling, flooring and decoration by the same team. One quote, one timeline, one point of contact.',
    whatWeDo: [
      'Bespoke kitchen design with 3D visuals',
      'Kitchen supply from Howdens, Magnet, and Wren at trade prices',
      'Structural knock-throughs with RSJ installation',
      'Kitchen extension builds (side-return, rear, wraparound)',
      'Plumbing, electrics, tiling, flooring, decoration — all in-house',
      'Tanked plasterboard wetroom-standard work',
      'Lime plaster for listed properties',
      'Building regs sign-off and full documentation',
    ],
    problems: [
      'Main contractors who vanish between trades — one PM runs the whole refit',
      'Showroom mark-ups on supply — we buy at trade prices and pass the saving on',
      'Structural knock-throughs bolted onto a kitchen job as an afterthought — RSJs with calcs are in-house',
      'Bath listed properties handled with the wrong plaster — lime plaster where the building needs it',
      'No wet-area protection behind sinks and appliances — tanked plasterboard as standard',
      'No building regs documentation — sign-off and full documentation included',
    ],
    benefits: [
      'Like-for-like refits from £8,000–£15,000; new layouts £15,000–£28,000 (measured Bath ranges)',
      'Supply at trade prices from Howdens, Magnet and Wren',
      'Typical refit takes 1–2 weeks; knock-through 3–4 weeks — dates fixed at quote',
      '3D visuals so you sign off the layout before a single cabinet is ordered',
      'Structural knock-throughs with RSJ installation handled in-house',
      'Plumbing, electrics, tiling, flooring and decoration all one team — no gaps between trades',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the refit property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your kitchen works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Howdens', products: ['Howdens Joinery kitchen ranges',
          'Trade-price carcasses and doors',], notes: 'Bath trade account — supply priced into your fixed quote.' },
      { manufacturer: 'Magnet & Wren', products: ['Magnet Trade',
          'Wren Kitchens',], notes: 'We quote supply from the brand that fits your budget and finish level.' },
    ],
    costGuide: {
      perSquareMetre: 'from £8,000 for a like-for-like refit; £15,000–£28,000 for a new layout; £28,000–£45,000+ where structural work is involved',
      perPropertyType: [
        { type: 'Like-for-like refit', lowEnd: '£8,000', highEnd: '£15,000' },
        { type: 'New layout / reconfiguration', lowEnd: '£15,000', highEnd: '£28,000' },
        { type: 'With structural knock-through or extension', lowEnd: '£28,000', highEnd: '£45,000+' },
      ],
      factorsAffectingPrice: [
      'Layout changes and structural work',
      'Appliance specification (integrated vs freestanding)',
      'Worktop choice — laminate vs quartz vs granite',
      'Listed-building lime plaster requirements',
      'Access and waste removal',
      ],
      includes: [
      'Full design, supply, installation and project management',
      'Structural work and building regs sign-off where included',
      'Plumbing, electrics, tiling, flooring and decoration',
      'Waste removal and daily clean',
      ],
      excludes: [
      'Appliances (quoted separately from your chosen supplier)',
      'Full house rewires beyond the kitchen electrics',
      'Decoration of rooms beyond the kitchen',
      ],
    },
    faq: [
      { question: 'How much does a kitchen refit cost in Bath?', answer: 'Costs vary widely depending on size, finish level, structural work, and whether you\'re reconfiguring the layout. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts in your Bath home. No day rates, no open-ended estimates.' },
      { question: 'How long does a kitchen refit take in Bath?', answer: 'A like-for-like kitchen refit in Bath typically takes 1-2 weeks. A knock-through to open-plan takes 3-4 weeks. A full extension build with the kitchen as the focal point takes 8-12 weeks from start to handover.' },
      { question: 'Do you handle planning permission for kitchen extensions in Bath?', answer: 'Yes — full planning management is included in every fixed-price quote. Pre-applications, full drawings, structural calcs, listed-building consent, building regs. All managed in-house by James, with full conservation-officer liaison for Bath\'s conservation areas.' },
      { question: 'Can you work around listed-building status in Bath?', answer: 'Yes — heritage and listed-building kitchen work is what we do. Bath stone restoration, lime mortar, conservation-officer liaison. We work in Bathampton, Batheaston, Widcombe, central Bath, and all Bath conservation areas.' },
      { question: 'Will I be without a kitchen during the work?', answer: 'We sequence the project so the kitchen is only unavailable for 3-5 days during the actual rip-out and install. Plumbing and electrics are pre-wired before the kitchen is disconnected, so you can usually keep a temporary kitchen setup going.' },
      { question: 'Do you supply the kitchen or can I use my own?', answer: 'Both work. We\'re trade-account holders at Howdens, Magnet, and Wren, so we can supply and pass through the discount. Or you can buy from wherever you like — we\'ll install it for the same labour price.' },
      { question: 'What if I change my mind during the build?', answer: 'We re-quote before proceeding. The fixed-price contract is clear: any change is documented, priced, and approved by you before we do the work. No surprise extras at the end.' },
      { question: 'Are you insured and qualified to work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Custom Kitchen & Underfloor Heating Refit',
    location: 'bath',
    propertyType: 'Interior & Cabinetry',
    problem: 'Complete kitchen refit — custom units, integrated appliances, underfloor heating, and a full strip-out and rebuild to a high standard.',
    solution: 'Full strip-out and disposal. New plumbing and electrical runs. Underfloor heating installed and tested before the floor went down. Custom-built kitchen units fitted to the walls, integrated appliances slotted in, worktops templated and fitted. Tiling, decorating, and finishing — handed over ready to use.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Completed to the Aspect standard — photographs on the projects page',
    beforeAlt: 'Custom Kitchen & Underfloor Heating Refit — before',
    afterAlt: 'Custom Kitchen & Underfloor Heating Refit — finished work',

    },
    relatedServices: ['extension-builders', 'renovation', 'bathroom-installers'],
    heroImageAlt: 'Bespoke kitchen installation by Aspect Builds — Howdens and Wren ranges at trade prices',
    category: 'interiors',
    metaDescription: 'Kitchen fitters in Bath. Howdens, Magnet, Wren at trade prices. From £8k like-for-like. Fixed price, one PM, rip-out to polish.',
    titleTemplate: 'Kitchen Fitters Bath | Fitted Kitchens | Aspect Builds',
  },
  {
    slug: 'extension-builders',
    name: 'House Extensions Bath',
    shortName: 'extension build',
    city: 'bath',
    tagline: 'House extensions in Bath. Single, double-storey, wraparound.',
    intro: 'Single-storey, double-storey, side-return, and wraparound house extensions across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full project management from planning to plaster.',
    longIntro: 'House extensions in Bath, Trowbridge and across BANES — from a side-return on a terraced street to a double-storey rear build. We handle planning drawings, structural steel, groundworks and Building Control in one fixed-price contract, so the number you sign is the number you pay. Single-storey builds typically run 10–14 weeks; double-storey 16–24 weeks — both confirmed at quote, not discovered mid-build.',
    whatWeDo: [
      'Single-storey rear extensions',
      'Double-storey side extensions',
      'Side-return extensions for terraced Bath homes',
      'Wraparound extensions combining rear and side',
      'Kitchen extensions with open-plan living',
      'Conservatory and orangery builds',
      'Garden rooms and outbuildings',
      'Two-storey extensions with structural steel',
    ],
    problems: [
      'Builders who quote cheap and re-quote after the concrete goes in — fixed price from day one',
      'Planning permission surprises — we flag Bath conservation-area constraints at the site visit',
      'Extensions that ignore the existing house — matching brick, rooflines and levels',
      'No party wall paperwork — we handle notices and surveyors',
      'Structural steel bought as an afterthought — RSJs come with proper calcs',
      'Site chaos for months — scheduled trades, daily tidy, one timeline',
    ],
    benefits: [
      'Single-storey from ~£60,000; double-storey £90,000–£150,000+ (measured Bath ranges)',
      'Planning drawings, submission and party wall notices managed for you',
      '10–14 weeks single-storey, 16–24 double-storey — confirmed in the quote',
      'RSJ / steel installation with structural calcs and Building Control sign-off',
      'Conservation-area and listed-adjacent sites handled — pre-apps where needed',
      'Kitchen extensions with open-plan structure built for the layout you want',
      '200+ projects across Bath and BANES since 2004',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the build property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your extension works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Engineering & materials', products: ['RSJ / steel beams with structural calculations',
          'Blockwork and brick matching',
          'Insulated warm-roof and flat-roof systems',
          'SIPS where appropriate',], notes: 'Steel calcs supplied for Building Control; brick and roof matched to the existing house.' },
    ],
    costGuide: {
      perSquareMetre: 'single-storey from ~£60,000; double-storey £90,000–£150,000+ depending on size, finish and site conditions',
      perPropertyType: [
        { type: 'Single-storey rear extension', lowEnd: '£60,000', highEnd: '£75,000+' },
        { type: 'Double-storey extension', lowEnd: '£90,000', highEnd: '£150,000+' },
        { type: 'Wraparound extension', lowEnd: '£90,000', highEnd: '£140,000' },
      ],
      factorsAffectingPrice: [
      'Single vs double storey',
      'Ground conditions and foundations',
      'Conservation-area requirements',
      'Kitchen and bathroom fit-out inside the extension',
      'Access for plant and materials',
      ],
      includes: [
      'Full build from planning drawings to plastered shell',
      'Structural steel with calcs and Building Control sign-off',
      'First-fix and second-fix services as quoted',
      'Waste removal, site management and protection',
      ],
      excludes: [
      'Internal decoration beyond the quoted schedule',
      'Landscaping and garden reinstatement unless quoted',
      'Appliances and fixtures not specified in the quote',
      ],
    },
    faq: [
      { question: 'How much does a house extension cost in Bath?', answer: 'Costs vary widely depending on size, finish level, structural work, and site conditions. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does a house extension take in Bath?', answer: 'Single-storey rear extensions: 10-14 weeks. Double-storey: 16-24 weeks. Wraparound extensions: 20-28 weeks. We provide a detailed programme at quote stage and stick to it.' },
      { question: 'Do I need planning permission for an extension in Bath?', answer: 'Most rear extensions under 4m (or 3m on semi-detached) fall under Permitted Development. Bath\'s conservation area and Article 4 directions affect many properties. We check and handle the full application if needed — typically 8 weeks lead time.' },
      { question: 'Can you do side-return extensions in Bath?', answer: 'Yes — side-return extensions are a core part of our work in Bath\'s terraced housing stock. We work on Victorian and Georgian terraces across Widcombe, Oldfield Park, Bear Flat, Larkhall, and Bathwick. Typical 4-6m dig-out, kitchen extension, full structural work.' },
      { question: 'Can you do double-storey extensions in Bath?', answer: 'Yes — double-storey extensions are common in Bath. We handle the structural steel (RSJ), foundations, brickwork, roofing, and all internal fit-out. Typical project takes 16-24 weeks.' },
      { question: 'Will I be able to live in my home during the extension build?', answer: 'We isolate work areas, dust-sheet, clean daily, and respect your space. For larger projects, we can phase the work so you only have one room out of action at a time. Most Bath extension projects are in occupied homes.' },
      { question: 'Are you insured and qualified to do extension work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
      { question: 'Can you match the existing Bath stone on my extension?', answer: 'Yes — heritage Bath stone matching is a core part of our work. We source Bath stone from the same quarries used historically, and our brickwork matches existing mortar profiles, pointing styles, and stone coursing. Conservation-officer liaison included for listed properties.' },
    ],
    caseStudy: {
    title: 'Midford Garden Extension, Midford',
    location: 'midford-garden-extension',
    propertyType: 'Midford family home',
    problem: 'The existing rear of the property was small and disconnected from the garden. The client wanted an open-plan living and dining space that genuinely brought the outside in — not just bi-folds on a box, but a considered extension where the garden felt like part of the room.',
    solution: 'Full-width glazing with minimal frames for maximum sightlines. Level threshold between inside and out so the floor runs clean. Structural steelwork to open the rear wall without compromise. New foundations and insulated slab. Internally finished to move straight in — plastered, decorated, flooring laid.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Garden extension in Midford — open-plan living with full-width glazing, seamless floor transition, and a connection to the garden.',
    beforeAlt: 'Midford Garden Extension, Midford — before',
    afterAlt: 'Midford Garden Extension, Midford — finished work',

    },
    relatedServices: ['renovation', 'loft-conversion', 'kitchen-fitters'],
    heroImageAlt: 'Rear extension build in Bath by Aspect Builds — steel and blockwork stage',
    category: 'structural',
    metaDescription: 'House extensions in Bath & Trowbridge. Single-storey from ~£60k, double £90k-£150k. Fixed price, planning handled, one PM.',
    titleTemplate: 'House Extensions Bath | Side-Return & Rear | Aspect Builds',
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversions Bath',
    shortName: 'loft conversion',
    city: 'bath',
    tagline: 'Loft conversions in Bath. Velux, dormer, hip-to-gable.',
    intro: 'Velux, dormer, hip-to-gable, and mansard loft conversions across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full project management from structural design to final decoration.',
    longIntro: 'A Bath loft conversion turns dead roof space into a bedroom, bathroom or office without surrendering garden — the practical answer to Bath terraces and semis where extending outward is blocked by conservation rules. We design the structure, install the steel, and hand you finished, decorated rooms with Building Control sign-off. Velux from 4–6 weeks; mansards from 10–14.',
    whatWeDo: [
      'Velux loft conversions (rooflight-only)',
      'Dormer loft conversions (rear or side dormer)',
      'Hip-to-gable loft conversions',
      'Mansard loft conversions',
      'L-shaped dormer loft conversions',
      'Loft conversions with en-suite bathrooms',
      'Loft conversions with dormer balconies',
      'Listed-building loft conversions (conservation-officer liaison)',
    ],
    problems: [
      'Head-height disappointment — we assess the real usable height before you commit',
      'Party wall notices ignored — we handle the notices and surveyor process',
      'Lofts that fail fire regs — escape windows, protected stairs and alarms are in the spec',
      'Under-specified steel — structural calcs and Building Control are part of the quote',
      'Bath conservation areas treated as an afterthought — we brief the conservation officer where needed',
      'Floor joists slapped over existing ceilings — proper load-bearing design every time',
    ],
    benefits: [
      'Velux £18,000–£28,000; dormer £35,000–£55,000; hip-to-gable £40,000–£65,000; mansard £50,000–£80,000+ (measured Bath ranges)',
      '4–6 weeks for a Velux to 10–14 for a mansard — timeline fixed at quote',
      'Full structural design with steel calcs included',
      'Building Control sign-off and certificates handed over at completion',
      'En-suite and dormer-balcony options built into the same contract',
      'Listed-building loft conversions with conservation-officer liaison',
      'One project manager from first drawing to final coat of paint',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the conversion property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your loft works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Structural & access', products: ['RSJ / steel beams with structural calcs',
          'Staircase systems (space-saving and traditional)',], notes: 'Stair placement designed around the Bath terrace footprint — the make-or-break of any Bath loft.' },
      { manufacturer: 'Roofing & insulation', products: ['Velux / keylight roof windows',
          'Warm-roof insulation to current Part L',], notes: 'Roof windows specified for conservation areas where needed.' },
    ],
    costGuide: {
      perSquareMetre: 'Velux £18,000–£28,000; dormer £35,000–£55,000; hip-to-gable £40,000–£65,000; mansard £50,000–£80,000+',
      perPropertyType: [
        { type: 'Velux (rooflight-only)', lowEnd: '£18,000', highEnd: '£28,000' },
        { type: 'Dormer', lowEnd: '£35,000', highEnd: '£55,000' },
        { type: 'Hip-to-gable', lowEnd: '£40,000', highEnd: '£65,000' },
        { type: 'Mansard', lowEnd: '£50,000', highEnd: '£80,000+' },
      ],
      factorsAffectingPrice: [
      'Conversion type',
      'Head height and existing structure',
      'Stair routing',
      'Bathroom addition and steel loads',
      'Conservation-area requirements',
      ],
      includes: [
      'Structural design, steel, and full build',
      'Staircase, insulation, plaster, electrics and plumbing',
      'Building Control sign-off and certificates',
      'Final decoration as quoted',
      ],
      excludes: [
      'Furniture and final dressing',
      'Garden or roof-terrace works unless specified',
      'Listed-consent fees (passed through at cost, shown in the quote)',
      ],
    },
    faq: [
      { question: 'How much does a loft conversion cost in Bath?', answer: 'Costs vary widely depending on the type of conversion (Velux, dormer, hip-to-gable, mansard), size, structural work, and finish level. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does a loft conversion take in Bath?', answer: 'Velux conversion: 4-6 weeks. Dormer conversion: 6-10 weeks. Hip-to-gable: 8-12 weeks. Mansard: 10-14 weeks. We provide a detailed programme at quote stage and stick to it.' },
      { question: 'Do I need planning permission for a loft conversion in Bath?', answer: 'Most Velux conversions fall under Permitted Development. Dormer and hip-to-gable usually need planning permission, especially in Bath\'s conservation area. We check and handle the full application if needed — typically 8 weeks lead time.' },
      { question: 'Can you do hip-to-gable loft conversions in Bath?', answer: 'Yes — hip-to-gable is a core part of our loft conversion work. We work on semi-detached and detached houses across Bath. Structural calculations, building regulations, party wall agreements — all managed in-house.' },
      { question: 'Can you build a dormer loft conversion in Bath?', answer: 'Yes — rear dormers, side dormers, and L-shaped dormers are all part of our work. We handle the structural work, the dormer construction, the windows, and the internal fit-out.' },
      { question: 'Can you do a loft conversion on a listed building in Bath?', answer: 'Yes — heritage and listed-building loft conversions are part of our work. Conservation-officer liaison, traditional materials, sympathetic detailing. Work that respects the building\'s heritage and meets Bath conservation requirements.' },
      { question: 'Will I be able to live in my home during the loft conversion?', answer: 'Yes — most loft conversions are done with the home occupied. We isolate the work area, dust-sheet, clean daily, and respect your space. Typical disruption is 4-6 weeks of noise and dust during the structural phase.' },
      { question: 'Are you insured and qualified to do loft conversion work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Bath Loft Extension, Bath',
    location: 'bath-loft-extension',
    propertyType: 'Bath Victorian terrace',
    problem: 'Converting a loft into habitable space means getting the structure right. Floor joists strong enough for four rooms. Staircase that meets building regs without eating the floor below. Waterproof Juliet balconies integrated into a listed-city roofline. And an ensuite that needs plumbing run through two storeys of existing build.',
    solution: 'New structural floor throughout. Purpose-built staircase designed to building regs. Four distinct rooms — bedroom, dressing area, ensuite, and landing. Two Juliet balconies for natural light and outlook. Every detail tied back to structural integrity and watertight finish.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Full loft extension in Bath — four rooms, ensuite, new staircase and two Juliet balconies. Maximum space from an existing footprint.',
    beforeAlt: 'Bath Loft Extension, Bath — before',
    afterAlt: 'Bath Loft Extension, Bath — finished work',

    },
    relatedServices: ['extension-builders', 'renovation', 'bathroom-installers'],
    heroImageAlt: 'Dormer loft conversion in Bath by Aspect Builds — rear elevation',
    category: 'structural',
    metaDescription: 'Loft conversions in Bath. Velux £18k-£28k, dormer £35k-£55k. Fixed price, regs handled, 4-14 weeks.',
    titleTemplate: 'Loft Conversions Bath | Velux & Dormer | Aspect Builds',
  },
  {
    slug: 'renovation',
    name: 'House Renovations Bath',
    shortName: 'house refurbishment',
    city: 'bath',
    tagline: 'Full house refurbishments in Bath. One PM, whole-house.',
    intro: 'Complete internal refurbishments and turnkey property transformations across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full project management from rip-out to final polish, with one project manager on every job.',
    longIntro: 'Full house refurbishments in Bath, Radstock and across BANES — rewires, re-plumbs, re-plasters and refits under one contract. We run the whole programme so you never coordinate trades yourself: strip-out, first fix, second fix, decoration, handover. A 2-bed terrace typically runs 8–12 weeks; a 4-bed detached 16–24. Fixed price throughout — including Radstock and Chippenham refurbishment projects where the housing stock demands different treatments.',
    whatWeDo: [
      'Full house refurbishments and turnkey renovations',
      'Reconfigurations — wall removals, RSJs, open-plan',
      'Whole-house rewire and re-plumb',
      'Whole-house re-plaster and redecorate',
      'New kitchens and bathrooms as part of refurb',
      'Heritage restoration for period properties',
      'New flooring throughout',
      'New heating systems and smart-home integration',
    ],
    problems: [
      'Coordinating five trades yourself — one PM owns the schedule',
      'Quotes that exclude the "second fix" — everything itemised up front',
      'Period features destroyed by modern methods — lime plaster and Bath stone respected',
      'Rewires and re-plumbs skimped — full-house services renewal done properly',
      'Projects that run on with no end date — 8–12 weeks for a 2-bed means 8–12 weeks',
      'Decoration rushed over wet plaster — timelines include genuine drying',
    ],
    benefits: [
      '8–12 weeks for a 2-bed terrace; 12–16 for a 3-bed semi; 16–24 for a 4-bed detached (measured Bath ranges)',
      'Whole-house rewire and re-plumb within the same fixed-price contract',
      'One project manager coordinating every trade from strip-out to handover',
      'Heritage restoration available for period properties within the same project',
      'Smart-home integration and new heating systems as specified',
      'Daily site tidy — liveable-in refurbs wherever the scope allows',
      'Fixed price: the quote is the contract',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the refurbishment property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your home works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Heating & electrics', products: ['Whole-house rewires to current BS 7671',
          'Central heating system replacement',
          'Smart-home integration (Nest, Tado)',], notes: 'Certified electricians and plumbers on the Aspect team.' },
    ],
    costGuide: {
      perSquareMetre: 'typical full refurb: 2-bed terrace £40,000–£70,000; 3-bed semi £60,000–£95,000; 4-bed detached £90,000–£160,000+ — sized at quote',
      perPropertyType: [
        { type: '2-bed terrace', lowEnd: '£40,000', highEnd: '£70,000' },
        { type: '3-bed semi', lowEnd: '£60,000', highEnd: '£95,000' },
        { type: '4-bed detached', lowEnd: '£90,000', highEnd: '£160,000+' },
      ],
      factorsAffectingPrice: [
      'Scope — kitchens/bathrooms included or separate',
      'Structural reconfiguration',
      'Period features and lime plaster needs',
      'Access, protection and whether you live in during works',
      ],
      includes: [
      'Everything quoted: strip-out, services, plastering, joinery, decoration',
      'Building Control sign-off for structural and electrical works',
      'Waste management and daily cleaning',
      ],
      excludes: [
      'Furniture storage and contents insurance',
      'Works not in the itemised quote (re-quote process applies)',
      ],
    },
    faq: [
      { question: 'How much does a full house refurbishment cost in Bath?', answer: 'Costs vary widely depending on the size of the house, the scope of work, the finish level, and whether structural changes are needed. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does a full house refurbishment take in Bath?', answer: 'A 2-bed Bath terrace typically takes 8-12 weeks. A 3-bed semi typically takes 12-16 weeks. A 4-bed detached typically takes 16-24 weeks. We provide a detailed programme at quote stage and stick to it.' },
      { question: 'Do you do whole-house reconfiguration in Bath?', answer: 'Yes — wall removals, RSJs, open-plan layouts, knock-throughs are all part of our refurbishment work. We handle structural calculations, building regulations, and party wall agreements. Common in Bath\'s Victorian and Georgian terraces.' },
      { question: 'Do you do whole-house rewire and re-plumb?', answer: 'Yes — full electrical and plumbing replacement is a core part of our refurbishment work. NICEIC-registered electricians, gas-safe registered plumbers, all certified and documented for building regulations sign-off.' },
      { question: 'Do you do whole-house re-plaster?', answer: 'Yes — full re-plaster, tanked plasterboard for wet areas, lime plaster for listed properties, modern plasterboard for non-heritage. All part of our refurbishment service.' },
      { question: 'Can you refurbish a listed building in Bath?', answer: 'Yes — heritage and listed-building refurbishment is what we do. Conservation-officer liaison, traditional materials, sympathetic detailing. Work that respects the building\'s heritage and meets Bath conservation requirements.' },
      { question: 'Will I be able to live in my home during the refurbishment?', answer: 'We sequence the project so you can usually stay in the home for most of the work. We isolate work areas, dust-sheet, clean daily, and respect your space. For full rewire or major structural work, temporary relocation may be needed for 1-2 weeks.' },
      { question: 'Are you insured and qualified to do full house refurbishment in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, NICEIC registered, gas-safe registered. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
      title: 'Batheaston Heritage Renovation, Batheaston',
      location: 'batheaston-heritage-renovation',
      propertyType: 'Georgian-era home near Bath',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Batheaston Heritage Renovation, Batheaston — before',
      afterAlt: 'Batheaston Heritage Renovation, Batheaston — finished work',
    },
    relatedServices: ['kitchen-fitters', 'bathroom-installers', 'painting-decorating'],
    heroImageAlt: 'Full house refurbishment in Bath by Aspect Builds — living area after completion',
    category: 'interiors',
    metaDescription: 'Full house refurbishments in Bath. 8-24 weeks by size. Rewire, replumb, replaster, refit — fixed price, one PM.',
    titleTemplate: 'House Renovations Bath | Full Refurbishments | Aspect Builds',
  },
  {
    slug: 'heritage-restoration',
    name: 'Heritage Restoration Bath',
    shortName: 'heritage project',
    city: 'bath',
    tagline: 'Bath heritage. Bath stone, lime mortar, sympathetic repairs.',
    intro: 'Heritage restoration, Bath stone work, lime mortar repointing, and listed-building repairs across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full project management with conservation-officer liaison.',
    longIntro: 'Bath\'s listed stock deserves more than cement repointing and wrong-slime renders. We restore Georgian and Victorian properties with the materials the buildings were built from — Bath stone from traditional sources, NHL lime mortars, sympathetic sash repairs — and we handle the conservation officer, the listed-building consent and the heritage paperwork as part of the contract. Stone conservation in Bath is the heart of what we do.',
    whatWeDo: [
      'Bath stone restoration and replacement',
      'Lime mortar repointing',
      'Listed-building consent applications',
      'Georgian and Victorian property restoration',
      'Conservation-area work',
      'Traditional sash window repair',
      'Lime plaster and lime render',
      'Heritage brickwork and stonework matching',
    ],
    problems: [
      'Cement mortar on a listed wall — traps moisture and spalls the stone; lime only',
      'Sandblasting Bath stone — destroys the weathered surface permanently',
      'Wrong stone matched badly — we source matched Bath stone from traditional quarries',
      'No listed-building consent — we prepare and manage the applications',
      'Generic renders on Georgian façades — breathable lime renders and limewash',
      'Conservation officers treated as enemies — we brief them early and properly',
    ],
    benefits: [
      'Listed-building consent applications prepared and managed as part of the contract',
      'Lime mortars (NHL 3.5 and hot-lime) matched to the existing work',
      'Bath stone sourced from historic quarries and matched to the property',
      'Conservation-officer liaison from pre-application to sign-off',
      'Traditional sash window repair — splices, weights and cords, not replacement',
      'MCIOB chartered builder leading sensitive projects',
      '22+ years working on Bath’s Georgian and Victorian stock',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the restoration property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your property works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Heritage materials', products: ['NHL 2 / 3.5 / 5 lime mortars',
          'Hot-mixed lime mortars',
          'Bath stone (Hartham Park, Combe Down sources)',
          'Limewash and breathable masonry paints',], notes: 'Material selection signed off with the conservation officer where consent applies.' },
    ],
    costGuide: {
      perSquareMetre: 'lime repointing £85–£120/m²; Bath stone replacement £180–£350/m²; sash window restoration £350–£700 per window',
      perPropertyType: [
        { type: 'Repointing (lime)', lowEnd: '£85', highEnd: '£120 per m²' },
        { type: 'Bath stone replacement', lowEnd: '£180', highEnd: '£350 per m²' },
        { type: 'Sash window restoration', lowEnd: '£350', highEnd: '£700 per window' },
      ],
      factorsAffectingPrice: [
      'Extent of stone decay',
      'Listed status and consent requirements',
      'Scaffolding and access',
      'Mortar analysis and matching',
      ],
      includes: [
      'Consent preparation, scaffolding, materials, skilled labour and sign-off',
      'Stone replacement and repair, repointing, limewash',
      'Sash window repair',
      ],
      excludes: [
      'Internal remodelling (separate contract)',
      'Modern interventions not consented',
      ],
    },
    faq: [
      { question: 'Can you work on listed buildings in Bath?', answer: 'Yes — listed-building work is a core part of our heritage restoration service. We work with conservation officers, use traditional materials (lime mortar, Bath stone, period-appropriate ironmongery), and handle listed-building consent applications. We\'ve completed heritage work in Bathampton, Batheaston, Widcombe, and across central Bath.' },
      { question: 'Do you do Bath stone restoration?', answer: 'Yes — Bath stone restoration, replacement, and matching is a core part of our heritage work. We source Bath stone from the same quarries used historically, and our brickwork matches existing mortar profiles, pointing styles, and stone coursing.' },
      { question: 'Do you do lime mortar repointing in Bath?', answer: 'Yes — lime mortar repointing is what we do. Hot-lime mortar, lime putty, hydraulic lime — all options. We match the original mortar profile, joint finish, and pointing style. Cement-based repointing on Bath stone is a common mistake that we actively correct.' },
      { question: 'Can you apply for listed-building consent in Bath?', answer: 'Yes — full listed-building consent management is included in every fixed-price quote. Pre-applications, full planning drawings, design-and-access statements, and listed-building consent applications. Conservation-officer liaison included.' },
      { question: 'What areas of Bath are in conservation areas?', answer: 'Most of central Bath is in a conservation area — Widcombe, Larkhall, Bathwick, Bear Flat, Oldfield Park, Lansdown, Bathampton, Batheaston, and Weston. We work in all of them.' },
      { question: 'Do you do Georgian property restoration in Bath?', answer: 'Yes — Georgian property restoration is a core part of our heritage work. Sash window repair, Bath stone restoration, lime plaster, period cornicing, traditional ironmongery. Work that respects the Georgian heritage and meets Bath conservation requirements.' },
      { question: 'Do you do Victorian property restoration in Bath?', answer: 'Yes — Victorian property restoration is part of our heritage work. Bay window repair, decorative cornicing, traditional tiling, period fireplaces. Work that respects the Victorian heritage and meets Bath conservation requirements.' },
      { question: 'Are you insured and qualified to do heritage work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
      title: 'Batheaston Heritage Renovation, Batheaston',
      location: 'batheaston-heritage-renovation',
      propertyType: 'Listed Bath stone home',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Batheaston Heritage Renovation, Batheaston — before',
      afterAlt: 'Batheaston Heritage Renovation, Batheaston — finished work',
    },
    relatedServices: ['stone-walling', 'plastering-rendering', 'property-maintenance'],
    heroImageAlt: 'Bath stone heritage restoration by Aspect Builds — repointed façade',
    category: 'heritage',
    metaDescription: 'Bath stone conservation & listed-building restoration in Bath. Lime mortar repointing, conservation-officer liaison. MCIOB-led.',
    titleTemplate: 'Stone Conservation & Heritage Restoration Bath | Aspect Builds',
  },
  {
    slug: 'new-build',
    name: 'New Builds Bath',
    shortName: 'new build',
    city: 'bath',
    tagline: 'Bath\'s new build contractor. From foundations up.',
    intro: 'Aspect Builds is Bath\'s trusted new build contractor — full new build homes, RSJ/steel installations, basement conversions, and garage transformations. Fixed-price contracts. £10M+ insured. MCIOB-led. One project manager from start to finish.',
    longIntro: 'Full new build homes in Bath and garage conversions from £12,000 — groundworks, steel, structure, roof, first and second fix, all under one fixed-price contract with one project manager. From an RSJ installation with proper structural calcs to a complete new home over 6–9 months, the same MCIOB-led team and the same building-control discipline.',
    whatWeDo: [
      'New home builds and custom residential construction',
      'Full new build projects from foundation to handover',
      'RSJ / steel beam installation with structural calcs',
      'Basement and cellar conversions',
      'Garage transformations and conversions',
      'Home additions — extensions, conservatories, garden rooms',
      'General building construction for major projects',
      'Groundworks, foundations, and substructure work',
    ],
    problems: [
      'Garage conversions with no building regs — ours are signed off and certificated',
      'Steel beams installed without calcs — every RSJ comes with structural calculations',
      'New builds handed over unfinished — snagging walk with James before payment',
      'Basement conversions without tanking — waterproofing designed in from the start',
      'Groundworks estimated on a day rate — foundations are a fixed line item',
      'Trades abandoned mid-project — one PM, one crew, one contract to handover',
    ],
    benefits: [
      'Integral garage conversions £12,000–£22,000; detached £20,000–£40,000+ (measured ranges)',
      'New builds delivered in 6–9 months depending on scale',
      'RSJ / steel installation with structural calcs and Building Control sign-off',
      'Basement and cellar conversions with tanking designed in',
      '£10M+ public liability and AXA-verified insurance',
      'MCIOB chartered oversight from foundation to handover',
      'Groundworks, foundations and substructure — all self-performed, not subcontracted away',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the build property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your project works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Structure & services', products: ['RSJ / steel with structural calcs',
          'Tankmatic / Type C basement waterproofing',
          'Air-source ready heating provisions',], notes: 'New builds are detailed for modern standards — EV charging provision, Part L compliance.' },
    ],
    costGuide: {
      perSquareMetre: 'garage conversions £12,000–£40,000 by type; new builds quoted per design — typically 6–9 months build time',
      perPropertyType: [
        { type: 'Integral garage conversion', lowEnd: '£12,000', highEnd: '£22,000' },
        { type: 'Attached garage conversion', lowEnd: '£15,000', highEnd: '£28,000' },
        { type: 'Detached garage conversion', lowEnd: '£20,000', highEnd: '£40,000+' },
      ],
      factorsAffectingPrice: [
      'New build size and specification',
      'Garage conversion type and habitation standards',
      'Groundworks and access',
      'Services connections',
      ],
      includes: [
      'Full build from foundation to handover, Building Control staged sign-off',
      'Groundworks, steelwork, structure, roof',
      'First and second fix services',
      'External works as quoted',
      ],
      excludes: [
      'Land purchase and planning application fees (managed at cost)',
      'Kitchen and bathroom fixtures beyond the quoted spec',
      'Boundary walls and landscaping unless quoted',
      ],
    },
    faq: [
      { question: 'How much does a new build home cost in Bath?', answer: 'New build costs in Bath vary widely depending on size, finish level, site conditions, and groundworks complexity. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does a new build take in Bath?', answer: 'A single new build home in Bath typically takes 6-9 months from groundwork start to handover. Plot preparation and planning permission typically add 3-6 months on top of that. We give you a detailed build programme at quote stage.' },
      { question: 'Do you handle planning permission for Bath new builds?', answer: 'Yes — full planning management is included in every fixed-price quote. Pre-applications, full drawings, structural calcs, listed-building consent, building regs. All managed in-house by James, with full conservation-officer liaison for Bath\'s conservation areas.' },
      { question: 'Do you install RSJs (steel beams) in Bath?', answer: 'Yes — RSJ/steel beam installation is a core part of our structural work. We work with structural engineers, coordinate the building inspector visit, and sign off the work for building regulations. Common projects include wall removals, open-plan conversions, and load-bearing wall removals.' },
      { question: 'Can you convert a basement in Bath?', answer: 'Yes — basement and cellar conversions are part of our structural work. Tank installation, insulation, drainage, electrical, plastering, decoration. Especially common in central Bath\'s Georgian and Victorian terraces where extending up or out isn\'t an option.' },
      { question: 'Can you convert a garage in Bath?', answer: 'Yes — garage conversions are a fast, cost-effective way to add living space. We work on integral garages, attached garages, and detached garages across Bath and BANES. Typically 4-6 weeks from start to handover.' },
      { question: 'What about listed-building new builds in Bath?', answer: 'Listed-building new build work is uncommon but we do sympathetic new builds in conservation areas. Conservation-officer liaison, Bath stone, lime mortar, traditional detailing. We work in Bathampton, Batheaston, Widcombe, and all Bath conservation areas.' },
      { question: 'Are you insured and qualified for new build work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Greenhouse Base Construction',
    location: 'bath',
    propertyType: 'Structural & Scale Builds',
    problem: 'The garage was a cold, damp shell with a concrete floor and no insulation. The client needed it to become genuine living space — warm, bright, and indistinguishable from the rest of the house. That means dealing with damp-proofing, thermal efficiency, building regs, and making the conversion feel like it was always part of the home, not a afterthought tacked on the side.',
    solution: 'Full damp-proof course and insulated floor slab. Internal wall insulation throughout. New window and door replacing the garage door opening. Electrics, plumbing, and heating tied into the existing system. Plastered, decorated, and finished to match the rest of the property.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Garage conversion in Frome — unused space transformed into a proper living area. New floor, insulated walls, full electrics and plumbing.',
    beforeAlt: 'Greenhouse Base Construction — before',
    afterAlt: 'Greenhouse Base Construction — finished work',

    },
    relatedServices: ['extension-builders', 'renovation', 'property-maintenance'],
    heroImageAlt: 'New build construction in Bath by Aspect Builds — structural stage',
    category: 'structural',
    metaDescription: 'New build homes & garage conversions in Bath. £12k-£40k garage ranges. Foundation to handover, fixed price, 6-9 months.',
    titleTemplate: 'New Builds & Garage Conversions Bath | Aspect Builds',
  },
  {
    slug: 'stone-walling',
    name: 'Bath Stone Walling',
    shortName: 'stone wall',
    city: 'bath',
    tagline: 'Bath stone walls. Retaining, boundary, garden.',
    intro: 'Retaining walls, boundary walls, and garden walls in natural Bath stone — dry stone and lime-mortared construction with proper foundations and drainage.',
    longIntro: 'A Bath stone wall that lasts starts below ground: proper foundations, drainage built in behind the face, and lime mortar joints that weather with the stone instead of fighting it. We build retaining, boundary and garden walls across Bath — with structural engineering behind every retaining design and stone matched to your property\'s existing work.',
    whatWeDo: [
      'Retaining wall construction & structural engineering',
      'Bath stone boundary & garden walls',
      'Dry stone walling — traditional, no mortar',
      'Lime-mortared stone walling & repointing',
      'Sloped-garden retaining structures',
      'Heritage wall repairs & rebuilding',
      'Bath stone matching to existing property',
      'Drainage design behind retaining structures',
    ],
    problems: [
      'Garden walls built on a shallow trench — frost heave and lean within three years',
      'Cement mortar on Bath stone — moisture trapped, stone spalls; lime only',
      'Retaining walls with no drainage — hydrostatic pressure is why walls fail',
      'Mismatched stone patched into old walls — we source matched Bath stone',
      'No wall start-point engineering — retaining walls carry real loads and get real design',
      'Heritage walls rebuilt in modern materials — conservation-appropriate only',
    ],
    benefits: [
      'Retaining walls £150–£250 per linear metre (measured Bath figure)',
      'Structural engineering behind every retaining structure',
      'Drainage designed in — backfill, weep holes and land drains as needed',
      'Bath stone matched to the existing property from traditional sources',
      'Dry stone and lime-mortared options — the right build for the wall’s job',
      'Heritage wall repairs that respect the original construction',
      'Foundation depth sized to wall height and ground conditions',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the walling property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your garden works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Heritage materials', products: ['NHL 3.5 / 5 lime mortars',
          'Bath stone (Hartham Park, Combe Down)',
          'Traditional lime pointing',], notes: 'Lime mortars only on Bath stone — cement traps moisture and spalls the face.' },
    ],
    costGuide: {
      perSquareMetre: 'retaining walls £150–£250 per linear metre; boundary walls £120–£200; dry stone £90–£160',
      perPropertyType: [
        { type: 'Retaining wall (Bath stone)', lowEnd: '£150', highEnd: '£250 per linear metre' },
        { type: 'Boundary wall', lowEnd: '£120', highEnd: '£200 per linear metre' },
        { type: 'Dry stone wall', lowEnd: '£90', highEnd: '£160 per linear metre' },
      ],
      factorsAffectingPrice: [
      'Wall height and retained load',
      'Stone choice and availability',
      'Foundation depth and drainage design',
      'Access for stone delivery and muck-away',
      ],
      includes: [
      'Foundations, drainage, stonework, pointing and finishing',
      'Structural calcs where the wall retains',
      'Waste removal and site tidy',
      ],
      excludes: [
      'Gate and railing installation (quoted separately)',
      'Full garden redesign beyond the wall line',
      'Fencing unless quoted',
      ],
    },
    faq: [
      { question: 'Do you build dry stone walls in Bath?', answer: 'Yes — traditional dry stone walling, built without mortar, is part of our stone walling service. We also build lime-mortared stone walls where a bonded structure suits the site better.' },
      { question: 'Can you repair or rebuild a collapsed retaining wall?', answer: 'Yes — retaining wall failure is usually a drainage problem as much as a structural one. We rebuild with proper foundations and drainage behind the wall so the same failure doesn\'t happen again.' },
      { question: 'Do retaining walls need planning permission in Bath?', answer: 'Retaining walls over a certain height, or in a Conservation Area, can need planning permission or a structural engineer\'s sign-off. We assess this at the first site visit and manage any applications needed as part of the fixed-price quote.' },
      { question: 'Do you match Bath stone for boundary and garden walls?', answer: 'Yes — Bath stone matching is core to our heritage and stone walling work. We match coursing, colour, and pointing style so a new or repaired wall doesn\'t look out of place next to the original.' },
      { question: 'How much does a stone retaining wall cost in Bath?', answer: 'It depends on height, ground conditions, and whether structural engineering is needed, but most garden retaining walls start around £150-£250 per linear metre. We give a fixed-price quote after a free site visit.' },
      { question: 'Do you work on sloped or hillside gardens?', answer: 'Yes — sloped and hillside gardens are common across Bath\'s terraced neighbourhoods, including Widcombe, Lyncombe, and Combe Down, and retaining wall work is a regular part of our landscaping and stone walling projects there.' },
      { question: 'Are you insured for structural retaining wall work?', answer: 'Yes — £10M+ public liability (AXA-verified), and we bring in a structural engineer for sign-off wherever a retaining wall requires it.' },
    ],
    caseStudy: {
    title: 'Garden Wall & Landscaping',
    location: 'bath',
    propertyType: 'Structural & Landscaping',
    problem: 'Stone garden wall built from the ground up — proper foundations, natural Bath stone, and landscaping that ties the whole garden together.',
    solution: 'Site cleared and levels set. Foundations dug and poured. Natural stone built in courses with drainage built in behind. Pointing finished to match the surroundings. Landscaping tied back in — levels, planting, and hard standing so the wall sits naturally in the garden rather than looking bolted on.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Completed to the Aspect standard — photographs on the projects page',
    beforeAlt: 'Garden Wall & Landscaping — before',
    afterAlt: 'Garden Wall & Landscaping — finished work',

    },
    relatedServices: ['landscaping', 'heritage-restoration', 'property-maintenance'],
    heroImageAlt: 'Bath stone retaining wall built by Aspect Builds',
    category: 'external',
    metaDescription: 'Bath stone walling in Bath. Retaining walls £150-£250/m, foundations and drainage built in, lime-mortared.',
    titleTemplate: 'Bath Stone Walling | Retaining & Garden Walls | Aspect Builds',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping Bath',
    shortName: 'garden build',
    city: 'bath',
    tagline: 'Garden landscaping in Bath. Patios, paving, structural.',
    intro: 'Garden landscaping, patios, porcelain paving, decking, and structural retaining walls across Bath and the surrounding villages — built to the same standard as our structural work.',
    longIntro: 'Gardens are structures — they need foundations, levels, drainage and edges that hold. We build Bath gardens the way we build walls: porcelain and stone patios on proper substrates, decking on engineered frames, planting beds with real drainage, and retaining structures with the engineering behind them. From a Courtyard refresh in Oldfield Park to a full countryside garden outside Bath.',
    whatWeDo: [
      'Garden landscaping — full design and build',
      'Porcelain paving and natural stone patios',
      'Block paving and resin-bound driveways',
      'Structural retaining walls in brick or stone',
      'Decking — softwood, hardwood, and composite',
      'Turfing, planting, and garden lighting',
      'Garden rooms, summerhouses, outdoor offices',
      'Fencing, gates, and boundary work',
    ],
    problems: [
      'Patios laid on sand alone — they sink and puddle within two winters',
      'Porcelain paving installed by bricklayers — it needs a slurry-primed, full-bed fix',
      'Decking frames built from untreated timber — rot and wobble follow',
      'No drainage falls — standing water against the house',
      'Retaining "walls" of sleepers without posts — they bow and fail',
      'Garden projects abandoned mid-way — one PM sees the build through',
    ],
    benefits: [
      'Patios and paving priced per m² at quote; retaining walls £150–£250/m',
      'Porcelain paving slurry-primed and full-bed laid — no dot-and-dab',
      'Decking on engineered frames with proper joist spacing',
      'Levels and drainage designed before a slab goes down',
      'Same crew standard as our structural work — CSCS cardholders',
      'Materials sourced to the design: stone, porcelain, composite or timber',
      'Bath stone walling available within the same project',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the landscaping property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your garden works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Paving & surfaces', products: ['Natural stone (Indian sandstone, Bath stone)',
          'Porcelain paving (2cm outdoor grade)',
          'Composite and hardwood decking',], notes: 'Full-bed mortar fixing with primed backs for porcelain — the method that survives.' },
    ],
    costGuide: {
      perSquareMetre: 'patios £90–£180 per m² by material; decking £100–£160 per m²; retaining structures £150–£250 per linear metre',
      perPropertyType: [
        { type: 'Patio (natural stone)', lowEnd: '£90', highEnd: '£150 per m²' },
        { type: 'Patio (porcelain)', lowEnd: '£120', highEnd: '£180 per m²' },
        { type: 'Decking (composite)', lowEnd: '£100', highEnd: '£160 per m²' },
      ],
      factorsAffectingPrice: [
      'Material choice and area',
      'Level changes and retaining needs',
      'Drainage and falls',
      'Access for materials',
      ],
      includes: [
      'Excavation, substrate, full-bed fixing, jointing and finishing',
      'Level and drainage design',
      'Waste removal',
      ],
      excludes: [
      'Planting schemes and soft landscaping beyond the quoted scope',
      'Lighting electrics unless specified',
      'Garden maintenance after completion',
      ],
    },
    faq: [
      { question: 'How much does landscaping cost in Bath?', answer: 'Costs vary widely depending on the size of the area, level of finish, structural work, and materials. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does a garden build take in Bath?', answer: 'A simple turf and planting refresh takes a week. A patio with porcelain paving takes 1-2 weeks. A full garden redesign with retaining walls, planting, and lighting takes 3-6 weeks. We give you a detailed build programme at quote stage.' },
      { question: 'Do you handle planning permission for garden buildings in Bath?', answer: 'Yes — full planning management is included in every fixed-price quote where required. Garden rooms, summerhouses, and outbuildings over a certain size may need planning. We handle pre-applications, full drawings, and building regs.' },
      { question: 'Do you work on listed-building gardens in Bath?', answer: 'Yes — heritage and listed-building garden work is part of what we do. Bath stone walls, lime mortar, sympathetic planting, conservation-officer liaison. Work that respects the building\'s heritage and meets Bath conservation requirements.' },
      { question: 'Can you build retaining walls in Bath?', answer: 'Yes — structural retaining walls are a core part of our landscaping work. Brick, natural stone, concrete block, gabion — all options. We handle drainage, foundations, and engineering sign-off for walls over 1.5m.' },
      { question: 'Do you do driveways in Bath?', answer: 'Yes — block paving, resin-bound, tarmac, and gravel driveways. We work on driveways across Bath and BANES, with proper drainage, sub-base preparation, and edging. Typical driveway takes 1-2 weeks.' },
      { question: 'What if I change my mind about plants or materials during the build?', answer: 'We re-quote before proceeding. The fixed-price contract is clear: any change is documented, priced, and approved by you before we do the work. No surprise extras at the end.' },
      { question: 'Are you insured and qualified to do landscaping in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Bath Countryside Landscaping, Bath',
    location: 'bath-countryside-landscaping',
    propertyType: 'Countryside garden near Bath',
    problem: 'The client\'s sloped garden was underutilised and prone to drainage issues. They wanted a level, usable outdoor space with genuine character — reclaimed materials, working irrigation, and a greenhouse that felt like it belonged rather than looked like an afterthought. Every element needed to be both beautiful and functional.',
    solution: 'Cobble borders for definition. Sandstone paving slabs for durability and appearance. ACO drainage properly integrated. Water feed on all four corners for easy hose access. Bedded-in irrigation system for low-maintenance planting. Greenhouse sitting on three courses of reclaimed empirical London brick — a touch of history in a contemporary setting.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Bath countryside landscaping — cobble borders, sandstone paving, ACO drainage, greenhouse on reclaimed brick. Form and function, finished to last.',
    beforeAlt: 'Bath Countryside Landscaping, Bath — before',
    afterAlt: 'Bath Countryside Landscaping, Bath — finished work',

    },
    relatedServices: ['stone-walling', 'extension-builders', 'property-maintenance'],
    heroImageAlt: 'Landscaping project in Bath by Aspect Builds — porcelain patio and stonework',
    category: 'grounds',
    metaDescription: 'Landscaping in Bath. Patios, porcelain paving, decking, retaining walls. Built like structures — because they are.',
    titleTemplate: 'Landscaping Bath | Patios & Gardens | Aspect Builds',
  },
  {
    slug: 'plastering-rendering',
    name: 'Plastering & Rendering Bath',
    shortName: 'plastering & rendering',
    city: 'bath',
    tagline: 'Plastering and rendering in Bath. Lime work our specialty.',
    intro: 'Internal plastering, skimming and external rendering across Bath, Bath BA1, Bath BA2, and the surrounding villages — including the lime systems Bath\'s listed stock demands.',
    longIntro: 'Plastering and rendering across Bath — including the lime plaster, lime render and limewash work that Bath\'s listed buildings require. Skimming, external render systems, damp-proof plastering and tanked wet areas from a crew that understands why a Georgian wall needs to breathe. Skimming in Combe Down, lime render in Bathwick, full re-renders in Chippenham — same standard everywhere.',
    whatWeDo: [
      'Internal plastering and skimming',
      'External rendering — lime and modern systems',
      'Lime plaster and lime render for listed buildings',
      'Damp-proof plastering',
      'Tanked plasterboard for wet areas',
      'Render repairs and crack remediation',
      'Plaster repairs and patching',
      'Bead and mesh detailing for a flat, true finish',
    ],
    problems: [
      'Multi-finish slapped over lime walls — traps moisture and blows off; the building needs lime',
      'Skimming over damp without solving the cause — damp-proof plastering means finding the damp first',
      'Cement render on a solid stone wall — cracks and holds moisture; breathable systems only',
      'Tanking forgotten behind baths and showers — wet areas get tanked plasterboard',
      'External render mismatched to the wall — substrate and exposure drive the system choice',
      'Render applied without proper bead and corner detail — the finish is only ever as flat as the beads',
    ],
    benefits: [
      'Skimming from £25–£40 per m²; external lime render £70–£110 per m²',
      'Lime plaster (NHL and hot-mixed) applied correctly for listed and period walls',
      'Damp-proof and tanked systems in wet areas',
      'Modern silicone and lime render systems matched to the substrate and exposure',
      'Scaffold, preparation and waste removal included in the quote',
      'Same crew standard as the structural side — CSCS cardholders',
      'Dust control and daily tidy as standard',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your property to scope the work, assess the substrate, and check constraints — listed status, exposure, existing finishes. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, scaffold and sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'Plastering & rendering works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get warranties and care guidance for the new finishes, plus drying and decorating timelines where relevant.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Plasters & renders', products: [
          'NHL lime (2 & 3.5)',
          'Hot-mixed lime',
          'British Gypsum',
          'Silicone render systems',], notes: 'System chosen by substrate and exposure — breathable where the wall needs it.' },
    ],
    costGuide: {
      perSquareMetre: 'skimming £25–£40/m²; external lime render £70–£110/m²; silicone render systems from £90/m²',
      perPropertyType: [
        { type: 'Skimming', lowEnd: '£25', highEnd: '£40 per m²' },
        { type: 'External lime render', lowEnd: '£70', highEnd: '£110 per m²' },
        { type: 'Silicone render system', lowEnd: '£90', highEnd: '£130 per m²' },
      ],
      factorsAffectingPrice: [
      'Elevation count and access (scaffold)',
      'Lime vs gypsum requirements',
      'Damp remediation needed first',
      'Substrate condition and prep depth',
      ],
      includes: [
      'Preparation, plaster/render materials and waste removal',
      'Tanking and damp-proofing where quoted',
      'Beads, mesh and corner detail',
      'Full sheeting and dust control',
      ],
      excludes: [
      'Structural repairs before plastering (quoted separately)',
      'Decorating after the finish has dried (quoted separately)',
      'Specialist finishes (marbling, gilding)',
      ],
    },
    faq: [
      { question: 'How much does plastering cost in Bath?', answer: 'Costs vary depending on the size of the area, the type of plaster (skim, render, lime), and the condition of the existing surface. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates, no open-ended estimates.' },
      { question: 'How long does plastering take in Bath?', answer: 'A single room skim typically takes 1-2 days including drying time. A full house re-plaster takes 1-2 weeks. External rendering on a typical 3-bed Bath property takes 1-2 weeks including scaffold time.' },
      { question: 'Do you do lime plaster on listed buildings in Bath?', answer: 'Yes — heritage and listed-building lime plastering is what we do. Lime plaster, lime render, horsehair, traditional techniques. Work that respects the building\'s heritage and meets Bath conservation requirements. Conservation-officer liaison included.' },
      { question: 'Do you do external rendering in Bath?', answer: 'Yes — external rendering is a core part of our work. Modern silicone renders and traditional lime renders, matched to the substrate and exposure. We handle scaffold, preparation, and sign-off.' },
      { question: 'Can you plaster a bathroom in Bath?', answer: 'Yes — tanked plasterboard, moisture-resistant plaster, full wet-room specification. We work with tilers, plumbers, and electricians to deliver bathrooms ready for tiling and decoration.' },
      { question: 'Can you match the existing plaster on a Bath Georgian or Victorian property?', answer: 'Yes — heritage plaster matching is a core part of our work. We can identify the original plaster type (lime, horsehair, gypsum), source matching materials, and apply them using traditional techniques. Conservation-officer liaison included.' },
      { question: 'My render is cracked — repair or re-render?', answer: 'Depends on the cause. Hairline cracking from normal movement can be cut back and repaired. Cracking from the wrong render system on a solid wall usually means the system has to come off — we assess substrate, exposure and the existing build-up before quoting, and tell you honestly which it is.' },
      { question: 'Are you insured and qualified to do plastering work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Chilcompton Rendering, Chilcompton',
    location: 'chilcompton-rendering',
    propertyType: 'Village house, Chilcompton',
    problem: 'The property\'s exterior render had deteriorated over time, with cracking and weather damage affecting both appearance and weatherproofing. The client wanted a full external refresh that would protect the fabric of the building while giving it a clean, modern finish that still suited its rural setting.',
    solution: 'Full exterior strip-back and re-render using a breathable render system suited to the property\'s construction. Clean lines, proper edge details, and a crisp finish applied throughout. Every elevation rendered to a consistent standard.',
    duration: 'Per project',
    costRange: 'Not disclosed',
    result: 'Complete exterior rendering of a property in Chilcompton — fresh render, crisp finish, and a result that speaks for itself.',
    beforeAlt: 'Chilcompton rendering, Chilcompton — before',
    afterAlt: 'Chilcompton rendering, Chilcompton — finished work',

    },
    relatedServices: ['property-maintenance', 'heritage-restoration', 'builders-bath'],
    heroImageAlt: 'Plastering and rendering work in Bath by Aspect Builds — finished exterior',
    category: 'external',
    metaDescription: 'Plastering & rendering in Bath. Lime plaster for listed buildings, skimming, silicone render systems. Fixed price.',
    titleTemplate: 'Plastering & Rendering Bath | Aspect Builds',
  },
  {
    slug: 'painting-decorating',
    name: 'Painting & Decorating Bath',
    shortName: 'painting & decorating',
    city: 'bath',
    tagline: 'Painting and decorating in Bath. Prepped properly, finished to last.',
    intro: 'Internal and external painting, wallpapering and decorative finishes across Bath, Bath BA1, Bath BA2, and the surrounding villages.',
    longIntro: 'Painting and decorating across Bath — internal and external, from single rooms to full redecorations. The finish is only ever as good as the prep, so filling, sanding and sealing is where we spend the time. Period properties get breathable paint systems and limewash where the walls need them; modern homes get hard-wearing trade finishes. Sash windows, woodwork, wallpaper and feature walls — all in the same crew, all in the quote.',
    whatWeDo: [
      'Internal painting — walls, ceilings, woodwork',
      'External painting and masonry paint',
      'Wallpaper hanging and feature walls',
      'Limewash and breathable paint for period walls',
      'Sash window and joinery painting',
      'Plaster repairs and prep before painting',
      'Kitchen cabinet respraying',
      'Colour consultation',
    ],
    problems: [
      'Paint applied to wet or unsealed plaster — the timeline includes proper drying and prep',
      'Prep skipped — filling, sanding and sealing is where a paint job is won or lost',
      'Impervious masonry paint on a solid stone wall — traps moisture and peels; breathable systems only',
      'One coat where two are needed — coverage specified at quote, not discovered on the ladder',
      'Woodwork painted over varnish without keying — flakes within a year',
      'Furniture and floors left unprotected — everything sheeted, every day',
    ],
    benefits: [
      'Room redecoration from £350–£900; exteriors quoted per elevation',
      'Farrow & Ball, Little Greene, Dulux Trade and Crown Trade as standard',
      'Limewash and breathable systems for listed and period walls',
      'Full prep included — filling, sanding, sealing, caulking',
      'External painting timed around weather windows, not wishful thinking',
      'Same crew standard as the structural side — CSCS cardholders',
      'Dust sheets and daily tidy as standard',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your property to scope the rooms or elevations, check the surfaces, and talk colour and finish. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — prep, paint, labour and materials all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates, move and cover furniture, sheet floors, and carry out all repairs and prep before a tin is opened.' },
        { title: 'Painting & decorating begins', description: 'Prep first, then paint — specified coats applied properly with drying time respected. Your home stays liveable throughout.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you in daylight. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & aftercare', description: 'You get leftover paint labelled per room and care guidance for the finishes. If anything needs attention later, we come back.' },
    ],
    materials: [
      { manufacturer: 'Paints & finishes', products: [
          'Farrow & Ball',
          'Little Greene',
          'Dulux Trade',
          'Crown Trade',], notes: 'Trade-grade paint as standard; premium brands on request at cost. Limewash for breathable walls.' },
    ],
    costGuide: {
      perSquareMetre: 'room redecoration £350–£900; exterior masonry painting from £15/m²; ceilings £12–£20/m²',
      perPropertyType: [
        { type: 'Full redecoration (per room)', lowEnd: '£350', highEnd: '£900' },
        { type: 'Exterior masonry painting', lowEnd: '£15', highEnd: '£25 per m²' },
        { type: 'Sash window (per window)', lowEnd: '£120', highEnd: '£220' },
      ],
      factorsAffectingPrice: [
      'Room count, size and ceiling condition',
      'Prep depth — filling and repairs needed first',
      'Paint specification (trade vs premium)',
      'Access for external work',
      ],
      includes: [
      'All preparation, filling, sanding and sealing',
      'Paint and materials, plus waste removal',
      'Full sheeting of floors, furniture and fixtures',
      ],
      excludes: [
      'Plaster repairs beyond light filling (quoted separately)',
      'Wallpaper beyond the quoted schedule',
      'Specialist finishes (marbling, gilding)',
      ],
    },
    faq: [
      { question: 'How much does painting and decorating cost in Bath?', answer: 'A single room redecoration typically runs £350–£900 depending on size, ceiling condition and prep needed. Exteriors are quoted per elevation after a free site visit. You get a fixed-price quote before any work starts — no day rates, no open-ended estimates.' },
      { question: 'How long does it take to paint a room?', answer: 'A standard bedroom takes 2-3 days including prep and drying time between coats. A full-house redecoration takes 1-2 weeks. We give you the schedule at quote and stick to it.' },
      { question: 'Do you paint listed buildings in Bath?', answer: 'Yes — period and listed properties are our speciality. Limewash and breathable paint systems where the walls need them, matched to what the building can and cannot tolerate. Conservation-officer liaison included where required.' },
      { question: 'Do you do wallpaper hanging?', answer: 'Yes — lining paper, standard wallpapers, wide-width and feature walls. Wall preparation is included: filling, sanding and sealing before anything goes on the wall.' },
      { question: 'Do you paint sash windows and woodwork?', answer: 'Yes — sash windows, doors, skirtings, banisters and external joinery. Proper keying and priming, so the finish lasts. We can also repair rot while we are there and quote separately for anything structural.' },
      { question: 'Do you move furniture?', answer: 'We move and cover furniture as part of the job — rooms are sheeted, floors protected, and everything is put back at the end of each day or on completion, as you prefer.' },
      { question: 'Can you paint straight after plastering?', answer: 'Not immediately — new plaster needs to dry fully (typically 2-4 weeks for a skim) before painting, and even then it needs a mist coat first. We plan decoration timelines into any plastering job we do, so the finish is right rather than rushed.' },
      { question: 'Are you insured and qualified?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
    title: 'Chilcompton Decoration, Chilcompton',
    location: 'chilcompton-rendering',
    propertyType: 'Village house, Chilcompton',
    problem: 'Following a full exterior re-render, the interior of the property needed a complete redecoration — walls freshly skimmed throughout, old woodwork tired, and a colour scheme that needed tying together across nine rooms.',
    solution: 'Full interior redecoration: mist coats over new plaster, specified paint systems room by room, all woodwork keyed and repainted, and a consistent colour scheme carried through the property. Completed room by room so the family could keep living at home.',
    duration: '3 weeks',
    costRange: 'Not disclosed',
    result: 'A crisp, consistent finish through the whole house — fresh walls, sharp woodwork, and a home that feels new.',
    beforeAlt: 'Chilcompton decoration, Chilcompton — before',
    afterAlt: 'Chilcompton decoration, Chilcompton — finished work',

    },
    relatedServices: ['plastering-rendering', 'property-maintenance', 'builders-bath'],
    heroImageAlt: 'Painting and decorating work in Bath by Aspect Builds — finished interior',
    category: 'internal',
    metaDescription: 'Painting & decorating in Bath. Internal and external painting, wallpaper, limewash for period walls. Fixed price.',
    titleTemplate: 'Painting & Decorating Bath | Aspect Builds',
  },

  {
    slug: 'property-maintenance',
    name: 'Property Maintenance Bath',
    shortName: 'maintenance visit',
    city: 'bath',
    tagline: 'Property maintenance in Bath. Planned and responsive.',
    intro: 'Ongoing home maintenance, roofing repairs, guttering, and responsive repair services across Bath and BANES — planned maintenance and one-off fixes with the same fixed-price approach.',
    longIntro: 'Property maintenance in Bath done by a builder, not a handyman with a ladder: roofing repairs, guttering, fascias, responsive fixes and planned maintenance visits from a company carrying £10M+ insurance and MCIOB standards. Planned maintenance in Bath for landlords and busy homeowners — one number, fixed price, proper paperwork.',
    whatWeDo: [
      'Roofing repairs — tile replacement, leaks, flashing',
      'Guttering, soffit, and fascia repairs',
      'General handyman services',
      'Internal and external repairs',
      'Fence and gate repairs',
      'Damp proofing and timber treatment',
      'Re-pointing and Bath stone repairs',
      'Emergency callouts for leaks and storm damage',
    ],
    problems: [
      'Handymen insured for £1m on your £600k house — Aspect carries £10M+',
      'Guttering patched instead of replaced properly — we do the job once',
      'Roof repairs that fail the next winter — flashing, slate and lead work done right',
      'No paperwork for insurance or tenancy records — receipts and certificates as standard',
      'Unpredictable call-out pricing — fixed price quoted before the visit where possible',
      'Trades who never come back — aftercare is built into every job',
    ],
    benefits: [
      '£10M+ public liability — landlords and agents, certificates on request',
      'Fixed-price quotes before work, not day rates after it',
      'Roofing, guttering, fascias, soffits and repairs under one contract',
      'Planned maintenance schedules for landlords across BANES',
      'Same CSCS-qualified crew as the major projects',
      'Responsive repairs with clear arrival windows',
      'Aftercare built in — we return if the fix needs revisiting',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the maintenance property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your property works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Roofline systems', products: ['uPVC fascia and soffit systems',
          'Gutter replacement (uPVC and cast)',
          'Lead flashing and repairs',], notes: 'Roofline replaced in full runs, not patches — matched colours as standard.' },
    ],
    costGuide: {
      perSquareMetre: 'guttering £25–£45/m; fascia and soffit £60–£100/m; roof repairs from £150 per visit',
      perPropertyType: [
        { type: 'Gutter replacement', lowEnd: '£25', highEnd: '£45 per linear metre' },
        { type: 'Fascia & soffit replacement', lowEnd: '£60', highEnd: '£100 per linear metre' },
        { type: 'Roof repair (per visit)', lowEnd: '£150', highEnd: '£600' },
      ],
      factorsAffectingPrice: [
      'Roofline length and height (scaffold needs)',
      'Roof condition and slate/lead extent',
      'Access and parking',
      'Emergency vs planned',
      ],
      includes: [
      'Diagnosis, repair, materials, waste removal and certificates where applicable',
      'Gutter clearing and minor adjustments',
      ],
      excludes: [
      'Full roof replacement (quoted as a project)',
      'Chimney rebuilds beyond repair scope',
      'Structural repairs (quoted separately)',
      ],
    },
    faq: [
      { question: 'How much does property maintenance cost in Bath?', answer: 'Small jobs are typically charged at a day rate. Larger maintenance projects are quoted as fixed-price contracts. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts. No day rates on larger projects, no open-ended estimates.' },
      { question: 'Do you do emergency callouts in Bath?', answer: 'Yes — emergency callouts for roofing leaks, storm damage, water ingress, and similar urgent repairs. We aim to be on site within 24 hours of your call, often same-day. Out-of-hours surcharges apply for evenings and weekends.' },
      { question: 'Do you do roofing repairs in Bath?', answer: 'Yes — tile replacement, leak repair, flashing, lead work, chimney repairs, ridge tile re-bedding. From a single broken tile to a full re-roof, we do it all. We work on slate, tile, and felt roofs.' },
      { question: 'Do you do guttering repairs in Bath?', answer: 'Yes — gutter cleaning, gutter repair, full gutter replacement, fascia and soffit work, downpipe repairs. We work on UPVC, cast iron, and aluminium guttering.' },
      { question: 'Can you fix a leaking roof in Bath?', answer: 'Yes — leak detection and repair is a core part of our maintenance work. We trace the source of the leak, photograph the issue, fix it properly, and document the repair. Common causes: failed flashing, broken tiles, blocked valleys, perished felt.' },
      { question: 'Do you offer ongoing maintenance contracts in Bath?', answer: 'Yes — we offer annual maintenance contracts for Bath homeowners. Quarterly gutter cleaning, annual roof check, priority callout for emergencies. Fixed annual fee, no surprise charges.' },
      { question: 'Are you insured and qualified to do maintenance work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
      { question: 'How quickly can you respond to a maintenance request in Bath?', answer: 'Urgent jobs (leaks, security, storm damage): same-day or next-day. Standard maintenance: typically 3-5 working days. We can usually slot small repairs in within a week.' },
    ],
    caseStudy: {
      title: 'Greenhouse Base Build, Bath',
      location: 'greenhouse-base-build',
      propertyType: 'Bath garden',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Greenhouse Base Build, Bath — before',
      afterAlt: 'Greenhouse Base Build, Bath — finished work',
    },
    relatedServices: ['windows-doors', 'stone-walling', 'plastering-rendering'],
    heroImageAlt: 'Property maintenance visit by Aspect Builds — roofline and guttering work',
    category: 'maintenance',
    metaDescription: 'Property maintenance in Bath. Roofing repairs, guttering, responsive fixes. Fixed-price, one visit, done properly.',
    titleTemplate: 'Property Maintenance & Repairs Bath | Aspect Builds',
  },
  {
    slug: 'windows-doors',
    name: 'Windows & Doors Bath',
    shortName: 'window installation',
    city: 'bath',
    tagline: 'Windows installer in Bath. UPVC, aluminium, timber.',
    intro: 'UPVC, aluminium, and timber window and door installation across Bath, Bath BA1, Bath BA2, and the surrounding villages. Full supply and fit, building regs sign-off, FENSA-registered.',
    longIntro: 'Windows installer in Bath for UPVC, aluminium and timber — tilt and turn, casement, sash, bay and bow, bifold and patio doors. Bespoke windows Bath homes actually need (conservation sashes included), FENSA-registered supply and fit with building regs sign-off in the quote. A 5-window replacement takes 1–2 days; a full house 3–5 days. Fixed price, one crew.',
    whatWeDo: [
      'UPVC window supply and installation',
      'Aluminium window supply and installation',
      'Timber window supply and installation',
      'Bifold door installation',
      'Patio door installation',
      'Front door and back door installation',
      'Fascia, soffit, and guttering replacement',
      'Window and door repairs (broken hinges, locks, seals)',
    ],
    problems: [
      'Sales reps quoting per window without seeing the openings — we survey then quote',
      'Non-FENSA installers leaving you no certificate at completion',
      'Tilt-and-turn hardware specced cheap — we fit tested, warranted systems',
      'Bay and bow installations without structural checks',
      'Listed buildings given the wrong glazing — sash repairs and slimline units where consented',
      'Seals and trims rushed — the detail is the difference at handover',
    ],
    benefits: [
      'UPVC, aluminium and timber — supplied and fitted by FENSA-registered installers',
      'Tilt-and-turn, casement, sash, bay-and-bow, bifold and patio systems',
      'Typical 5-window replacement: 1–2 days; full house (10–15 windows): 3–5 days',
      'Building regs sign-off and FENSA certification included',
      'Bespoke windows made to opening — no forcing standard sizes',
      'Repairs as well as replacement — hinges, locks, seals, misted units',
      'Fascia, soffit and guttering replacement within the same visit',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the installation property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your windows and doors works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Frame systems', products: ['UPVC (multi-chamber)',
          'Aluminium (Slimline, Smarts, Cortizo)',
          'Timber (hardwood, accoya)',], notes: 'Material choice matched to the property — conservation areas often need timber or like-for-like.' },
    ],
    costGuide: {
      perSquareMetre: 'UPVC windows £450–£850 each; aluminium £700–£1,300 each; bifolds £2,500–£5,000+ — final price per survey',
      perPropertyType: [
        { type: 'UPVC window (supplied & fitted)', lowEnd: '£450', highEnd: '£850 per window' },
        { type: 'Aluminium window', lowEnd: '£700', highEnd: '£1,300 per window' },
        { type: 'Bifold door', lowEnd: '£2,500', highEnd: '£5,000+' },
      ],
      factorsAffectingPrice: [
      'Frame material and glazing spec',
      'Number and size of openings',
      'Scaffolding for upper floors',
      'Listed / conservation requirements',
      ],
      includes: [
      'Survey, supply, installation, making good, sign-off and FENSA certificate',
      'Removal and disposal of old frames',
      ],
      excludes: [
      'Structural opening alterations (quoted as a project)',
      'Decoration beyond making-good',
      'Consent applications for listed properties (managed at cost)',
      ],
    },
    faq: [
      { question: 'How much do new windows cost in Bath?', answer: 'Costs vary widely depending on the number of windows, frame material (UPVC, aluminium, timber), glazing type (double or triple), and installation complexity. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts in your Bath home. No day rates, no open-ended estimates.' },
      { question: 'How long does window installation take in Bath?', answer: 'A typical 5-window replacement takes 1-2 days. A full-house window replacement (10-15 windows) takes 3-5 days. We work in phases to minimise disruption to your Bath home.' },
      { question: 'Do you handle building regulations for windows in Bath?', answer: 'Yes — building regulations sign-off is included in every fixed-price quote. New or replacement windows over certain sizes need FENSA or building control sign-off. We handle the paperwork and inspection.' },
      { question: 'Can you install bifold doors in Bath?', answer: 'Yes — bifold door installation is a core part of our work. UPVC, aluminium, timber — all options. We handle the structural opening, lintel installation, and the bifold door fitting.' },
      { question: 'Can you replace doors on listed buildings in Bath?', answer: 'Yes — heritage and listed-building door work is what we do. Timber doors, period-appropriate ironmongery, conservation-officer liaison. Work that respects the building\'s heritage and meets Bath conservation requirements.' },
      { question: 'Do you supply the windows or can I use my own?', answer: 'Both work. We\'re trade-account holders at major UK window suppliers, so we can supply and pass through the discount. Or you can buy from wherever you like — we\'ll install them for the same labour price.' },
      { question: 'What if I change my mind about window style during the build?', answer: 'We re-quote before proceeding. The fixed-price contract is clear: any change is documented, priced, and approved by you before we do the work. No surprise extras at the end.' },
      { question: 'Are you insured and qualified to do window work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, FENSA-registered, City & Guilds / NVQ qualified. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
      title: 'Luxury Bathroom Refit, Bath',
      location: 'luxury-bathroom-refit',
      propertyType: 'Bath home',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Luxury Bathroom Refit, Bath — before',
      afterAlt: 'Luxury Bathroom Refit, Bath — finished work',
    },
    relatedServices: ['property-maintenance', 'renovation', 'extension-builders'],
    heroImageAlt: 'New aluminium and UPVC windows installed in a Bath home by Aspect Builds',
    category: 'glazing',
    metaDescription: 'Windows installer in Bath. UPVC & aluminium tilt-and-turn, bay & bow. FENSA-registered, bespoke windows, fixed price.',
    titleTemplate: 'Window Installers Bath | uPVC & Aluminium | Aspect Builds',
  },
  {
    slug: 'bathroom-installers',
    name: 'Bathroom Installers Bath',
    shortName: 'bathroom refit',
    city: 'bath',
    tagline: 'Bathroom installers in Bath. Luxury refits and wetrooms.',
    intro: 'Luxury bathroom and wetroom installations and remodels across Bath and the surrounding villages — design, plumbing, tiling, tanking and electrics from one managed team.',
    longIntro: 'Bathroom installers in Bath who run the whole refit — rip-out, plumbing, tanking, tiling, electrics and the final seal — under one fixed-price contract. Like-for-like takes 1–2 weeks; a full luxury remodel with wetroom tanking runs longer, dated at quote. Howdens Bathrooms, CP Hart and Victorian Plumbing supply at trade prices.',
    whatWeDo: [
      'Luxury bathroom and wetroom installations and refits',
      'Bathroom remodelling — moving walls, reconfiguring layouts',
      'General building construction for structural work',
      'Tanked plasterboard, lime plaster for listed properties',
      'Home additions — ensuites, downstairs WCs, loft bathrooms',
      'Heritage restoration for period bathrooms',
      'Underfloor heating, slip-resistant tiling',
      'Full plumbing, electrics, decoration — all in-house',
    ],
    problems: [
      'Four trades turning up in the wrong order — one PM sequences the refit',
      'Wet areas left untanked — leaks found two years later through the ceiling below',
      'Mains-pressure showers on gravity systems — pump and pressure design matters',
      'Electrics not Part-P — a bathroom is a special location and we certify it',
      'Silicone over grout as the "waterproofing" — tanking is the waterproofing',
      'No aftercare when a sealant needs attention — we come back',
    ],
    benefits: [
      'Like-for-like refits 1–2 weeks; full remodels with tanking 2–3 weeks — dated at quote',
      'Tanked plasterboard wetroom-standard work as standard in wet areas',
      'Supply at trade prices: Howdens Bathrooms, CP Hart, Victorian Plumbing',
      'Part-P electrics certified for bathroom zones',
      'MCIOB-led project with £10M+ insurance',
      'Daily tidy — you are never without a working loo longer than quoted',
      'Fixed price — the quote is the price, including tiling and making good',
    ],
    processSteps: [
        { title: 'Free site visit & consultation', description: 'James visits your the refit property to scope the work, discuss options, and assess constraints — listed status, party walls, ground conditions. No charge, no obligation.' },
        { title: 'Fixed-price itemised quote', description: 'You receive a fully itemised quote — materials, labour, waste removal, sign-off fees all broken down. What we quote is what you pay.' },
        { title: 'Scheduling & preparation', description: 'We agree start dates and working hours, order materials, arrange skips and scaffolding where needed, and protect your home with dust sheets and floor coverings.' },
        { title: 'your bathroom works begin', description: 'The crew carries out the work to the agreed spec. Daily tidy-ups and protected access routes — your home stays liveable.' },
        { title: 'Structural & building control sign-off', description: 'Where the work is structural, Building Control inspects at the required stages and you receive full certification on completion.' },
        { title: 'Quality check with James', description: 'James walks the finished work with you. Any snags are dealt with immediately — we only sign off when you are fully satisfied.' },
        { title: 'Handover & documentation', description: 'You get certificates, warranties and any FENSA/Building Control paperwork, plus guidance on caring for the new work.' },
        { title: 'Aftercare', description: 'If anything needs attention later, we come back. Our reputation in Bath is built on long-term relationships, not one-off jobs.' },
    ],
    materials: [
      { manufacturer: 'Sanitaryware suppliers', products: ['Howdens Bathrooms',
          'CP Hart',
          'Victorian Plumbing',], notes: 'Supply priced at trade rates within your fixed quote.' },
    ],
    costGuide: {
      perSquareMetre: 'like-for-like £5,000–£9,000; full refits £9,000–£18,000; luxury wetrooms £12,000–£25,000+',
      perPropertyType: [
        { type: 'Like-for-like refit', lowEnd: '£5,000', highEnd: '£9,000' },
        { type: 'Full remodel incl. tiling', lowEnd: '£9,000', highEnd: '£18,000' },
        { type: 'Luxury wetroom', lowEnd: '£12,000', highEnd: '£25,000+' },
      ],
      factorsAffectingPrice: [
      'Sanitaryware and tile specification',
      'Wetroom tanking and floor build-up',
      'Electrical work (lighting, extraction, Part P)',
      'Whether the suite moves',
      ],
      includes: [
      'Strip-out, plumbing, tanking, tiling, electrics, silicone and finishing',
      'Rubbish removal and daily clean',
      'Certification for electrical and pressure work',
      ],
      excludes: [
      'Furniture and dressing beyond the quoted schedule',
      'Structural floor alterations (quoted separately)',
      'Boiler replacement unless quoted',
      ],
    },
    faq: [
      { question: 'How much does a bathroom installation cost in Bath?', answer: 'Costs vary widely depending on the size of the bathroom, the level of finish, structural changes, and the suite and tiles you choose. We give you a fixed-price quote after a free site visit, so you know the exact cost before any work starts in your Bath home. No day rates, no open-ended estimates.' },
      { question: 'How long does a bathroom refit take in Bath?', answer: 'A like-for-like bathroom refit typically takes 1-2 weeks. A full strip-out and reconfiguration takes 2-3 weeks. A ensuite addition as part of a larger project takes 3-4 weeks.' },
      { question: 'Do you install wetrooms in Bath?', answer: 'Yes — luxury wetroom installation is a core part of our bathroom work. Tanking, underfloor heating, drainage gradients, and slip-resistant tiling all in-house. We work with Howdens Bathrooms, CP Hart, and independent Bath showrooms.' },
      { question: 'Can you work on listed-building bathrooms in Bath?', answer: 'Yes — heritage and listed-building bathroom work is what we do. Bath stone surrounds, lime plaster, traditional tiling, conservation-officer liaison. Work that respects the building\'s heritage and meets Bath conservation requirements.' },
      { question: 'Will I be without a bathroom during the work?', answer: 'We sequence the project so you have a working bathroom for as long as possible. Typical downtime is 2-4 days for a like-for-like refit, 5-7 days for a full reconfiguration. We\'ll let you know the exact timeline at quote stage.' },
      { question: 'Do you supply the bathroom suite or can I use my own?', answer: 'Both work. We\'re trade-account holders at Howdens Bathrooms, CP Hart, and Victorian Plumbing, so we can supply and pass through the discount. Or you can buy from wherever you like — we\'ll install it for the same labour price.' },
      { question: 'What if I change my mind about tiles or fittings during the build?', answer: 'We re-quote before proceeding. The fixed-price contract is clear: any change is documented, priced, and approved by you before we do the work. No surprise extras at the end.' },
      { question: 'Are you insured and qualified to do bathroom work in Bath?', answer: '£10M+ public liability (AXA-verified). CSCS cardholders, gas-safe registered, NICEIC electricians. James is MCIOB chartered through the Chartered Institute of Building. All documentation on request.' },
    ],
    caseStudy: {
      title: 'Luxury Bathroom Refit, Bath',
      location: 'luxury-bathroom-refit',
      propertyType: 'Bath home',
      problem: 'Full case study on the projects page',
      solution: 'Full case study on the projects page',
      duration: 'Per project',
      costRange: 'Not disclosed',
      result: 'Completed to the Aspect standard — see the project page for photographs',
      beforeAlt: 'Luxury Bathroom Refit, Bath — before',
      afterAlt: 'Luxury Bathroom Refit, Bath — finished work',
    },
    relatedServices: ['plastering-rendering', 'kitchen-fitters', 'renovation'],
    heroImageAlt: 'Luxury bathroom refit in Bath by Aspect Builds — finished wetroom',
    category: 'interiors',
    metaDescription: 'Bathroom installers in Bath. Wetrooms, luxury refits, tanked plasterboard. 1-2 weeks like-for-like. Fixed price, one PM.',
    titleTemplate: 'Bathroom Installers Bath | Full Refits | Aspect Builds',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export type ServiceCategory =
  | 'rendering' | 'plastering' | 'insulation' | 'structural' | 'interiors'
  | 'external' | 'grounds' | 'heritage' | 'glazing' | 'maintenance';

export const getServicesByCategory = (cat: ServiceCategory): Service[] =>
  SERVICES.filter((s) => s.category === cat);

export const getRelatedServices = (slug: string): Service[] => {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
};


/**
 * The distinguishing phrase from a service's title — "10-Year Warranty",
 * "Through-Colour", "Airless Spray".
 *
 * The area and Bath pages were titled by formula, so within a tier they
 * differed only by the service name: measured at 83-86% keyword overlap
 * between, say, external wall rendering and external wall insulation in
 * the same area. This puts each service's own hook back into the title.
 */
export const serviceHook = (service: Service): string =>
  service.titleTemplate.split('|').pop()!.trim();

/**
 * Trust chip for the hero on service pages. The old KD-era claim was a
 * "10-year warranty" (or 5-year for plastering) — a render-systems warranty
 * Aspect cannot evidence. Honest badge instead: workmanship defects put
 * right, manufacturer warranties passed through (see terms + FAQs).
 */
export const warrantyBadge = (): string => 'Written workmanship guarantee';

/**
 * Tagline for the city the page is on. The base `tagline` is Bath-written
 * (some name Bath outright); Bath pages take `bathTagline` where it is set
 * and fall back to the base otherwise, so a Bath card never reads
 * "for Bath homes and businesses".
 */
export const getTagline = (service: Service, city: 'bath' | 'bath'): string =>
  city === 'bath' ? service.bathTagline ?? service.tagline : service.tagline;
