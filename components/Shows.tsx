"use client";

import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { upcomingShows, pastVenues } from "@/data/shows";

function formatDate(iso: string): { month: string; day: string; weekday: string } {
  const d = new Date(iso + "T00:00:00");
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
    weekday: d.toLocaleString("en-US", { weekday: "short" }),
  };
}

export default function Shows() {
  return (
    <section id="shows" className="py-24 bg-charcoal-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">Upcoming Shows</h2>
          <p className="section-subheading">
            Catch us live — check back for new dates
          </p>
        </div>

        {/* ─── Show list ─── */}
        {/*
          SWAP: Update the shows array in data/shows.ts with your real gig dates.
          Past shows are automatically stale — remove or archive them periodically.
        */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {upcomingShows.map((show) => {
            const d = formatDate(show.date);
            return (
              <div
                key={show.id}
                className="card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 hover:border-rose/20 transition-colors"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="block font-display text-xs tracking-widest text-rose">
                    {d.month}
                  </span>
                  <span className="block font-display text-3xl text-cream leading-tight">
                    {d.day}
                  </span>
                  <span className="block text-xs text-steel-dark uppercase">
                    {d.weekday}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl tracking-wider uppercase text-cream">
                    {show.venue}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-steel-light">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} /> {show.city}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} /> {show.time}
                    </span>
                    {show.note && (
                      <span className="text-rose/80 text-xs uppercase tracking-wider">
                        {show.note}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                {show.ticketUrl ? (
                  <a
                    href={show.ticketUrl}
                    className="btn-primary text-sm py-2 px-5 flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Ticket size={14} /> Tickets
                  </a>
                ) : (
                  <span className="text-xs text-steel-dark font-display tracking-wider uppercase flex-shrink-0">
                    Free Show
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Past venues ─── */}
        <div className="text-center">
          <h3 className="font-display text-lg tracking-wider uppercase text-steel mb-4">
            Previously Played
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-2xl mx-auto">
            {pastVenues.map((v) => (
              <span key={v} className="text-steel-dark text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
