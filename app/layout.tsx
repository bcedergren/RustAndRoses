import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rust & Roses | Live Cover Music",
  description:
    "Rust & Roses — a high-energy cover band delivering rock, blues, and crowd-moving hits for bars, clubs, festivals, and private events. Based in Austin, TX.",
  keywords: [
    "cover band",
    "live music",
    "Austin TX",
    "bar band",
    "rock cover band",
    "blues cover band",
    "booking",
    "Rust and Roses",
  ],
  openGraph: {
    title: "Rust & Roses | Live Cover Music",
    description:
      "Rock, blues, and everything that moves a crowd. Book Rust & Roses for your next event.",
    type: "website",
    locale: "en_US",
    // SWAP: Add your real OG image URL here
    // images: [{ url: "https://rustandroses.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
