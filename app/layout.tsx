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
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
    ],
  },
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
