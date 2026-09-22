# KD Plastering & Rendering — pre-launch audit

Went through the actual `kdscaff` codebase against your checklist rather than just the rendered pages, since a lot of what looks "missing" turns out to already be built and deliberately switched off. Short version: this site is in much better shape than a first look at the live pages would suggest — several of your asks are already implemented and just waiting on facts from you before they can go back live. The main real gap is that Bristol got a proper pass to fix thin/duplicate content and Bath didn't.

## Do these five things first

1. **Confirm the plastering price bands** in `src/lib/services.ts` (the `plastering-services` cost guide) so the pricing section can be switched back on — it's a genuinely one-line change once you've signed off the numbers (see "Pricing" below).
2. **Decide what to do about the removed case study** — the copy made specific claims (a rival's £8,500 quote, 105m², 8 working days, "25-year maintenance-free") that weren't evidenced, so it was pulled two days ago. Either give me numbers you can stand behind, or we write a new one from a job with photos.
3. **Fix the warranty contradiction** — the site-wide FAQ and hero trust badges say "10-year warranty" everywhere, including on plastering pages, but the plastering service content itself (correctly) says 5-year. Right now a visitor can read both claims on the same page.
4. **Fix the "290+ verified reviews" stat** — it doesn't match any real source. Checkatrade is 194, MyBuilder is 51, the reviews actually quoted on-site number 65. This number needs a real source or it needs to come down.
5. **Decide Bath's priority** — Bath has no equivalent of the Bristol area-by-area plastering pages. It's currently the weakest part of the site for "genuinely unique, not just a swapped area name."

Detail on all ten items below, plus the location-pages question.

## Plastering prices/cost section

This is already built, not missing. `src/components/PricingTable.astro` and the cost guide in `services.ts` are complete — per-m² headline price, six property-type price bands, factors affecting cost, what's included/excluded. It was **removed from the live area pages on 2 September**, with a code comment explaining why: *"the figures were not confirmed... this is a render call away from returning once the bands are signed off."*

So the actual task isn't building a pricing section, it's you confirming the plastering figures currently sat in the code (£8–£18/m² for wall skims, £10–£22/m² for ceilings, £160–£360 for a single wall, £3,500–£6,500 for a full 3-bed re-skim, etc. — full list in `services.ts` around line 800) are numbers you're happy to publish. Once you say yes (or give me corrected figures), re-enabling the display is trivial.

Separately, there's a `getAreaCosts()` helper (`src/lib/areaCosts.ts`) that was built to join a service's price guide to a specific area's housing stock — but it explicitly does nothing for plastering, because plastering is quoted per room, not per house type. That's the right call, not a bug.

## The six core services (skimming, ceilings, Artex, repairs, dry lining, plasterboarding)

Here's the structural thing worth knowing: the site has six top-level services, and five of them are rendering/insulation (silicone rendering, house rendering, external wall rendering, monocouche rendering, external wall insulation). Plastering is a *single* combined page — "Plastering Services Bristol" — with skimming, Artex removal, dry lining/plasterboarding and crack/water-damage repair living as four "sub-service" anchor sections within that one page rather than four separate URLs.

The content itself for that page is genuinely strong — long intro, 8-point "what we do," problems solved, benefits, a 9-step process, materials (British Gypsum/Knauf/Thistle), the price guide above, and a 10-question FAQ covering drying times, airless spray, Artex, damp, living-in-during-work, bonding vs skim, cracks, and warranty. It's not thin.

What's worth a decision from you: is bundling all four plastering sub-services onto one URL intentional (fine for on-page anchors and for keeping link authority concentrated), or do you want dedicated pages/URLs for, say, Artex removal and dry lining specifically, since those get searched as their own terms? Ceiling plastering specifically isn't named as its own item anywhere — it's folded into "Artex Removal & Ceiling Skimming."

## Real project case studies / photos from Bristol jobs

Photos: done, and done well. A commit on 27 August added eight real interior plastering photos with specific, non-generic alt text (e.g. *"Victorian bay-window room skimmed throughout, original coving and exposed brick chimney breast"*) plus a per-service work grid on `/our-work/`. Before that, plastering — "the service the company is named after" per the code comment — had one photo site-wide while the render services had four each. That imbalance is fixed.

Narrative case studies: built, then pulled. Every service (including plastering) has a full case study object in `services.ts` — the plastering one is a full-house re-skim in Fishponds after a rewire, with the property type, problem, solution, duration and result written out. The *display* of these was removed from the area pages on 2 September specifically because a different case study (rendering) made unevidenced numeric claims. The plastering case study itself doesn't carry those problem claims, so this may be lower-risk to reinstate — worth me checking with you before switching it back on either way.

## Reviews prominence

Reviews are handled well structurally: `ReviewCards` appears on every service × area page, scoped to that area and service where possible, falling back to city-wide reviews rather than repeating the same three quotes everywhere. The underlying pool is 65 real, verbatim reviews sourced from Google and Checkatrade — the code comments show a prior version had fabricated quotes misattributed to real named customers, which was correctly ripped out for legal reasons (Digital Markets, Competition and Consumers Act 2024).

The one accuracy issue: the homepage hero stat and one service listing page both claim "290+ Verified Reviews." Checkatrade (194) plus MyBuilder (51) doesn't reach 290, and the actual review pool used on-site is 65. There's a `TODO` next to a *different* unverified stat ("800" jobs) on the homepage flagging it as needing a real number — the 290 figure sits right next to it without the same flag, which is presumably how it got missed. Needs a real number or needs removing.

## FAQs — what people actually search for

The dedicated `/faqs/` page is thin and skewed: 8 questions, 7 of which are about rendering/EWI (cost, timeframes, planning permission, pebbledash, render systems), and only one line touches plastering at all (the plastering-vs-rendering distinction). None of the genuinely good plastering FAQ content — drying times, Artex, damp, cracks, living in the house during work — makes it onto this page, even though all of it already exists and is well-written on the plastering service page's own FAQ block.

Also: this page states *"every installation comes with a 10-year workmanship warranty as standard"* — see the warranty issue below, this is wrong for plastering specifically.

Recommendation: either pull 5–6 of the strongest plastering questions from the service page's FAQ into this page too (duplicate content across pages is fine for FAQs, Google treats each FAQPage independently), or split `/faqs/` into service-grouped sections so plastering gets equal billing with rendering.

## Internal linking across Bristol/Bath location pages

Bristol's linking is genuinely well engineered — each of the 108 service × area pages links sideways to the other five services in that same area (capped at showing them all), to the same service in two nearby areas, and up to the service hub, the area hub, and the Bristol coverage index. A code comment shows this was deliberately tuned: an earlier version sent 70% of links sideways to peer pages instead of upward to the hubs that could actually pass authority on.

Bath is the gap. The main site header/mega-menu has no Bath links at all — Bath is only reachable via a "See our Bath coverage" link from the Bristol hub page, or direct URL. And Bath's five area hub pages (Bathwick, Widcombe, Bath city centre, Newbridge, Odd Down) link every service back to the same single flat `/our-services/{service}-bath/` page regardless of which neighbourhood you started from — there's no Bath equivalent of the `[area].astro` route that gives Bristol its per-neighbourhood depth.

## Image filenames and alt text

Filenames are already in good shape — kebab-case, descriptive (`silicone-rendering.webp`, `plastering-services.webp`, gallery images like `plastering-6.webp` inside a folder structure that makes their content obvious). The eight real project photos have specific, individually-written alt text rather than generic filler.

Hero and card images generally use `alt=""` — this is deliberate, not an oversight: they're positioned as decorative next to a text heading that already conveys the content, which is defensible under WCAG. Worth a second look only if you want every image doing SEO work rather than just the gallery ones.

## LocalBusiness/Service schema

This is well built. The homepage carries a full `LocalBusiness`/`Plasterer` entity with a stable `@id`. Every service × area page then emits a lightweight `Service` schema that references that `@id` rather than re-declaring the whole business (the correct pattern — avoids duplicate/conflicting entity data across 100+ pages). `BreadcrumbList` schema is generated from the same array that renders the visible breadcrumbs, so they can't drift apart. The FAQ page has `FAQPage` schema. This item is essentially done — I didn't find gaps worth flagging.

## H1/H2 structure, page titles, meta descriptions

Spot-checked the main templates and these are consistently well formed: one H1 per page via the `Hero` component, H2s for each major section, page titles follow a `{Service} in {Area} {Postcode} | {hook}` pattern for the deep pages and are within reasonable length, meta descriptions are written per-service and per-area rather than templated boilerplate. Nothing flagged here.

## Numbers, reviews, warranties and claims — accuracy pass

Two confirmed problems, both above: the "290+ verified reviews" stat with no matching source, and the warranty split. On warranty specifically: plastering's own content consistently and correctly says **5-year workmanship warranty** (it appears that way four separate times in the plastering service data). But the sitewide trust badges, the FAQ page, the contact page, terms, about-us and — critically — the hero trust bar hardcoded onto *every* service × area page (including the plastering ones) all say **10-year warranty**. That means a Bristol plastering page can currently show "10-year warranty" in its hero and "5-year workmanship warranty" in its own FAQ four inches of scroll later. Rendering and EWI's 10-year (and 25-year manufacturer) claims are consistent throughout — it's specifically the plastering pages inheriting a generic site-wide badge that's wrong for them.

Years-in-business checks out: "Since 2014," "10+ years," and the founder bio ("Kyran founded KD Plastering & Rendering Services in 2014 after 10 years working for larger Bristol contractors") are all consistent with each other and with today's date.

## The 120 location pages — genuine uniqueness

This is where I'd push back gently on the framing: for Bristol, this has already had real engineering effort put into it, and it shows. There's a file (`serviceAreaNotes.ts`) with 108 hand-written, area-specific notes — one for each of 6 services × 18 Bristol neighbourhoods — and every single one is filled in (nothing's still a placeholder). They're genuinely differentiated: Clifton and Redland's notes talk about Georgian/Victorian lime plaster on lath and the risk of using modern plasterboard on those walls; Emerson's Green and Longwell Green (much newer housing) correctly say full re-skims are rare there because the housing stock is already modern plasterboard. A code comment documents the actual problem that prompted this work: the service × area pages were originally "92% identical," varying only by a swapped noun, and this was the fix. Each page also pulls in that area's real housing stock, transport, landmarks and local pricing notes, and — where they exist — real "recent work" project mentions filtered to match that specific service.

Where the concern is still live: **Bath has none of this.** Zero entries in `serviceAreaNotes.ts` for any of the five Bath areas, and no equivalent of the Bristol per-neighbourhood route exists for Bath services at all — Bath visitors get a single generic service page regardless of which of the five neighbourhoods they're in. If "120 unique pages" is the promise, Bath is currently the part that would fail an audit.

Worth noting for your own count: what the code actually generates is 108 Bristol service × area pages, 18 Bristol area hubs, 5 Bath area hubs, and 6+6 flat service pages (Bristol/Bath) — 131 area-related pages in total by my count, not counting blog and other pages. Not far off "120," but worth reconciling with whatever figure you've been quoting.

## What I'd suggest as the order of work

Confirm plastering prices and warranty period with you first, since two other fixes (the pricing section, the warranty badge) are blocked on those answers. In parallel, I can pull plastering FAQs onto the main FAQ page, fix the review-count stat, and start writing the Bath equivalent of `serviceAreaNotes.ts` — that last one is the biggest remaining chunk of work and worth confirming you want it before I start, since it's five neighbourhoods' worth of researched, hand-written local detail in the same style as the Bristol notes.

Let me know which of these you want me to just get on with versus which need your input first, and I'll start working through them.
