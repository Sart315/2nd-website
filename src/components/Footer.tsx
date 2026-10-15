import React from 'react';
import { Instagram, Youtube, Phone, MessageSquare, MapPin, Eye, EyeOff } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';
import { useMotion } from '../context/MotionContext';

export const Footer: React.FC = () => {
  const { reducedMotion, toggleReducedMotion } = useMotion();

  return (
    <footer className="bg-[#E5E5DC] dark:bg-[#131611] border-t border-[#D8D8CF] dark:border-[#2E3729] text-[#5C6755] dark:text-[#A3AFA0] py-16 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <ChandralokLogo size="lg" showHindi={true} showSubtitle={true} />

            <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] font-normal leading-relaxed max-w-sm">
              Since 1981 — Capturing Moments. Creating Stories. Four decades of dedicated royal wedding photography, pre-wedding films, and 4K cinema in Sirsaganj, Uttar Pradesh.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] transition-colors shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-emerald-600 flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] hover:text-emerald-600 transition-colors shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] flex items-center justify-center text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] transition-colors shadow-xs"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8]">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#hero" className="hover:text-[#B08D57] transition-colors">Home Studio</a></li>
              <li><a href="#services" className="hover:text-[#B08D57] transition-colors">Curated Collections</a></li>
              <li><a href="#legacy" className="hover:text-[#B08D57] transition-colors">Heritage Since 1981</a></li>
              <li><a href="#equipment" className="hover:text-[#B08D57] transition-colors">Cameras & Cinema Gear</a></li>
              <li><a href="#reviews" className="hover:text-[#B08D57] transition-colors">Client Reviews</a></li>
              <li><a href="#social" className="hover:text-[#B08D57] transition-colors">Studio & Contact Hub</a></li>
              <li><a href="#booking" className="hover:text-[#B08D57] transition-colors">Reserve Your Date</a></li>
            </ul>
          </div>

          {/* Studio Contact & Reduced Motion */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57]">
              Visit The Studio
            </div>

            <div className="space-y-2 text-xs font-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>Etawah Road, near Punjab National Bank, Sirsaganj, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#B08D57] transition-colors font-mono">
                  +91 {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#B08D57] shrink-0" />
                <a href={STUDIO_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08D57] transition-colors">
                  {STUDIO_INFO.instagramHandle}
                </a>
              </div>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="pt-3 border-t border-[#D8D8CF] dark:border-[#2E3729]">
              <div className="flex items-center justify-between p-3.5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
                <div className="flex items-center gap-2.5">
                  {reducedMotion ? (
                    <EyeOff className="w-4 h-4 text-[#B08D57]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[#B08D57]" />
                  )}
                  <div>
                    <div className="text-xs font-semibold text-[#3B4436] dark:text-[#EFEFE8]">
                      Reduced Motion
                    </div>
                    <div className="text-[11px] text-[#5C6755] dark:text-[#A3AFA0]">
                      {reducedMotion ? 'Static mode active' : 'Smooth transitions active'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleReducedMotion}
                  role="switch"
                  aria-checked={reducedMotion}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    reducedMotion ? 'bg-[#B08D57]' : 'bg-[#D8D8CF] dark:bg-[#2E3729]'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      reducedMotion ? 'translate-x-4' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-[#5C6755] dark:text-[#A3AFA0]">
          <div className="flex items-center gap-2">
            <span>&copy; 1981–{new Date().getFullYear()} Chandralok Studio. All Rights Reserved.</span>
            <span className="font-hindi text-[#3B4436] dark:text-[#EFEFE8] font-semibold">चन्द्रलोक फोटो स्टूडियो</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Sirsaganj, Uttar Pradesh</span>
            <span>·</span>
            <span>Wedding Photography & 4K Cinema</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
