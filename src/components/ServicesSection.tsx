import React, { useState } from 'react';
import { ArrowUpRight, Check, Camera } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimalist Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Disciplines & Curated Offerings</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] uppercase tracking-tight">
              Artistic Services <br />
              <span className="text-[#B08D57]">
                Behind The Lens
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
              Every Indian wedding carries its own emotional cadence, sacred traditions, and family joy. We bring 40+ years of generational mastery to your celebration in Sirsaganj and regional venues.
            </p>
          </div>
        </div>

        {/* Minimalist Solid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="group cursor-pointer rounded-3xl border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] transition-all duration-200 bg-white dark:bg-[#20251E] flex flex-col justify-between p-7 sm:p-8 shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading italic text-4xl text-[#B08D57] group-hover:scale-105 transition-transform origin-left">
                    {service.number}
                  </span>

                  <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] border border-[#D8D8CF] dark:border-[#2E3729]">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mb-1.5 leading-snug group-hover:text-[#B08D57] transition-colors">
                  {service.title}
                </h3>

                <div className="font-heading italic text-sm text-[#B08D57] mb-3">
                  {service.subtitle}
                </div>

                <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] font-normal leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Features */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#E4E4DC] dark:border-[#272F23]">
                  {service.features.map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#5C6755] dark:text-[#A3AFA0]">
                      <Check className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#E4E4DC] dark:border-[#272F23] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] group-hover:text-[#B08D57] transition-colors">
                  Inquire For This Service
                </span>
                <div className="w-8 h-8 rounded-full bg-[#EFEFE8] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] group-hover:bg-[#B08D57] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
