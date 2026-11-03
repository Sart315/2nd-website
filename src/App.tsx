import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useTheme } from './context/ThemeContext';
import { useAppRouter } from './context/RouterContext';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';

export default function App() {
  const { isDark } = useTheme();
  const { route, navigateTo } = useAppRouter();

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden cinema-canvas ${
        isDark ? 'bg-[#0D0F0E] text-[#F7F7F2]' : 'bg-[#F9F9F6] text-[#1E2520]'
      } relative selection:bg-[#C5A880]/30 selection:text-[#F7F7F2] transition-colors duration-200 flex flex-col justify-between`}
    >
      {/* 01. Minimal Top Navigation with active route indicators & Theme Switch */}
      <Navbar onOpenBooking={() => navigateTo('booking')} />

      {/* 02. Route View Dispatcher for all 5 Dedicated Pages */}
      <div className="w-full grow relative overflow-x-hidden">
        {route === 'home' && <HomePage />}
        {route === 'gallery' && <GalleryPage />}
        {route === 'services' && <ServicesPage />}
        {route === 'about' && <AboutPage />}
        {route === 'booking' && <BookingPage />}
      </div>

      {/* 03. Compact Editorial Footer */}
      <Footer />

      {/* 04. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
