import React, { useState } from 'react';
import { Play, X, Volume2, VolumeX, Maximize2, Film, Sparkles, Camera } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const WeddingCinemaSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="cinema" className="py-28 bg-[#030712] border-t border-[#00e5ff]/20 relative overflow-hidden film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold">
            <Film className="w-3.5 h-3.5" />
            <span>4K ULTRA-HD CINEMATOGRAPHY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white leading-tight mb-4 [text-wrap:balance]">
            YOUR WEDDING. <br />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#ff6b00] bg-clip-text text-transparent">
              SHOT LIKE CINEMA
            </span>.
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
            We don't simply record a wedding video. We direct, light, score, and grade a cinematic feature film with anamorphic lenses, multi-angle drones, and emotional acoustic fidelity.
          </p>
        </div>

        {/* Widescreen 2.39:1 Anamorphic Cinema Frame with Camera HUD Overlay */}
        <div className="relative mx-auto max-w-6xl aspect-[21/9] sm:aspect-[2.39/1] bg-[#070f1d] border-2 border-[#00e5ff]/40 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden group rounded-xs">
          {/* Cinema Frame Poster Image */}
          <img
            src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
            alt="Chandralok Studio 4K Cinema Film Frame"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
          />

          {/* Letterbox Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

          {/* Camera Lens HUD Frame & Viewfinder Crosshairs */}
          <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
            {/* Top HUD */}
            <div className="flex items-center justify-between text-xs font-mono text-white">
              <div className="flex items-center gap-3 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-[#00e5ff]/30 rounded-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000] animate-pulse" />
                <span className="text-[#00e5ff] font-bold">ANAMORPHIC 2.39:1</span>
                <span className="text-[#94a3b8]">4K 60FPS PRORES</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-xs text-[#ffb703]">
                <span>SHUTTER 1/120</span>
                <span>·</span>
                <span>WHITE BALANCE 5600K</span>
              </div>
            </div>

            {/* Center Play Button Overlay */}
            <div className="self-center flex flex-col items-center justify-center pointer-events-auto">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#050b14]/90 backdrop-blur-md border-2 border-[#00e5ff] hover:border-[#ff6b00] flex items-center justify-center text-[#00e5ff] hover:text-[#ff6b00] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_35px_rgba(0,229,255,0.4)] cursor-pointer group/btn"
                aria-label="Play Film"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1 group-hover/btn:scale-110 transition-transform" />
              </button>
              <span className="mt-3 text-xs uppercase tracking-[0.22em] text-white font-bold bg-black/60 px-3 py-1 rounded-xs border border-white/15 drop-shadow">
                PLAY FILM · MASTER REEL
              </span>
            </div>

            {/* Bottom HUD */}
            <div className="flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] tracking-widest text-[#ff6b00] uppercase font-bold">
                  CHANDRALOK STUDIO CINEMA
                </p>
                <p className="font-display text-lg sm:text-2xl font-bold">
                  “Symphony of the Sacred Union”
                </p>
                <p className="text-xs text-[#94a3b8] font-hindi">चन्द्रलोक फोटो स्टूडियो · Sirsaganj</p>
              </div>
              <div className="text-right text-xs font-mono text-[#00e5ff] hidden sm:block">
                <span>SOUND: 32-BIT FLOAT STEREO</span>
                <br />
                <span className="text-[#ffb703]">LUT: FILMIC GOLD WARMTH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Attributes Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 max-w-6xl mx-auto">
          <div className="p-5 bg-[#081220] border-t-2 border-[#00e5ff] rounded-xs">
            <h3 className="font-display font-bold text-base uppercase text-white mb-1">
              Multi-Angle Drone Cinematography
            </h3>
            <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
              Grand high-altitude 4K HDR perspectives capturing baraat processions, fireworks over the venue, and royal palace arches.
            </p>
          </div>

          <div className="p-5 bg-[#081220] border-t-2 border-[#ff6b00] rounded-xs">
            <h3 className="font-display font-bold text-base uppercase text-white mb-1">
              Acoustic 32-Bit Sound Design
            </h3>
            <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
              Dual-wireless lapel microphones preserving the priest’s sacred Vedic chants, family blessings, and spontaneous vows with zero distortion.
            </p>
          </div>

          <div className="p-5 bg-[#081220] border-t-2 border-[#ffb703] rounded-xs">
            <h3 className="font-display font-bold text-base uppercase text-white mb-1">
              DaVinci Resolve Color Grading
            </h3>
            <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
              Film-grade color science optimized for rich Indian textiles, henna details, and luminous golden skin tones.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#050b14] border border-[#00e5ff]/50 shadow-2xl overflow-hidden flex flex-col rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#0b1424] border-b border-[#1e293b]">
              <div className="flex items-center gap-3 text-xs tracking-wider text-[#00e5ff] font-mono uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
                <span>Chandralok Wedding Cinema Master</span>
                <span className="text-white/40">·</span>
                <span className="text-[#ffb703]">Sirsaganj, UP</span>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1 text-[#94a3b8] hover:text-white rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[21/9] sm:aspect-[2.39/1] bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
                alt="Cinema reel"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/70 border border-white/20 text-[#00e5ff] hover:bg-white/10 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-xs text-[#cbd5e1] font-mono">01:14 / 04:32</span>
                </div>
                <div className="text-xs tracking-wider uppercase text-[#ff6b00] font-bold">
                  DIRECTOR'S 4K MASTER CUT
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#050b14] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#cbd5e1] font-light leading-relaxed max-w-xl">
                Ready for full 4K wedding films and teasers. Hosted in ultra-high bitrate on our official YouTube channel and private client archives.
              </p>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#ff0000] to-[#b30000] hover:opacity-90 transition-all rounded-xs whitespace-nowrap"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
