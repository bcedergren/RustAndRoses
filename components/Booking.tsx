"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-charcoal-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="divider-rose" />
          <h2 className="section-heading">Book Rust &amp; Roses</h2>
          <p className="section-subheading">
            Bars, clubs, festivals, private events — let&rsquo;s make it happen
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ─── Info column ─── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl tracking-wider uppercase text-cream mb-4">
                Get in Touch
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                Whether you&rsquo;re a venue booker, event planner, or throwing
                a party that needs a band — we&rsquo;d love to hear from you.
                Fill out the form or reach out directly.
              </p>
            </div>

            {/*
              SWAP: Replace these placeholder contact details with your real info.
            */}
            <div className="space-y-4">
              <a
                href="mailto:booking@rustandroses.com"
                className="flex items-center gap-3 text-steel-light hover:text-cream transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                  <Mail size={16} className="text-rose" />
                </div>
                <span className="text-sm">booking@rustandroses.com</span>
              </a>
              <a
                href="tel:+15125551234"
                className="flex items-center gap-3 text-steel-light hover:text-cream transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center group-hover:bg-rose/20 transition-colors">
                  <Phone size={16} className="text-rose" />
                </div>
                <span className="text-sm">(512) 555-1234</span>
              </a>
              <div className="flex items-center gap-3 text-steel-light">
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                  <MapPin size={16} className="text-rose" />
                </div>
                <span className="text-sm">Based in Austin, TX — available regionwide</span>
              </div>
            </div>

            {/* What we bring */}
            <div className="card p-5">
              <h4 className="font-display text-sm tracking-wider uppercase text-cream mb-3">
                What You Get
              </h4>
              <ul className="space-y-2 text-sm text-cream/70">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-0.5">&#9670;</span>
                  3–4 hours of live music (customizable sets)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-0.5">&#9670;</span>
                  Full PA system and stage lighting available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-0.5">&#9670;</span>
                  Professional, reliable, and easy to work with
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-0.5">&#9670;</span>
                  Flexible setlists tailored to your event
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Contact form ─── */}
          {/*
            NOTE: This form uses a simple mailto action as a placeholder.
            For production, connect it to:
            - A serverless function (Next.js API route or Vercel serverless)
            - A service like Formspree, Netlify Forms, or EmailJS
            - Your own backend endpoint
          */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors placeholder:text-steel-dark"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors placeholder:text-steel-dark"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="event-type"
                className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
              >
                Event Type
              </label>
              <select
                id="event-type"
                name="event_type"
                className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors"
              >
                <option value="">Select one...</option>
                <option value="bar-club">Bar / Club Booking</option>
                <option value="festival">Festival</option>
                <option value="private">Private Event / Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding Reception</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="event_date"
                  className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="venue"
                  className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
                >
                  Venue / Location
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors placeholder:text-steel-dark"
                  placeholder="Venue name or city"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-display tracking-wider uppercase text-steel mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-charcoal border border-white/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-rose/50 transition-colors resize-none placeholder:text-steel-dark"
                placeholder="Tell us about your event..."
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
              <Send size={16} /> Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
