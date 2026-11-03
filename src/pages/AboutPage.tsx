import React from 'react';
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  Camera,
  Film,
  MapPin,
  Clock,
  Phone,
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { STUDIO_INFO, BRAND_CAMERAS } from '../data/studioData';
import { ProgressiveImage } from '../components/ProgressiveImage';
import { useAppRouter } from '../context/RouterContext';
import { useTheme } from '../context/ThemeContext';
import { getImageUrl } from '../utils/assetImages';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useAppRouter();
  const { isDark } = useTheme();

  const equipmentTableImage = getImageUrl('wedding_equipment_table_flashes_1792253412864.jpg');

  const studioPrinciples = [
    {
      number: '01',
      title: 'Unscripted Emotional Truth',
      desc: 'We never pause a sacred Vedic ritual or demand artificial smiles. The most tear-inducing, treasured moments occur naturally in between the planned sequences.',
    },
    {
      number: '02',
      title: 'Calibrated Skin Tone Science',
      desc: 'We reject plastic smoothing filters and harsh cold color grading. Our custom color science honors rich crimson lehengas, pure marigold yellows, and warm Indian skin tones.',
    },
    {
      number: '03',
      title: 'Centuries-Old Archival Heirloom',
      desc: 'Digital drives can fail. We handcraft physical coffee table albums with Italian leather covers, micro-embossing, and museum-grade cotton rag paper meant to outlive generations.',
    },
  ];

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-12 max-w-[1560px] mx-auto">
      {/* 01. Editorial Header */}
      <header className="mb-14 sm:mb-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] text-xs font-mono uppercase tracking-[0.2em] mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>Estd. 1981 · Sirsaganj, Uttar Pradesh</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-balance leading-tight mb-4">
          Four Decades of Light, <br className="hidden sm:block" />
          <span className="italic text-[#C5A880]">Heritage & Cinematic Mastery</span>
        </h1>

        <p className="text-sm sm:text-base text-[#A3ABA1] max-w-2xl mx-auto leading-relaxed">
          From the mechanical shutters and manual darkroom enlargers of 1981 to modern 4K anamorphic cinema rigs, Chandralok Studio has stood as Sirsaganj&apos;s foremost landmark for family trust and royal celebration photography.
        </p>

        {/* Milestone Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
          <div>
            <p className="text-3xl font-serif text-[#C5A880]">1981</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Year Established</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-[#C5A880]">1,200+</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Royal Weddings</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-[#C5A880]">3rd Gen</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">Families Served</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-[#C5A880]">100%</p>
            <p className="text-xs uppercase tracking-wider text-[#A3ABA1]">In-House Craft</p>
          </div>
        </div>
      </header>

      {/* 02. The Heritage Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
        <div className="lg:col-span-6 relative">
          <div
            className={`rounded-3xl overflow-hidden border shadow-2xl ${
              isDark ? 'bg-[#161917] border-white/10' : 'bg-white border-[#2C3528]/15'
            }`}
          >
            <ProgressiveImage
              src={equipmentTableImage}
              alt="Table full of wedding shoot equipment with two flash lights placed behind - Chandralok Studio"
              aspectRatio="4/3"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center"
            />
            <div className="p-5 bg-black/85 border-t border-white/10 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                  Sirsaganj Landmark Studio Fleet
                </p>
                <p className="text-sm font-serif">Etawah Road, Near Punjab National Bank</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono">
                Active Fleet
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
            The Origin & Chronicle
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif leading-snug">
            Built on Handshakes, Reverence & Generational Trust
          </h2>
          <p className="text-xs sm:text-sm text-[#A3ABA1] leading-relaxed">
            When Chandralok Photo Studio opened its doors in Sirsaganj in 1981, photography was an act of sacred permanence. Every roll of black-and-white and color film was counted with precision, and each family portrait was crafted to hang proudly in living rooms for half a century.
          </p>
          <p className="text-xs sm:text-sm text-[#A3ABA1] leading-relaxed">
            Over the following forty years, as wedding celebrations expanded from courtyard gatherings to majestic palace galas with thousands of guests, our dedication never wavered. We upgraded to medium-format cameras, dual-base ISO cinema sensors, and cinematic aerial drone fleets, while keeping the humble soul of Sirsaganj hospitality at our core.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F7F7F2]/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Full In-House Editorial Lab</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Calibrated 4K Color Grading Suites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Dual Backup Sensor Redundancy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Zero Artificial Posing Philosophy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Craft Philosophy & Artistic Principles */}
      <section className="mb-20 sm:mb-28">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
            Our North Star
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif mt-1">
            Three Pillars of Chandralok Artistry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studioPrinciples.map((item) => (
            <div
              key={item.number}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
              }`}
            >
              <span className="font-heading text-3xl font-light text-[#C5A880] block mb-3">
                {item.number}
              </span>
              <h3 className="font-heading text-xl font-medium mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A3ABA1] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Dedicated Studio Equipment Fleet Showcase */}
      <section className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
              Optical Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif mt-1">
              Master Equipment Fleet
            </h2>
          </div>
          <span className="text-xs text-[#A3ABA1] font-mono">
            Calibrated for Low-Light Mandaps & 4K Cinema
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880]">
                Cinema Line
              </span>
              <Film className="w-4 h-4 text-[#C5A880]" />
            </div>
            <h3 className="font-heading text-lg font-medium mb-1">Sony FX3 Cinema</h3>
            <p className="text-xs text-[#A3ABA1] mb-3">
              Dual Base ISO (800 / 12,800), S-Cinetone skin science, 4K 120fps recording for slow-motion varmala joy.
            </p>
            <span className="text-[10px] font-mono text-[#F7F7F2]/80 bg-black/40 px-2 py-0.5 rounded border border-white/10">
              Primary Cinema Cam
            </span>
          </div>

          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880]">
                Fine-Art Stills
              </span>
              <Camera className="w-4 h-4 text-[#C5A880]" />
            </div>
            <h3 className="font-heading text-lg font-medium mb-1">Canon EOS R5</h3>
            <p className="text-xs text-[#A3ABA1] mb-3">
              45-Megapixel Full-Frame sensor paired with RF 85mm f/1.2L glass for ultra-sharp bridal lehenga embroidery.
            </p>
            <span className="text-[10px] font-mono text-[#F7F7F2]/80 bg-black/40 px-2 py-0.5 rounded border border-white/10">
              Bridal & Mandap Optics
            </span>
          </div>

          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880]">
                High-Speed Candid
              </span>
              <Sliders className="w-4 h-4 text-[#C5A880]" />
            </div>
            <h3 className="font-heading text-lg font-medium mb-1">Nikon Z8 Flagship</h3>
            <p className="text-xs text-[#A3ABA1] mb-3">
              Real-time deep learning subject autofocus locking instantaneously onto bride and groom eyes through ritual smoke.
            </p>
            <span className="text-[10px] font-mono text-[#F7F7F2]/80 bg-black/40 px-2 py-0.5 rounded border border-white/10">
              8.3K RAW Capable
            </span>
          </div>

          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880]">
                Master Lighting
              </span>
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
            </div>
            <h3 className="font-heading text-lg font-medium mb-1">Dual Strobe Flash Fleet</h3>
            <p className="text-xs text-[#A3ABA1] mb-3">
              Studio parabolic octas, high-speed sync off-camera transmitters, and rim light strips illuminating grand banquets.
            </p>
            <span className="text-[10px] font-mono text-[#F7F7F2]/80 bg-black/40 px-2 py-0.5 rounded border border-white/10">
              Controlled Ambiance
            </span>
          </div>
        </div>
      </section>

      {/* 05. Physical Studio Landmark & Location Details */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
        <div
          className={`lg:col-span-8 p-6 sm:p-10 rounded-3xl border ${
            isDark ? 'bg-[#141715] border-white/10' : 'bg-white border-[#2C3528]/15 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl">Studio Landmark</h3>
              <p className="text-xs text-[#A3ABA1] font-hindi">{STUDIO_INFO.hindiName}</p>
            </div>
          </div>

          <p className="text-sm text-[#F7F7F2]/90 leading-relaxed mb-6">
            Located conveniently on Etawah Road near Punjab National Bank in Sirsaganj. We welcome families for private album viewing sessions, sample film screenings, and ceremony schedule consultations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A3ABA1] pt-4 border-t border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <span>Visiting Hours: 10:00 AM – 8:30 PM (Daily)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Studio Desk: {STUDIO_INFO.phoneFormatted}</span>
            </div>
          </div>

          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C5A880] text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Open Directions in Google Maps</span>
          </a>
        </div>

        <div
          className={`lg:col-span-4 p-8 rounded-3xl border text-center flex flex-col justify-between h-full ${
            isDark ? 'bg-[#181C19] border-white/10' : 'bg-[#EAEAE2] border-[#2C3528]/15'
          }`}
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-2">
              Next Step
            </span>
            <h3 className="font-serif text-2xl mb-3">Planning a Wedding?</h3>
            <p className="text-xs text-[#A3ABA1] leading-relaxed mb-6">
              Check if your wedding date is still open in our calendar or start an instant inquiry on WhatsApp.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigateTo('booking')}
              className="w-full py-3.5 rounded-full bg-[#C5A880] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#B3956D] transition-all cursor-pointer shadow-md shadow-[#C5A880]/20 flex items-center justify-center gap-2"
            >
              <span>Check Date Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('gallery')}
              className="w-full py-3 rounded-full border border-white/20 hover:border-[#C5A880] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore Master Gallery</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
