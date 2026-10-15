import React from 'react';
import { History, Clock, Award } from 'lucide-react';

export const LegacySection: React.FC = () => {
  const timelineMilestones = [
    {
      year: '1981',
      title: 'Founding in Sirsaganj',
      detail: 'Chandralok Studio established on Etawah Road with manual mechanical film SLRs and authentic silver-halide darkroom craftsmanship.',
      tech: 'Manual 35mm Mechanical Film SLR',
    },
    {
      year: '1990s',
      title: 'Generational Wedding Traditions',
      detail: 'Documenting cultural Vedic marriage rituals, joint-family milestones, and traditional processions across Uttar Pradesh.',
      tech: 'Medium Format & Color Negative Film',
    },
    {
      year: '2010s',
      title: 'The Digital Revolution',
      detail: 'Pioneering high-resolution digital sensors, candid photojournalism, and studio softbox continuous lighting in Sirsaganj.',
      tech: 'Full-Frame Digital Sensors & High-CRI Lighting',
    },
    {
      year: 'Today',
      title: '4K Digital Cinema & Fine Art Stills',
      detail: 'Flagship cinema cameras, portrait primes, aerial drones, and color-graded films preserving family heirlooms for lifetimes to come.',
      tech: '4K/8K Digital Cinema & Aerial Drone Fleet',
    },
  ];

  return (
    <section id="legacy" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Legacy Headline & Story */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <History className="w-3.5 h-3.5" />
              <span>Over Four Decades Behind The Lens</span>
            </div>

            <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#B08D57]/30 dark:text-[#B08D57]/20 select-none leading-none mb-1">
              EST. 1981
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] mb-5 [text-wrap:balance] uppercase tracking-tight">
              Preserving Royal Stories <br />
              <span className="text-[#B08D57]">
                Across Generations
              </span>
            </h2>

            <p className="font-body text-sm text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed mb-8">
              Established in 1981, Chandralok Studio has grown alongside generations of families, sacred ceremonies, and unforgettable milestones. Operating continuously from Sirsaganj on Etawah Road, near Punjab National Bank, our team has documented the changing faces, enduring rituals, and deepest vows of Uttar Pradesh.
            </p>

            {/* Verified Trust Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-[#D8D8CF] dark:border-[#2E3729]">
              <div className="p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl shadow-xs">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57]">
                  Established
                </div>
                <div className="font-heading text-xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">1981 in Sirsaganj</div>
                <div className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mt-0.5">Four decades of community trust</div>
              </div>

              <div className="p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl shadow-xs">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57]">
                  Landmark Studio
                </div>
                <div className="font-heading text-xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">Etawah Road, Near PNB</div>
                <div className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mt-0.5">Open daily for consultations</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Decade Chronological Timeline in Solid Minimalist UI */}
          <div className="lg:col-span-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-6 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Studio Heritage Timeline</span>
            </div>

            <div className="space-y-4 w-full">
              {timelineMilestones.map((m) => (
                <div
                  key={m.year}
                  className="p-6 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl transition-all hover:border-[#B08D57] shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-heading text-xl font-normal text-[#3B4436] dark:text-[#EFEFE8] flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                      <span>{m.year} · {m.title}</span>
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5C6755] dark:text-[#A3AFA0] bg-[#EFEFE8] dark:bg-[#181C16] px-2.5 py-1 rounded border border-[#D8D8CF] dark:border-[#2E3729]">
                      {m.tech}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Heritage Summary */}
            <div className="mt-5 p-4 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl flex items-center justify-between text-xs text-[#5C6755] dark:text-[#A3AFA0]">
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#B08D57]" />
                <span>43+ Years Preserving Family Memories in Sirsaganj & Uttar Pradesh</span>
              </div>
              <span className="font-heading text-sm text-[#B08D57] font-semibold">1981 — 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
