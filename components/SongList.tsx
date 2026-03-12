"use client";

import { useState } from "react";
import { Music, ChevronDown, ChevronUp } from "lucide-react";
import { songCategories } from "@/data/songs";

export default function SongList() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="songs" className="py-24 bg-texture">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">What We Play</h2>
          <p className="section-subheading">
            A taste of the setlist — always evolving, always crowd-tested
          </p>
        </div>

        {/*
          SWAP: Update the song list in data/songs.ts with your real repertoire.
          Add or remove categories as needed.
        */}
        <div className="max-w-3xl mx-auto space-y-3">
          {songCategories.map((cat, idx) => {
            const isOpen = expandedIdx === idx;
            return (
              <div key={cat.name} className="card overflow-hidden">
                <button
                  onClick={() => setExpandedIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Music size={18} className="text-rose" />
                    <span className="font-display text-lg tracking-wider uppercase text-cream">
                      {cat.name}
                    </span>
                    <span className="text-xs text-steel-dark ml-1">
                      ({cat.songs.length})
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-steel" />
                  ) : (
                    <ChevronDown size={18} className="text-steel" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 border-t border-white/5 pt-4 animate-fade-in">
                    {cat.songs.map((song) => (
                      <div
                        key={`${song.title}-${song.artist}`}
                        className="flex justify-between text-sm py-1"
                      >
                        <span className="text-cream/90 font-medium">
                          {song.title}
                        </span>
                        <span className="text-steel-dark ml-3 whitespace-nowrap">
                          {song.artist}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-steel-dark mt-8">
          This is a sample of our repertoire. We regularly add new material and
          can tailor sets for your event. <a href="#booking" className="text-rose hover:text-rose-light underline underline-offset-2">Get in touch</a> for a full song list.
        </p>
      </div>
    </section>
  );
}
