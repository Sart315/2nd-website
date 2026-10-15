import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sun, Moon } from 'lucide-react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer popup is active
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
    { name: 'Collections', href: '#services' },
    { name: 'Heritage', href: '#legacy' },
    { name: 'Equipment', href: '#equipment' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Journal', href: '#social' },
    { name: 'Reserve', href: '#booking' },
  ];

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#EFEFE8] dark:bg-[#181C16] border-b border-[#D8D8CF] dark:border-[#2E3729] py-2.5 sm:py-3 shadow-xs'
          : 'bg-[#EFEFE8]/95 dark:bg-[#181C16]/95 py-3 sm:py-4 border-b border-[#D8D8CF]/70 dark:border-[#2E3729]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Zone 1: Brand Wordmark (Constrained on mobile so right controls never get pushed off screen) */}
        <a
          href="#hero"
          className="flex items-center shrink min-w-0 max-w-[48vw] xs:max-w-[54vw] sm:max-w-none group"
          aria-label="Chandralok Studio Home"
        >
          <ChandralokLogo size="md" showHindi={true} showSubtitle={true} />
        </a>

        {/* Zone 2: Desktop Navigation Links in Bold & Simple Classic Montserrat */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#B08D57] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Direct Phone, Daylight/Darkroom Theme Toggle, Tan Leather 'Book Now', and 3-Lines Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Direct Phone Call (Desktop / Tablet) */}
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] transition-colors py-2 px-3.5 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] shrink-0"
            title="Call Studio Direct"
          >
            <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
            <span className="font-mono text-xs">{STUDIO_INFO.phoneFormatted}</span>
          </a>

          {/* Daylight / Darkroom Cinema Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Daylight Gallery theme' : 'Switch to Darkroom Cinema theme'}
            title={isDark ? 'Daylight Bone White' : 'Darkroom Cinema'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] transition-colors cursor-pointer shadow-xs active:scale-95 flex items-center justify-center shrink-0"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#B08D57]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3B4436]" />
            )}
          </button>

          {/* Tan Leather Call-to-Action (CTA): Book Now */}
          <button
            onClick={onOpenBooking}
            className="px-2.5 py-1.5 xs:px-3 sm:px-4 lg:px-5 sm:py-2 text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-wider uppercase text-white bg-[#B08D57] hover:bg-[#9c7b49] active:scale-95 transition-colors shadow-xs whitespace-nowrap cursor-pointer rounded-full shrink-0 flex items-center gap-1 sm:gap-1.5"
          >
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Book Now</span>
          </button>

          {/* 3-Lines Mobile Menu Toggle Button (Strictly sized and shrink-0 so it NEVER crosses screen edge) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#B08D57]" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PERFECTLY FITTING TOP POPUP VIEW / MOBILE DRAWER MENU FOR ALL SCREEN SIZES */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#EFEFE8] dark:bg-[#181C16] border-b border-[#D8D8CF] dark:border-[#2E3729] shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto">
          {/* Backdrop blur dismissal container */}
          <div className="max-w-md mx-auto px-4 py-5 sm:px-6 sm:py-6 flex flex-col gap-4">
            {/* Studio Identity Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#D8D8CF] dark:border-[#2E3729]">
              <ChandralokLogo size="sm" showHindi={true} showSubtitle={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-[#5C6755] dark:text-[#A3AFA0]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Tagline */}
            <p className="text-[11px] text-center font-medium text-[#5C6755] dark:text-[#A3AFA0]">
              Photographer & Videographer Studio · Sirsaganj (Since 1981)
            </p>

            {/* Navigation Grid (Touch-friendly 2-column tiles) */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavClick(link.href)}
                  className="py-2.5 px-3 text-[11px] font-bold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-xl transition-colors text-center cursor-pointer active:scale-95 shadow-2xs"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Primary Action: Full-Width Tan Leather 'Book Now' */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs tracking-widest uppercase font-bold text-white bg-[#B08D57] hover:bg-[#9c7b49] active:scale-95 transition-colors shadow-xs rounded-full cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now / Check Dates</span>
            </button>

            {/* Side-by-Side Dual Action: Direct Call & Daylight/Darkroom Theme Toggle */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-semibold text-[#3B4436] dark:text-[#EFEFE8] hover:border-[#B08D57] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                <span className="truncate">Call Studio</span>
              </a>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-semibold text-[#3B4436] dark:text-[#EFEFE8] hover:border-[#B08D57] transition-colors cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>Daylight</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#3B4436]" />
                    <span>Darkroom</span>
                  </>
                )}
              </button>
            </div>

            {/* Address Footer inside popup */}
            <div className="pt-2 text-center text-[10px] text-[#5C6755] dark:text-[#A3AFA0]">
              Etawah Road, near Punjab National Bank, Sirsaganj, UP
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
