export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  venue: string;
}

// ─── SWAP IN REAL TESTIMONIALS HERE ───
export const testimonials: Testimonial[] = [
  {
    quote:
      "Rust & Roses packed our room on a Tuesday night. The crowd didn't sit down once. We've already booked them for three more dates.",
    name: "Mike Lindgren",
    role: "Owner",
    venue: "Lee's Liquor Lounge – Minneapolis, MN",
  },
  {
    quote:
      "Professional, easy to work with, and they absolutely crushed it. The dance floor was full from the first song to the last.",
    name: "Sarah Chen",
    role: "Events Manager",
    venue: "The Cabooze – Minneapolis, MN",
  },
  {
    quote:
      "We hired them for a corporate event and they read the room perfectly. Started smooth, built the energy, and had everyone on their feet by the end of the night.",
    name: "David Engstrom",
    role: "Event Coordinator",
    venue: "Private Event – Wayzata, MN",
  },
];
