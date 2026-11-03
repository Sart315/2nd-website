import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Camera,
  Film,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SERVICES, ServiceItem, STUDIO_INFO } from '../data/studioData';
import { ProgressiveImage } from '../components/ProgressiveImage';
import { useAppRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { getImageUrl } from '../utils/assetImages';

// Mapping service images and specs
const SERVICE_ENRICHED_DATA: Record<string, { image: string; specs: string; tag: string }> = {
  'wedding-photography': {
    image: getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
    specs: 'Dual Full-Frame Sensors · 85mm f/1.2 L Master Prime · 45MP Fine Art Detail',
    tag: 'Flagship Ritual Coverage'
  },
  'wedding-films': {
    image: getImageUrl('wedding_story_varmala_1791896401614.jpg'),
    specs: 'Sony FX3 Cinema Line · 10-bit 4:2:2 DCI 4K · 32-bit Floating Audio',
    tag: 'Feature Film Storytelling'
  },
  'pre-wedding-photography': {
    image: getImageUrl('prewedding_cinematic_1791896401895.jpg'),
    specs: 'Mughal Chhatris & Sunset Dunes · Natural Ambient Rim Light · Fine-Art Framing',
    tag: 'Editorial Romance'
  },
  'pre-wedding-films': {
    image: getImageUrl('hero_cinematic_couple_1791896401138.jpg'),
    specs: '4K 60fps Slow Motion · Anamorphic Pacing · Bespoke Soundtrack Composition',
    tag: 'Narrative Motion Art'
  },
  'cinematic-videography': {
    image: getImageUrl('cinematic_film_still_1791896403634.jpg'),
    specs: 'DJI Ronin Master Gimbal · 2.39:1 Cinema Aspect Ratio · Film Emulation LUTs',
    tag: 'Precision Camera Movement'
  },
  'event-photography': {
    image: getImageUrl('sangeet_celebration_lights_1791898991004.jpg'),
    specs: 'High Speed TTL Flash Sync · 24-70mm f/2.8 GM · Rapid candid reflexes',
    tag: 'Sangeet & Haldi Festivities'
  },
  'event-videography': {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    specs: 'Multi-Cam Stage Sound Desk Direct Feed · 4K Live Motion · Same-Week Reel',
    tag: 'Celebration Highlight Reels'
  },
  'couple-portraits': {
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80',
    specs: 'Large Octa Softboxes · Intimate Rembrandt Lighting · Museum Archival Prints',
    tag: 'Timeless Monograph'
  },
  'commercial-events': {
    image: getImageUrl('wedding_equipment_table_flashes_1792253412864.jpg'),
    specs: 'Studio Strobe Array · Commercial License · Ultra-Fast Deliverable Pipeline',
    tag: 'Brand & Corporate Galas'
  }
};

export const ServicesPage: React.FC = () => {
  const { navigateTo } = useAppRouter();
  const { isDark } = useTheme();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredServices = useMemo(() => {
    if (filterCategory === 'all') return SERVICES;
    if (filterCategory === 'wedding') {
      return SERVICES.filter((s) =>
        ['wedding-photography', 'wedding-films', 'cinematic-videography'].includes(s.id)
      );
    }
    if (filterCategory === 'pre-wedding') {
      return SERVICES.filter((s) =>
        ['pre-wedding-photography', 'pre-wedding-films', 'couple-portraits'].includes(s.id)
      );
    }
    if (filterCategory === 'events') {
      return SERVICES.filter((s) =>
        ['event-photography', 'event-videography', 'commercial-events'].includes(s.id)
      );
    }
    return SERVICES;
  }, [filterCategory]);

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1560px] mx-auto">
      {/* 01. Editorial Page Header */}
      <header className="mb-14 sm:mb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] text-xs font-mono uppercase tracking-[0.2em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chandralok Studio · 9 Curated Disciplines</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-balance leading-tight mb-4">
          Crafted for Generations. <br className="hidden sm:block" />
          <span className="italic text-[#C5A880]">Mastered in 4K Cinema.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#A3ABA1] max-w-2xl mx-auto leading-relaxed">
          From Vedic ceremonies under glowing marigolds to windswept desert pre-weddings, each of our 9 specialized disciplines is executed by seasoned directors using cinema-grade sensors, calibrated audio, and handcrafted heirloom albums.
        </p>

        {/* Quick Filter Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8 pt-6 border-t border-white/10">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#C5A880] text-black shadow-md shadow-[#C5A880]/20'
                : isDark
                ? 'bg-[#161917] text-[#A3ABA1] border border-white/10 hover:border-[#C5A880]'
                : 'bg-white text-[#576356] border border-[#2C3528]/15 hover:border-[#B08D57]'
            }`}
          >
            All 9 Disciplines
          </button>
          <button
            onClick={() => setFilterCategory('wedding')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filterCategory === 'wedding'
                ? 'bg-[#C5A880] text-black shadow-md shadow-[#C5A880]/20'
                : isDark
                ? 'bg-[#161917] text-[#A3ABA1] border border-white/10 hover:border-[#C5A880]'
                : 'bg-white text-[#576356] border border-[#2C3528]/15 hover:border-[#B08D57]'
            }`}
          >
            Wedding & 4K Cinema
          </button>
          <button
            onClick={() => setFilterCategory('pre-wedding')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filterCategory === 'pre-wedding'
                ? 'bg-[#C5A880] text-black shadow-md shadow-[#C5A880]/20'
                : isDark
                ? 'bg-[#161917] text-[#A3ABA1] border border-white/10 hover:border-[#C5A880]'
                : 'bg-white text-[#576356] border border-[#2C3528]/15 hover:border-[#B08D57]'
            }`}
          >
            Pre-Weddings & Romance
          </button>
          <button
            onClick={() => setFilterCategory('events')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              filterCategory === 'events'
                ? 'bg-[#C5A880] text-black shadow-md shadow-[#C5A880]/20'
                : isDark
                ? 'bg-[#161917] text-[#A3ABA1] border border-white/10 hover:border-[#C5A880]'
                : 'bg-white text-[#576356] border border-[#2C3528]/15 hover:border-[#B08D57]'
            }`}
          >
            Sangeet & Celebrations
          </button>
        </div>
      </header>

      {/* 02. Comprehensive 9-Discipline Catalog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredServices.map((service) => {
          const enrich = SERVICE_ENRICHED_DATA[service.id] || {
            image: getImageUrl('hero_cinematic_couple_1791896401138.jpg'),
            specs: 'Cinema Prime Glass · 4K Color Grade',
            tag: service.category,
          };

          return (
            <div
              key={service.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                isDark
                  ? 'bg-[#141715] border-white/10 hover:border-[#C5A880]/50'
                  : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57] shadow-sm'
              }`}
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <ProgressiveImage
                    src={enrich.image}
                    alt={service.title}
                    aspectRatio="16/9"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                  {/* Number & Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-heading text-2xl font-light text-[#C5A880]">
                      {service.number}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full bg-black/70 text-white border border-white/15">
                      {enrich.tag}
                    </span>
                  </div>

                  {/* Optical Specs Bar */}
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#F7F7F2]/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 truncate block">
                      {enrich.specs}
                    </span>
                  </div>
                </div>

                {/* Content & Deliverables List */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-normal leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#A3ABA1] italic mt-0.5">
                      &ldquo;{service.subtitle}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#A3ABA1] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 block">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#F7F7F2]/90">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => navigateTo('booking', { service: service.title })}
                  className="w-full py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#B3956D] text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#C5A880]/15"
                >
                  <span>Inquire For This Discipline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Chandralok%20Studio%2C%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-white/15 hover:border-[#C5A880] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* 03. Custom Package Consultation Banner */}
      <section className="p-8 sm:p-14 rounded-3xl border border-[#C5A880]/30 bg-gradient-to-b from-[#181C19] to-[#121513] text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
            Custom Celebration Suites
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-white">
            Need a tailored multi-day wedding package?
          </h2>
          <p className="text-sm text-[#A3ABA1]">
            We understand every family tradition is unique. Combine our wedding cinema, pre-wedding films, drone aerials, and handcrafted Italian leather albums into one seamless suite.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#B3956D] transition-all cursor-pointer shadow-lg shadow-[#C5A880]/20 flex items-center justify-center gap-2"
            >
              <span>Build Custom Suite on Booking Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
