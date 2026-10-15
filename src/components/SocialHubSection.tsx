import React from 'react';
import { Instagram, Youtube, MessageSquare, Phone, ArrowUpRight, Share2, MapPin } from 'lucide-react';
import { STUDIO_INFO, SOCIAL_CHANNELS } from '../data/studioData';

export const SocialHubSection: React.FC = () => {
  return (
    <section id="social" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5" />
              <span>Studio Channels & Contact Hub</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] uppercase tracking-tight">
              Follow Our Journey & <br />
              <span className="text-[#B08D57]">
                Latest Wedding Previews
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
              Stay connected with Chandralok Studio for daily wedding previews, cinematic teaser drops, and bridal portrait inspiration directly from Sirsaganj.
            </p>
          </div>
        </div>

        {/* 4 Official Contact & Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_CHANNELS.map((item) => {
            let IconComp = Instagram;
            let iconColor = 'text-[#e1306c]';
            if (item.platform === 'YouTube') {
              IconComp = Youtube;
              iconColor = 'text-[#FF0000]';
            } else if (item.platform === 'WhatsApp') {
              IconComp = MessageSquare;
              iconColor = 'text-[#25D366]';
            } else if (item.platform === 'Direct Call') {
              IconComp = Phone;
              iconColor = 'text-[#B08D57]';
            }

            return (
              <a
                key={item.platform}
                href={item.url}
                target={item.platform === 'Direct Call' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-7 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] transition-all duration-200 rounded-3xl flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#EFEFE8] dark:bg-[#181C16] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#5C6755] dark:text-[#A3AFA0]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-normal text-[#3B4436] dark:text-[#EFEFE8] group-hover:text-[#B08D57] transition-colors">
                    {item.platform}
                  </h3>

                  <div className="font-body text-xs font-medium text-[#B08D57] mt-0.5 mb-2 truncate">
                    {item.handle}
                  </div>

                  <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E4DC] dark:border-[#272F23] flex items-center justify-between text-xs text-[#B08D57] font-semibold tracking-widest uppercase">
                  <span>{item.action}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Studio Location & Landmark Card */}
        <div className="mt-10 p-8 sm:p-10 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFEFE8] dark:bg-[#181C16] flex items-center justify-center shrink-0 text-[#B08D57]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] mb-1">
                Studio Address & Landmark
              </div>
              <h4 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8]">
                Chandralok Studio · Sirsaganj
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#5C6755] dark:text-[#A3AFA0] mt-1">
                {STUDIO_INFO.fullAddress}
              </p>
              <div className="text-xs text-[#B08D57] font-medium mt-1">
                Landmark: Near Punjab National Bank (PNB) · Serving Agra, Firozabad & Mainpuri Region Since 1981
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=Sirsaganj+Etawah+Road+Punjab+National+Bank+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#EFEFE8] dark:bg-[#181C16] hover:border-[#B08D57] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2 transition-colors cursor-pointer active:scale-95"
            >
              <span>Open in Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B08D57]" />
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="px-6 py-3 bg-[#B08D57] hover:bg-[#9c7b49] text-white font-semibold rounded-full text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
