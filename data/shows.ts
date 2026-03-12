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
    venue: "Lee's Liquor Lounge",
    city: "Minneapolis, MN",
    time: "9:00 PM",
    note: "21+",
  },
  {
    id: "2",
    date: "2026-04-25",
    venue: "The Turf Club",
    city: "St. Paul, MN",
    time: "9:30 PM",
  },
  {
    id: "3",
    date: "2026-05-09",
    venue: "Bunker's Music Bar & Grill",
    city: "Minneapolis, MN",
    time: "10:00 PM",
  },
  {
    id: "4",
    date: "2026-05-23",
    venue: "The Cabooze",
    city: "Minneapolis, MN",
    time: "8:00 PM",
    ticketUrl: "#",
  },
  {
    id: "5",
    date: "2026-06-06",
    venue: "Treasure Island Resort & Casino",
    city: "Welch, MN",
    time: "7:30 PM",
    ticketUrl: "#",
  },
];

export const pastVenues: string[] = [
  "First Avenue – Minneapolis, MN",
  "The Fine Line – Minneapolis, MN",
  "Amsterdam Bar & Hall – St. Paul, MN",
  "Medina Entertainment Center – Medina, MN",
  "Grandma's Sports Garden – Duluth, MN",
  "Myth Live – Maplewood, MN",
];
