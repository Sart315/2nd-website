import React from 'react';
import { Instagram, Youtube, Phone, MessageSquare, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';
import { useTheme } from '../context/ThemeContext';
import { useAppRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();
  const { navigateTo } = useAppRouter();

  const handleLink = (target: string, isRoute: boolean) => {
    if (isRoute) {
      navigateTo(target as any);
    } else {
      navigateTo('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer
      className={`w-full max-w-full overflow-hidden border-t py-14 text-xs select-none transition-colors duration-200 ${
        isDark
          ? 'bg-[#070807] border-white/10 text-[#A3ABA1]'
          : 'bg-[#EAEAE2] border-[#2C3528]/15 text-[#576356]'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b ${
            isDark ? 'border-white/10' : 'border-[#2C3528]/15'
          }`}
        >
          {/* Brand Info & Statement */}
          <div className="lg:col-span-5 space-y-3.5">
            <ChandralokLogo size="md" showHindi={true} showSubtitle={true} />

            <p className="font-body text-xs leading-relaxed max-w-sm pt-1">
              "We Turn Your Moments Into Stories." — Dedicated to royal wedding photography, pre-wedding films, and 4K cinema in Sirsaganj, Uttar Pradesh since 1981.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#C5A880] text-white/70 hover:text-[#C5A880]'
                    : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57] text-[#1E2520] hover:text-[#B08D57]'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#C5A880] text-white/70 hover:text-[#C5A880]'
                    : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57] text-[#1E2520] hover:text-[#B08D57]'
                }`}
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-emerald-500 text-white/70 hover:text-emerald-400'
                    : 'bg-white border-[#2C3528]/15 hover:border-emerald-600 text-[#1E2520] hover:text-emerald-600'
                }`}
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#C5A880] text-white/70 hover:text-[#C5A880]'
                    : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57] text-[#1E2520] hover:text-[#B08D57]'
                }`}
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div
              className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                isDark ? 'text-white' : 'text-[#1E2520]'
              }`}
            >
              Pages & Navigation
            </div>
            <ul className="space-y-2 text-xs font-body">
              <li>
                <button
                  onClick={() => handleLink('home', true)}
                  className={`transition-colors cursor-pointer text-left ${
                    isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('gallery', true)}
                  className={`transition-colors cursor-pointer text-left ${
                    isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                  }`}
                >
                  Full Gallery Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('booking', true)}
                  className={`transition-colors cursor-pointer text-left ${
                    isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                  }`}
                >
                  Book A Session / Date Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className={`transition-colors cursor-pointer text-left ${
                    isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                  }`}
                >
                  Our 9 Disciplines (Services)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className={`transition-colors cursor-pointer text-left ${
                    isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                  }`}
                >
                  About Studio & Gear (Heritage)
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Landmark & Services */}
          <div className="lg:col-span-4 space-y-3">
            <div
              className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
              }`}
            >
              Studio Location
            </div>

            <div className="space-y-2 text-xs font-body">
              <div className="flex items-start gap-2">
                <MapPin
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                />
                <span>Etawah Road, near Punjab National Bank, Sirsaganj, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className={`w-4 h-4 shrink-0 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                />
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className={`transition-colors font-mono font-bold ${
                    isDark ? 'hover:text-white' : 'hover:text-[#1E2520]'
                  }`}
                >
                  +91 {STUDIO_INFO.phone}
                </a>
              </div>
              <div
                className={`pt-2 text-[11px] ${
                  isDark ? 'text-white/60' : 'text-[#1E2520]/60'
                }`}
              >
                Wedding Photography • Pre-Weddings • 4K Cinema • Events
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div
          className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] ${
            isDark ? 'text-white/50' : 'text-[#1E2520]/50'
          }`}
        >
          <div>© 1981–2026 Chandralok Studio. All rights reserved.</div>
          <div className="text-right">Sirsaganj, Uttar Pradesh · Estd. 1981</div>
        </div>
      </div>
    </footer>
  );
};
