import React from 'react';
import { Calendar, Film, MapPin, Heart } from 'lucide-react';
import { TRUST_PILLARS } from '../data/studioData';

export const WhyChandralok: React.FC = () => {
  const icons = [Calendar, Film, MapPin, Heart];

  return (
    <section className="py-24 bg-[#08080a] border-t border-[#1a1922]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#c8a97e] mb-3">
            <span>FOUNDATIONS OF TRUST</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f7f4ee] leading-tight mb-4 [text-wrap:balance]">
            Why Families Choose <br />
            <span className="italic text-[#dfc298]">Chandralok Studio</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#a09c94] font-light leading-relaxed">
            Four decades of genuine storytelling, grounded in verified legacy and modern creative excellence.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx];
            return (
              <div
                key={pillar.title}
                className="p-8 bg-[#0d0d12] border border-[#1f1e29] hover:border-[#c8a97e]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#15151e] border border-[#262534] flex items-center justify-center text-[#c8a97e] mb-6 group-hover:border-[#c8a97e]/40 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] tracking-widest uppercase text-[#c8a97e] font-light mb-1">
                    {pillar.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl text-[#f7f4ee] font-medium mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#a09c94] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
