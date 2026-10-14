import React, { useState } from 'react';
import { MotionProvider } from './context/MotionContext';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundCameraElements } from './components/BackgroundCameraElements';
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
    <MotionProvider>
      <div className="min-h-screen bg-[#050b14] text-[#f8fafc] selection:bg-[#00e5ff]/30 selection:text-[#00e5ff] relative">
        {/* Interactive Desktop Custom Cursor */}
        <CustomCursor />

        {/* 3D Filming Lights, Camera Rigs & Studio Atmosphere in Multi-color Lighting */}
        <BackgroundCameraElements />

        {/* Top Navigation Bar with Official Brand Logo & Responsive Mobile View */}
        <Navbar onOpenBooking={() => scrollToBooking()} />

        {/* Streamlined Main Content Flow — Clean, Fast, Ultra-Luxury Glassmorphic 8-Page Architecture */}
        <main className="relative z-10">
          {/* 01. HERO (PAGE 1): "YOUR MOMENTS. OUR FRAME.", 3D Studio Depth, Glassmorphic UI & 35mm Film Roll Animation */}
          <Hero
            onOpenBooking={() => scrollToBooking()}
            onOpenCinemaPreview={scrollToSocial}
          />

          {/* 02. PAGE 2: "ARTISTIC SERVICES BEHIND THE LENS" */}
          <ServicesSection
            onSelectService={(service) => scrollToBooking(service)}
          />

          {/* 03. PAGE 3 (UNTOUCHED): LEGACY (SINCE 1981): "OVER FOUR DECADES BEHIND THE CAMERA" */}
          <LegacySection />

          {/* 04. PAGE 4: "CAMERAS & CINEMA GEAR BEHIND THE MASTER FRAME" (SONY, CANON, FUJIFILM, DJI, LIGHTING) */}
          <EquipmentSection />

          {/* 05. CLIENT REVIEWS & TESTIMONIALS WITH 5 STARS */}
          <TestimonialsSection />

          {/* 07. SHIFTED TO LAST 2ND PAGE: OFFICIAL SOCIAL CHANNELS (INSTAGRAM, WHATSAPP, YOUTUBE, CALL) + SIRSAGANJ STUDIO LANDMARK */}
          <SocialHubSection />

          {/* 08. FINAL SECTION: CHECK AVAILABILITY & DIRECT BOOKING */}
          <BookingSection initialService={selectedServiceForBooking} />
        </main>

        {/* Official Dark Footer with Official Logo, Hindi Identity & Reduced Motion Switch */}
        <Footer />

        {/* Floating Tasteful WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </MotionProvider>
  );
}
