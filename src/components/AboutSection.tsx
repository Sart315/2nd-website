import React from 'react';
import { Camera, MapPin, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';
import { useTheme } from '../context/ThemeContext';
import { useAppRouter } from '../context/RouterContext';
import { ProgressiveImage } from './ProgressiveImage';

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();
  const { navigateTo } = useAppRouter();
  const equipmentTableImage = getImageUrl('wedding_equipment_table_flashes_1792253412864.jpg');

  return (
    <section
      id="about"
      className={`w-full max-w-full overflow-hidden py-20 sm:py-28 transition-colors duration-200 border-t border-b ${
        isDark ? 'bg-[#0A0C0B] text-[#F7F7F2] border-white/5' : 'bg-[#F2F2EC] text-[#1E2520] border-[#2C3528]/10'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Wedding Shoot Equipment Table with Dual Strobe Flashes */}
          <div className="lg:col-span-5 relative">
            <div
              className={`relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl ${
                isDark ? 'bg-[#161917] border-white/10' : 'bg-white border-[#2C3528]/15'
              }`}
            >
              <ProgressiveImage
                src={equipmentTableImage}
                alt="Table full of wedding shoot equipment with two flash lights placed behind - Chandralok Studio"
                aspectRatio="4/3"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 sm:p-4 rounded-xl bg-black/80 border border-white/15 text-white">
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-[#C5A880] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Sirsaganj Landmark Studio Fleet</span>
                </div>
                <div className="font-heading text-sm sm:text-base text-white font-normal">
                  Etawah Road, Near Punjab National Bank
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Genuine Trust Facts */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div
              className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${
                isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Our Ethos & Heritage</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-5 uppercase">
              Behind The Lens
            </h2>

            <blockquote
              className={`font-heading italic text-xl sm:text-2xl leading-snug mb-5 border-l-2 pl-5 ${
                isDark ? 'text-[#C5A880] border-[#C5A880]' : 'text-[#B08D57] border-[#B08D57]'
              }`}
            >
              "Every celebration has a story. <br className="hidden sm:inline" />
              Our job is to preserve the moments you'll want to relive for years to come."
            </blockquote>

            <p
              className={`font-body text-xs sm:text-sm leading-relaxed mb-7 max-w-2xl ${
                isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
              }`}
            >
              Founded in 1981, Chandralok Studio has spent over four decades preserving the cultural traditions, intimate vows, and joyous energy of families across Sirsaganj, Agra, Etawah, and greater Uttar Pradesh. We approach every wedding with deep cultural reverence and modern cinematic craft — capturing emotions unscripted, genuine, and timeless.
            </p>

            {/* Compact Authentic Trust Pillars */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-5 border-t ${
                isDark ? 'border-white/10' : 'border-[#2C3528]/15'
              }`}
            >
              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/10 shadow-xs'
                }`}
              >
                <span className="font-heading text-3xl text-[#C5A880] dark:text-[#C5A880] font-light block mb-0.5">
                  1981
                </span>
                <span className="text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Established
                </span>
                <span className={`text-[11px] leading-tight block ${isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'}`}>
                  Over 40 years of continuous community trust
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/10 shadow-xs'
                }`}
              >
                <span className="font-heading text-3xl text-[#C5A880] dark:text-[#C5A880] font-light block mb-0.5">
                  4K
                </span>
                <span className="text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Cinema Fleet
                </span>
                <span className={`text-[11px] leading-tight block ${isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'}`}>
                  Dual softbox strobe stations & cinema prime optics
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/10 shadow-xs'
                }`}
              >
                <span className="font-heading text-3xl text-[#C5A880] dark:text-[#C5A880] font-light block mb-0.5">
                  100%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider block mb-0.5">
                  Handcrafted
                </span>
                <span className={`text-[11px] leading-tight block ${isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'}`}>
                  Archival photo albums & bespoke color grading
                </span>
              </div>
            </div>

            {/* Dedicated About Page Navigation Button */}
            <div className="mt-6">
              <button
                onClick={() => navigateTo('about')}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/20 hover:border-[#C5A880] text-[#F7F7F2] bg-[#161917]/80 hover:bg-[#1E221F]'
                    : 'border-[#2C3528]/20 hover:border-[#B08D57] text-[#1E2520] bg-white hover:bg-[#F2F2EC] shadow-xs'
                }`}
              >
                <span>Discover Our 1981 Heritage & Equipment Fleet</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
