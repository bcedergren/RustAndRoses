"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-texture">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">What They Say</h2>
          <p className="section-subheading">
            Venues and event planners weigh in
          </p>
        </div>

        {/*
          SWAP: Replace testimonials in data/testimonials.ts with real quotes.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card p-6 flex flex-col hover:border-rose/20 transition-colors"
            >
              <Quote
                size={24}
                className="text-rose/40 mb-4 flex-shrink-0"
              />
              <blockquote className="text-cream/80 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="border-t border-white/5 pt-4">
                <cite className="not-italic">
                  <span className="block font-display text-sm tracking-wider uppercase text-cream">
                    {t.name}
                  </span>
                  <span className="text-xs text-steel">
                    {t.role} — {t.venue}
                  </span>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
