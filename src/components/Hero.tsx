import React from 'react';
import { Calendar, ArrowDown, ChevronRight } from 'lucide-react';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  const heroImage = getImageUrl('hero_cinematic_couple_1791896401138.jpg');

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-end sm:items-center justify-center overflow-hidden bg-[#0D0F0E] select-none pt-24 pb-14 sm:py-32"
    >
      {/* Full-Screen Cinematic Backdrop with Gentle Ambient Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Chandralok Studio Royal Wedding Cinema"
          onError={handleImageFallback}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
        />

        {/* Sophisticated Multi-Stage Cinematic Dark Gradient (Keeps Photo Vibrant While Ensuring Crisp Text Legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-[#0D0F0E]/55 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D0F0E]/30 to-[#0D0F0E]/80" />
      </div>

      {/* Main Hero Foreground */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full text-center flex flex-col items-center">
        {/* Brand Kicker / Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/15 backdrop-blur-xs mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#F7F7F2]/90">
            CHANDRALOK STUDIO
          </span>
          <span className="text-white/30">·</span>
          <span className="text-[10px] sm:text-xs text-[#C5A880] tracking-widest font-semibold uppercase">
            ESTD. 1981
          </span>
        </div>

        {/* Hero Title: Large, Elegant & Cinematic Editorial Serif */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F7F7F2] tracking-tight leading-[1.08] sm:leading-[1.05] max-w-5xl mb-5 sm:mb-6 [text-wrap:balance]">
          We Turn Your Moments <br className="hidden sm:inline" />
          <span className="italic font-light text-[#C5A880]">Into Stories.</span>
        </h1>

        {/* Supporting Discipline Tagline */}
        <p className="font-body text-xs sm:text-sm md:text-base text-[#F7F7F2]/85 tracking-[0.16em] uppercase font-medium max-w-2xl mb-8 sm:mb-10">
          Wedding Photography <span className="text-[#C5A880] mx-1.5">•</span> 
          Cinematic Films <span className="text-[#C5A880] mx-1.5">•</span> 
          Pre-Weddings <span className="text-[#C5A880] mx-1.5">•</span> 
          Events
        </p>

        {/* Call to Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: CHECK YOUR DATE */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#0D0F0E] bg-[#C5A880] hover:bg-[#B3956D] active:scale-95 transition-all duration-200 rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Your Date</span>
          </button>

          {/* Secondary CTA: VIEW OUR WORK */}
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-[#F7F7F2] bg-white/10 hover:bg-white/15 border border-white/20 active:scale-95 transition-all duration-200 rounded-full backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Our Work</span>
            <ChevronRight className="w-4 h-4 text-[#C5A880]" />
          </button>
        </div>

        {/* Quiet Editorial Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <button
            onClick={onExploreWork}
            aria-label="Scroll to featured story"
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#F7F7F2] cursor-pointer"
          >
            <span>Explore The Collection</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C5A880] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
