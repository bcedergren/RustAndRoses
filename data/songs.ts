export interface Song {
  title: string;
  artist: string;
}

export interface SongCategory {
  name: string;
  songs: Song[];
}

// ─── SWAP IN YOUR REAL SONG LIST HERE ───
// Each category groups songs by vibe/genre.
// Add or remove categories and songs as needed.
export const songCategories: SongCategory[] = [
  {
    name: "Hard Rock & Classic Rock",
    songs: [
      { title: "Back in Black", artist: "AC/DC" },
      { title: "Highway to Hell", artist: "AC/DC" },
      { title: "Crazy Train", artist: "Ozzy Osbourne" },
      { title: "Paradise City", artist: "Guns N' Roses" },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
      { title: "Livin' on a Prayer", artist: "Bon Jovi" },
      { title: "You Shook Me All Night Long", artist: "AC/DC" },
      { title: "Pour Some Sugar on Me", artist: "Def Leppard" },
      { title: "Barracuda", artist: "Heart" },
      { title: "Rock and Roll All Nite", artist: "KISS" },
    ],
  },
  {
    name: "Blues & Southern Rock",
    songs: [
      { title: "Pride and Joy", artist: "Stevie Ray Vaughan" },
      { title: "The House Is Rockin'", artist: "Stevie Ray Vaughan" },
      { title: "La Grange", artist: "ZZ Top" },
      { title: "Sharp Dressed Man", artist: "ZZ Top" },
      { title: "Simple Man", artist: "Lynyrd Skynyrd" },
      { title: "Gimme Three Steps", artist: "Lynyrd Skynyrd" },
      { title: "Black Betty", artist: "Ram Jam" },
      { title: "Crossroads", artist: "Cream" },
    ],
  },
  {
    name: "Rock & Pop Anthems",
    songs: [
      { title: "Don't Stop Believin'", artist: "Journey" },
      { title: "Jessie's Girl", artist: "Rick Springfield" },
      { title: "Take Me Home Tonight", artist: "Eddie Money" },
      { title: "Summer of '69", artist: "Bryan Adams" },
      { title: "Mr. Brightside", artist: "The Killers" },
      { title: "Shut Up and Dance", artist: "Walk the Moon" },
      { title: "Uptown Funk", artist: "Bruno Mars" },
      { title: "Superstitious", artist: "Stevie Wonder" },
      { title: "Valerie", artist: "Amy Winehouse" },
      { title: "Use Somebody", artist: "Kings of Leon" },
    ],
  },
  {
    name: "Modern Rock & Alt",
    songs: [
      { title: "Are You Gonna Be My Girl", artist: "Jet" },
      { title: "Last Nite", artist: "The Strokes" },
      { title: "Seven Nation Army", artist: "The White Stripes" },
      { title: "Lonely Boy", artist: "The Black Keys" },
      { title: "Sex on Fire", artist: "Kings of Leon" },
      { title: "Song 2", artist: "Blur" },
      { title: "Everlong", artist: "Foo Fighters" },
      { title: "Best of You", artist: "Foo Fighters" },
    ],
  },
];
