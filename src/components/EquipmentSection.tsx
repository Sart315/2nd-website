import React, { useState, useEffect } from 'react';
import { Camera, CheckCircle2, ChevronRight, X, ChevronLeft, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { EQUIPMENT_BENCHMARKS, EquipmentItem } from '../data/studioData';
import { handleImageFallback } from '../utils/assetImages';

export const EquipmentSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const [activeBrandTab, setActiveBrandTab] = useState<'ALL' | 'SONY' | 'CANON' | 'NIKON' | 'FUJIFILM' | 'DJI' | 'LIGHTING'>('ALL');

  const brandFilters = [
    { key: 'ALL', label: 'All Equipment', count: EQUIPMENT_BENCHMARKS.length },
    { key: 'SONY', label: 'Sony Cinema', count: 2 },
    { key: 'CANON', label: 'Canon EOS', count: 2 },
    { key: 'NIKON', label: 'Nikon Z', count: 1 },
    { key: 'FUJIFILM', label: 'Fujifilm GFX', count: 2 },
    { key: 'DJI', label: 'DJI Aerial', count: 1 },
    { key: 'LIGHTING', label: 'Studio Lighting', count: 1 },
  ];

  const filteredItems = EQUIPMENT_BENCHMARKS.filter((item) => {
    if (activeBrandTab === 'ALL') return true;
    if (activeBrandTab === 'SONY') return item.brand.toLowerCase().includes('sony');
    if (activeBrandTab === 'CANON') return item.brand.toLowerCase().includes('canon');
    if (activeBrandTab === 'NIKON') return item.brand.toLowerCase().includes('nikon');
    if (activeBrandTab === 'FUJIFILM') return item.brand.toLowerCase().includes('fujifilm');
    if (activeBrandTab === 'DJI') return item.brand.toLowerCase().includes('dji');
    if (activeBrandTab === 'LIGHTING') {
      return (
        item.category.includes('LIGHTING') ||
        item.brand.toLowerCase().includes('profoto') ||
        item.brand.toLowerCase().includes('godox')
      );
    }
    return true;
  });

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  const navigateModal = (direction: number) => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const scrollToBookingWithEquipment = (gearName: string) => {
    setSelectedItem(null);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="equipment" className="py-24 sm:py-32 bg-[#EFEFE8] dark:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-[#D8D8CF] dark:border-[#2E3729]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-2 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Master Production Fleet · Click For Inspection Popup</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[#3B4436] dark:text-[#EFEFE8] uppercase tracking-tight">
              Cameras & Cinema Gear <br />
              <span className="text-[#B08D57]">
                Behind The Master Frame
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-sm text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
              Every system is purpose-calibrated for royal weddings across Uttar Pradesh. Click any body, cine lens, or aerial rig to view detailed sensor calibrations and master production notes.
            </p>
          </div>
        </div>

        {/* Minimalist Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {brandFilters.map((tab) => {
            const isActive = activeBrandTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveBrandTab(tab.key as any)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-bold transition-colors duration-150 rounded-full flex items-center gap-2 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-[#B08D57] text-white border-[#B08D57] shadow-xs'
                    : 'bg-white dark:bg-[#20251E] border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] hover:border-[#B08D57] hover:text-[#B08D57]'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-70">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Clean Minimalist Equipment Grid (Click opens Popup View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] hover:border-[#B08D57] transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Image Container with Visual Hover Affordance */}
              {item.image ? (
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#2C3328]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    onError={handleImageFallback}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  {/* Brand Tag Top Left */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold tracking-wider uppercase bg-black/85 text-[#EFEFE8] px-2.5 py-1 rounded-sm border border-white/10">
                      {item.brand.split('/')[0]}
                    </span>
                  </div>

                  {/* Quick Inspect Button Overlay */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase bg-[#B08D57] text-white px-3 py-1.5 rounded-full shadow-sm">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Gear</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 bg-[#F7F7F2] dark:bg-[#232A20] flex items-center justify-center text-[#5C6755]">
                  <Camera className="w-10 h-10 text-[#B08D57]" />
                </div>
              )}

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] mb-1.5">
                    {item.type}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-normal text-[#3B4436] dark:text-[#EFEFE8] group-hover:text-[#B08D57] transition-colors leading-snug mb-2">
                    {item.name}
                  </h3>

                  <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] line-clamp-2 leading-relaxed mb-4">
                    {item.purpose}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4E4DC] dark:border-[#272F23] flex items-center justify-between text-xs font-medium text-[#3B4436] dark:text-[#EFEFE8]">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#B08D57] flex items-center gap-1">
                    <span>View Specifications & Calibration</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#B08D57] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Brand Strategic Deployment Strip (Clean Minimalist Asymmetric Layout) */}
        <div className="p-8 sm:p-10 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-3xl shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#D8D8CF] dark:border-[#2E3729] gap-4">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] block mb-1">
                Multi-Brand Production Strategy
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8]">
                How We Deploy Each Camera System In Indian Weddings
              </h3>
            </div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#3B4436] dark:text-[#EFEFE8] bg-[#EFEFE8] dark:bg-[#181C16] px-3.5 py-1.5 rounded-full border border-[#D8D8CF] dark:border-[#2E3729]">
              Sony · Canon · Nikon · Fujifilm · DJI
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="p-5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B4436] dark:text-[#EFEFE8]">Sony Cinema</span>
                <span className="text-[10px] font-mono font-medium text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded">FX3 / A7S III</span>
              </div>
              <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                Deployed for dimly-lit midnight pheras, high-tempo baraats, and 120fps slow-motion film moments with lightning autofocus.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B4436] dark:text-[#EFEFE8]">Canon EOS</span>
                <span className="text-[10px] font-mono font-medium text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded">C70 / R5</span>
              </div>
              <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                Celebrated for rich, natural Indian skin complexions, golden zardozi embroidery separation, and crimson bridal silks.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B4436] dark:text-[#EFEFE8]">Nikon Flagship</span>
                <span className="text-[10px] font-mono font-medium text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded">Z8 45.7MP</span>
              </div>
              <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                Extreme micro-contrast and resolution for cultural Vedic ritual details, sacred havan smoke, and heirloom family portraits.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F2] dark:bg-[#181C16] border border-[#D8D8CF] dark:border-[#2E3729] rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B4436] dark:text-[#EFEFE8]">Fujifilm GFX</span>
                <span className="text-[10px] font-mono font-medium text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded">102MP Medium</span>
              </div>
              <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                Fine-art medium-format depth-of-field, organic film simulation grain, and magazine-cover bridal & groom portraits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HIGH-END EQUIPMENT CALIBRATION POPUP / LIGHTBOX INSPECTION MODAL */}
      {/* ========================================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#EFEFE8] dark:bg-[#1C211A] text-[#3B4436] dark:text-[#EFEFE8] border border-[#D8D8CF] dark:border-[#2E3729] rounded-3xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="px-6 py-4 border-b border-[#D8D8CF] dark:border-[#2E3729] flex items-center justify-between bg-white dark:bg-[#20251E]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57]">
                  {selectedItem.brand}
                </span>
                <span className="text-stone-300 dark:text-stone-700">·</span>
                <span className="text-xs font-medium text-[#5C6755] dark:text-[#A3AFA0]">
                  {selectedItem.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Prev & Next Navigation Buttons inside Popup */}
                <button
                  onClick={() => navigateModal(-1)}
                  className="p-1.5 rounded-full hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors cursor-pointer"
                  title="Previous Equipment (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateModal(1)}
                  className="p-1.5 rounded-full hover:bg-[#EFEFE8] dark:hover:bg-[#181C16] text-[#3B4436] dark:text-[#EFEFE8] transition-colors cursor-pointer"
                  title="Next Equipment (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="h-4 w-px bg-[#D8D8CF] dark:bg-[#2E3729] mx-1" />
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full bg-[#EFEFE8] dark:bg-[#181C16] hover:bg-[#B08D57] hover:text-white text-[#3B4436] dark:text-[#EFEFE8] transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split 2-Column Inspection View */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Large Image & Model Badge */}
              <div className="md:col-span-6 space-y-4">
                {selectedItem.image ? (
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#2C3328] border border-[#D8D8CF] dark:border-[#2E3729] shadow-inner">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      referrerPolicy="no-referrer"
                      onError={handleImageFallback}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs font-mono font-medium text-white truncate bg-black/75 px-3 py-1.5 rounded-md border border-white/10">
                      {selectedItem.model}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 rounded-2xl bg-white dark:bg-[#232A20] border border-[#D8D8CF] dark:border-[#2E3729] flex items-center justify-center text-[#5C6755]">
                    <Camera className="w-16 h-16 text-[#B08D57]" />
                  </div>
                )}

                <div className="p-3 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-xl flex items-center gap-3 text-xs text-[#5C6755] dark:text-[#A3AFA0]">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Maintained in studio cleanroom with factory lens calibration before every event.</span>
                </div>
              </div>

              {/* Right Column: In-Depth Specifications & Director Rationale */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-[#B08D57] mb-1">
                    {selectedItem.type}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#3B4436] dark:text-[#EFEFE8] leading-tight mb-3">
                    {selectedItem.name}
                  </h3>

                  {/* Technical Calibration Specifications Box */}
                  <div className="p-4 bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] rounded-xl mb-4">
                    <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B08D57] mb-1.5">
                      Technical Calibrations:
                    </div>
                    <p className="font-body text-xs font-mono text-[#3B4436] dark:text-[#EFEFE8] leading-relaxed">
                      {selectedItem.specs}
                    </p>
                  </div>

                  {/* Why We Choose This */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#3B4436] dark:text-[#EFEFE8]">
                      Why Chandralok Studio Chooses This:
                    </div>
                    <p className="font-body text-xs text-[#5C6755] dark:text-[#A3AFA0] leading-relaxed">
                      {selectedItem.purpose}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#D8D8CF] dark:border-[#2E3729]">
                    <div className="flex items-center gap-2 text-xs text-[#3B4436] dark:text-[#EFEFE8]">
                      <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <span>Calibrated for Royal Weddings & 4K Cinema Master</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3B4436] dark:text-[#EFEFE8]">
                      <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                      <span>Paired with Master High-Speed Prime Optics</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-4 border-t border-[#D8D8CF] dark:border-[#2E3729] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => scrollToBookingWithEquipment(selectedItem.name)}
                    className="flex-1 px-5 py-3 text-xs font-semibold tracking-widest uppercase text-white bg-[#B08D57] hover:bg-[#9c7b49] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Book With This Gear Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] border border-[#D8D8CF] dark:border-[#2E3729] hover:bg-white dark:hover:bg-[#20251E] rounded-full transition-colors cursor-pointer"
                  >
                    Back to Fleet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
