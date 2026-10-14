import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_HIGHLIGHTS, STUDIO_INFO } from '../data/studioData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080a] border-t border-[#1a1922]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#c8a97e] mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>SOCIAL JOURNAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f4ee] leading-tight [text-wrap:balance]">
              Follow The <br />
              <span className="italic text-[#dfc298]">Latest Stories</span>.
            </h2>
          </div>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-[#08080a] bg-[#c8a97e] hover:bg-[#d9bc94] transition-colors whitespace-nowrap self-start"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Curated 4-Column Instagram Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTAGRAM_HIGHLIGHTS.map((item, idx) => (
            <a
              key={idx}
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#121218] border border-[#23222e] overflow-hidden block"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#08080a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-6 h-6 text-[#c8a97e] mb-2" />
                <div className="text-xs font-serif text-white">{item.title}</div>
                <div className="text-[11px] text-[#a09c94] mt-1 line-clamp-2">{item.caption}</div>
                <div className="text-[10px] text-[#c8a97e] tracking-widest uppercase mt-3">
                  {STUDIO_INFO.instagramHandle}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bio Strip */}
        <div className="mt-6 text-center text-xs text-[#a09c94] font-light">
          Official Instagram: <span className="text-[#c8a97e] font-normal">{STUDIO_INFO.instagramHandle}</span> · Sirsaganj, Agra region
        </div>
      </div>
    </section>
  );
};
