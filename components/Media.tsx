"use client";

import { Play, Image as ImageIcon, Download } from "lucide-react";

const gallerySlots = [
  "Live performance shot",
  "Stage wide angle",
  "Crowd interaction",
  "Band backstage / candid",
  "Close-up guitar / vocalist",
  "Venue atmosphere",
];

export default function Media() {
  return (
    <section id="media" className="py-24 bg-charcoal-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">See &amp; Hear</h2>
          <p className="section-subheading">
            Live clips, photos, and everything you need to know we bring it
          </p>
        </div>

        {/* ─── Promo video ─── */}
        {/*
          SWAP: Replace this placeholder with an embedded YouTube/Vimeo iframe
          or a self-hosted <video> element with your promo reel.
          Example:
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aspect-video bg-charcoal border border-white/5 flex items-center justify-center group cursor-pointer hover:border-rose/20 transition-colors relative overflow-hidden">
            {/* Simulated video thumbnail atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-rose/90 flex items-center justify-center mx-auto mb-4 group-hover:bg-rose group-hover:scale-110 transition-all duration-300 shadow-lg shadow-rose/30">
                <Play size={28} className="text-cream ml-1" fill="currentColor" />
              </div>
              <p className="font-display text-xl tracking-wider uppercase text-cream">
                Promo Video
              </p>
              <p className="text-steel text-sm mt-1">
                Watch Rust &amp; Roses live
              </p>
            </div>
          </div>
        </div>

        {/* ─── Photo gallery ─── */}
        {/*
          SWAP: Replace these placeholder divs with real <Image /> components.
          Recommended sizes: 600×400px for gallery thumbnails.
          Use Next.js Image component for optimization.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {gallerySlots.map((label, i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-charcoal border border-white/5 flex items-center justify-center group hover:border-rose/20 transition-colors"
            >
              <div className="text-center text-steel-dark group-hover:text-steel transition-colors">
                <ImageIcon
                  size={28}
                  className="mx-auto mb-2 opacity-30 group-hover:opacity-50 transition-opacity"
                />
                <p className="text-xs font-display tracking-wider uppercase px-2">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── EPK download ─── */}
        <div className="text-center">
          {/*
            SWAP: Link this button to your actual EPK PDF.
            Place the file in /public/epk.pdf and update the href.
          */}
          <a
            href="/epk.pdf"
            className="btn-secondary"
            download
          >
            <Download size={16} /> Download EPK
          </a>
          <p className="text-steel-dark text-xs mt-3">
            Electronic Press Kit — bio, tech rider, photos, and booking info
          </p>
        </div>
      </div>
    </section>
  );
}
