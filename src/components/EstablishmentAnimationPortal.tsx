import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Camera, Film, Layers, ChevronRight } from 'lucide-react';
import { useMotion } from '../context/MotionContext';

interface EstablishmentAnimationPortalProps {
  onOpenCinemaPreview: () => void;
}

interface EraData {
  id: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  cameraGear: string;
  techBadge: string;
  image: string;
  accent: string;
  colorClass: string;
  specs: string;
}

export const EstablishmentAnimationPortal: React.FC<EstablishmentAnimationPortalProps> = ({
  onOpenCinemaPreview,
}) => {
  const { reducedMotion } = useMotion();
  const [currentEraIndex, setCurrentEraIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const eras: EraData[] = [
    {
      id: 'era-1981',
      year: '1981',
      period: 'FOUNDATION',
      title: 'Manual 35mm Mechanical Film',
      subtitle: 'Etawah Road Studio Origin, Sirsaganj',
      cameraGear: 'Mechanical 35mm SLR & Silver Halide Craft',
      techBadge: 'ANALOG CHEMISTRY',
      image: '/src/assets/images/vintage_1981_film_slr_1791960493970.jpg',
      accent: '#ffb703',
      colorClass: 'text-[#ffb703] border-[#ffb703]/40 bg-[#ffb703]/10',
      specs: '1/1000s Mechanical · Optical Pentaprism · Hand-Processed Negatives',
    },
    {
      id: 'era-1990s',
      year: '1990s',
      period: 'HERITAGE',
      title: 'Generational Royal Weddings',
      subtitle: 'Sacred Mandap Traditions Across UP',
      cameraGear: 'Medium Format 120mm & Color Film Stock',
      techBadge: 'VIBRANT COLOR FILM',
      image: '/src/assets/images/wedding_story_varmala_1791896401614.jpg',
      accent: '#ff6b00',
      colorClass: 'text-[#ff6b00] border-[#ff6b00]/40 bg-[#ff6b00]/10',
      specs: '120mm Film · Halogen Continuous Lights · Traditional Processions',
    },
    {
      id: 'era-2010s',
      year: '2010s',
      period: 'REVOLUTION',
      title: 'Full-Frame Digital Sensor Era',
      subtitle: 'Pioneering Candid Photojournalism',
      cameraGear: 'Canon EOS L-Series & High-Speed Primes',
      techBadge: 'FULL-FRAME SENSOR',
      image: '/src/assets/images/royal_bridal_portrait_1791898990033.jpg',
      accent: '#00e5ff',
      colorClass: 'text-[#00e5ff] border-[#00e5ff]/40 bg-[#00e5ff]/10',
      specs: 'CMOS High Dynamic Range · Studio Softboxes · f/1.2 Glass',
    },
    {
      id: 'era-now',
      year: 'NOW',
      period: '4K/8K CINEMA',
      title: 'Master 4K Cinema & Aerial Fleet',
      subtitle: 'Sony FX3 · Canon Cine · Fujifilm GFX · DJI Drones',
      cameraGear: 'Flagship Cinema Line & 2.39:1 Anamorphic Optics',
      techBadge: '4K 120FPS 10-BIT LOG',
      image: '/src/assets/images/sony_a7s_cine_rig_1791960673477.jpg',
      accent: '#38bdf8',
      colorClass: 'text-[#38bdf8] border-[#38bdf8]/40 bg-[#38bdf8]/10',
      specs: '15+ Stops DR · S-Cinetone · 3-Axis Gimbal · 32-Bit Float Audio',
    },
  ];

  // Auto-play timeline progression
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;

    const timer = setInterval(() => {
      setCurrentEraIndex((prev) => (prev + 1) % eras.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isPlaying, reducedMotion, eras.length]);

  const activeEra = eras[currentEraIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xs shadow-[0_20px_60px_rgba(0,0,0,0.9)] perspective-1000 group select-none"
    >
      {/* Outer Cyan & Orange Multi-Color HUD Corner Accents */}
      <div className="absolute -inset-3 border border-[#00e5ff]/25 pointer-events-none rounded-xs" />
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00e5ff] z-30" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#ff6b00] z-30" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#ffb703] z-30" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00e5ff] z-30" />

      {/* Main Container with 3D Depth */}
      <div
        className={`relative w-full h-full overflow-hidden bg-[#070f1e] border border-[#1e293b] rounded-xs ${
          reducedMotion ? '' : 'transition-transform duration-300 ease-out'
        }`}
        style={{
          transform: reducedMotion
            ? 'none'
            : `rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg)`,
        }}
      >
        {/* Animated Background Era Images with Smooth Crossfade */}
        {eras.map((era, index) => {
          const isCurrent = index === currentEraIndex;
          return (
            <div
              key={era.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={era.image}
                alt={`${era.year} - ${era.title}`}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                  isCurrent ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/40 to-black/50" />
            </div>
          );
        })}

        {/* Top Header: "ESTABLISHMENT TO NOW: 1981 → PRESENT" Animated Badge */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono tracking-wider text-white">
          <div className="flex items-center gap-2 bg-black/75 px-3 py-1.5 rounded-xs border border-[#00e5ff]/40 backdrop-blur-md">
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: activeEra.accent }}
            />
            <span className="font-bold text-white tracking-widest text-[10px]">
              ESTABLISHMENT TO NOW
            </span>
            <span className="text-[#00e5ff]">·</span>
            <span className="text-[#ffb703] font-bold">1981 → 2026</span>
          </div>

          {/* Play/Pause & Reset Controls */}
          <div className="flex items-center gap-1.5 bg-black/70 px-2 py-1 rounded-xs border border-white/10 backdrop-blur-md">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
              title={isPlaying ? 'Pause Animation' : 'Play Animation'}
              className="p-1 hover:text-[#00e5ff] text-white/80 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentEraIndex(0);
              }}
              title="Restart from 1981"
              className="p-1 hover:text-[#ffb703] text-white/80 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Center Camera Viewfinder Reticle & Aperture Animation */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          {/* Animated Aperture Circle */}
          <div
            className={`w-28 h-28 border border-white/20 rounded-full flex items-center justify-center transition-transform duration-700 ${
              reducedMotion ? '' : 'animate-spin-very-slow'
            }`}
          >
            <div className="w-20 h-20 border border-[#00e5ff]/30 rounded-full flex items-center justify-center">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeEra.accent }}
              />
            </div>
          </div>
          {/* Viewfinder crosshairs */}
          <div className="absolute w-36 h-px bg-white/20" />
          <div className="absolute h-36 w-px bg-white/20" />
          {/* Focus target corners */}
          <div className="absolute w-44 h-44 border border-white/10 rounded-xs pointer-events-none" />
        </div>

        {/* Middle Status Pill: Current Era Technical Badge */}
        <div className="absolute top-16 left-4 z-20">
          <div
            className={`text-[10px] font-mono px-2.5 py-1 rounded-xs border font-bold uppercase tracking-wider backdrop-blur-md ${activeEra.colorClass}`}
          >
            {activeEra.year} // {activeEra.techBadge}
          </div>
        </div>

        {/* Bottom Panel: Interactive Era Selector + Details */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-[#050b14] via-[#050b14]/95 to-transparent pt-12">
          {/* Era Timeline Progress Stepper Tabs */}
          <div className="grid grid-cols-4 gap-1.5 mb-4">
            {eras.map((era, idx) => {
              const isSelected = idx === currentEraIndex;
              return (
                <button
                  key={era.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentEraIndex(idx);
                  }}
                  className={`py-1.5 px-2 text-center text-[10px] font-mono uppercase tracking-wider transition-all duration-200 border rounded-xs cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f223f] border-[#00e5ff] text-white font-bold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                      : 'bg-black/60 border-white/10 text-[#94a3b8] hover:border-white/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: era.accent }}
                    />
                    <span>{era.year}</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full bg-white/10 h-0.5 mt-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isSelected ? 'w-full' : 'w-0'
                      }`}
                      style={{ backgroundColor: era.accent }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Era Title & Description */}
          <div className="flex items-end justify-between">
            <div className="max-w-[78%]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8]">
                {activeEra.period} · {activeEra.subtitle}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white leading-tight mt-0.5 mb-1.5">
                {activeEra.title}
              </h3>
              <p className="text-[11px] text-[#cbd5e1] font-mono line-clamp-1">
                {activeEra.specs}
              </p>
            </div>

            {/* Play Cinema Trailer Button */}
            <button
              onClick={onOpenCinemaPreview}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00e5ff] to-[#ff6b00] flex items-center justify-center text-[#050b14] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer shrink-0"
              title="Watch Chandralok Cinema Showreel"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
