import React from 'react';
import { Instagram, Youtube, Phone, MessageSquare, MapPin, Eye, EyeOff, Sparkles, Heart } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';
import { useMotion } from '../context/MotionContext';

export const Footer: React.FC = () => {
  const { reducedMotion, toggleReducedMotion } = useMotion();

  return (
    <footer className="bg-[#030712] border-t border-[#00e5ff]/20 text-[#cbd5e1] py-16 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1e293b]">
          {/* Brand Info with Official Chandralok Logo */}
          <div className="lg:col-span-5 space-y-4">
            <ChandralokLogo size="lg" showHindi={true} showSubtitle={true} />

            <p className="text-xs text-[#94a3b8] font-light leading-relaxed max-w-sm">
              Since 1981 — Capturing Moments. Creating Stories. Four decades of dedicated photography and cinematic filmmaking in Sirsaganj, Uttar Pradesh.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0b162a] border border-[#1e293b] hover:border-[#00e5ff] flex items-center justify-center text-[#00e5ff] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0b162a] border border-[#1e293b] hover:border-[#ff0000] flex items-center justify-center text-[#ff0000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0b162a] border border-[#1e293b] hover:border-[#25D366] flex items-center justify-center text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="w-9 h-9 rounded-xs bg-[#0b162a] border border-[#1e293b] hover:border-[#ffb703] flex items-center justify-center text-[#ffb703] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#00e5ff] font-bold">
              Navigation
            </div>
            <ul className="space-y-2 font-light text-xs">
              <li><a href="#hero" className="hover:text-[#00e5ff] transition-colors">Home Studio</a></li>
              <li><a href="#services" className="hover:text-[#00e5ff] transition-colors">Artistic Services</a></li>
              <li><a href="#legacy" className="hover:text-[#00e5ff] transition-colors">Legacy (Est. 1981)</a></li>
              <li><a href="#equipment" className="hover:text-[#00e5ff] transition-colors">Cameras & Cinema Gear</a></li>
              <li><a href="#reviews" className="hover:text-[#00e5ff] transition-colors">Client Testimonials</a></li>
              <li><a href="#social" className="hover:text-[#00e5ff] transition-colors">Official Socials & Studio</a></li>
              <li><a href="#booking" className="hover:text-[#00e5ff] transition-colors">Check Availability & Booking</a></li>
            </ul>
          </div>

          {/* Studio Contact & Reduced Motion */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[11px] uppercase font-mono tracking-widest text-[#ff6b00] font-bold">
              Studio Location
            </div>

            <div className="space-y-2 font-light text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
                <span>Etawah Road, near Punjab National Bank, Sirsaganj, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffb703] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#00e5ff] transition-colors">
                  +91 {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <a href={STUDIO_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5ff] transition-colors">
                  {STUDIO_INFO.instagramHandle}
                </a>
              </div>
            </div>

            {/* Reduced Motion Accessibility Toggle */}
            <div className="pt-3 border-t border-[#1e293b]">
              <div className="flex items-center justify-between p-3 bg-[#070e1c] border border-[#1e293b] rounded-xs">
                <div className="flex items-center gap-2.5">
                  {reducedMotion ? (
                    <EyeOff className="w-4 h-4 text-[#ff6b00]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[#00e5ff]" />
                  )}
                  <div>
                    <div className="text-[11px] font-bold text-white tracking-wide">
                      Reduced Motion
                    </div>
                    <div className="text-[10px] text-[#94a3b8]">
                      {reducedMotion ? 'Static luxury mode active' : 'Smooth 3D & parallax active'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleReducedMotion}
                  role="switch"
                  aria-checked={reducedMotion}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    reducedMotion ? 'bg-[#ff6b00]' : 'bg-[#1e293b]'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      reducedMotion ? 'translate-x-4' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <span>&copy; 1981–{new Date().getFullYear()} CHANDRALOK STUDIO. All Rights Reserved.</span>
            <span className="font-hindi text-[#ffb703]">चन्द्रलोक फोटो स्टूडियो</span>
          </div>

          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <span>Sirsaganj, Uttar Pradesh</span>
            <span>·</span>
            <span>Wedding | Pre-Wedding</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
