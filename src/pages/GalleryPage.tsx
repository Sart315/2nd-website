import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, MapPin, Calendar, Camera, ArrowRight, Eye, X } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryCategoryId, GalleryPhoto } from '../data/galleryData';
import { ProgressiveImage } from '../components/ProgressiveImage';
import { LightboxModal } from '../components/LightboxModal';
import { useAppRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { STUDIO_INFO } from '../data/studioData';

export const GalleryPage: React.FC = () => {
  const { navigateTo } = useAppRouter();
  const { isDark } = useTheme();

  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GALLERY_ITEMS.length };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and search logic
  const filteredPhotos = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.story.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  // Lightbox navigation
  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    } else if (filteredPhotos.length > 0) {
      setSelectedPhoto(filteredPhotos[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    } else if (filteredPhotos.length > 0) {
      setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1560px] mx-auto">
      {/* 01. Editorial Archive Header */}
      <header className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] text-xs font-mono uppercase tracking-[0.2em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chandralok Studio · Master Archive</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-balance leading-tight mb-4">
          Visual Chronicles of <br className="hidden sm:block" />
          <span className="italic text-[#C5A880]">Timeless Celebrations</span>
        </h1>

        <p className="text-sm sm:text-base text-[#A3ABA1] max-w-2xl mx-auto leading-relaxed">
          Every love story is sacred. Immerse yourself in our full photographic archive spanning grand royal weddings, intimate pavilion pre-weddings, and heirloom bridal portraits across Sirsaganj, Agra, and beyond.
        </p>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 dark:border-white/10 text-center">
          <div>
            <p className="text-2xl font-serif text-[#C5A880]">1981</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Estd. Heritage</p>
          </div>
          <div>
            <p className="text-2xl font-serif text-[#C5A880]">1,200+</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Weddings Captured</p>
          </div>
          <div>
            <p className="text-2xl font-serif text-[#C5A880]">4K / 60fps</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Cinematic Masters</p>
          </div>
          <div>
            <p className="text-2xl font-serif text-[#C5A880]">100%</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Authentic Couples</p>
          </div>
        </div>
      </header>

      {/* 02. Search and Category Filter Toolbar */}
      <div className="mb-10 space-y-6">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#A3ABA1] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by couple, ritual, location, or tag (e.g. Varmala, Sirsaganj, Agra)..."
              className={`w-full pl-11 pr-10 py-3 rounded-full text-sm transition-all outline-hidden border ${
                isDark
                  ? 'bg-[#141815] border-white/10 text-[#F7F7F2] placeholder-[#A3ABA1]/60 focus:border-[#C5A880]'
                  : 'bg-white border-[#2C3528]/15 text-[#1E2520] placeholder-[#576356]/60 focus:border-[#B08D57]'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 text-[#A3ABA1] hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#C5A880] text-black border-[#C5A880] shadow-md shadow-[#C5A880]/20 font-semibold'
                    : isDark
                    ? 'bg-[#161917] text-[#A3ABA1] border-white/10 hover:border-[#C5A880]/50 hover:text-white'
                    : 'bg-white text-[#576356] border-[#2C3528]/15 hover:border-[#B08D57] hover:text-black'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-black/20 text-black'
                      : 'bg-white/10 text-[#A3ABA1]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 03. Active Filter Summary */}
      {(searchQuery || activeCategory !== 'all') && (
        <div className="flex items-center justify-between text-xs text-[#A3ABA1] mb-6 px-2">
          <span>
            Showing <strong className="text-[#C5A880]">{filteredPhotos.length}</strong> {filteredPhotos.length === 1 ? 'photograph' : 'photographs'}
            {searchQuery && (
              <> matching &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;</>
            )}
          </span>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="text-[#C5A880] hover:underline underline-offset-4 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 04. Asymmetrical Masonry Grid with Progressive Shimmer Image Loading */}
      {filteredPhotos.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => {
            // Pick aesthetic aspect ratio based on orientation
            const aspect =
              photo.aspect === 'portrait'
                ? '4/5'
                : photo.aspect === 'wide'
                ? '16/9'
                : photo.aspect === 'square'
                ? '1/1'
                : '3/2';

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#141715] border-white/10 hover:border-[#C5A880]/60'
                    : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57]'
                }`}
              >
                {/* Progressive Image with Dark Shimmer & Aperture Pulse Skeleton */}
                <ProgressiveImage
                  src={photo.image}
                  alt={photo.title}
                  aspectRatio={aspect}
                  priority={index < 3}
                  containerClassName="w-full"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Always-Visible Subtle Top Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-black/60 backdrop-blur-md text-[#F7F7F2] border border-white/15">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Luxury Hover Overlay with Details */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-[#C5A880] font-mono tracking-widest uppercase mb-1">
                      {photo.location} · {photo.year}
                    </p>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-white mb-1.5 leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#F7F7F2]/80 line-clamp-2 mb-3 font-light">
                      {photo.story}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/20">
                      <span className="text-[11px] text-[#A3ABA1] font-mono truncate max-w-[200px]">
                        {photo.specs}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-medium">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-24 px-4 border border-dashed border-white/15 rounded-3xl max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 mx-auto flex items-center justify-center text-[#C5A880] mb-4">
            <Filter className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-serif mb-2">No Matching Photographs Found</h3>
          <p className="text-xs text-[#A3ABA1] mb-6">
            We couldn&apos;t find any stories matching your search criteria. Try a different term or clear your filters to view all works.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-full bg-[#C5A880] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#B3956D] transition-colors"
          >
            Clear Filters & View All
          </button>
        </div>
      )}

      {/* 05. Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          item={{
            id: selectedPhoto.id,
            title: selectedPhoto.title,
            category: selectedPhoto.category,
            categoryLabel: selectedPhoto.categoryLabel,
            image: selectedPhoto.image,
            location: selectedPhoto.location,
            year: selectedPhoto.year,
            aspect: selectedPhoto.aspect === 'wide' ? 'wide' : selectedPhoto.aspect === 'portrait' ? 'portrait' : 'landscape',
            story: selectedPhoto.story,
            specs: selectedPhoto.specs,
          }}
          onClose={() => setSelectedPhoto(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onReserve={(title) => {
            setSelectedPhoto(null);
            navigateTo('booking', { service: title });
          }}
        />
      )}

      {/* 06. Bottom Call to Action */}
      <section className="mt-20 sm:mt-28 p-8 sm:p-14 rounded-3xl border border-[#C5A880]/30 bg-gradient-to-b from-[#181C19] to-[#121513] text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
            Craft Your Legacy
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-white">
            Ready to immortalize your wedding story?
          </h2>
          <p className="text-sm text-[#A3ABA1]">
            Our dates for the upcoming wedding season fill quickly. Reserve your private studio consultation or inquire via WhatsApp with senior filmmakers.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#B3956D] transition-all cursor-pointer shadow-lg shadow-[#C5A880]/20 flex items-center justify-center gap-2"
            >
              <span>Check Date Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Chandralok%20Studio%2C%20I%20am%20exploring%20your%20full%20gallery%20and%20would%20love%20to%20discuss%20booking%20my%20wedding.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 hover:border-[#C5A880] text-white text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
