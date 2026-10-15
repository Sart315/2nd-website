import React from 'react';
import { ArrowDown, Calendar, ArrowRight, Play, Camera, Film } from 'lucide-react';
import { useMotion } from '../context/MotionContext';
import { FilmStripRollingAnimation } from './FilmStripRollingAnimation';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCinemaPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCinemaPreview }) => {
  const { reducedMotion } = useMotion();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy in Cormorant Garamond & Inter */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small UI Label & Kicker */}
            <div className="flex items-center gap-2.5 text-[11px] tracking-widest uppercase font-semibold text-[#B08D57] mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Est. 1981</span>
              <span>·</span>
              <span className="font-hindi text-[#3B4436] dark:text-[#EFEFE8]">चन्द्रलोक फोटो स्टूडियो</span>
              <span>·</span>
              <span className="text-[#5C6755] dark:text-[#A3AFA0]">Sirsaganj, UP</span>
            </div>

            {/* Main Title - Bold and Simple Classic Montserrat */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#3B4436] dark:text-[#EFEFE8] leading-[1.08] mb-4 [text-wrap:balance] uppercase">
              Your Moments. <br />
              <span className="text-[#B08D57]">
                Our Master Frame.
              </span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="font-heading font-semibold text-lg sm:text-xl text-[#3B4436]/90 dark:text-[#EFEFE8]/90 tracking-wide mb-4">
              Four Decades of Royal Wedding Photography & 4K Cinema
            </p>

            {/* Lead Narrative in Inter */}
            <p className="font-body text-sm sm:text-[15px] text-[#5C6755] dark:text-[#A3AFA0] font-normal leading-relaxed max-w-xl mb-8">
              Capturing eternal wedding traditions, joyful baraat energy, and cinematic love stories across Uttar Pradesh. Dedicated to timeless visual artistry with flagship Sony Cinema, Canon EOS, Nikon Z, and Fujifilm medium-format equipment.
            </p>

            {/* Primary & Secondary Buttons - Tan Leather CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              {/* Primary CTA: Book Now */}
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-[#B08D57] hover:bg-[#9c7b49] active:scale-95 transition-colors shadow-xs rounded-full cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>

              {/* Secondary CTA: Explore Collections */}
              <a
                href="#services"
                className="px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] bg-white dark:bg-[#20251E] hover:border-[#B08D57] border border-[#D8D8CF] dark:border-[#2E3729] active:scale-95 transition-colors rounded-full flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Collections</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
              </a>

              {/* Watch Cinema Reel */}
              <button
                onClick={onOpenCinemaPreview}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#5C6755] dark:text-[#A3AFA0] hover:text-[#B08D57] px-3.5 py-2.5 transition-colors cursor-pointer rounded-full"
              >
                <span className="w-6 h-6 rounded-full border border-[#B08D57]/40 flex items-center justify-center bg-[#B08D57]/10">
                  <Play className="w-3 h-3 text-[#B08D57] fill-[#B08D57] ml-0.5" />
                </span>
                <span className="text-[11px] font-medium">Watch Cinema Reel</span>
              </button>
            </div>

            {/* Studio Heritage Ribbon */}
            <div className="w-full max-w-xl p-4 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs">
                <span className="font-semibold text-[#3B4436] dark:text-[#EFEFE8]">2025–2026 Auspicious Dates: </span>
                <span className="font-semibold text-[#B08D57]">Reservations Open</span>
                <span className="text-[#5C6755] dark:text-[#A3AFA0] block text-[11px] mt-0.5">Sirsaganj Studio · Etawah Road near Punjab National Bank</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="text-[11px] font-semibold uppercase tracking-widest text-[#B08D57] hover:underline self-start sm:self-auto cursor-pointer flex items-center gap-1 shrink-0"
              >
                <span>Check Dates</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: 35mm Film Strip Roll Showcase */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <FilmStripRollingAnimation onOpenCinemaPreview={onOpenCinemaPreview} />
          </div>
        </div>

        {/* Photography & Filmmaking Gear Summary Strip */}
        <div className="mt-12 pt-8 border-t border-[#D8D8CF] dark:border-[#2E3729] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
            <div className="text-[10px] tracking-widest uppercase text-[#B08D57] font-semibold flex items-center gap-1.5">
              <Film className="w-3 h-3" />
              <span>Sony Cinema Line</span>
            </div>
            <div className="font-heading text-lg font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">FX3 & A7S III Rigs</div>
            <div className="font-body text-[11px] text-[#5C6755] dark:text-[#A3AFA0]">4K 120fps · Low-Light Rituals</div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
            <div className="text-[10px] tracking-widest uppercase text-[#B08D57] font-semibold flex items-center gap-1.5">
              <Camera className="w-3 h-3" />
              <span>Canon & Nikon Flagships</span>
            </div>
            <div className="font-heading text-lg font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">EOS R5 & Nikon Z8</div>
            <div className="font-body text-[11px] text-[#5C6755] dark:text-[#A3AFA0]">Warm Skin Tones & High Resolution</div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
            <div className="text-[10px] tracking-widest uppercase text-[#B08D57] font-semibold flex items-center gap-1.5">
              <Camera className="w-3 h-3" />
              <span>Fujifilm Medium Format</span>
            </div>
            <div className="font-heading text-lg font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">GFX 100 II 102MP</div>
            <div className="font-body text-[11px] text-[#5C6755] dark:text-[#A3AFA0]">Fine-Art Royal Portraits</div>
          </div>

          <div className="p-4 sm:p-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
            <div className="text-[10px] tracking-widest uppercase text-[#B08D57] font-semibold flex items-center gap-1.5">
              <Film className="w-3 h-3" />
              <span>Aerial & Continuous Light</span>
            </div>
            <div className="font-heading text-lg font-normal text-[#3B4436] dark:text-[#EFEFE8] mt-1">DJI Drones & Profoto</div>
            <div className="font-body text-[11px] text-[#5C6755] dark:text-[#A3AFA0]">Aerial Perspectives & Octaboxes</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-[#5C6755] dark:text-[#A3AFA0] text-xs">
        <a
          href="#services"
          className="flex flex-col items-center gap-1 hover:text-[#B08D57] transition-colors"
        >
          <span className="tracking-widest uppercase text-[10px] font-semibold">Explore Collections</span>
          <ArrowDown className={`w-3.5 h-3.5 text-[#B08D57] ${reducedMotion ? '' : 'animate-bounce'}`} />
        </a>
      </div>
    </section>
  );
};
