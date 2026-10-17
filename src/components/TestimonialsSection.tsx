import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIAL_REVIEWS } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { isDark } = useTheme();
  // 3 primary authentic verified client reviews
  const reviews = TESTIMONIAL_REVIEWS.slice(0, 3);

  return (
    <section
      id="reviews"
      className={`py-20 sm:py-28 transition-colors duration-200 ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2]' : 'bg-[#F9F9F6] text-[#1E2520]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] uppercase mb-2.5 ${
              isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isDark ? 'fill-[#C5A880]' : 'fill-[#B08D57]'}`} />
            <span>Client Words & Social Proof</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-normal tracking-tight uppercase">
            Words From Our Couples
          </h2>
        </div>

        {/* 3 Editorial Testimonial Quotes in Generous Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`relative p-7 sm:p-9 rounded-2xl sm:rounded-3xl border flex flex-col justify-between shadow-xl transition-all ${
                isDark
                  ? 'bg-[#141715] border-white/10'
                  : 'bg-white border-[#2C3528]/15 shadow-md'
              }`}
            >
              <Quote
                className={`w-8 h-8 mb-5 ${
                  isDark ? 'text-[#C5A880]/30' : 'text-[#B08D57]/30'
                }`}
              />

              <p
                className={`font-heading italic text-base sm:text-lg leading-relaxed mb-6 flex-1 ${
                  isDark ? 'text-[#F7F7F2]/90' : 'text-[#1E2520]/90'
                }`}
              >
                "{rev.quote}"
              </p>

              <div
                className={`pt-5 border-t ${
                  isDark ? 'border-white/10' : 'border-[#2C3528]/15'
                }`}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        isDark ? 'text-[#C5A880] fill-[#C5A880]' : 'text-[#B08D57] fill-[#B08D57]'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-body text-sm font-bold tracking-wide">
                  {rev.names}
                </h3>
                <span
                  className={`text-[11px] block mt-0.5 font-medium ${
                    isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
                  }`}
                >
                  {rev.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
