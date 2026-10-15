import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { MotionProvider } from './context/MotionContext';
import { StudioSmokeAtmosphere } from './components/StudioSmokeAtmosphere';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LegacySection } from './components/LegacySection';
import { EquipmentSection } from './components/EquipmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SocialHubSection } from './components/SocialHubSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSocial = () => {
    const socialEl = document.getElementById('social');
    if (socialEl) {
      socialEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <MotionProvider>
        {/* Minimalist Photographer & Videographer Studio Shell with Moss Green Atmospheric Smoke */}
        <div className="min-h-screen moss-smoke-canvas bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] selection:bg-[#B08D57]/20 selection:text-[#3B4436] dark:selection:text-[#EFEFE8] relative transition-colors duration-200">
          {/* Atmospheric Moss Green Smoke Mist Layer */}
          <StudioSmokeAtmosphere />

          {/* Top Bar with Brand Logo, Sun/Moon Theme Toggle, & Booking CTA */}
          <Navbar onOpenBooking={() => scrollToBooking()} />

          {/* Main Content Flow — Minimalist Editorial Photography & Film Architecture */}
          <main className="relative z-10">
            {/* 01. HERO: "YOUR MOMENTS. OUR MASTER FRAME.", 35mm Film Roll Archive */}
            <Hero
              onOpenBooking={() => scrollToBooking()}
              onOpenCinemaPreview={scrollToSocial}
            />

            {/* 02. SERVICES: Artistic Disciplines (Weddings, Pre-Weddings, 4K Cinema) */}
            <ServicesSection
              onSelectService={(service) => scrollToBooking(service)}
            />

            {/* 03. LEGACY: Since 1981 in Sirsaganj, Over Four Decades Behind The Camera */}
            <LegacySection />

            {/* 04. EQUIPMENT: Flagship Cameras & Cinema Gear — Minimalist Solid Cards & Unique Photos */}
            <EquipmentSection />

            {/* 05. CLIENT TESTIMONIALS: 5-Star Reviews & Real Experiences */}
            <TestimonialsSection />

            {/* 06. OFFICIAL SOCIAL & STUDIO: Instagram, WhatsApp, YouTube, Direct Call & Landmark */}
            <SocialHubSection />

            {/* 07. CHECK DATE AVAILABILITY & DIRECT BOOKING */}
            <BookingSection initialService={selectedServiceForBooking} />
          </main>

          {/* Studio Footer with Official Logo & Hindi Identity */}
          <Footer />

          {/* Floating WhatsApp Quick Contact Button */}
          <FloatingWhatsApp />
        </div>
      </MotionProvider>
    </ThemeProvider>
  );
}
