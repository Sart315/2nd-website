import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, Instagram, MapPin, CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ChandralokLogo } from './ChandralokLogo';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialService.includes('Wedding') ? 'Wedding' : initialService.includes('Pre-Wedding') ? 'Pre-Wedding' : 'Other',
        message: prev.message || `Inquiry regarding ${initialService}.`,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = encodeURIComponent(
      `Hello Chandralok Studio (चन्द्रलोक फोटो स्टूडियो),\n\nI want to book an inquiry:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Event Date: ${formData.eventDate || 'To be decided'}\n` +
      `• Location: ${formData.location || 'Sirsaganj / Regional'}\n` +
      `• Message: ${formData.message || 'Looking forward to hearing about packages.'}\n\n` +
      `Thank you!`
    );

    const waUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`;
    setWhatsappShareUrl(waUrl);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-[#050b14] border-t border-[#00e5ff]/20 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts & Conversion */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>CHECK AVAILABILITY & DIRECT BOOKING</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight mb-5 [text-wrap:balance]">
                CHECK AVAILABILITY <br />
                <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                  & BOOK YOUR DATE
                </span>.
              </h2>

              <p className="text-sm text-[#cbd5e1] font-light leading-relaxed mb-8">
                Auspicious wedding dates across Uttar Pradesh fill up months in advance. Select your event date below to check availability or connect directly with our senior studio team on WhatsApp or phone.
              </p>

              {/* Contact Channels */}
              <div className="space-y-3.5">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="p-4 bg-[#091526] border border-[#1e293b] hover:border-[#00e5ff] rounded-xs flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xs bg-[#050b14] border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#94a3b8]">Call Studio Direct</div>
                      <div className="font-display text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                        {STUDIO_INFO.phoneFormatted}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Chandralok Studio, I want to inquire regarding wedding photography & filmmaking in Sirsaganj.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#091526] border border-[#1e293b] hover:border-[#25D366] rounded-xs flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xs bg-[#050b14] border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#94a3b8]">Instant WhatsApp</div>
                      <div className="font-display text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                        Chat on WhatsApp
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#25D366] font-bold">ONLINE</span>
                </a>

                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#091526] border border-[#1e293b] hover:border-[#ff6b00] rounded-xs flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xs bg-[#050b14] border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#94a3b8]">Instagram Official</div>
                      <div className="font-display text-base font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                        {STUDIO_INFO.instagramHandle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#ff6b00] transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1e293b] text-xs text-[#94a3b8] flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#00e5ff] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Studio Address:</strong> Etawah Road, Near Punjab National Bank, Sirsaganj, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Right Column: Premium Enquiry Form in Transparent Glassy Container */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  CHECK DATE AVAILABILITY
                </h3>
                <span className="text-[10px] font-mono text-[#00e5ff] bg-[#00e5ff]/15 px-3 py-1 rounded-full border border-[#00e5ff]/30">
                  FINAL SECTION
                </span>
              </div>
              <p className="text-xs text-[#cbd5e1] font-light mb-6">
                Tell us about your wedding date or celebration. We reply within a few hours with instant date availability and comprehensive package details.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-16 h-16 text-[#00e5ff]" />
                  <div>
                    <h4 className="font-display text-2xl font-bold uppercase text-white mb-1">
                      ENQUIRY RECEIVED
                    </h4>
                    <p className="text-xs text-[#cbd5e1] max-w-md font-light leading-relaxed">
                      Thank you, {formData.name}. We have noted your request for {formData.eventType}.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3 w-full justify-center">
                    <a
                      href={whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#050b14] bg-[#25D366] hover:bg-[#20ba5a] transition-colors rounded-full flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Directly to WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#cbd5e1] border border-white/20 hover:text-white transition-colors rounded-full bg-white/[0.03]"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditya Sharma"
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9997648550"
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl"
                      >
                        <option value="Wedding">Wedding (Photo + Film)</option>
                        <option value="Pre-Wedding">Pre-Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Birthday/Event">Birthday/Event</option>
                        <option value="Portrait">Portrait</option>
                        <option value="Videography">Videography</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Sirsaganj, Etawah, Agra, or Firozabad"
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#00e5ff] mb-1 font-bold">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share estimated guest count, specific requirements or ritual dates..."
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 text-sm text-white focus:border-[#00e5ff] focus:outline-none rounded-xl resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-widest text-[#050b14] bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#ffb703] hover:from-[#ff6b00] hover:to-[#ffb703] hover:text-white transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Date Enquiry & Check Availability</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
