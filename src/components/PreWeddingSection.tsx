import React from 'react';
import { Sparkles, MapPin, Film, Heart, ArrowUpRight } from 'lucide-react';

export const PreWeddingSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#081120] border-t border-[#00e5ff]/20 relative overflow-hidden film-grain">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00e5ff]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#ff6b00] mb-3 font-semibold">
            <Heart className="w-3.5 h-3.5 fill-[#ff6b00]" />
            <span>EDITORIAL PRE-WEDDING ARCHIVE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white leading-tight mb-4 [text-wrap:balance]">
            BEFORE THE <br />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
              BIG DAY
            </span>.
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] font-light leading-relaxed">
            Before the flurry of wedding day rituals, take time to celebrate your quiet bond. From sandstone palace pavilions to sunset silhouettes and editorial couture styling, we film your love story with cinematic grace.
          </p>
        </div>

        {/* Asymmetric Editorial Couple Photography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Hero Feature Image */}
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#050b14] border border-[#00e5ff]/30 rounded-xs shadow-2xl min-h-[480px]">
            <img
              src="/src/assets/images/prewedding_cinematic_1791896401895.jpg"
              alt="Pre-wedding couple photography in heritage pavilion by Chandralok Studio"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/30 to-transparent" />

            {/* Floating Film Frame Tag */}
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-[#050b14]/85 px-3 py-1.5 border border-[#00e5ff]/40 rounded-xs text-xs font-mono text-white">
              <Film className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span className="text-[#00e5ff] font-bold">FRAME 01 // 35MM T1.5</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1.5 text-xs text-[#ffb703] font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>Royal Chhatri Pavilion · Golden Sunset</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight">
                The Pavilion Sunset Whisper
              </h3>
              <p className="text-xs text-[#cbd5e1] mt-1 font-light max-w-md">
                Windswept veil, classical sandstone carvings, and golden rim backlight directed for timeless editorial elegance.
              </p>
            </div>
          </div>

          {/* Right Column: Two Supporting Frames & Film Strip Ribbon */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Supporting Frame 1: Royal Courtyard */}
            <div className="relative group overflow-hidden bg-[#050b14] border border-[#ff6b00]/30 rounded-xs shadow-xl aspect-[16/10]">
              <img
                src="/src/assets/images/hero_cinematic_couple_1791896401138.jpg"
                alt="Pre-wedding royal couture portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-mono text-[#ff6b00] tracking-widest font-bold">
                  FRAME 02 // ROYAL COUTURE
                </span>
                <h4 className="font-display text-lg font-bold">Heritage Palace Union</h4>
              </div>
            </div>

            {/* Supporting Frame 2: Anamorphic Still */}
            <div className="relative group overflow-hidden bg-[#050b14] border border-[#ffb703]/30 rounded-xs shadow-xl aspect-[16/10]">
              <img
                src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
                alt="Evening candlelight romance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-mono text-[#ffb703] tracking-widest font-bold">
                  FRAME 03 // EVENING REEL
                </span>
                <h4 className="font-display text-lg font-bold">Anamorphic Candlelight Gaze</h4>
              </div>
            </div>

            {/* Consultation Banner */}
            <div className="p-4 bg-[#0a1728] border border-[#00e5ff]/30 rounded-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#00e5ff] font-bold">
                  LOCATIONS & OUTFIT STYLING
                </div>
                <div className="text-xs text-white mt-0.5">
                  Full concept planning for Agra, Sirsaganj & heritage palaces
                </div>
              </div>
              <a
                href="#booking"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#050b14] bg-[#00e5ff] hover:bg-[#ff6b00] hover:text-white transition-colors rounded-xs flex items-center gap-1 shrink-0"
              >
                <span>Plan Shoot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
