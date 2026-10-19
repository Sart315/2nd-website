import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight, MessageCircle, Sun, Moon } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile popup drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'WORK', href: '#portfolio' },
    { name: 'STORIES', href: '#featured-story' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-colors duration-200 overflow-x-hidden ${
          isScrolled
            ? isDark
              ? 'bg-[#0D0F0E]/95 border-b border-white/10 py-3 sm:py-3.5 shadow-lg'
              : 'bg-[#F9F9F6]/95 border-b border-[#2C3528]/15 py-3 sm:py-3.5 shadow-md text-[#1E2520]'
            : isDark
            ? 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5 border-b border-white/5'
            : 'bg-gradient-to-b from-[#F9F9F6]/90 via-[#F9F9F6]/50 to-transparent py-4 sm:py-5 border-b border-[#2C3528]/10 text-[#1E2520]'
        }`}
      >
        <div className="w-full max-w-[1560px] mx-auto px-3.5 sm:px-6 lg:px-12 flex items-center justify-between gap-1.5 sm:gap-3">
          {/* Brand Wordmark & Official Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center shrink min-w-0 max-w-[42vw] xs:max-w-[48vw] sm:max-w-none group cursor-pointer"
            aria-label="Chandralok Studio Home"
          >
            <ChandralokLogo size="md" showHindi={true} showSubtitle={true} />
          </a>

          {/* Minimal Editorial Navigation Links (Desktop) */}
          <nav
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-bold tracking-[0.2em] uppercase ${
              isDark ? 'text-[#F7F7F2]/80' : 'text-[#1E2520]/80'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors py-1 relative group cursor-pointer ${
                  isDark ? 'hover:text-[#C5A880]' : 'hover:text-[#B08D57]'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-200 group-hover:w-full ${
                    isDark ? 'bg-[#C5A880]' : 'bg-[#B08D57]'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Controls: Dark/Light Mode + CHECK YOUR DATE + Mobile 3-Lines */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Header Dark & Light Mode Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-1.5 sm:px-3 sm:py-2 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer text-xs font-semibold ${
                isDark
                  ? 'bg-white/10 hover:bg-white/15 border-white/15 text-[#C5A880]'
                  : 'bg-[#2C3528]/10 hover:bg-[#2C3528]/15 border-[#2C3528]/20 text-[#B08D57]'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="hidden lg:inline text-[10px] tracking-wider uppercase text-white/90">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#2C3528]" />
                  <span className="hidden lg:inline text-[10px] tracking-wider uppercase text-[#1E2520]">Dark</span>
                </>
              )}
            </button>

            {/* Check Your Date Button */}
            <button
              onClick={onOpenBooking}
              className={`px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold tracking-[0.16em] uppercase active:scale-95 transition-all shadow-xs rounded-full flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                isDark
                  ? 'text-[#0D0F0E] bg-[#C5A880] hover:bg-[#B3956D]'
                  : 'text-[#FFFFFF] bg-[#B08D57] hover:bg-[#967442]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Check Your Date</span>
              <span className="xs:hidden">Book</span>
            </button>

            {/* 3 Lines Hamburger Menu Button (Engineered for Flawless Responsiveness) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className={`md:hidden min-w-[36px] min-h-[36px] w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors z-50 ${
                isDark
                  ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white active:bg-white/20'
                  : 'bg-[#2C3528]/10 hover:bg-[#2C3528]/15 border-[#2C3528]/20 text-[#1E2520] active:bg-[#2C3528]/20'
              }`}
            >
              {mobileMenuOpen ? (
                <X className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`} />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Top Pop-Up View / Mobile Navigation Modal */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="md:hidden fixed inset-0 z-50 flex flex-col bg-black/60 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`w-full max-h-[92vh] overflow-y-auto border-b shadow-2xl px-5 pt-4 pb-8 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 ${
              isDark
                ? 'bg-[#121513] border-white/15 text-[#F7F7F2]'
                : 'bg-[#F9F9F6] border-[#2C3528]/15 text-[#1E2520]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Pop-up View */}
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
              <ChandralokLogo size="sm" showHindi={true} showSubtitle={true} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-full border cursor-pointer ${
                  isDark
                    ? 'bg-white/10 border-white/15 text-white hover:text-[#C5A880]'
                    : 'bg-black/5 border-black/10 text-black hover:text-[#B08D57]'
                }`}
                aria-label="Close navigation popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* DEDICATED DARK & LIGHT MODE TOGGLE BUTTON ON TOP POP UP VIEW */}
            <div
              className={`p-3 rounded-2xl border flex items-center justify-between ${
                isDark ? 'bg-[#181C19] border-white/10' : 'bg-[#EFEFEA] border-[#2C3528]/15'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isDark ? (
                  <Moon className="w-4 h-4 text-[#C5A880]" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">
                    {isDark ? 'Dark Cinema Mode' : 'Light Gallery Mode'}
                  </div>
                  <div className={`text-[10px] ${isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'}`}>
                    Tap button to switch background theme
                  </div>
                </div>
              </div>

              {/* Toggle Action Button */}
              <button
                onClick={toggleTheme}
                type="button"
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
                  isDark
                    ? 'bg-[#C5A880] text-[#0D0F0E] hover:bg-[#B3956D]'
                    : 'bg-[#B08D57] text-[#FFFFFF] hover:bg-[#967442]'
                }`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5" />
                    <span>Set Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5" />
                    <span>Set Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-2 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`py-3 px-4 text-left text-xs tracking-[0.2em] font-bold uppercase rounded-xl transition-colors flex items-center justify-between cursor-pointer border ${
                    isDark
                      ? 'text-[#F7F7F2] hover:text-[#C5A880] bg-[#161917] hover:bg-[#1E221F] border-white/5'
                      : 'text-[#1E2520] hover:text-[#B08D57] bg-[#FFFFFF] hover:bg-[#F2F2EC] border-[#2C3528]/10 shadow-xs'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}
                  />
                </button>
              ))}
            </nav>

            {/* Bottom Actions inside Pop-up View */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className={`w-full py-3.5 text-xs tracking-[0.2em] uppercase font-bold rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md ${
                  isDark
                    ? 'text-[#0D0F0E] bg-[#C5A880] hover:bg-[#B3956D]'
                    : 'text-[#FFFFFF] bg-[#B08D57] hover:bg-[#967442]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Check Your Date</span>
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Chandralok%20Studio%2C%20I%20would%20like%20to%20check%20availability%20for%20our%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 text-xs tracking-[0.16em] uppercase font-semibold rounded-full transition-colors flex items-center justify-center gap-2 border ${
                  isDark
                    ? 'text-[#F7F7F2] bg-[#161917] hover:bg-[#1F2420] border-white/10'
                    : 'text-[#1E2520] bg-[#FFFFFF] hover:bg-[#F2F2EC] border-[#2C3528]/15'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Studio (+91 99976 48550)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
