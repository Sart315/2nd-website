import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedStory } from '../components/FeaturedStory';
import { PortfolioSection } from '../components/PortfolioSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingSection } from '../components/BookingSection';
import { useAppRouter } from '../context/RouterContext';

export const HomePage: React.FC = () => {
  const { navigateTo } = useAppRouter();
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleBooking = (service?: string) => {
    // If user clicks "Check Date" or chooses a service, we can navigate directly to the dedicated Booking Page
    navigateTo('booking', service ? { service } : undefined);
  };

  const handleExploreWork = () => {
    navigateTo('gallery');
  };

  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      {/* 01. Full-Screen Cinematic Hero */}
      <Hero
        onOpenBooking={() => handleBooking()}
        onExploreWork={handleExploreWork}
      />

      {/* 02. The Stories We Tell — Centerpiece Wedding Film Showcase */}
      <FeaturedStory onOpenBooking={() => handleBooking('Royal Varmala Cinema')} />

      {/* 03. Selected Work — Asymmetrical Editorial Masonry Portfolio + Lightbox */}
      <PortfolioSection onReserve={(title) => handleBooking(title)} />

      {/* 04. Curated Disciplines — 4 Large Visual Service Blocks */}
      <ServicesSection onSelectService={(service) => handleBooking(service)} />

      {/* 05. Behind The Lens — 1981 Sirsaganj Heritage & Authentic Trust */}
      <AboutSection />

      {/* 06. Words From Our Couples — 3 Genuine Verified Reviews */}
      <TestimonialsSection />

      {/* 07. Planning Your Special Day? — High-Conversion Date Check & WhatsApp */}
      <BookingSection initialService={selectedService} />
    </main>
  );
};
