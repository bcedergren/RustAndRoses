export interface Show {
  id: string;
  date: string;       // ISO date string
  venue: string;
  city: string;
  time: string;
  ticketUrl?: string;  // optional link to tickets or event page
  note?: string;       // e.g. "21+ event", "Private event"
}

// ─── SWAP IN YOUR REAL SHOW DATES HERE ───
// Keep shows sorted by date (nearest first).
// Remove past shows or move them to a separate "past shows" array.
export const upcomingShows: Show[] = [
  {
    id: "1",
    date: "2026-04-11",
    venue: "The Rusty Nail",
    city: "Austin, TX",
    time: "9:00 PM",
    note: "21+",
  },
  {
    id: "2",
    date: "2026-04-25",
    venue: "Crossroads Bar & Grill",
    city: "Dallas, TX",
    time: "9:30 PM",
  },
  {
    id: "3",
    date: "2026-05-09",
    venue: "The Blue Moon Saloon",
    city: "Houston, TX",
    time: "10:00 PM",
    note: "Album release party",
  },
  {
    id: "4",
    date: "2026-05-23",
    venue: "Warehouse Live",
    city: "Houston, TX",
    time: "8:00 PM",
    ticketUrl: "#",
  },
  {
    id: "5",
    date: "2026-06-06",
    venue: "Stubb's BBQ",
    city: "Austin, TX",
    time: "7:30 PM",
    ticketUrl: "#",
  },
];

export const pastVenues: string[] = [
  "The Continental Club – Austin, TX",
  "Deep Ellum Art Co. – Dallas, TX",
  "House of Blues – Houston, TX",
  "Gruene Hall – New Braunfels, TX",
  "Sam's Burger Joint – San Antonio, TX",
  "Emo's – Austin, TX",
];
