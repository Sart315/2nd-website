import React, { useState } from 'react';
import { ArrowUpRight, Camera, Filter } from 'lucide-react';
import { PORTFOLIO_STORIES, PortfolioItem } from '../data/studioData';
import { handleImageFallback, getImageUrl } from '../utils/assetImages';
import { LightboxModal } from './LightboxModal';
import { useTheme } from '../context/ThemeContext';

interface PortfolioSectionProps {
  onReserve: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onReserve }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { isDark } = useTheme();

  // Normalizing portfolio items with correct resilient image URLs
  const portfolioItems: PortfolioItem[] = [
    {
      id: 'port-1',
      title: 'Royal Courtyard Union',
      category: 'weddings',
      categoryLabel: 'Royal Wedding',
      image: getImageUrl('hero_cinematic_couple_1791896401138.jpg'),
      location: 'Heritage Palace Courtyard, UP',
      year: '2024',
      aspect: 'wide',
      story: 'A majestic golden-hour ceremony framed by sandstone jharokhas and rose petal pathways, immortalizing the poise and timeless bond of the couple.',
      specs: '35mm Cine Prime · Natural Golden Hour · 14-Stop Dynamic Range',
    },
    {
      id: 'port-2',
      title: 'The Regal Crimson Bride',
      category: 'weddings',
      categoryLabel: 'Bridal Portrait',
      image: getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
      location: 'Sirsaganj Heritage Shoot',
      year: '2024',
      aspect: 'portrait',
      story: 'Intricate crimson zardozi work and royal heritage kundan jewelry illuminated with diffused studio softboxes and prime portrait optics.',
      specs: '85mm f/1.2 L · Studio Softbox · 45MP Fine Art Detail',
    },
    {
      id: 'port-3',
      title: 'Pavilion Sunset Whisper',
      category: 'pre-weddings',
      categoryLabel: 'Pre-Wedding Story',
      image: getImageUrl('prewedding_cinematic_1791896401895.jpg'),
      location: 'Chhatri Pavilion, Agra Valley',
      year: '2024',
      aspect: 'landscape',
      story: 'Windswept veil and sun-drenched arches. A quiet romantic narrative celebrating the promise of a lifetime against classical heritage architecture.',
      specs: '85mm Portrait Prime · Golden Rim Backlight · 4K 60fps',
    },
    {
      id: 'port-4',
      title: 'Anamorphic Evening Vows',
      category: 'films',
      categoryLabel: 'Cinematic Films',
      image: getImageUrl('cinematic_film_still_1791896403634.jpg'),
      location: 'Grand Heritage Courtyard',
      year: '2024',
      aspect: 'wide',
      story: 'A widescreen 2.39:1 anamorphic still evoking classic Indian cinema romance, where glowing candelabras and deep gazes carry the story forward.',
      specs: 'Anamorphic 2.39:1 · 35mm T2.0 · Filmic Warm Grade',
    },
    {
      id: 'port-5',
      title: 'Sangeet Under Thousand Lights',
      category: 'events',
      categoryLabel: 'Events & Festivities',
      image: getImageUrl('sangeet_celebration_lights_1791898991004.jpg'),
      location: 'Grand Banquet, Sirsaganj',
      year: '2024',
      aspect: 'landscape',
      story: 'Dynamic sangeet night captured with prime cinema glass, preserving real joy, dancing rhythm, and golden fairy-light bokeh.',
      specs: '35mm T1.5 Cine · High Speed Shutter · 4K 120fps',
    },
    {
      id: 'port-6',
      title: 'The Sacred Varmala & Diya Glow',
      category: 'weddings',
      categoryLabel: 'Ceremony Moments',
      image: getImageUrl('wedding_story_varmala_1791896401614.jpg'),
      location: 'Sirsaganj Evening Celebration',
      year: '2024',
      aspect: 'landscape',
      story: 'An unforgettable burst of joy under an archway of marigolds and thousands of warm oil diyas, capturing unscripted laughter between vows.',
      specs: '50mm f/1.2 Lens · Ambient Diya Illumination · Candid Capture',
    },
  ];

  const categories = [
    { key: 'ALL', label: 'All Works' },
    { key: 'weddings', label: 'Weddings' },
    { key: 'pre-weddings', label: 'Pre-Weddings' },
    { key: 'events', label: 'Events' },
    { key: 'films', label: 'Cinematic Films' },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section
      id="portfolio"
      className={`w-full max-w-full overflow-hidden py-20 sm:py-28 transition-colors duration-200 ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2]' : 'bg-[#F9F9F6] text-[#1E2520]'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-5 border-b gap-6 ${
            isDark ? 'border-white/10' : 'border-[#2C3528]/15'
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-2.5 ${
                isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Selected Works & Archives</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight uppercase">
              Our Portfolio
            </h2>
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-[#C5A880] text-[#0D0F0E] shadow-xs'
                        : 'bg-[#B08D57] text-[#FFFFFF] shadow-xs'
                      : isDark
                      ? 'bg-white/5 hover:bg-white/10 text-white/75 hover:text-white border border-white/10'
                      : 'bg-black/5 hover:bg-black/10 text-[#1E2520]/80 hover:text-[#1E2520] border border-[#2C3528]/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => {
            let colSpan = 'md:col-span-6';
            let aspectClass = 'aspect-[16/10]';

            if (idx === 0) {
              colSpan = 'md:col-span-8';
              aspectClass = 'aspect-[16/10] sm:aspect-[16/9]';
            } else if (idx === 1) {
              colSpan = 'md:col-span-4';
              aspectClass = 'aspect-[3/4]';
            } else if (idx === 2) {
              colSpan = 'md:col-span-5';
              aspectClass = 'aspect-[4/3]';
            } else if (idx === 3) {
              colSpan = 'md:col-span-7';
              aspectClass = 'aspect-[16/9]';
            }

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`portfolio-card group relative ${colSpan} rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg border ${
                  isDark ? 'bg-[#161917] border-white/10' : 'bg-white border-[#2C3528]/15'
                }`}
              >
                <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={handleImageFallback}
                    loading="lazy"
                    decoding="async"
                    className="portfolio-img w-full h-full object-cover object-center transition-transform duration-500 ease-out"
                  />

                  {/* Base subtle dark bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-30 transition-opacity duration-200" />

                  {/* Dark Translucent Hover Overlay Layer */}
                  <div className="portfolio-overlay absolute inset-0 bg-black/80 opacity-0 flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.25em] font-bold uppercase px-3 py-1 rounded-full bg-white/15 text-[#C5A880] border border-white/20">
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-white/70">{item.year}</span>
                    </div>

                    {/* Bottom Story & View Link */}
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2 mb-3 leading-relaxed font-body">
                        {item.story}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880] group-hover:text-white transition-colors">
                        <span>View Story</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Static card footer visible when not hovered */}
                  <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-150">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C5A880] block mb-0.5">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl text-white font-normal truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onReserve={onReserve}
      />
    </section>
  );
};
