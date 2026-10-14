import React from 'react';
import { Instagram, Youtube, MessageSquare, Phone, ArrowUpRight, Share2, MapPin } from 'lucide-react';
import { STUDIO_INFO, SOCIAL_CHANNELS } from '../data/studioData';

export const SocialHubSection: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-[#070e1b] border-t border-white/10 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <Share2 className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>ESTD. 1981 · OFFICIAL SOCIAL CHANNELS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              Follow Our Journey & <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Latest Wedding Stories
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
              Stay connected with Chandralok Studio for daily wedding previews, cinematic teaser drops, and bride-and-groom portrait inspiration directly from Sirsaganj.
            </p>
          </div>
        </div>

        {/* 4 Official Social Channels: Instagram, WhatsApp, YouTube, Direct Call */}
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
              iconColor = 'text-[#00e5ff]';
            }

            return (
              <a
                key={item.platform}
                href={item.url}
                target={item.platform === 'Direct Call' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-5 sm:p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 rounded-2xl flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#94a3b8] group-hover:text-white transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    {item.platform}
                  </h3>

                  <div className="text-xs text-[#ffb703] font-mono mt-0.5 mb-2 truncate">
                    {item.handle}
                  </div>

                  <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff] group-hover:text-[#ffb703] font-medium tracking-wider uppercase transition-colors">
                  <span>{item.action}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Studio Location & Landmark Card in Glassmorphic UI */}
        <div className="mt-8 p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center shrink-0 text-[#00e5ff]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#00e5ff] font-bold mb-1">
                <span>STUDIO ADDRESS & LANDMARK</span>
              </div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase">
                Chandralok Studio · Sirsaganj
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] font-light mt-1">
                {STUDIO_INFO.fullAddress}
              </p>
              <div className="text-[11px] text-[#ffb703] font-mono mt-1">
                Landmark: Near Punjab National Bank (PNB) · Serving Agra & Firozabad Region Since 1981
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/?q=Sirsaganj+Etawah+Road+Punjab+National+Bank+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer active:scale-95"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00e5ff]" />
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="px-5 py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] text-[#050b14] font-bold rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 9997648550</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
