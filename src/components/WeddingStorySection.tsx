import React, { useState } from 'react';
import { WEDDING_STORYLINE } from '../data/studioData';
import { Heart, Sparkles, Star } from 'lucide-react';

export const WeddingStorySection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  return (
    <section className="py-28 bg-[#0a0a0e] border-t border-[#1a1922] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c8a97e] mb-3">
            <span>NARRATIVE ARC</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f7f4ee] leading-tight mb-4 [text-wrap:balance]">
            From The First Look <br />
            <span className="italic text-[#dfc298]">To The Last Dance</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#a09c94] font-light leading-relaxed">
            Every Indian wedding is a multi-chapter saga of traditions, families uniting, and spontaneous tears of happiness. Here is how we document the journey.
          </p>
        </div>

        {/* 3 Editorial Story Chapters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Chapters Navigation & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {WEDDING_STORYLINE.map((chapter, index) => {
              const isSelected = activeChapter === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveChapter(index)}
                  className={`p-6 sm:p-7 border cursor-pointer transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-[#12121a] border-[#c8a97e] shadow-xl'
                      : 'bg-[#0e0e13] border-[#1f1e29] hover:border-[#38374a]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#c8a97e] font-serif">
                      {chapter.chapter}
                    </span>
                    <span className={`text-[11px] tracking-wider uppercase ${isSelected ? 'text-[#c8a97e]' : 'text-[#a09c94]'}`}>
                      Phase 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f7f4ee] font-medium mb-3">
                    {chapter.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a09c94] font-light leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Editorial Photographic Centerpiece */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full">
            <div className="relative h-full w-full bg-[#121218] border border-[#23222a] overflow-hidden group shadow-2xl">
              <img
                src={
                  activeChapter === 0
                    ? '/src/assets/images/hero_cinematic_couple_1791896401138.jpg'
                    : activeChapter === 1
                    ? '/src/assets/images/wedding_story_varmala_1791896401614.jpg'
                    : '/src/assets/images/cinematic_film_still_1791896403634.jpg'
                }
                alt="Emotional wedding narrative captured by Chandralok Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/20 to-transparent" />

              {/* Magazine Framing Inset */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/80 text-[11px] tracking-widest uppercase">
                <span className="bg-black/60 px-3 py-1 border border-white/10 backdrop-blur-sm">
                  {WEDDING_STORYLINE[activeChapter].chapter}
                </span>
                <span className="bg-black/60 px-3 py-1 border border-white/10 backdrop-blur-sm text-[#c8a97e]">
                  CHANDRALOK EDITORIAL
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-[#c8a97e] uppercase tracking-widest mb-1">
                  CEREMONY CHRONICLES
                </p>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {WEDDING_STORYLINE[activeChapter].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
