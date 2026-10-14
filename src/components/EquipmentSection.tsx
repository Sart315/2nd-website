import React, { useState } from 'react';
import { Camera, Disc, Zap, Sun, Monitor, Mic, Layers, Send, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Sliders, ExternalLink } from 'lucide-react';
import { EQUIPMENT_BENCHMARKS, BRAND_CAMERAS, EquipmentItem } from '../data/studioData';
import { handleImageFallback } from '../utils/assetImages';

export const EquipmentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<EquipmentItem>(EQUIPMENT_BENCHMARKS[0]);
  const [activeBrandTab, setActiveBrandTab] = useState<'ALL' | 'SONY' | 'CANON' | 'FUJIFILM' | 'DJI' | 'LIGHTING'>('ALL');

  const brandFilters = [
    { key: 'ALL', label: 'All Studio Gear', count: EQUIPMENT_BENCHMARKS.length },
    { key: 'SONY', label: 'Sony Cinema', count: 2, accent: '#00e5ff' },
    { key: 'CANON', label: 'Canon Cinema & RF', count: 2, accent: '#ff6b00' },
    { key: 'FUJIFILM', label: 'Fujifilm Large-Format', count: 2, accent: '#ffb703' },
    { key: 'DJI', label: 'DJI Aerial & Gimbals', count: 2, accent: '#38bdf8' },
    { key: 'LIGHTING', label: 'Studio Lighting & C-Stands', count: 2, accent: '#f59e0b' },
  ];

  const filteredItems = EQUIPMENT_BENCHMARKS.filter((item) => {
    if (activeBrandTab === 'ALL') return true;
    if (activeBrandTab === 'SONY') return item.brand.toLowerCase().includes('sony');
    if (activeBrandTab === 'CANON') return item.brand.toLowerCase().includes('canon');
    if (activeBrandTab === 'FUJIFILM') return item.brand.toLowerCase().includes('fujifilm');
    if (activeBrandTab === 'DJI') return item.brand.toLowerCase().includes('dji');
    if (activeBrandTab === 'LIGHTING') return item.category.includes('LIGHTING') || item.brand.toLowerCase().includes('profoto') || item.brand.toLowerCase().includes('godox');
    return true;
  });

  return (
    <section id="equipment" className="py-24 bg-[#070e1b] border-t border-[#00e5ff]/20 relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>BEHIND THE FRAME // THE PRODUCTION ARSENAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              Cameras & Cinema Gear <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                Behind The Master Frame
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
              Equipped with flagship multi-brand cinema bodies from <span className="text-[#00e5ff] font-semibold">Sony Cinema Line</span>, <span className="text-[#ff6b00] font-semibold">Canon EOS & RF Primes</span>, <span className="text-[#ffb703] font-semibold">Fujifilm Large-Format</span>, <span className="text-[#38bdf8] font-semibold">DJI Inspire Drones</span>, and <span className="text-[#f59e0b] font-semibold">Profoto C-Stand Lighting</span>.
            </p>
          </div>
        </div>

        {/* Brand Switcher Bar with Curved Glassy Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {brandFilters.map((tab) => {
            const isActive = activeBrandTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveBrandTab(tab.key as any);
                  const firstMatch = EQUIPMENT_BENCHMARKS.find((i) => {
                    if (tab.key === 'ALL') return true;
                    if (tab.key === 'SONY') return i.brand.toLowerCase().includes('sony');
                    if (tab.key === 'CANON') return i.brand.toLowerCase().includes('canon');
                    if (tab.key === 'FUJIFILM') return i.brand.toLowerCase().includes('fujifilm');
                    if (tab.key === 'DJI') return i.brand.toLowerCase().includes('dji');
                    if (tab.key === 'LIGHTING') return i.category.includes('LIGHTING') || i.brand.toLowerCase().includes('profoto');
                    return true;
                  });
                  if (firstMatch) setSelectedItem(firstMatch);
                }}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-full flex items-center gap-2 border cursor-pointer shrink-0 backdrop-blur-md ${
                  isActive
                    ? 'bg-white/15 border-white/40 text-white shadow-[0_0_20px_rgba(0,229,255,0.35)] font-bold'
                    : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tab.accent || '#00e5ff' }}
                />
                <span className="font-bold">{tab.label}</span>
                <span className="text-[10px] opacity-60">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Left Spotlight Detail + Right Photographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive High-Resolution Spotlight Detail in Glassy Container */}
          <div className="lg:col-span-5 p-6 sm:p-7 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl relative sticky top-24">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#ffb703] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
                {selectedItem.brand} // BENCHMARK
              </span>
              <span className="text-[10px] font-mono text-[#00e5ff] bg-[#00e5ff]/15 px-3 py-1 rounded-full border border-[#00e5ff]/30">
                {selectedItem.category}
              </span>
            </div>

            {/* Real Photographic Picture of Selected Gear */}
            {selectedItem.image ? (
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-5 border border-white/10 group bg-[#050b14]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  referrerPolicy="no-referrer"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute top-3 left-3 bg-black/75 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#00e5ff] border border-white/10 backdrop-blur-xs">
                  REAL STUDIO ASSET
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white/90 truncate bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  {selectedItem.model}
                </div>
              </div>
            ) : (
              <div className="w-full h-44 rounded-xl bg-white/[0.02] border border-[#00e5ff]/40 flex flex-col items-center justify-center text-[#00e5ff] mb-5 shadow-lg">
                <Camera className="w-12 h-12 mb-2 text-[#00e5ff]" />
                <span className="text-xs font-mono text-[#94a3b8]">{selectedItem.type}</span>
              </div>
            )}

            <div className="text-xs uppercase tracking-wider text-[#ff6b00] font-semibold">
              {selectedItem.type}
            </div>

            <h3 className="font-display text-2xl font-bold uppercase text-white mt-1 mb-2 leading-snug">
              {selectedItem.name}
            </h3>

            {/* Specs Strip */}
            <div className="text-xs font-mono text-[#ffb703] mb-4 bg-black/40 p-3.5 rounded-xl border border-white/10 leading-relaxed">
              <span className="text-[#00e5ff] block text-[10px] uppercase font-bold mb-1">PRO SPECIFICATIONS:</span>
              {selectedItem.specs}
            </div>

            <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
              <div>
                <span className="text-[#00e5ff] font-bold uppercase tracking-wider block mb-1">
                  Why Chandralok Studio Chooses This:
                </span>
                <p className="text-[#cbd5e1] font-light leading-relaxed">
                  {selectedItem.purpose}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#94a3b8] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Calibrated for Royal Weddings & 4K Cinema Master</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photographic Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isSelected = selectedItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden flex flex-col justify-between group backdrop-blur-lg ${
                    isSelected
                      ? 'bg-white/15 border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.25)] ring-1 ring-[#00e5ff]'
                      : 'bg-white/[0.03] border-white/10 hover:border-[#ff6b00]'
                  }`}
                >
                  {/* Card Thumbnail Image */}
                  {item.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050b14]">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        onError={handleImageFallback}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 px-2.5 py-0.5 rounded-full border border-white/10 text-[#ffb703]">
                          {item.brand.split('/')[0]}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[9px] font-mono uppercase bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40 px-2.5 py-0.5 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#ff6b00] font-semibold uppercase mb-1">
                        {item.type}
                      </div>

                      <h4 className="font-display text-base font-bold text-white mb-2 leading-snug group-hover:text-[#00e5ff] transition-colors">
                        {item.name}
                      </h4>

                      <p className="text-[11px] text-[#94a3b8] line-clamp-2 leading-relaxed mb-3">
                        {item.purpose}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#00e5ff] group-hover:underline flex items-center gap-1">
                        VIEW CAMERA SPEC
                      </span>
                      <span className="text-[#ffb703] group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Comparison Matrix: Canon vs Sony vs Fujifilm in Glassmorphic UI */}
        <div className="p-6 sm:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00e5ff] font-bold block mb-1">
                MULTI-BRAND ARSENAL COMPARISON
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                How We Deploy Each Brand in Indian Weddings
              </h3>
            </div>
            <div className="text-xs font-mono text-[#cbd5e1] bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
              SONY · CANON · FUJIFILM · DJI
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Sony Cinema Card */}
            <div className="p-5 bg-white/[0.02] backdrop-blur-md border border-[#00e5ff]/30 rounded-2xl hover:border-[#00e5ff] transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#00e5ff] uppercase font-mono">01. SONY CINEMA</span>
                <span className="text-[10px] font-mono bg-[#00e5ff]/15 text-[#00e5ff] px-2.5 py-0.5 rounded-full border border-[#00e5ff]/30">FX3 / A7S III</span>
              </div>
              <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-3">
                <strong className="text-white block font-medium mb-1">Specialty: Dim-Light & S-Cinetone Motion</strong>
                Deployed for candlelit night pheras, fast-moving baraat processions, and high-frame-rate 120fps slow-motion film moments with zero autofocus hunting.
              </p>
              <div className="text-[10px] font-mono text-[#94a3b8] pt-2 border-t border-white/10">
                Lenses: Sony G-Master 35mm & 50mm f/1.2 primes
              </div>
            </div>

            {/* Canon Cinema Card */}
            <div className="p-5 bg-white/[0.02] backdrop-blur-md border border-[#ff6b00]/30 rounded-2xl hover:border-[#ff6b00] transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#ff6b00] uppercase font-mono">02. CANON CINEMA</span>
                <span className="text-[10px] font-mono bg-[#ff6b00]/15 text-[#ff6b00] px-2.5 py-0.5 rounded-full border border-[#ff6b00]/30">EOS R5 & C-Series</span>
              </div>
              <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-3">
                <strong className="text-white block font-medium mb-1">Specialty: Warm Skin Tones & Bridal Silks</strong>
                Legendary Canon color science faithfully renders rich bridal zardozi embroidery, red lehengas, and radiant natural Indian skin complexions.
              </p>
              <div className="text-[10px] font-mono text-[#94a3b8] pt-2 border-t border-white/10">
                Lenses: Canon RF 85mm f/1.2L & RF 28-70mm f/2L
              </div>
            </div>

            {/* Fujifilm Large-Format Card */}
            <div className="p-5 bg-white/[0.02] backdrop-blur-md border border-[#ffb703]/30 rounded-2xl hover:border-[#ffb703] transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#ffb703] uppercase font-mono">03. FUJIFILM SYSTEM</span>
                <span className="text-[10px] font-mono bg-[#ffb703]/15 text-[#ffb703] px-2.5 py-0.5 rounded-full border border-[#ffb703]/30">GFX 100 II & X-T5</span>
              </div>
              <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-3">
                <strong className="text-white block font-medium mb-1">Specialty: Medium-Format Dimensionality</strong>
                Used for editorial fine-art bridal portraits and archival prints with 102 megapixels of resolution and analog film simulations.
              </p>
              <div className="text-[10px] font-mono text-[#94a3b8] pt-2 border-t border-white/10">
                Color Profiles: Classic Chrome & Acros Monochrome
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
