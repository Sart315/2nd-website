import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Calendar, Camera, Film, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_STORIES, PortfolioItem } from '../data/studioData';

interface PortfolioSectionProps {
  onBookSimilar: (storyTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onBookSimilar }) => {
  const [filter, setFilter] = useState<'all' | 'weddings' | 'pre-weddings' | 'portraits' | 'events' | 'films'>('all');
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'pre-weddings', label: 'Pre-Weddings' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'events', label: 'Events' },
    { id: 'films', label: 'Films' },
  ] as const;

  const filteredStories = filter === 'all'
    ? PORTFOLIO_STORIES
    : PORTFOLIO_STORIES.filter((s) => s.category === filter);

  return (
    <section id="stories" className="py-24 bg-[#050b14] border-t border-[#00e5ff]/20 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              SELECTED <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                STORIES
              </span>.
            </h2>
          </div>

          {/* Interactive Filter Controls with Curved Glassy Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-full whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#050b14] font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    : 'text-[#cbd5e1] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid with Curved Glassy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredStories.map((story, index) => {
            let colSpan = 'lg:col-span-6';
            if (index === 0) colSpan = 'lg:col-span-8';
            else if (index === 1) colSpan = 'lg:col-span-4';
            else if (index === 2) colSpan = 'lg:col-span-4';
            else if (index === 3) colSpan = 'lg:col-span-8';
            else if (index === 4) colSpan = 'lg:col-span-6';
            else if (index === 5) colSpan = 'lg:col-span-6';

            return (
              <div
                key={story.id}
                className={`${colSpan} group cursor-pointer relative bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1`}
                onClick={() => setSelectedStory(story)}
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#070f1e]">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 border border-white/15 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                    <span>{story.categoryLabel}</span>
                  </div>

                  {/* Overlay Title & Location */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs text-[#ffb703] font-mono flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3 h-3 text-[#ff6b00]" />
                        <span>{story.location}</span>
                        <span>·</span>
                        <span>{story.year}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#00e5ff] transition-colors leading-tight">
                        {story.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Technical Caption Below Image */}
                <div className="p-4 bg-[#06101f] border-t border-[#1e293b] flex items-center justify-between text-xs text-[#cbd5e1]">
                  <span className="font-light truncate max-w-[80%] font-mono text-[11px] text-[#94a3b8]">
                    {story.specs}
                  </span>
                  <span className="text-[#00e5ff] font-bold text-xs flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                    View Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#091526] border border-[#00e5ff]/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e293b] bg-[#070f1e]">
              <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#00e5ff]">
                <span>{selectedStory.categoryLabel}</span>
                <span className="text-white/30">/</span>
                <span className="text-[#ffb703]">{selectedStory.year}</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1.5 text-[#94a3b8] hover:text-white rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative overflow-hidden bg-black flex items-center justify-center max-h-[58vh]">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                referrerPolicy="no-referrer"
                className="max-h-[58vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Story Details */}
            <div className="p-6 sm:p-8 bg-[#091526] overflow-y-auto">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase font-bold text-white mb-1">
                    {selectedStory.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#ffb703]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                      {selectedStory.location}
                    </span>
                    <span>·</span>
                    <span className="text-[#00e5ff]">{selectedStory.specs}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const title = selectedStory.title;
                    setSelectedStory(null);
                    onBookSimilar(title);
                  }}
                  className="px-6 py-3 text-xs font-bold tracking-widest uppercase text-[#050b14] bg-[#00e5ff] hover:bg-[#ff6b00] hover:text-white transition-all rounded-xs whitespace-nowrap self-start"
                >
                  Book Similar Shoot
                </button>
              </div>

              <p className="text-sm text-[#cbd5e1] font-light leading-relaxed max-w-3xl">
                {selectedStory.story}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
