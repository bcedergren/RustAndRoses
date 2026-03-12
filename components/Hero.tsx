"use client";

import Logo from "./Logo";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background layers ─── */}
      {/*
        SWAP: Replace this gradient background with a real hero image.
        Use a high-quality band photo or stage shot as a CSS background-image
        on the outer div, or drop an <Image /> component here.
        Recommended size: 1920×1080 minimum, dark/moody lighting works best.
      */}
      <div className="absolute inset-0 bg-charcoal-dark" />

      {/* Simulated stage lighting / smoke atmosphere */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose/5 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

      {/* ─── Content ─── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <Logo size="hero" className="justify-center mb-6" />
        </div>

        <div className="animate-fade-up [animation-delay:0.3s] opacity-0">
          <p className="font-display text-xl md:text-2xl tracking-[0.3em] uppercase text-steel-light mb-2">
            Live Cover Music
          </p>
          <p className="text-steel text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Rock, blues, and everything that moves a crowd.
            <br className="hidden sm:block" />
            Built for bars, clubs, and stages that don&rsquo;t quit.
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:0.6s] opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking" className="btn-primary">
            Book the Band
          </a>
          <a href="#shows" className="btn-secondary">
            Upcoming Shows
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-dark hover:text-cream transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
