import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Calendar } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/studioData';
import { getImageUrl } from '../utils/assetImages';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Background thumbnails mapped to services (no camera pictures, purely authentic wedding & cinematic visuals)
  const serviceImages: Record<string, string> = {
    'wedding-photography': getImageUrl('hero_cinematic_couple_1791896401138.jpg'),
    'wedding-films': getImageUrl('cinematic_film_still_1791896403634.jpg'),
    'pre-wedding-photography': getImageUrl('prewedding_cinematic_1791896401895.jpg'),
    'pre-wedding-films': getImageUrl('prewedding_cinematic_1791896401895.jpg'),
    'cinematic-videography': getImageUrl('cinematic_film_still_1791896403634.jpg'),
    'event-photography': getImageUrl('sangeet_celebration_lights_1791898991004.jpg'),
    'event-videography': getImageUrl('sangeet_celebration_lights_1791898991004.jpg'),
    'couple-portraits': getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
    'commercial-events': getImageUrl('wedding_story_varmala_1791896401614.jpg'),
  };

  return (
    <section id="services" className="py-24 bg-[#050b14] border-t border-white/10 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#ff6b00] mb-3 font-semibold bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>DISCIPLINES & EXPERIENCES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              Artistic Services <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Behind The Lens
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
              Every celebration possesses its own acoustic rhythm, cultural gravity, and visual poetry. We offer complete photographic and filmmaking capabilities tailored to your wedding in Sirsaganj and regional venues.
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Glassmorphic Grid (01 through 09) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const isHovered = activeService === service.id;
            const accentColor =
              service.accent === 'cyan' ? '#00e5ff' : service.accent === 'orange' ? '#ff6b00' : '#ffb703';

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() => onSelectService(service.title)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl flex flex-col justify-between p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,229,255,0.15)] hover:-translate-y-1"
              >
                {/* Photographic Background on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-15 group-hover:opacity-30 group-hover:scale-105 pointer-events-none"
                  style={{
                    backgroundImage: `url(${serviceImages[service.id] || serviceImages['wedding-photography']})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/85 to-transparent pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10">
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-display text-4xl sm:text-5xl font-black tracking-tight transition-colors duration-300"
                      style={{ color: accentColor }}
                    >
                      {service.number}
                    </span>

                    <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2 leading-snug group-hover:text-[#00e5ff] transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-serif-cinematic italic text-[#ffb703] mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                    {service.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#94a3b8]">
                        <Check className="w-3.5 h-3.5 text-[#00e5ff] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action: Curved Button */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-white/70 group-hover:text-[#00e5ff] transition-colors">
                    RESERVE COVERAGE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-white group-hover:bg-[#00e5ff] group-hover:text-[#050b14] transition-all shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
