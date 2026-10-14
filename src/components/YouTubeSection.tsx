import React from 'react';
import { Youtube, Play, ArrowUpRight, Clock, Film } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const YouTubeSection: React.FC = () => {
  const filmSlots = [
    {
      id: 'film-1',
      title: 'Royal Wedding Teaser // Sandstone Courtyard Union',
      category: 'Wedding Cinema Teaser',
      duration: '04:18',
      resolution: '4K 60FPS UHD',
      image: '/src/assets/images/hero_cinematic_couple_1791896401138.jpg'
    },
    {
      id: 'film-2',
      title: 'Grand Sangeet Night // Chandeliers & Celebrations',
      category: 'Celebration Film',
      duration: '03:45',
      resolution: '4K 60FPS UHD',
      image: '/src/assets/images/sangeet_celebration_lights_1791898991004.jpg'
    },
    {
      id: 'film-3',
      title: 'Pre-Wedding Story // Pavilion Sunset Whisper',
      category: 'Pre-Wedding Narrative',
      duration: '05:12',
      resolution: '4K 60FPS UHD',
      image: '/src/assets/images/prewedding_cinematic_1791896401895.jpg'
    },
    {
      id: 'film-4',
      title: 'The Sacred Varmala // Vows Under Marigolds',
      category: 'Ceremony Documentary',
      duration: '06:30',
      resolution: '4K 60FPS UHD',
      image: '/src/assets/images/wedding_story_varmala_1791896401614.jpg'
    }
  ];

  return (
    <section id="cinema" className="py-24 bg-[#050b14] border-t border-white/10 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#ff0000] mb-3 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-semibold">
              <Youtube className="w-4 h-4 text-[#ff0000]" />
              <span>OFFICIAL YOUTUBE CHANNEL // CHANDRALOK STUDIO SIRSAGANJ</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              WATCH THE STORIES <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                MOVE IN 4K
              </span>.
            </h2>
          </div>

          <a
            href={STUDIO_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#ff0000] hover:bg-[#d60000] text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 transition-all self-start shadow-lg shadow-[#ff0000]/25 active:scale-95 cursor-pointer"
          >
            <Youtube className="w-4 h-4" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>

        {/* Video Cards Grid in Glassmorphism UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filmSlots.map((film) => (
            <a
              key={film.id}
              href={STUDIO_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={film.image}
                  alt={film.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-white flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-[#ffb703]" />
                  <span>{film.duration}</span>
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#ff0000] transition-all shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Resolution Badge */}
                <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-mono text-[#00e5ff] border border-white/10">
                  {film.resolution}
                </div>
              </div>

              {/* Title & Category Info */}
              <div className="p-4">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#ff6b00] font-semibold mb-1">
                  {film.category}
                </div>
                <h3 className="font-display text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors line-clamp-2 leading-snug">
                  {film.title}
                </h3>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#cbd5e1] group-hover:text-[#ffb703]">
                  <span>WATCH 4K TEASER</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
