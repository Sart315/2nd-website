import React, { useState, useEffect } from 'react';
import { ArrowDown, Play, Calendar, Sparkles, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { useMotion } from '../context/MotionContext';
import { STUDIO_INFO } from '../data/studioData';
import { FilmStripRollingAnimation } from './FilmStripRollingAnimation';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCinemaPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCinemaPreview }) => {
  const { reducedMotion } = useMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 overflow-hidden bg-[#050b14] film-grain min-h-[90vh] sm:min-h-screen"
    >
      {/* 3D Studio Cinematic Lighting Rig Glows in Midnight Navy + Cyan + Orange */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-br from-[#00e5ff]/20 via-[#0284c7]/10 to-transparent blur-[140px] sm:blur-[160px] rounded-full transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion
            ? 'none'
            : `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 right-5 sm:right-10 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-gradient-to-bl from-[#ff6b00]/18 via-[#ffb703]/12 to-transparent blur-[130px] sm:blur-[150px] rounded-full transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion
            ? 'none'
            : `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          {/* Left Column: Brand Message, Headline & Curved Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Kicker: EST. 1981 with Hindi identity in Transparent Glassy Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#00e5ff] mb-2 sm:mb-3.5 bg-white/[0.04] backdrop-blur-md px-3 sm:px-3.5 py-1.5 border border-white/10 rounded-full shadow-lg max-w-full overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse shrink-0" />
              <span className="font-semibold text-white whitespace-nowrap">EST. 1981</span>
              <span className="text-white/30">·</span>
              <span className="font-hindi text-[#ffb703] font-semibold text-[11px] sm:text-[13px] tracking-normal truncate">
                चन्द्रलोक फोटो स्टूडियो
              </span>
              <span className="text-white/30 hidden xs:inline">·</span>
              <span className="text-[#94a3b8] hidden xs:inline">SIRSAGANJ</span>
            </div>

            {/* Hero Main Headline (Mobile optimized size to ensure top view fits cleanly on phones) */}
            <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-2 sm:mb-2.5 [text-wrap:balance]">
              YOUR MOMENTS. <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#ff6b00] bg-clip-text text-transparent">
                OUR FRAME.
              </span>
            </h1>

            {/* Supporting tagline */}
            <div className="text-xs sm:text-sm font-serif-cinematic italic text-[#ffb703] tracking-wide mb-1.5 sm:mb-2.5">
              Photography & Filmmaking Since 1981 · Sirsaganj, Uttar Pradesh
            </div>

            {/* Supporting description */}
            <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed max-w-xl mb-4 sm:mb-6">
              Documenting royal wedding celebrations, intimate pre-wedding stories, and 4K cinema films with four decades of visual mastery on Etawah Road, near Punjab National Bank.
            </p>

            {/* Primary & Secondary Action CTAs with Elegant Curves */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-4 sm:mb-6">
              {/* Primary CTA: ARTISTIC SERVICES (Curved Pill Button) */}
              <a
                href="#services"
                className="px-5 sm:px-8 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#050b14] bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#00e5ff] hover:from-[#ff6b00] hover:to-[#ffb703] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.4)] rounded-full cursor-pointer active:scale-95"
              >
                Artistic Services
              </a>

              {/* Secondary CTA: CHECK AVAILABILITY & BOOKING (Curved Glassy Button) */}
              <button
                onClick={onOpenBooking}
                className="px-4.5 sm:px-7 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-white bg-white/[0.06] backdrop-blur-md border border-white/20 hover:border-[#ff6b00] hover:bg-[#ff6b00]/15 transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer group active:scale-95 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-[#ff6b00] group-hover:scale-110 transition-transform" />
                <span>Check Availability</span>
                <ArrowRight className="w-3 h-3 text-[#00e5ff] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Watch Cinema Reel (Curved Glassy Pill) */}
              <button
                onClick={onOpenCinemaPreview}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-wider text-[#94a3b8] hover:text-[#00e5ff] px-2.5 sm:px-3 py-1.5 sm:py-2 transition-colors cursor-pointer rounded-full bg-white/[0.03] border border-white/5 hover:border-white/20"
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <Play className="w-2.5 h-2.5 text-[#00e5ff] fill-[#00e5ff] ml-0.5" />
                </span>
                <span className="text-[10px] sm:text-[11px]">Watch Reel</span>
              </button>
            </div>

            {/* Studio Heritage Ribbon in Transparent Glassy UI with Curved Border */}
            <div className="w-full max-w-xl p-2.5 sm:p-3.5 bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                <div className="text-[11px] sm:text-xs">
                  <span className="text-white font-semibold">2025–2026 Auspicious Dates: </span>
                  <span className="text-[#00e5ff] font-mono font-medium">Reservations Open</span>
                  <span className="text-[#94a3b8] block text-[10px] sm:text-[11px]">Sirsaganj Studio · Etawah Road near PNB</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#ffb703] hover:text-white border-b border-[#ffb703]/60 pb-0.5 self-start sm:self-auto cursor-pointer flex items-center gap-1"
              >
                <span>Reserve in Final Section</span>
                <span>↓</span>
              </button>
            </div>
          </div>

          {/* Right Column: 35MM FILM ROLLING ANIMATION IN COMPACT RECTANGULAR SHAPE */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <FilmStripRollingAnimation onOpenCinemaPreview={onOpenCinemaPreview} />
          </div>
        </div>

        {/* DETAILS ABOUT EQUIPMENTS BAR ON FIRST PAGE - Curved Glassy Cards */}
        <div className="mt-6 sm:mt-10 pt-3 sm:pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="p-2.5 sm:p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#00e5ff]/50 transition-colors">
            <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#00e5ff] font-bold">SONY CINEMA LINE</div>
            <div className="text-xs sm:text-sm font-display font-bold text-white mt-0.5">FX3 & FX6 Cinema Rigs</div>
            <div className="text-[9px] sm:text-[11px] text-[#94a3b8]">4K 120fps · Low-Light Rituals</div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#ff6b00]/50 transition-colors">
            <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#ff6b00] font-bold">CANON CINEMA EOS</div>
            <div className="text-xs sm:text-sm font-display font-bold text-white mt-0.5">Cinema EOS C-Series</div>
            <div className="text-[9px] sm:text-[11px] text-[#94a3b8]">Iconic Warm Bridal Skin Tones</div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#ffb703]/50 transition-colors">
            <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#ffb703] font-bold">FUJIFILM LARGE-FORMAT</div>
            <div className="text-xs sm:text-sm font-display font-bold text-white mt-0.5">GFX 100 II 102MP</div>
            <div className="text-[9px] sm:text-[11px] text-[#94a3b8]">Film Simulation Profiles</div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#38bdf8]/50 transition-colors">
            <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#38bdf8] font-bold">AERIAL & LIGHTING</div>
            <div className="text-xs sm:text-sm font-display font-bold text-white mt-0.5">DJI Inspire 3 & Profoto</div>
            <div className="text-[9px] sm:text-[11px] text-[#94a3b8]">8K Drone Fleet · Filming Lights</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Affordance */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2 sm:pt-3 text-[#94a3b8] text-xs">
        <a
          href="#services"
          className="flex flex-col items-center gap-1 hover:text-[#00e5ff] transition-colors group"
        >
          <span className="tracking-[0.25em] uppercase text-[9px] sm:text-[10px] text-[#cbd5e1]">Artistic Services Below</span>
          <ArrowDown className={`w-3 h-3 group-hover:text-[#00e5ff] ${reducedMotion ? '' : 'animate-bounce'}`} />
        </a>
      </div>
    </section>
  );
};
