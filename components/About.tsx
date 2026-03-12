"use client";

import { Guitar, Mic, Users, Zap } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Guitar,
    label: "Seasoned Players",
    text: "Decades of stage experience across rock, blues, and pop.",
  },
  {
    icon: Mic,
    label: "Powerful Vocals",
    text: "Male and female lead vocals that own every song.",
  },
  {
    icon: Users,
    label: "Crowd Movers",
    text: "We read the room and keep the energy right all night.",
  },
  {
    icon: Zap,
    label: "Full Production",
    text: "Pro sound, lights, and a show that fills any stage.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-texture">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">About the Band</h2>
          <p className="section-subheading">
            Grit, groove, and just the right amount of attitude
          </p>
        </div>

        {/* ─── Bio ─── */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/*
            SWAP: Replace this placeholder copy with your real band bio.
          */}
          <p className="text-cream/80 text-lg leading-relaxed mb-6">
            Rust &amp; Roses is a high-energy cover band built from seasoned
            musicians who&rsquo;ve spent years on stages across Texas and
            beyond. We bring the raw edge of hard rock, the soul of the blues,
            and the hooks that pack a dance floor — all delivered with a polish
            that keeps us getting booked back.
          </p>
          <p className="text-cream/80 text-lg leading-relaxed">
            We&rsquo;re not a jukebox. We&rsquo;re a live experience. Every set
            is crafted to build energy, move a crowd, and leave a room wanting
            more. From dive bars to corporate events, we bring the same thing
            every time: a show worth talking about.
          </p>
        </div>

        {/* ─── Highlight cards ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="card p-6 text-center group hover:border-rose/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose/10 text-rose mb-4 group-hover:bg-rose/20 transition-colors">
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-lg tracking-wider uppercase text-cream mb-2">
                {item.label}
              </h3>
              <p className="text-steel-light text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ─── Band photo ─── */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-[3/2] overflow-hidden border border-white/5">
            <Image
              src="/images/photos/band_photo.png"
              alt="Rust & Roses performing live on stage"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
