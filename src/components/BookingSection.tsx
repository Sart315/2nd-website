import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MessageCircle, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialService,
        notes: prev.notes || `Inquiring for ${initialService}.`,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = encodeURIComponent(
      `Hello Chandralok Studio (चन्द्रलोक फोटो स्टूडियो),\n\n` +
      `I would like to check date availability for our celebration:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service/Event: ${formData.eventType}\n` +
      `• Expected Date: ${formData.eventDate || 'To be finalized'}\n` +
      `• Location/Venue: ${formData.location || 'Sirsaganj / Regional Venue'}\n` +
      (formData.notes ? `• Details: ${formData.notes}\n\n` : `\n`) +
      `Looking forward to hearing from you!`
    );

    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${message}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const directWhatsAppUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Chandralok%20Studio%2C%20I%20would%20like%20to%20check%20date%20availability%20for%20our%20wedding.`;

  return (
    <section
      id="booking"
      className={`py-20 sm:py-28 transition-colors duration-200 border-t ${
        isDark ? 'bg-[#0A0C0B] text-[#F7F7F2] border-white/5' : 'bg-[#F2F2EC] text-[#1E2520] border-[#2C3528]/10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-2.5 ${
              isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Reservations & Date Availability</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4 uppercase">
            Planning Your Special Day?
          </h2>

          <p
            className={`font-heading italic text-lg sm:text-2xl leading-relaxed ${
              isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
            }`}
          >
            Let's create something unforgettable.
          </p>
        </div>

        {/* High-Conversion Reservation Form Container */}
        <div
          className={`border rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl transition-all ${
            isDark
              ? 'bg-[#141715] border-white/10'
              : 'bg-white border-[#2C3528]/15 shadow-lg'
          }`}
        >
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <CheckCircle2
                className={`w-16 h-16 mb-4 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}
              />
              <h3 className="font-heading text-2xl sm:text-3xl mb-2">
                Inquiry Initiated
              </h3>
              <p
                className={`font-body text-xs sm:text-sm max-w-md mb-6 ${
                  isDark ? 'text-[#A3ABA1]' : 'text-[#576356]'
                }`}
              >
                Your details have been pre-filled for WhatsApp. Our studio team will review date availability and share personalized packages.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className={`px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer border ${
                  isDark
                    ? 'text-white bg-white/10 hover:bg-white/15 border-white/10'
                    : 'text-[#1E2520] bg-black/5 hover:bg-black/10 border-[#2C3528]/10'
                }`}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                      isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya & Rahul"
                    className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                    }`}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                      isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                    }`}
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                    }`}
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label
                    className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                      isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                    }`}
                  >
                    Service / Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                    }`}
                  >
                    <option value="Wedding Photography & Cinema">Wedding Photography & Cinema</option>
                    <option value="Pre-Wedding Film Shoot">Pre-Wedding Film Shoot</option>
                    <option value="Royal Wedding Photography Only">Royal Wedding Photography Only</option>
                    <option value="Cinematic 4K Films Only">Cinematic 4K Films Only</option>
                    <option value="Sangeet / Haldi / Events">Sangeet / Haldi / Events</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label
                    className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                      isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                    }`}
                  >
                    Auspicious Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                        : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                    }`}
                  />
                </div>
              </div>

              {/* Event Location */}
              <div>
                <label
                  className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                >
                  Event Venue / City
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Sirsaganj, Agra, Etawah or Destination Venue"
                  className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                      : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                  }`}
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  className={`block text-[11px] font-bold tracking-widest uppercase mb-2 ${
                    isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'
                  }`}
                >
                  Tell Us About Your Vision (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any special ceremonies, guest size, or cinematic expectations..."
                  className={`w-full px-4 py-3 border rounded-xl text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                    isDark
                      ? 'bg-[#0D0F0E] border-white/15 text-white focus:border-[#C5A880]'
                      : 'bg-[#F9F9F6] border-[#2C3528]/20 text-[#1E2520] focus:border-[#B08D57]'
                  }`}
                />
              </div>

              {/* Dual Action Conversion Row */}
              <div
                className={`pt-4 border-t flex flex-col sm:flex-row items-center gap-4 ${
                  isDark ? 'border-white/10' : 'border-[#2C3528]/15'
                }`}
              >
                {/* Primary Button: CHECK YOUR DATE */}
                <button
                  type="submit"
                  className={`w-full sm:flex-1 py-4 px-8 font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 ${
                    isDark
                      ? 'bg-[#C5A880] hover:bg-[#B3956D] text-[#0D0F0E]'
                      : 'bg-[#B08D57] hover:bg-[#967442] text-white'
                  }`}
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Check Your Date</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Option: Direct WhatsApp */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto py-4 px-6 border font-bold text-xs tracking-[0.16em] uppercase rounded-full transition-colors flex items-center justify-center gap-2.5 whitespace-nowrap ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border-white/15 text-white'
                      : 'bg-white hover:bg-[#F2F2EC] border-[#2C3528]/20 text-[#1E2520]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </form>
          )}

          {/* Direct Phone Assistance Banner */}
          <div
            className={`mt-7 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${
              isDark ? 'border-white/10 text-[#A3ABA1]' : 'border-[#2C3528]/15 text-[#576356]'
            }`}
          >
            <span>Prefer a direct phone conversation?</span>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className={`inline-flex items-center gap-2 font-mono font-bold transition-colors ${
                isDark ? 'text-white hover:text-[#C5A880]' : 'text-[#1E2520] hover:text-[#B08D57]'
              }`}
            >
              <Phone
                className={`w-3.5 h-3.5 ${isDark ? 'text-[#C5A880]' : 'text-[#B08D57]'}`}
              />
              <span>{STUDIO_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
