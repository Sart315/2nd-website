import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Film, Sparkles, Disc } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

interface FilmStripRollingAnimationProps {
  onOpenCinemaPreview: () => void;
}

interface FilmFrame {
  id: string;
  year: string;
  badge: string;
  title: string;
  camera: string;
  detail: string;
  image: string;
  accent: string;
  expNumber: string;
}

export const FilmStripRollingAnimation: React.FC<FilmStripRollingAnimationProps> = ({
  onOpenCinemaPreview,
}) => {
  const { reducedMotion } = useMotion();
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(true);

  const frames: FilmFrame[] = [
    {
      id: 'frame-1981',
      year: '1981',
      badge: 'THE ANALOG ORIGIN',
      title: 'Manual 35mm SLR & Darkroom',
      camera: 'Mechanical 35mm Shutter · Prime Glass',
      detail: 'Etawah Road Studio Origin · Silver Halide Chemistry',
      image: '/src/assets/images/hero_cinematic_couple_1791896401138.jpg',
      accent: '#ffb703',
      expNumber: 'EXP-1981',
    },
    {
      id: 'frame-1990s',
      year: '1990s',
      badge: 'ROYAL HERITAGE',
      title: 'Medium Format Wedding Vows',
      camera: '120mm Color Negative · Halogen Lighting',
      detail: 'Sacred Mandaps & Processions Across Uttar Pradesh',
      image: '/src/assets/images/wedding_story_varmala_1791896401614.jpg',
      accent: '#ff6b00',
      expNumber: 'EXP-1990',
    },
    {
      id: 'frame-2010s',
      year: '2010s',
      badge: 'DIGITAL REVOLUTION',
      title: 'Full-Frame Digital Sensors',
      camera: 'Canon EOS L-Series & High-Speed Primes',
      detail: 'Pioneering Candid Photojournalism & Softboxes',
      image: '/src/assets/images/royal_bridal_portrait_1791898990033.jpg',
      accent: '#00e5ff',
      expNumber: 'EXP-2010',
    },
    {
      id: 'frame-now',
      year: 'NOW',
      badge: '4K/8K CINEMA LINE',
      title: 'Master Cinema & Drone Fleet',
      camera: 'Sony FX3 · Canon Cine · Fujifilm GFX · DJI Drones',
      detail: '4K 120fps 10-Bit Log · 2.39:1 Anamorphic Color Science',
      image: '/src/assets/images/sony_a7s_cine_rig_1791960673477.jpg',
      accent: '#38bdf8',
      expNumber: 'EXP-2026',
    },
  ];

  // Auto-roll film strip
  useEffect(() => {
    if (!isRolling || reducedMotion) return;

    const timer = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isRolling, reducedMotion, frames.length]);

  const activeFrame = frames[currentFrameIndex];

  const handlePrev = () => {
    setCurrentFrameIndex((prev) => (prev === 0 ? frames.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
  };

  return (
    <div className="w-full max-w-lg lg:max-w-xl mx-auto select-none">
      {/* Sleek Transparent Glassy Outer Casing with Curved Corners */}
      <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group">
        {/* Subtle Ambient Rim Glow */}
        <div
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-30 pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: activeFrame.accent }}
        />

        {/* Top Mini Header: Spool Title & Controls */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            {/* Spinning Spool Wheel */}
            <div
              className={`w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-white/80 ${
                isRolling && !reducedMotion ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '4s' }}
            >
              <Disc className="w-3.5 h-3.5" style={{ color: activeFrame.accent }} />
            </div>
            <span className="font-bold tracking-widest uppercase text-white/90 text-[10px]">
              35MM FILM ROLL // ESTD. 1981 → NOW
            </span>
          </div>

          {/* Curved Glass Controls: Play, Prev, Next */}
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            <button
              onClick={() => setIsRolling(!isRolling)}
              className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer rounded-full"
              title={isRolling ? 'Pause Roll' : 'Play Roll'}
            >
              {isRolling ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-1 text-white/70 hover:text-[#00e5ff] transition-colors cursor-pointer rounded-full"
              title="Previous Era"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 text-white/70 hover:text-[#00e5ff] transition-colors cursor-pointer rounded-full"
              title="Next Era"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setCurrentFrameIndex(0)}
              className="p-1 text-white/70 hover:text-[#ffb703] transition-colors cursor-pointer rounded-full"
              title="Rewind to 1981"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* 35MM RECTANGULAR FILM STRIP HOUSING */}
        <div className="relative w-full rounded-xl overflow-hidden bg-[#05080e] border border-white/15 shadow-inner">
          {/* Top Film Sprocket Holes Perforation Ribbon */}
          <div className="h-4 sm:h-5 bg-black flex items-center justify-between px-2.5 border-b border-white/10 overflow-hidden">
            <div className="flex items-center gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`sprocket-top-${i}`}
                  className="w-2 h-2.5 sm:w-2.5 sm:h-3 rounded-xs bg-[#1a2333] border border-white/20 shrink-0"
                />
              ))}
            </div>
            <div className="text-[8px] font-mono text-white/50 tracking-[0.2em] uppercase shrink-0 hidden sm:block">
              35MM KODAK / FUJI SAFETY FILM · CHANDRALOK SIRSAGANJ
            </div>
          </div>

          {/* Central Rectangular Film Negative Frame (Aspect 16:9 - Compact & Crisp) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070d17]">
            {frames.map((frame, idx) => {
              const isActive = idx === currentFrameIndex;
              return (
                <div
                  key={frame.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-10 translate-x-0'
                      : idx < currentFrameIndex
                      ? 'opacity-0 scale-95 -translate-x-12 z-0'
                      : 'opacity-0 scale-95 translate-x-12 z-0'
                  }`}
                >
                  <img
                    src={frame.image}
                    alt={`${frame.year} - ${frame.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Cinematic Film Negative Shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />

                  {/* Frame Metadata Watermark */}
                  <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold border backdrop-blur-md"
                      style={{
                        borderColor: `${frame.accent}60`,
                        backgroundColor: `${frame.accent}20`,
                        color: frame.accent,
                      }}
                    >
                      {frame.year} // {frame.badge}
                    </span>
                    <span className="text-white/60 bg-black/60 px-2 py-0.5 rounded-full text-[9px] backdrop-blur-xs">
                      {frame.expNumber}
                    </span>
                  </div>

                  {/* Lower Frame Text Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h4 className="font-display text-base sm:text-lg font-bold text-white uppercase leading-snug drop-shadow-md">
                      {frame.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-mono text-[#cbd5e1] truncate drop-shadow-sm mt-0.5">
                      {frame.camera} · {frame.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Film Sprocket Holes Perforation Ribbon */}
          <div className="h-4 sm:h-5 bg-black flex items-center justify-between px-2.5 border-t border-white/10 overflow-hidden">
            <div className="flex items-center gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`sprocket-bot-${i}`}
                  className="w-2 h-2.5 sm:w-2.5 sm:h-3 rounded-xs bg-[#1a2333] border border-white/20 shrink-0"
                />
              ))}
            </div>
            <div className="text-[8px] font-mono text-[#ffb703] tracking-widest uppercase shrink-0">
              1981 → 2026 ROLL
            </div>
          </div>
        </div>

        {/* Bottom Curved Era Pill Tabs */}
        <div className="grid grid-cols-4 gap-1.5 mt-2.5">
          {frames.map((frame, idx) => {
            const isSelected = idx === currentFrameIndex;
            return (
              <button
                key={`tab-${frame.id}`}
                onClick={() => {
                  setCurrentFrameIndex(idx);
                }}
                className={`py-1.5 px-1 sm:px-2 text-center rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white/15 border-white/40 text-white font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]'
                    : 'bg-black/30 border-white/10 text-white/60 hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: frame.accent }}
                  />
                  <span>{frame.year}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
