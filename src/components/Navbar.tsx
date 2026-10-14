import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'SERVICES', href: '#services' },
    { name: 'LEGACY', href: '#legacy' },
    { name: 'EQUIPMENT', href: '#equipment' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'SOCIAL', href: '#social' },
    { name: 'BOOKING', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050b14]/85 backdrop-blur-xl border-b border-white/10 py-2 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-[#050b14]/90 via-[#050b14]/50 to-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Official Brand Logo from Uploaded Screenshot */}
        <a href="#" className="flex items-center shrink-0 group min-w-0">
          <ChandralokLogo size="md" showHindi={true} showSubtitle={true} />
        </a>

        {/* Zone 2: Navigation Links (Clean uppercase tracking) */}
        <nav className="hidden xl:flex items-center gap-6 text-[12px] tracking-[0.16em] uppercase text-[#cbd5e1] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#00e5ff] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#00e5ff] after:to-[#ff6b00] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action - Curved Booking & Call Buttons */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="hidden md:flex items-center gap-1.5 text-xs text-[#cbd5e1] hover:text-[#00e5ff] transition-colors py-1.5 px-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#00e5ff]/50 backdrop-blur-md"
            title="Call Studio Direct"
          >
            <Phone className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="font-mono font-medium tracking-wide">{STUDIO_INFO.phoneFormatted}</span>
          </a>

          {/* Curved Pill Booking Button */}
          <button
            onClick={onOpenBooking}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#050b14] bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#00e5ff] hover:from-[#ff6b00] hover:to-[#ffb703] hover:text-white active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.35)] whitespace-nowrap cursor-pointer rounded-full"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Book Your Date</span>
              <span className="xs:hidden sm:hidden">Book</span>
            </span>
          </button>

          {/* Mobile Hamburger Toggle with Curved Glass */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/[0.04] border border-white/10 text-white hover:text-[#00e5ff] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff6b00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Modern Mobile Menu in Transparent Glassy UI */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-[#050b14]/95 border-b border-white/15 px-5 py-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3.5 text-center">
            <div className="flex justify-center">
              <ChandralokLogo size="lg" showHindi={true} showSubtitle={true} />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#00e5ff]">
              Since 1981 — Capturing Moments. Creating Stories.
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-32 mx-auto my-1" />

            <div className="grid grid-cols-2 gap-2.5 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 text-xs uppercase tracking-widest text-[#f8fafc] hover:text-[#00e5ff] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-colors backdrop-blur-md"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-bold text-[#050b14] bg-gradient-to-r from-[#00e5ff] to-[#ff6b00] hover:text-white transition-all shadow-lg rounded-full cursor-pointer"
              >
                Book Your Date
              </button>
              <div className="flex items-center justify-center gap-5 pt-1 text-xs text-[#cbd5e1]">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center gap-1.5 hover:text-[#00e5ff] px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00e5ff]" />
                  <span>Call {STUDIO_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#25D366] hover:underline px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
