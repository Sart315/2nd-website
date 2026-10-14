import React, { useState } from 'react';
import { Camera, Disc, Sun, Sliders, Monitor, Film, Layers, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { STUDIO_STORY_STEPS } from '../data/studioData';

export const StepIntoStudio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('softbox');

  const studioSetupNodes = [
    {
      id: 'camera-rig',
      name: 'Full-Frame Cinema Camera Rig',
      category: 'PRIMARY SENSOR',
      accent: '#00e5ff',
      details: 'Mounted on heavy-duty fluid head tripod with matte box and wireless video transmitter.',
      specs: '4K/6K 10-Bit 4:2:2 · Dual CFexpress Slots'
    },
    {
      id: 'softbox',
      name: 'Large Hexagonal Studio Softbox & C-Stand',
      category: 'KEY LIGHTING',
      accent: '#ff6b00',
      details: 'Diffused continuous warm key light mimicking golden-hour window sunlight for radiant skin tones.',
      specs: '120cm Octabox · 97+ High-CRI · 2700K-6500K'
    },
    {
      id: 'cine-lens',
      name: 'High-Speed T1.5 Cinema Prime Lens Collection',
      category: 'OPTICAL ARCHITECTURE',
      accent: '#ffb703',
      details: 'Custom cine primes offering razor-sharp iris separation, vintage flare control, and creamy bokeh.',
      specs: '35mm, 50mm, 85mm T1.5 Primes'
    },
    {
      id: 'field-monitor',
      name: 'High-Brightness Field Cinema Monitor',
      category: 'DIRECTOR MONITORING',
      accent: '#00e5ff',
      details: 'Calibrated color inspection screen for framing, focus peaking, and false-color exposure precision.',
      specs: '1000 Nits HDR · ProRes RAW Monitoring'
    },
    {
      id: 'off-camera-flash',
      name: 'High-Speed Sync Flashes & Wireless Transmitters',
      category: 'DYNAMIC STROBES',
      accent: '#ff6b00',
      details: '2.4GHz remote trigger strobes stationed on rim light stands to freeze energetic sangeet dance movements.',
      specs: '1/8000s HSS · Magnetic Modifiers'
    },
    {
      id: 'audio-redundancy',
      name: '32-Bit Float Wireless Audio & Dual Backup',
      category: 'ACOUSTIC CAPTURE',
      accent: '#ffb703',
      details: 'Clamping-free lavalier audio recording sacred wedding mantras and emotional vows with zero distortion.',
      specs: '32-Bit Float Internal Backup Recording'
    }
  ];

  return (
    <section id="studio-experience" className="py-24 bg-[#070e1c] border-t border-[#00e5ff]/20 relative overflow-hidden film-grain">
      {/* Studio Lighting Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-b from-[#ff6b00]/10 via-[#ffb703]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#00e5ff] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>STEP INTO THE STUDIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white leading-tight [text-wrap:balance]">
              Where Light <br />
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#ff6b00] bg-clip-text text-transparent">
                Meets Story
              </span>.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#cbd5e1] font-light leading-relaxed">
              Step behind the curtain of our Sirsaganj studio. A believable, calibrated workspace where professional camera bodies, studio softboxes, C-stands, cinema lenses, and directional audio gear unite to preserve your legacy.
            </p>
          </div>
        </div>

        {/* The 7-Step Creative Storytelling Concept Ribbon */}
        {/* CAMERA → LIGHT → FRAME → MOMENT → EMOTION → FILM → MEMORY */}
        <div className="mb-14 p-6 bg-[#0c182c] border border-[#00e5ff]/30 rounded-xs shadow-xl">
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#ffb703] font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>THE VISUAL GENEALOGY OF EVERY WEDDING SHOOT</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {STUDIO_STORY_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="p-3 bg-[#070f1d] border border-[#1e293b] hover:border-[#00e5ff] rounded-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#00e5ff] mb-1">
                    <span>0{idx + 1}</span>
                    <span className="text-[#ff6b00]">→</span>
                  </div>
                  <div className="font-display font-bold text-sm text-white tracking-wider">
                    {s.step}
                  </div>
                  <div className="text-[11px] text-[#ffb703] font-medium mt-0.5">
                    {s.label}
                  </div>
                </div>
                <div className="text-[10px] text-[#94a3b8] font-light mt-2 leading-tight">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Studio Setup Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Studio Equipment Hotspots */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">
              THE PHYSICAL PRODUCTION RIG
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {studioSetupNodes.map((node) => {
                const isSelected = activeItem === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveItem(node.id)}
                    className={`p-5 rounded-xs border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#0f223f] border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.25)] translate-x-1'
                        : 'bg-[#091526] border-[#1e293b] hover:border-[#ff6b00]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider font-bold"
                        style={{ color: node.accent }}
                      >
                        {node.category}
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">{isSelected ? 'ACTIVE' : 'SELECT'}</span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white mb-1.5">
                      {node.name}
                    </h3>

                    <p className="text-xs text-[#cbd5e1] font-light leading-relaxed mb-3">
                      {node.details}
                    </p>

                    <div className="text-[11px] font-mono text-[#ffb703] pt-2 border-t border-[#1e293b]">
                      {node.specs}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Physical Studio Setup Imagery Showcase */}
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#091526] border border-[#00e5ff]/30 rounded-xs shadow-2xl relative group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#050b14]">
                <img
                  src="/src/assets/images/cinematic_film_still_1791896403634.jpg"
                  alt="Chandralok Studio cinematic film craft"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-black/30" />

                {/* Live Node Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 bg-[#050b14]/80 backdrop-blur-md px-3 py-1.5 border border-[#00e5ff]/40 rounded-xs">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
                    <span className="font-mono text-[11px] text-[#00e5ff]">CALIBRATED STUDIO RIG</span>
                  </div>
                  <span className="font-hindi text-sm text-[#ffb703]">चन्द्रलोक स्टूडियो</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] tracking-widest text-[#ff6b00] uppercase font-bold">
                    SIRSAGANJ HEADQUARTERS
                  </div>
                  <div className="font-display text-xl font-bold mt-0.5">
                    Professional Filmmaking & Lighting Setup
                  </div>
                  <p className="text-xs text-[#cbd5e1] mt-1 font-light">
                    Every shoot is pre-lit with softboxes, checked on calibrated monitors, and tracked on dual memory slots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
