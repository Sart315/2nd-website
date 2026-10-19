import React from 'react';
import { Calendar, ArrowDown, ChevronRight } from 'lucide-react';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  const { isDark } = useTheme();
  const heroImage = getImageUrl('hero_cinematic_couple_1791896401138.jpg');

  return (
    <section
      id="hero"
      className={`relative min-h-screen w-full max-w-full flex items-end sm:items-center justify-center overflow-hidden select-none pt-24 pb-14 sm:py-32 transition-colors duration-200 ${
        isDark ? 'bg-[#0D0F0E]' : 'bg-[#F9F9F6]'
      }`}
    >
      {/* Full-Screen Cinematic Backdrop with Gentle Ambient Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <img
          src={heroImage}
          alt="Chandralok Studio Royal Wedding Cinema"
          onError={handleImageFallback}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
        />

        {/* Dynamic Multi-Stage Cinematic Overlay Adapting to Dark & Light Theme */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-[#0D0F0E]/60 to-black/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#0D0F0E]/30 to-[#0D0F0E]/80" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F6] via-[#F9F9F6]/75 to-black/30" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#F9F9F6]/30 to-[#F9F9F6]/85" />
          </>
        )}
      </div>

      {/* Main Hero Foreground */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Brand Kicker / Eyebrow */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-6 sm:mb-8 transition-colors ${
            isDark
              ? 'bg-black/60 border-white/15 text-[#F7F7F2]/90'
              : 'bg-white/85 border-[#2C3528]/20 text-[#1E2520] shadow-sm'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isDark ? 'bg-[#C5A880]' : 'bg-[#B08D57]'
            }`}
          />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase">
            CHANDRALOK STUDIO
          </span>
          <span className={isDark ? 'text-white/30' : 'text-black/25'}>·</span>
          <span
            className={`text-[10px] sm:text-xs tracking-widest font-semibold uppercase ${
              isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
            }`}
          >
            ESTD. 1981
          </span>
        </div>

        {/* Hero Title: Large, Elegant & Cinematic Editorial Serif */}
        <h1
          className={`font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] sm:leading-[1.05] max-w-5xl mb-5 sm:mb-6 [text-wrap:balance] transition-colors ${
            isDark ? 'text-[#F7F7F2]' : 'text-[#1E2520]'
          }`}
        >
          We Turn Your Moments <br className="hidden sm:inline" />
          <span
            className={`italic font-light ${
              isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
            }`}
          >
            Into Stories.
          </span>
        </h1>

        {/* Supporting Discipline Tagline */}
        <p
          className={`font-body text-xs sm:text-sm md:text-base tracking-[0.16em] uppercase font-medium max-w-2xl mb-8 sm:mb-10 transition-colors ${
            isDark ? 'text-[#F7F7F2]/85' : 'text-[#3E4A3C] font-semibold'
          }`}
        >
          Wedding Photography{' '}
          <span className={`mx-1.5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}>•</span>
          Cinematic Films{' '}
          <span className={`mx-1.5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}>•</span>
          Pre-Weddings{' '}
          <span className={`mx-1.5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}>•</span>
          Events
        </p>

        {/* Call to Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: CHECK YOUR DATE */}
          <button
            onClick={onOpenBooking}
            className={`w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase active:scale-95 transition-all duration-200 rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
              isDark
                ? 'text-[#0D0F0E] bg-[#C5A880] hover:bg-[#B3956D]'
                : 'text-white bg-[#B08D57] hover:bg-[#967442]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Check Your Date</span>
          </button>

          {/* Secondary CTA: VIEW OUR WORK */}
          <button
            onClick={onExploreWork}
            className={`w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase active:scale-95 transition-all duration-200 rounded-full flex items-center justify-center gap-2 cursor-pointer ${
              isDark
                ? 'text-[#F7F7F2] bg-white/10 hover:bg-white/15 border border-white/20'
                : 'text-[#1E2520] bg-white/85 hover:bg-white border border-[#2C3528]/25 shadow-sm'
            }`}
          >
            <span>View Our Work</span>
            <ChevronRight
              className={`w-4 h-4 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}
            />
          </button>
        </div>

        {/* Quiet Editorial Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <button
            onClick={onExploreWork}
            aria-label="Scroll to featured story"
            className={`flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase cursor-pointer ${
              isDark ? 'text-[#F7F7F2]' : 'text-[#1E2520]'
            }`}
          >
            <span>Explore The Collection</span>
            <ArrowDown
              className={`w-3.5 h-3.5 animate-bounce ${
                isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
