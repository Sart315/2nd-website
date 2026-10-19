import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { isDark } = useTheme();

  const curatedServices = [
    {
      id: 'wedding-photography',
      number: '01',
      name: 'Wedding Photography',
      description: 'Emotional candid moments, traditional royal rituals, and heirloom albums crafted with four decades of color mastery.',
      image: getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
      tag: 'Signature Discipline',
    },
    {
      id: 'pre-wedding',
      number: '02',
      name: 'Pre-Wedding',
      description: 'Editorial, sunset-lit romance conceptualized against heritage palaces and architectural pavilions across Uttar Pradesh.',
      image: getImageUrl('prewedding_cinematic_1791896401895.jpg'),
      tag: 'Editorial Romance',
    },
    {
      id: 'events',
      number: '03',
      name: 'Events',
      description: 'High-energy sangeet nights, vibrant haldi celebrations, ring ceremonies, and joyous family milestones captured with dynamic fidelity.',
      image: getImageUrl('sangeet_celebration_lights_1791898991004.jpg'),
      tag: 'Celebrations',
    },
    {
      id: 'cinematic-films',
      number: '04',
      name: 'Cinematic Films',
      description: 'Feature-film wedding storytelling with multi-angle aerial drones, acoustic vow recordings, and 4K anamorphic cinema color grading.',
      image: getImageUrl('cinematic_film_still_1791896403634.jpg'),
      tag: '4K Motion Art',
    },
  ];

  return (
    <section
      id="services"
      className={`w-full max-w-full overflow-hidden py-20 sm:py-28 transition-colors duration-200 ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2]' : 'bg-[#F9F9F6] text-[#1E2520]'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-5 border-b gap-6 ${
            isDark ? 'border-white/10' : 'border-[#2C3528]/15'
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-2.5 ${
                isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Disciplines</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight uppercase">
              Our Services
            </h2>
          </div>

          <p
            className={`font-body text-xs sm:text-sm max-w-md leading-relaxed ${
              isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
            }`}
          >
            Every celebration has its own emotional cadence. We combine four decades of technical heritage with modern cinema aesthetics to preserve your sacred day.
          </p>
        </div>

        {/* 4 Large Visual Service Blocks (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {curatedServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.name)}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xl ${
                isDark
                  ? 'bg-[#161917] border-white/10 hover:border-[#C5A880]/60'
                  : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57]/70 shadow-md'
              }`}
            >
              {/* Large Visual Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <img
                  src={service.image}
                  alt={service.name}
                  onError={handleImageFallback}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

                {/* Top Number & Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-heading text-2xl font-light text-[#C5A880]">
                    {service.number}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full bg-black/70 text-white border border-white/15">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Service Meta & Description */}
              <div
                className={`p-6 sm:p-8 flex-1 flex flex-col justify-between ${
                  isDark ? 'bg-[#161917]' : 'bg-white'
                }`}
              >
                <div>
                  <h3
                    className={`font-heading text-2xl sm:text-3xl font-normal mb-3 transition-colors leading-tight ${
                      isDark
                        ? 'text-white group-hover:text-[#C5A880]'
                        : 'text-[#1E2520] group-hover:text-[#B08D57]'
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`font-body text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Action Link */}
                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                    isDark
                      ? 'border-white/10 text-[#C5A880] group-hover:text-white'
                      : 'border-[#2C3528]/10 text-[#B08D57] group-hover:text-[#1E2520]'
                  }`}
                >
                  <span>Inquire For This Service</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-white/5 group-hover:bg-[#C5A880] text-[#C5A880] group-hover:text-[#0D0F0E] border border-white/10'
                        : 'bg-[#2C3528]/5 group-hover:bg-[#B08D57] text-[#B08D57] group-hover:text-white border border-[#2C3528]/15'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
