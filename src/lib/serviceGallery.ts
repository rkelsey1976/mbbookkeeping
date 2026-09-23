// Recent-work images per service.
//
// MOCKUP STATUS: MB's live site shows no client photography, and we will
// not pass stock photos off as client work on a real business's site.
// SERVICE_GALLERY ships EMPTY — the gallery grid omits itself.
//
// When the client supplies real photos, wire them here with the same shape
// (src, alt, caption per image) and the service pages pick them up.

export type GalleryImage = { src: string; alt: string; caption: string };

export const SERVICE_GALLERY: Record<string, GalleryImage[]> = {};