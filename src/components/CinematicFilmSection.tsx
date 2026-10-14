import React, { useState } from 'react';
import { Play, X, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const CinematicFilmSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="cinema" className="py-28 bg-[#070709] border-t border-[#1a1922] relative overflow-hidden film-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#c8a97e] mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>4K CINEMA PRODUCTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f7f4ee] leading-tight mb-4 [text-wrap:balance]">
            Every Frame Has <br />
            <span className="italic text-[#dfc298]">A Story</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#a09c94] font-light leading-relaxed">
            We don't simply record videos; we direct and score cinematic films that capture the acoustic warmth, emotional pauses, and genuine poetry of your day.
          </p>
        </div>

        {/* Widescreen Anamorphic Video Showcase Container (2.39:1) */}
        <div className="relative mx-auto max-w-6xl aspect-[21/9] sm:aspect-[2.39/1] bg-[#0c0c10] border border-[#262534] shadow-2xl overflow-hidden group">
          {/* Poster Image */}
          <img
            src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
            alt="Chandralok Studio cinematic film still in 2.39:1 anamorphic ratio"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
          />

          {/* Cinematic Letterbox Gradient & Haze */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Center Play Button with Pulsing Halo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <button
              onClick={() => setIsPlaying(true)}
              className="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#08080a]/80 backdrop-blur-md border border-[#c8a97e]/60 flex items-center justify-center text-[#c8a97e] hover:bg-[#c8a97e] hover:text-[#08080a] transition-all duration-300 shadow-2xl hover:scale-105"
              aria-label="Play cinematic showreel"
            >
              <div className="absolute -inset-3 rounded-full border border-[#c8a97e]/20 animate-pulse pointer-events-none" />
              <Play className="w-8 h-8 fill-current ml-1 transition-transform group-hover/btn:scale-110" />
            </button>
            <span className="mt-4 text-xs tracking-[0.25em] uppercase text-white/90 font-light drop-shadow">
              Play Studio Showreel · 4K UHD
            </span>
          </div>

          {/* Film Metadata Corners */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-3 text-[11px] tracking-widest text-[#c8a97e] uppercase font-light bg-black/50 px-3 py-1.5 border border-white/10 backdrop-blur-sm">
            <span>2.39:1 ANAMORPHIC RATIO</span>
            <span>·</span>
            <span>4K 60FPS</span>
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between text-white">
            <div className="max-w-md">
              <p className="text-[11px] tracking-widest text-[#c8a97e] uppercase">CHANDRALOK MASTER REEL</p>
              <p className="font-serif text-lg sm:text-xl text-[#f7f4ee]">“Symphony of the Heritage Union”</p>
            </div>
            <div className="hidden sm:block text-right text-xs text-[#a09c94] font-light">
              <span>Sound Design: 32-Bit Float Audio</span>
              <br />
              <span>Color Grade: Filmic Warm Gold LUT</span>
            </div>
          </div>
        </div>

        {/* Cinematic Film Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          <div className="p-5 bg-[#0e0e14] border border-[#1f1e29]">
            <h3 className="font-serif text-lg text-[#f7f4ee] mb-1">Color Grading</h3>
            <p className="text-xs text-[#a09c94] font-light leading-relaxed">
              Custom color science developed specifically for Indian weddings — preserving radiant skin tones and opulent textiles.
            </p>
          </div>
          <div className="p-5 bg-[#0e0e14] border border-[#1f1e29]">
            <h3 className="font-serif text-lg text-[#f7f4ee] mb-1">Acoustic Immersion</h3>
            <p className="text-xs text-[#a09c94] font-light leading-relaxed">
              Crisp lapel microphones for mantras, wedding vows, and emotional speeches combined with orchestral musical scores.
            </p>
          </div>
          <div className="p-5 bg-[#0e0e14] border border-[#1f1e29]">
            <h3 className="font-serif text-lg text-[#f7f4ee] mb-1">Drone Cinematography</h3>
            <p className="text-xs text-[#a09c94] font-light leading-relaxed">
              Grand panoramic overhead compositions showcasing baraat arrivals, palace architecture, and midnight celebrations.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#09090c] border border-[#302f40] shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Player Header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#121218] border-b border-[#222130]">
              <div className="flex items-center gap-3 text-xs tracking-wider text-[#c8a97e] uppercase">
                <span>Chandralok Cinema Reel</span>
                <span>·</span>
                <span className="text-white/60">Sirsaganj, Uttar Pradesh</span>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1 text-[#c5c1b8] hover:text-white rounded-full transition-colors"
                aria-label="Close cinema preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Simulation */}
            <div className="relative aspect-[21/9] sm:aspect-[2.39/1] bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
                alt="Cinema reel preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              {/* Simulated Ambient Player Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 border border-white/20 text-[#c8a97e] hover:bg-white/10 transition-colors pointer-events-auto"
                    aria-label="Toggle sound"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-xs text-[#c5c1b8] font-mono tabular-nums">00:48 / 03:24</span>
                </div>
                <div className="text-xs tracking-wider uppercase text-[#c8a97e] font-light">
                  Director's Cut · 4K Master
                </div>
              </div>
            </div>

            {/* Teaser Explanation */}
            <div className="p-6 bg-[#09090c] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#a09c94] font-light leading-relaxed max-w-xl">
                Official high-bitrate video teaser for Chandralok Studio. Full client films and teasers are privately hosted in 4K resolution on YouTube and Google Drive archives.
              </p>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#08080a] bg-[#c8a97e] hover:bg-[#d9bc94] transition-colors whitespace-nowrap shrink-0"
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
