import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../data/studioData';
import { handleImageFallback } from '../utils/assetImages';
import { useTheme } from '../context/ThemeContext';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onReserve: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  onReserve,
}) => {
  const { isDark } = useTheme();

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row max-h-[92vh] border ${
          isDark
            ? 'bg-[#121513] border-white/10 text-[#F7F7F2]'
            : 'bg-white border-[#2C3528]/15 text-[#1E2520]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          aria-label="Close story viewer"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C5A880] text-white hover:text-black transition-colors flex items-center justify-center cursor-pointer border border-white/15"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame (Left/Main) */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-[540px]">
          <img
            src={item.image}
            alt={item.title}
            onError={handleImageFallback}
            className="w-full h-full object-cover max-h-[70vh] md:max-h-[85vh]"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous story"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              aria-label="Next story"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Story Metadata Details (Right Pane) */}
        <div
          className={`md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l overflow-y-auto ${
            isDark
              ? 'bg-[#141715] border-white/10 text-[#F7F7F2]'
              : 'bg-[#F9F9F6] border-[#2C3528]/15 text-[#1E2520]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between text-[11px] tracking-widest uppercase font-semibold mb-3">
              <span className={isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}>
                {item.categoryLabel}
              </span>
              <span className="opacity-50">{item.year}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-normal leading-tight mb-4">
              {item.title}
            </h3>

            <p
              className={`font-body text-xs sm:text-sm leading-relaxed mb-6 ${
                isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
              }`}
            >
              {item.story}
            </p>

            <div
              className={`space-y-3 pt-4 border-t text-xs ${
                isDark ? 'border-white/10 text-[#A3ABA1]' : 'border-[#2C3528]/15 text-[#576356]'
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin
                  className={`w-4 h-4 shrink-0 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera
                  className={`w-4 h-4 shrink-0 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                />
                <span className="font-mono text-[11px] opacity-80">{item.specs}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar
                  className={`w-4 h-4 shrink-0 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                />
                <span>Chandralok Studio Archive</span>
              </div>
            </div>
          </div>

          <div
            className={`pt-6 mt-6 border-t ${
              isDark ? 'border-white/10' : 'border-[#2C3528]/15'
            }`}
          >
            <button
              onClick={() => {
                onClose();
                onReserve(item.title);
              }}
              className={`w-full py-3.5 px-5 font-semibold text-xs tracking-widest uppercase rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 ${
                isDark
                  ? 'bg-[#C5A880] hover:bg-[#B3956D] text-[#0D0F0E]'
                  : 'bg-[#B08D57] hover:bg-[#967442] text-white'
              }`}
            >
              <span>Inquire For This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
