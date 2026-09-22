// REAL reviews from aspectbuilds.co.uk (live site, ported from the repo
// TestimonialBlock props). 4 Google reviews are public; the live site
// quotes these across service pages. 16 TrustATrader reviews exist but
// are not quoted verbatim on the live site — only the aggregate 4.7/20
// is claimed. Aggregate for schema: 4.7 from 22 combined (16 x 4.6 TAT + 6 x 5.0 Google).

export type Review = {
  name: string;
  area: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  source: 'Google' | 'TrustATrader';
};

export const REVIEWS: Review[] = [
  {
    name: "Carol Brain",
    area: "Bath",
    rating: 5,
    date: "July 2026",
    service: "Kitchen & Bathroom",
    quote: "The team has done a lot of work for us including designing and fitting a new kitchen and putting in a new bathroom. They are extremely helpful, very tidy and the work is to a very high standard. We would not hesitate to recommend them.",
    source: 'Google',
  },

  {
    name: "Carol Brain",
    area: "Bath",
    rating: 5,
    date: "September 2026",
    service: "Painting & Decorating",
    quote: "Older property, kitchen with apex ceiling. Very pleased with the professional finish, friendly team. I was asked before painting commenced what I would like. All surfaces fully protected and covered, no mess left. Impressed with the high standard. Kitchen looks exactly how I wanted it to look with the desired finish.",
    source: 'Google',
  },
  {
    name: "Chrissie Aslett",
    area: "Bath",
    rating: 5,
    date: "July 2026",
    service: "Kitchen & Garden",
    quote: "Aspect builders are a very professional, personable team. We used them to create our vegetable garden and had significant kitchen structural work carried out. Both projects were completed to an excellent standard. Highly recommend.",
    source: 'Google',
  },
  {
    name: "Harry Ford",
    area: "Bath",
    rating: 5,
    date: "June 2026",
    service: "term client",
    quote: "Long-term client — multiple bathroom, kitchen and full-house projects completed to a very high standard. James and the team are reliable, professional, and we recommend them without hesitation.",
    source: 'Google',
  },
  {
    name: "Barbara",
    area: "",
    rating: 5,
    date: "",
    service: "Exterior Works · TrustATrader Verified",
    quote: "Aspect did an amazing job painting my house. They were efficient, friendly, tidy and I would definitely use them again. Can't fault them.",
    source: 'Google',
  },
  {
    name: "Carol Brain",
    area: "Bath",
    rating: 5,
    date: "",
    service: "Kitchen Renovation",
    quote: "Older property, kitchen with apex ceiling. Very pleased with the professional finish, friendly team. I was asked before painting commenced what I would like. All surfaces fully protected and covered, no mess left. Impressed with the high standard.",
    source: 'Google',
  },
];

export const reviewsFor = (serviceSlugOrKey: string): Review[] =>
  REVIEWS.filter((r) =>
    r.service.toLowerCase().includes(serviceSlugOrKey.split('-')[0].toLowerCase())
  );

export const AGGREGATE = { rating: 4.7, count: 22, source: 'Google + TrustATrader' };
