// src/lib/serviceGallery.ts
// Recent-work images per service, rendered as a grid on each service page.
//
// Written 2026-09-01. Before this the service pages carried a single intro
// photograph each and nothing else, so plastering — the service the company is
// named after — was represented by one image site-wide while the four render
// services had four apiece.
//
// Dimensions are baked in so the grid reserves space and nothing shifts as the
// images load. Portrait and landscape are mixed deliberately: the plastering
// set is portrait because interiors are, and forcing them landscape would crop
// the reveals and the stairwell to nothing.

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const SERVICE_GALLERY: Record<string, GalleryImage[]> = {
  'plastering-services': [
    { src: '/services/gallery/plastering-2.webp', width: 690, height: 920,
      alt: 'Splayed Velux reveal, freshly skimmed, with sky through the opening' },
    { src: '/services/gallery/plastering-3.webp', width: 690, height: 920,
      alt: 'Loft room with three Velux windows and sloping ceilings, fully skimmed' },
    { src: '/services/gallery/plastering-4.webp', width: 690, height: 920,
      alt: 'Victorian bay-window room skimmed throughout, original coving and exposed brick chimney breast' },
    { src: '/services/gallery/plastering-5.webp', width: 690, height: 920,
      alt: 'Plasterer at a bay window beside a skimmed chimney breast' },
    { src: '/services/gallery/plastering-6.webp', width: 690, height: 920,
      alt: 'Stairwell seen from below, walls and soffit skimmed, plasterer working at the head' },
    { src: '/services/gallery/plastering-7.webp', width: 690, height: 920,
      alt: 'Plasterer on a mobile tower skimming a ceiling' },
    { src: '/services/gallery/plastering-8.webp', width: 690, height: 920,
      alt: 'Bay window and skimmed walls with original coving retained' },
    { src: '/services/gallery/plastering-9.webp', width: 690, height: 920,
      alt: 'Room skimmed around a stairwell opening, props still in place' },
  ],
  'silicone-rendering': [
    { src: '/services/gallery/silicone-rendering-2.webp', width: 920, height: 613,
      alt: 'New-build home finished in smooth off-white silicone render with anthracite cladding' },
    { src: '/services/gallery/silicone-rendering-1.webp', width: 920, height: 613,
      alt: 'Mustard yellow silicone render with a charcoal accent panel' },
    { src: '/services/gallery/silicone-rendering-3.webp', width: 920, height: 613,
      alt: 'Silicone render finish on a house exterior' },
  ],
  'house-rendering': [
    { src: '/services/gallery/house-rendering-1.webp', width: 920, height: 613,
      alt: 'Rear elevation with render, timber dormer and bi-fold doors' },
    { src: '/services/gallery/house-rendering-3.webp', width: 920, height: 613,
      alt: 'Front of a detached house in smooth off-white render with a bow bay window' },
    { src: '/services/gallery/house-rendering-2.webp', width: 920, height: 613,
      alt: 'Rendered house exterior' },
  ],
  'monocouche-rendering': [
    { src: '/services/gallery/monocouche-rendering-2.webp', width: 920, height: 613,
      alt: 'Large traditional detached house finished in cream monocouche render' },
    { src: '/services/gallery/monocouche-rendering-1.webp', width: 920, height: 613,
      alt: 'Applying textured beige render with a steel trowel' },
    { src: '/services/gallery/monocouche-rendering-3.webp', width: 920, height: 613,
      alt: 'Monocouche render finish on a house exterior' },
  ],
  'external-wall-rendering': [
    { src: '/services/gallery/ewall-rendering-1.webp', width: 920, height: 613,
      alt: 'Aspect Builds applying sprayed cream monocouche render to a house exterior' },
    { src: '/services/gallery/ewall-rendering-2.webp', width: 920, height: 613,
      alt: 'Close-up of a steel trowel smoothing cream render' },
    { src: '/services/gallery/ewall-rendering-3.webp', width: 920, height: 613,
      alt: 'Finished house front in cream render' },
  ],
  'external-wall-insulation': [
    { src: '/services/gallery/ewi-1.webp', width: 920, height: 613,
      alt: 'EPS insulation boards being mechanically fixed to an external wall' },
    { src: '/services/gallery/ewi-2.webp', width: 920, height: 613,
      alt: 'Completed cream rendered home following external wall insulation' },
  ],
};
