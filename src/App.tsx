import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedStory } from './components/FeaturedStory';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const { isDark } = useTheme();

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen cinema-canvas ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2]' : 'bg-[#F9F9F6] text-[#1E2520]'
      } relative selection:bg-[#C5A880]/30 selection:text-[#F7F7F2] transition-colors duration-200`}
    >
      {/* 01. Minimal Top Navigation with CHECK YOUR DATE button & Dark/Light mode switch */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="relative z-10">
        {/* 01. Full-Screen Cinematic Hero */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreWork={scrollToPortfolio}
        />

        {/* 02. The Stories We Tell — Centerpiece Wedding Film Showcase */}
        <FeaturedStory onOpenBooking={() => scrollToBooking()} />

        {/* 03. Selected Work — Asymmetrical Editorial Masonry Portfolio + Lightbox */}
        <PortfolioSection onReserve={(title) => scrollToBooking(title)} />

        {/* 04. Curated Disciplines — 4 Large Visual Service Blocks */}
        <ServicesSection onSelectService={(service) => scrollToBooking(service)} />

        {/* 05. Behind The Lens — 1981 Sirsaganj Heritage & Authentic Trust */}
        <AboutSection />

        {/* 06. Words From Our Couples — 3 Genuine Verified Reviews */}
        <TestimonialsSection />

        {/* 07. Planning Your Special Day? — High-Conversion Date Check & WhatsApp */}
        <BookingSection initialService={selectedServiceForBooking} />
      </main>

      {/* 08. Compact Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
