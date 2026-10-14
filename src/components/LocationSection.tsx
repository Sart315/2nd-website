import React from 'react';
import { MapPin, Navigation, Phone, Clock, Landmark } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#050b14] border-t border-white/10 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Location Details in Glassmorphic Cards */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>STUDIO ADDRESS & LANDMARK</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white leading-tight mb-5 [text-wrap:balance]">
              Visit Us In <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Sirsaganj
              </span>.
            </h2>

            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-6">
              We welcome couples and families to visit our studio for bespoke album viewings, cinematic 4K film screenings, and auspicious wedding date consultations.
            </p>

            <div className="space-y-3.5 w-full">
              <div className="p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-start gap-3.5">
                <Landmark className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#ffb703] font-bold">Studio Landmark</div>
                  <div className="font-display text-base font-bold text-white mt-0.5">Etawah Road, Near Punjab National Bank</div>
                  <div className="text-xs text-[#94a3b8]">Sirsaganj, Uttar Pradesh, India</div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff6b00] font-bold">Direct Telephone & WhatsApp</div>
                  <div className="font-display text-base font-bold text-white mt-0.5">{STUDIO_INFO.phoneFormatted}</div>
                  <div className="text-xs text-[#94a3b8]">Consultations available daily · +91 99976 48550</div>
                </div>
              </div>

              <div className="p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#ffb703] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#00e5ff] font-bold">Studio Hours</div>
                  <div className="text-sm font-semibold text-white mt-0.5">10:00 AM – 8:30 PM (Open All 7 Days)</div>
                  <div className="text-xs text-[#94a3b8]">Advance appointments recommended for wedding planning meetings</div>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-bold text-[#050b14] bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#00e5ff] hover:from-[#ff6b00] hover:to-[#ffb703] hover:text-white transition-all shadow-lg rounded-full cursor-pointer active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions On Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Representation in Glassy Container */}
          <div className="lg:col-span-7">
            <div className="p-3 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden relative group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#091526]">
                {/* Visual Map Backdrop */}
                <div className="absolute inset-0 bg-[#070f1e] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-[#00e5ff]/15 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] mb-4 shadow-[0_0_30px_rgba(0,229,255,0.4)] animate-pulse">
                    <MapPin className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-1">
                    CHANDRALOK STUDIO SIRSAGANJ
                  </h3>
                  <p className="font-hindi text-sm text-[#ffb703] font-semibold mb-2">
                    चन्द्रलोक फोटो स्टूडियो · 1981
                  </p>
                  <p className="text-xs text-[#cbd5e1] max-w-sm mb-5 font-light">
                    Etawah Road, Near Punjab National Bank, Sirsaganj, Uttar Pradesh
                  </p>

                  <a
                    href={STUDIO_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00e5ff] bg-black/60 hover:bg-[#00e5ff] hover:text-[#050b14] border border-[#00e5ff]/50 rounded-full transition-all flex items-center gap-2 backdrop-blur-md shadow-lg"
                  >
                    <span>Open Interactive Map</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
