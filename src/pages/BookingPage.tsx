import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  MessageCircle,
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Film,
  Camera,
  ChevronDown,
  ArrowRight,
  Send
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';
import { useAppRouter } from '../context/RouterContext';

interface BookingPageProps {
  initialService?: string;
}

const PACKAGES = [
  {
    id: 'heritage-suite',
    name: 'Royal Heritage Suite',
    tag: 'Most Cherished Tier',
    recommended: true,
    desc: 'Our flagship 360° coverage for grand weddings and multi-day royal ceremonies.',
    features: [
      'Senior Director + 4-Member Specialized Cinema Crew',
      'Multi-Angle 4K Cinema + Aerial 4K Drone Perspectives',
      'Cinematic Film Teaser (3-5 min) + Feature Film (45-60 min)',
      'High-Speed Candid Photojournalism + Traditional Portraits',
      '2 Handcrafted Italian Leather Bound Master Albums',
      'Archival Raw + Color Graded Digital Archive on Master Drive',
    ],
  },
  {
    id: 'cinema-photo',
    name: 'Complete Wedding Story',
    tag: 'Signature Cinema & Stills',
    recommended: false,
    desc: 'Uncompromising cinematic coverage for intimate and royal single or dual-day weddings.',
    features: [
      'Dual Full-Frame Cinema Cameras + Prime Cine Lenses',
      'Dedicated Candid Master Photographer',
      '4K Cinematic Wedding Teaser + Extended Reel',
      '1 Custom Embossed Coffee Table Album (100+ pages)',
      'Rapid 72-Hour Social Media Sneak Peek Photos',
      'Private High-Resolution Cloud Archive',
    ],
  },
  {
    id: 'pre-wedding',
    name: 'Editorial Pre-Wedding',
    tag: 'Cinematic Romance',
    recommended: false,
    desc: 'Conceptual love story short films and magazine-quality couples portraiture.',
    features: [
      'Full-Day Outdoor Shoot in Palaces, Haveli or Sunset Ghats',
      '3 Curated Wardrobe & Mood Concept Consultations',
      '4K Cinematic Pre-Wedding Music Video Short (2-3 min)',
      '30 Master Retouched Fine-Art Poster Prints',
      'Large Format Canvas Print for Reception Welcome Easel',
    ],
  },
];

const FAQS = [
  {
    q: 'How far in advance should we reserve our wedding date?',
    a: 'Due to high demand during peak wedding Muhurat dates (November through March), we strongly advise booking 2 to 6 months in advance. We maintain strict date exclusivity and never take overlapping events that compromise our senior crew quality.',
  },
  {
    q: 'Do you travel outside Sirsaganj for destination weddings?',
    a: 'Yes, absolutely. While our flagship studio has anchored Sirsaganj (Etawah Road) since 1981, our cinema teams frequently travel throughout Agra, Etawah, Firozabad, Mathura, Jaipur, Lucknow, and across India.',
  },
  {
    q: 'What is your delivery timeline for photos and films?',
    a: 'We share an exclusive digital Sneak Peek of 25–40 signature edited frames within 72 hours for family sharing and Instagram. The full 4K Cinematic Teaser arrives within 3 weeks, followed by the complete Feature Film and handcrafted heirloom albums within 6–8 weeks.',
  },
  {
    q: 'Can we customize our coverage and add pre-wedding sessions?',
    a: 'Every family and ceremony is distinctive. You can easily combine pre-wedding shoots, Haldi/Mehendi coverage, drone cinematography, and extra heirloom albums. We tailor each quote to your exact itinerary.',
  },
];

