import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, Instagram, MapPin, CheckCircle2, ArrowRight, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';
import { STUDIO_INFO, PRICING_TIERS, PricingTier } from '../data/studioData';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [selectedTier, setSelectedTier] = useState<string>('tier-royal');
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 9, 1)); // Oct 2026
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-24');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '2026-10-24',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialService.includes('Wedding')
          ? 'Wedding'
          : initialService.includes('Pre-Wedding')
          ? 'Pre-Wedding'
          : 'Other',
        message: prev.message || `Inquiry regarding ${initialService}.`,
      }));
    }
  }, [initialService]);

  // Calendar calculations
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const formatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formatted);
    setFormData((prev) => ({ ...prev, eventDate: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const chosenTier = PRICING_TIERS.find((t) => t.id === selectedTier);

    const text = encodeURIComponent(
      `Hello Chandralok Studio (चन्द्रलोक फोटो स्टूडियो),\n\nI want to check date availability & reserve our event:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Selected Package: ${chosenTier?.name || 'Custom Package'}\n` +
      `• Event Date: ${formData.eventDate || selectedDate || 'To be decided'}\n` +
      `• Location: ${formData.location || 'Sirsaganj / Regional Venue'}\n` +
      `• Notes: ${formData.message || 'Looking forward to receiving date confirmation.'}\n\n` +
      `Thank you!`
    );

    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`;
    setWhatsappShareUrl(waUrl);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Reservations & Date Availability</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] uppercase tracking-tight">
              Reserve Your Date <br />
              <span className="text-[#B08D57]">
                With The Masters
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
              We accept a limited number of royal wedding commissions each season to ensure uncompromising artistic dedication, master cinema grading, and archival album craftsmanship.
            </p>
          </div>
        </div>

        {/* Curated Pricing Tier Collections */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] block mb-2">
              Curated Collections
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-normal text-[#3B4436] dark:text-[#EFEFE8]">
              Wedding Cinema & Photography Tiers
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#5C6755] dark:text-[#A3AFA0] mt-2">
              Select your desired collection below. Each tier includes raw digital archives, high-speed prime glass, and master color grading.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier: PricingTier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`cursor-pointer rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white dark:bg-[#20251E] border-[#B08D57] ring-2 ring-[#B08D57]/30 shadow-md'
                      : 'bg-white dark:bg-[#20251E] border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] shadow-xs'
                  }`}
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57]">
                        {tier.days}
                      </span>
                      {tier.badge && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#B08D57] text-white px-2.5 py-0.5 rounded-full">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                      {tier.name}
                    </h4>

                    <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] mb-5 italic">
                      {tier.subtitle}
                    </p>

                    <div className="pb-5 mb-5 border-b border-[#E4E4DC] dark:border-[#272F23]">
                      <span className="font-heading text-2xl font-light text-[#B08D57]">
                        {tier.investment}
                      </span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 mb-6">
                      {tier.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#3B4436] dark:text-[#EFEFE8]">
                          <Check className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] rounded-xl text-[11px] text-[#5C6755] dark:text-[#A3AFA0] mb-5">
                      <strong className="text-[#3B4436] dark:text-[#EFEFE8] block font-medium mb-0.5">Fleet Deployed:</strong>
                      {tier.gearIncluded}
                    </div>

                    <button
                      type="button"
                      className={`w-full py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#B08D57] text-white shadow-xs'
                          : 'bg-[#EFEFE8] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] hover:border-[#B08D57]'
                      }`}
                    >
                      <span>{isSelected ? 'Selected Tier' : 'Select This Tier'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Asymmetric Split: Interactive Calendar Grid + Booking Widget Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Calendar Grid */}
          <div className="lg:col-span-5 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] p-7 sm:p-8 rounded-3xl shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] block">
                  Select Event Date
                </span>
                <h4 className="font-heading text-2xl font-normal text-[#3B4436] dark:text-[#EFEFE8]">
                  {monthName}
                </h4>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-full border border-[#D8D8CF] dark:border-[#2E3729] hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] transition-colors cursor-pointer"
                  title="Previous Month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-full border border-[#D8D8CF] dark:border-[#2E3729] hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] transition-colors cursor-pointer"
                  title="Next Month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold tracking-wider uppercase text-[#5C6755] dark:text-[#A3AFA0] mb-2">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Calendar Days Matrix */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Empty leading padding slots */}
              {[...Array(firstDayIndex)].map((_, i) => (
                <div key={`empty-${i}`} className="h-9" />
              ))}

              {/* Day buttons */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const formatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isSelected = selectedDate === formatted;
                const isAuspicious = [8, 14, 18, 22, 24, 28].includes(day);

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDateClick(day)}
                    className={`h-9 w-full rounded-lg text-xs font-medium transition-colors cursor-pointer flex flex-col items-center justify-center relative ${
                      isSelected
                        ? 'bg-[#B08D57] text-white font-bold shadow-xs'
                        : 'hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8]'
                    }`}
                  >
                    <span>{day}</span>
                    {isAuspicious && !isSelected && (
                      <span className="w-1 h-1 rounded-full bg-[#B08D57] absolute bottom-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8D8CF] dark:border-[#2E3729] flex items-center justify-between text-xs text-[#5C6755] dark:text-[#A3AFA0]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <span>Prime Auspicious Dates</span>
              </div>
              <div className="font-mono text-[11px] text-[#B08D57] font-semibold">
                {selectedDate || 'Select Date'}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Booking Widget Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] p-7 sm:p-9 rounded-3xl shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] block mb-0.5">
                  Direct Inquiries
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8]">
                  Confirm Date & Request Consultation
                </h3>
              </div>
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#B08D57]/15 text-[#B08D57] px-3 py-1 rounded-full">
                Sirsaganj · Est. 1981
              </span>
            </div>

            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#B08D57]" />
                <div>
                  <h4 className="font-heading text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8] mb-1">
                    Inquiry Received
                  </h4>
                  <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] max-w-md leading-relaxed">
                    Thank you, {formData.name}. We have noted your inquiry for date {formData.eventDate}.
                  </p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-xs font-semibold tracking-widest uppercase text-white bg-emerald-700 hover:bg-emerald-800 rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Directly to WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] border border-[#D8D8CF] dark:border-[#2E3729] hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Rathore"
                      className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9997648550"
                      className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                      Celebration Occasion
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl"
                    >
                      <option value="Wedding">Royal Wedding (Photo + 4K Cinema)</option>
                      <option value="Pre-Wedding">Pre-Wedding Cinema Story</option>
                      <option value="Engagement">Engagement & Ring Ceremony</option>
                      <option value="Event">Sangeet / Haldi Festivity</option>
                      <option value="Portrait">Fine-Art Studio Portrait</option>
                      <option value="Other">Custom Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                      Selected Date (From Calendar)
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => {
                        setFormData({ ...formData, eventDate: e.target.value });
                        setSelectedDate(e.target.value);
                      }}
                      className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                    Venue Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Sirsaganj, Etawah, Agra Heritage, or Regional"
                    className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] mb-1.5">
                    Celebration Details & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share guest count, multi-day schedule, drone interest, or special requests..."
                    className="w-full px-4 py-2.5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] text-xs font-body text-[#3B4436] dark:text-[#EFEFE8] focus:border-[#B08D57] focus:outline-none rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-[#B08D57] hover:bg-[#9c7b49] transition-colors rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm & Request Consultation</span>
                </button>
              </form>
            )}

            {/* Direct Studio Contact Strip */}
            <div className="mt-6 pt-5 border-t border-[#D8D8CF] dark:border-[#2E3729] flex flex-wrap items-center justify-between text-xs text-[#5C6755] dark:text-[#A3AFA0] gap-3">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="hover:text-[#B08D57] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
                <span className="font-mono">{STUDIO_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant WhatsApp Direct</span>
              </a>

              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Etawah Road near PNB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
