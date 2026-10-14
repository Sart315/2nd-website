import React from 'react';
import { History, Clock, Sparkles } from 'lucide-react';

export const LegacySection: React.FC = () => {
  const timelineMilestones = [
    {
      year: "1981",
      title: "Founding in Sirsaganj",
      detail: "Chandralok Studio established on Etawah Road with manual mechanical cameras and traditional darkroom silver-halide craft.",
      tech: "Manual 35mm Mechanical Film SLR",
      accent: "#ffb703"
    },
    {
      year: "1990s",
      title: "Generational Wedding Documentation",
      detail: "Documenting cultural Vedic marriage traditions, joint-family milestones, and traditional processions across Uttar Pradesh.",
      tech: "Medium Format & Color Negative Film",
      accent: "#ff6b00"
    },
    {
      year: "2010s",
      title: "The Digital Revolution",
      detail: "Pioneering high-resolution digital sensor photography, candid photojournalism, and studio softbox continuous lighting in the region.",
      tech: "Full-Frame Digital SLR & High-CRI Lighting",
      accent: "#00e5ff"
    },
    {
      year: "Today",
      title: "4K Digital Cinema & Fine Art Still",
      detail: "High-dynamic-range 4K cinema bodies, prime portrait glass, aerial drones, and calibrated color grading preserving modern heirlooms.",
      tech: "4K/6K Digital Cinema & Aerial Drone Fleet",
      accent: "#38bdf8"
    }
  ];

  return (
    <section id="legacy" className="py-24 bg-[#070e1b] border-t border-white/10 relative overflow-hidden film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Legacy Headline & Verified Story */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#ffb703] mb-3 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-semibold">
              <History className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>OVER FOUR DECADES OF DEDICATION</span>
            </div>

            <div className="text-6xl sm:text-7xl font-display text-[#00e5ff]/15 font-black select-none -mb-5 leading-none">
              1981
            </div>

            {/* Headline per user prompt */}
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight mb-5 [text-wrap:balance]">
              Over Four Decades <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Behind The Camera
              </span>.
            </h2>

            {/* Verified text */}
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
              Established in 1981, Chandralok Studio has grown with generations of stories, celebrations and unforgettable moments. Operating continuously from Sirsaganj on Etawah Road, near Punjab National Bank, our team has documented the changing faces, enduring rituals, and deepest vows of the region.
            </p>

            {/* Verified Trust Strip with Curved Glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-4 border-t border-white/10">
              <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl">
                <div className="text-[10px] uppercase tracking-wider text-[#00e5ff] font-bold">ESTABLISHED</div>
                <div className="text-sm font-bold text-white mt-0.5">1981 in Sirsaganj</div>
                <div className="text-[11px] text-[#94a3b8] font-light">Documenting generation after generation</div>
              </div>

              <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl">
                <div className="text-[10px] uppercase tracking-wider text-[#ff6b00] font-bold">LANDMARK STUDIO</div>
                <div className="text-sm font-bold text-white mt-0.5">Etawah Road, Near PNB</div>
                <div className="text-[11px] text-[#94a3b8] font-light">Welcoming families daily for consultations</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Decade Chronological Timeline in Glassmorphism UI */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#00e5ff] font-bold mb-4">
              <Clock className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>CHRONOLOGICAL EVOLUTION // 1981 → TODAY</span>
            </div>

            <div className="space-y-3.5 w-full">
              {timelineMilestones.map((m) => (
                <div
                  key={m.year}
                  className="p-4 bg-white/[0.03] backdrop-blur-md border border-white/10 border-l-4 rounded-xl transition-all hover:bg-white/[0.06] hover:border-white/20 shadow-md group"
                  style={{ borderLeftColor: m.accent }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="font-mono text-xs font-bold flex items-center gap-2" style={{ color: m.accent }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.accent }} />
                      {m.year} · {m.title}
                    </span>
                    <span className="text-[10px] text-[#94a3b8] font-mono bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/5">
                      {m.tech}
                    </span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Heritage Summary Badge */}
            <div className="mt-4 p-3 bg-white/[0.02] border border-white/10 rounded-xl flex items-center justify-between text-xs text-[#94a3b8]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ffb703]" />
                <span className="text-[11px]">43+ Years Preserving Memories in Agra & Firozabad Region</span>
              </div>
              <span className="text-[#00e5ff] font-mono text-[11px] font-bold">1981 — 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
