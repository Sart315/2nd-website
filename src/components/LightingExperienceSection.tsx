import React, { useState } from 'react';
import { Sun, Sparkles, Sliders, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { LIGHTING_COMPARISONS } from '../data/studioData';

export const LightingExperienceSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <section className="py-24 bg-[#050b14] border-t border-[#00e5ff]/20 relative overflow-hidden film-grain">
      {/* Studio Light Beam Simulation */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-gradient-to-b from-[#00e5ff]/15 via-[#ff6b00]/10 to-transparent blur-[140px] rounded-full animate-studio-beam"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#ff6b00] mb-3 font-semibold">
              <Sun className="w-3.5 h-3.5" />
              <span>THE ART OF STUDIO LIGHT</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              LIGHT CHANGES <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#ffb703] to-[#ff6b00] bg-clip-text text-transparent">
                EVERYTHING
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
              Why does Chandralok Studio photography look different? Because we don't rely on unflattering banquet lights. We sculpt the atmosphere using softboxes, off-camera flashes, and golden rim lights.
            </p>
          </div>
        </div>

        {/* Before / After Concept: 3 Interactive Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {LIGHTING_COMPARISONS.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.phase}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-xs border cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-[#0b172a] border-[#00e5ff] shadow-[0_0_30px_rgba(0,229,255,0.3)] -translate-y-1'
                    : 'bg-[#070e1c] border-[#1e293b] hover:border-[#ff6b00]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-mono font-bold tracking-wider"
                    style={{ color: stage.color }}
                  >
                    {stage.phase}
                  </span>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-xs border ${
                    isSelected ? 'bg-[#00e5ff]/20 text-[#00e5ff] border-[#00e5ff]/40' : 'text-[#94a3b8] border-white/10'
                  }`}>
                    {isSelected ? 'ACTIVE VIEW' : 'CLICK'}
                  </span>
                </div>

                <div className="text-sm font-display font-bold text-white mb-2">
                  {stage.tag}
                </div>

                <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
                  {stage.effect}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Lighting Simulation Stage */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#070f1e] border-2 border-[#00e5ff]/40 rounded-xs overflow-hidden shadow-2xl group">
          <img
            src="/src/assets/images/royal_bridal_portrait_1791898990033.jpg"
            alt="Lighting comparison portrait"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-700 ${
              activeStage === 0
                ? 'brightness-75 contrast-75 saturate-75 filter grayscale-[30%]'
                : activeStage === 1
                ? 'brightness-95 contrast-105 saturate-95'
                : 'brightness-105 contrast-110 saturate-110 shadow-2xl'
            }`}
          />

          {/* Light Modifier Rays Simulation */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              activeStage === 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ffb703]/25 via-[#ff6b00]/10 to-transparent" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#00e5ff]/20 to-transparent" />
          </div>

          {/* Overlay Info Plaque */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="bg-[#050b14]/85 backdrop-blur-md p-4 border border-[#00e5ff]/40 rounded-xs max-w-lg">
              <div className="text-[10px] tracking-widest text-[#00e5ff] uppercase font-mono font-bold">
                LIGHTING CONFIGURATION // STAGE 0{activeStage + 1}
              </div>
              <div className="font-display text-xl font-bold mt-0.5">
                {LIGHTING_COMPARISONS[activeStage].phase}
              </div>
              <p className="text-xs text-[#cbd5e1] mt-1 font-light">
                {LIGHTING_COMPARISONS[activeStage].effect}
              </p>
            </div>

            <div className="bg-[#050b14]/85 backdrop-blur-md px-4 py-3 border border-[#ff6b00]/40 rounded-xs text-xs font-mono text-[#ffb703] flex items-center gap-3">
              <Zap className="w-4 h-4 text-[#ff6b00]" />
              <span>Studio Flash: 1/8000s HSS Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