export const BookingPage: React.FC<BookingPageProps> = () => {
  const { params } = useAppRouter();
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Royal Wedding',
    packageTier: 'Royal Heritage Suite',
    eventDate: '',
    venue: '',
    guestCount: '300-600',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sync route params (e.g. if user clicked "Inquire about X" in Gallery)
  useEffect(() => {
    if (params.service) {
      setFormData((prev) => ({
        ...prev,
        eventType: params.service || prev.eventType,
        notes: prev.notes ? prev.notes : `Inquiring for ${params.service}.`,
      }));
    }
  }, [params.service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Hello Chandralok Studio (चन्द्रलोक फोटो स्टूडियो),\n\n` +
      `I would like to inquire about booking our celebration:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      (formData.email ? `• Email: ${formData.email}\n` : '') +
      `• Event Type: ${formData.eventType}\n` +
      `• Preferred Tier: ${formData.packageTier}\n` +
      `• Ceremony Date: ${formData.eventDate || 'To be finalized'}\n` +
      `• Venue / City: ${formData.venue || 'Sirsaganj / Regional Venue'}\n` +
      `• Approx Guests: ${formData.guestCount}\n` +
      (formData.notes ? `• Special Requests: ${formData.notes}\n\n` : `\n`) +
      `Please let us know your availability and package details.`
    );

    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${message}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1560px] mx-auto">
      {/* 01. Editorial Header */}
      <header className="mb-14 sm:mb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] text-xs font-mono uppercase tracking-[0.2em] mb-4">
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>Private Reservations & Consultations</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-balance leading-tight mb-4">
          Reserve Your <br className="hidden sm:block" />
          <span className="italic text-[#C5A880]">Wedding Date</span>
        </h1>

        <p className="text-sm sm:text-base text-[#A3ABA1] max-w-2xl mx-auto leading-relaxed">
          We maintain strict date exclusivity. Share your celebration vision below, and our senior directors will confirm date availability and guide you through customized cinematography and photography arrangements.
        </p>

        {/* Studio Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 pt-6 border-t border-white/10 text-xs uppercase tracking-wider text-[#A3ABA1]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>Strict Date Exclusivity</span>
          </div>
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#C5A880]" />
            <span>4K Cinema & Aerial Masters</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
            <span>40+ Years of Family Trust</span>
          </div>
        </div>
      </header>

      {/* 02. Curated Package Tiers */}
      <section className="mb-16 sm:mb-24">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
            Bespoke Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif mt-1">
            Choose Your Coverage Scope
          </h2>
          <p className="text-xs sm:text-sm text-[#A3ABA1] mt-1">
            Select a tier to pre-fill your inquiry form, or customize any detail with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => {
            const isSelected = formData.packageTier === pkg.name;

            return (
              <div
                key={pkg.id}
                onClick={() => setFormData((prev) => ({ ...prev, packageTier: pkg.name }))}
                className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  pkg.recommended
                    ? 'border-[#C5A880] shadow-xl shadow-[#C5A880]/10 bg-gradient-to-b from-[#181C19] to-[#121513]'
                    : isDark
                    ? 'bg-[#141715] border-white/10 hover:border-[#C5A880]/50'
                    : 'bg-white border-[#2C3528]/15 hover:border-[#B08D57]'
                } ${isSelected ? 'ring-2 ring-[#C5A880]' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A880] text-black text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Recommended Flagship
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#C5A880] uppercase tracking-wider">
                      {pkg.tag}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-[#C5A880] bg-[#C5A880] text-black'
                          : 'border-white/20'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#A3ABA1] mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-3 mb-8 text-xs sm:text-[13px] text-[#F7F7F2]/90">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C5A880] text-black'
                      : 'border border-white/20 hover:border-[#C5A880] text-[#F7F7F2]'
                  }`}
                >
                  {isSelected ? 'Selected Tier' : 'Select This Tier'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 03. Reservation Form & Studio Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Form (7 cols) */}
        <div
          className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 border ${
            isDark
              ? 'bg-[#141715] border-white/10'
              : 'bg-white border-[#2C3528]/15 shadow-sm'
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif mb-1">
              Date Availability & Inquiry Form
            </h2>
            <p className="text-xs sm:text-sm text-[#A3ABA1]">
              Fill out your details below. You will be immediately redirected to our senior booking desk on WhatsApp with your pre-filled inquiry.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#C5A880]/10 border border-[#C5A880]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C5A880] text-black mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Inquiry Dispatched!</h3>
              <p className="text-xs text-[#A3ABA1] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your WhatsApp consultation is opening. If it did not launch automatically, tap the button below to connect with us directly.
              </p>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#1ebd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Direct WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sharma & Rohit"
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white placeholder-[#A3ABA1]/50 focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black placeholder-[#576356]/50 focus:border-[#B08D57]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white placeholder-[#A3ABA1]/50 focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black placeholder-[#576356]/50 focus:border-[#B08D57]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black focus:border-[#B08D57]'
                    }`}
                  >
                    <option value="Royal Wedding">Royal Wedding (Multi-day)</option>
                    <option value="Wedding & Varmala Ceremony">Wedding & Varmala Ceremony</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                    <option value="Engagement & Ring Ceremony">Engagement & Ring Ceremony</option>
                    <option value="Sangeet & Cocktail Night">Sangeet & Cocktail Night</option>
                    <option value="Destination Celebration">Destination Celebration</option>
                    <option value="Bridal / Family Portraiture">Bridal / Family Portraiture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    Target Ceremony Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black focus:border-[#B08D57]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    Venue Location & City
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    placeholder="e.g. Sirsaganj, Agra, Etawah, Resort"
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white placeholder-[#A3ABA1]/50 focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black placeholder-[#576356]/50 focus:border-[#B08D57]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                    Approximate Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all ${
                      isDark
                        ? 'bg-[#181C19] border-white/10 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black focus:border-[#B08D57]'
                    }`}
                  >
                    <option value="Under 200 (Intimate)">Under 200 (Intimate)</option>
                    <option value="200 - 500 Guests">200 - 500 Guests</option>
                    <option value="500 - 1000 Guests">500 - 1,000 Guests</option>
                    <option value="1000+ Guests (Grand Gala)">1,000+ Guests (Grand Gala)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A3ABA1] mb-1.5">
                  Celebration Details & Special Requests
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any specific rituals, preferred camera styles, drone requirements, or questions..."
                  className={`w-full px-4 py-3 rounded-xl text-sm border outline-hidden transition-all resize-none ${
                    isDark
                      ? 'bg-[#181C19] border-white/10 text-white placeholder-[#A3ABA1]/50 focus:border-[#C5A880]'
                      : 'bg-[#F9F9F6] border-[#2C3528]/15 text-black placeholder-[#576356]/50 focus:border-[#B08D57]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#B3956D] transition-all cursor-pointer shadow-lg shadow-[#C5A880]/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Check Date on WhatsApp</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info & Direct Contacts (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Studio Physical Address Card */}
          <div
            className={`rounded-3xl p-6 sm:p-8 border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg">Studio Flagship</h3>
                <p className="text-xs text-[#A3ABA1]">{STUDIO_INFO.hindiName}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F7F7F2]/90 leading-relaxed mb-4">
              {STUDIO_INFO.fullAddress}
            </p>

            <div className="space-y-2 text-xs text-[#A3ABA1] mb-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>Studio Hours: 10:00 AM – 8:30 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Direct Line: {STUDIO_INFO.phoneFormatted}</span>
              </div>
            </div>

            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-white/20 hover:border-[#C5A880] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Quick Direct Buttons */}
          <div
            className={`rounded-3xl p-6 sm:p-8 border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15'
            }`}
          >
            <h3 className="font-serif text-lg mb-2">Need an Instant Response?</h3>
            <p className="text-xs text-[#A3ABA1] mb-6 leading-relaxed">
              For urgent date queries during peak wedding season, reach out directly via phone or WhatsApp.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Chandralok%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20date%20availability%20for%20our%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="w-full py-3.5 rounded-full border border-white/20 hover:border-[#C5A880] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call Studio Direct ({STUDIO_INFO.phoneFormatted})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Frequently Asked Questions */}
      <section className="max-w-3xl mx-auto mt-12 sm:mt-16">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
            Guidance & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-medium">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C5A880] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#A3ABA1] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
