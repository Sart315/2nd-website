import React from 'react';
import { Camera, Heart, Sparkles, MapPin, Compass } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050b14] border-t border-[#00e5ff]/20 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Manifesto & Real Brand Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>THE STUDIO ORIGINS</span>
            </div>

            {/* Headline per prompt */}
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight mb-5 [text-wrap:balance]">
              The Story Behind <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Chandralok
              </span>.
            </h2>

            <div className="space-y-4 text-[#cbd5e1] text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>
                Established in 1981 in Sirsaganj, Chandralok Studio (चन्द्रलोक फोटो स्टूडियो) was founded upon a enduring love for visual preservation. For over four decades, our cameras have stood witness to the sacred rituals, joyful tearfulness, and grand celebrations that define families in Uttar Pradesh.
              </p>
              <p>
                Specializing in luxury wedding photography, cinematic wedding films, and editorial pre-wedding moments, we balance the timeless emotional reverence of traditional rites with modern digital cinema technology and sculpted studio lighting.
              </p>
              <p>
                Located prominently on Etawah Road, near Punjab National Bank in Sirsaganj, we have built a trusted regional presence rooted in authentic storytelling rather than manufactured poses.
              </p>
            </div>

            {/* Core Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="p-4 bg-[#091526] border-l-2 border-[#00e5ff] rounded-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#00e5ff] font-bold">ESTD. 1981</div>
                <div className="text-sm font-bold text-white mt-0.5">Four Decades</div>
                <p className="text-[11px] text-[#94a3b8] mt-1 font-light">
                  Continuous photography & cinema dedication in Sirsaganj.
                </p>
              </div>

              <div className="p-4 bg-[#091526] border-l-2 border-[#ff6b00] rounded-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#ff6b00] font-bold">DISCIPLINE</div>
                <div className="text-sm font-bold text-white mt-0.5">Dual Craft</div>
                <p className="text-[11px] text-[#94a3b8] mt-1 font-light">
                  High-res fine art still photography + 4K cinema films.
                </p>
              </div>

              <div className="p-4 bg-[#091526] border-l-2 border-[#ffb703] rounded-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#ffb703] font-bold">ETHOS</div>
                <div className="text-sm font-bold text-white mt-0.5">Real Moments</div>
                <p className="text-[11px] text-[#94a3b8] mt-1 font-light">
                  Capturing unscripted human emotion and familial love.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Alongside Typography */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#00e5ff]/30 bg-[#091526] p-3 shadow-2xl rounded-xs">
              <div className="overflow-hidden aspect-[4/5] relative bg-[#050b14]">
                <img
                  src="/src/assets/images/royal_bridal_portrait_1791898990033.jpg"
                  alt="Chandralok Studio bridal photography portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] tracking-widest uppercase text-[#00e5ff] font-bold">
                    CHANDRALOK STUDIO ARCHIVE
                  </div>
                  <div className="font-hindi text-lg text-[#ffb703] font-semibold mt-0.5">
                    चन्द्रलोक फोटो स्टूडियो · 1981
                  </div>
                  <div className="text-xs text-[#cbd5e1] mt-1 flex items-center gap-1.5 font-light">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Etawah Road, Near Punjab National Bank, Sirsaganj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
