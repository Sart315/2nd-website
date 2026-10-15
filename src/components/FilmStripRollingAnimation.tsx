import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Disc } from 'lucide-react';
import { useMotion } from '../context/MotionContext';
import { getImageUrl, handleImageFallback } from '../utils/assetImages';

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
      badge: 'Analog Heritage',
      title: 'Manual 35mm SLR & Darkroom',
      camera: 'Mechanical Shutter & Prime Optics',
      detail: 'Etawah Road Studio Origin · Silver Halide Craft',
      image: getImageUrl('hero_cinematic_couple_1791896401138.jpg'),
      accent: '#B08D57',
      expNumber: 'Frame 01',
    },
    {
      id: 'frame-1990s',
      year: '1990s',
      badge: 'Royal Traditions',
      title: 'Medium Format Wedding Vows',
      camera: '120mm Film · Halogen Studio Lighting',
      detail: 'Sacred Mandaps & Processions in Sirsaganj',
      image: getImageUrl('wedding_story_varmala_1791896401614.jpg'),
      accent: '#B08D57',
      expNumber: 'Frame 02',
    },
    {
      id: 'frame-2010s',
      year: '2010s',
      badge: 'Digital Era',
      title: 'Full-Frame Digital Sensors',
      camera: 'Canon EOS L-Series & High-Speed Primes',
      detail: 'Candid Photojournalism & Softbox Lighting',
      image: getImageUrl('royal_bridal_portrait_1791898990033.jpg'),
      accent: '#B08D57',
      expNumber: 'Frame 03',
    },
    {
      id: 'frame-now',
      year: 'Today',
      badge: '4K Cinema',
      title: 'Cinema Line & Drone Fleet',
      camera: 'Sony FX3 · Nikon Z8 · Canon Cine · DJI Drones',
      detail: '4K 120fps 10-Bit · Anamorphic Color Grading',
      image: getImageUrl('cinematic_film_still_1791896403634.jpg'),
      accent: '#B08D57',
      expNumber: 'Frame 04',
    },
  ];

  useEffect(() => {
    if (!isRolling || reducedMotion) return;

    const timer = setInterval(() => {
      setCurrentFrameIndex((prev) => (prev + 1) % frames.length);
    }, 4500);

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
      {/* Solid Minimalist Film Strip Casing in Bone White / Darkroom */}
      <div className="p-4 rounded-3xl bg-white dark:bg-[#20251E] border border-[#D8D8CF] dark:border-[#2E3729] shadow-sm relative overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D8CF] dark:border-[#2E3729] text-xs">
          <div className="flex items-center gap-2">
            <Disc className="w-4 h-4 text-[#B08D57]" />
            <span className="font-semibold tracking-widest uppercase text-[#3B4436] dark:text-[#EFEFE8] text-[10px]">
              35mm Film Roll Archive · 1981 → Present
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 bg-[#EFEFE8] dark:bg-[#181C16] px-2 py-0.5 rounded-full border border-[#D8D8CF] dark:border-[#2E3729]">
            <button
              onClick={() => setIsRolling(!isRolling)}
              className="p-1 text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] cursor-pointer"
              title={isRolling ? 'Pause' : 'Play'}
            >
              {isRolling ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-1 text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] cursor-pointer"
              title="Previous Frame"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] cursor-pointer"
              title="Next Frame"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setCurrentFrameIndex(0)}
              className="p-1 text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57] cursor-pointer"
              title="Rewind to 1981"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>

        {/* 35mm Rectangular Film Strip Housing */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-stone-950 border border-stone-800">
          {/* Top Film Sprocket Holes */}
          <div className="h-4 sm:h-4.5 bg-black flex items-center justify-between px-2.5 border-b border-stone-800 overflow-hidden">
            <div className="flex items-center gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`sprocket-top-${i}`}
                  className="w-2 h-2.5 rounded-xs bg-[#222831] border border-stone-700 shrink-0"
                />
              ))}
            </div>
            <div className="text-[8px] font-mono text-stone-400 tracking-widest uppercase shrink-0 hidden sm:block">
              Safety Film · Chandralok Sirsaganj
            </div>
          </div>

          {/* Central Negative Frame */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
            {frames.map((frame, idx) => {
              const isActive = idx === currentFrameIndex;
              return (
                <div
                  key={frame.id}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={frame.image}
                    alt={`${frame.year} - ${frame.title}`}
                    referrerPolicy="no-referrer"
                    onError={handleImageFallback}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                  {/* Frame Metadata */}
                  <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-medium text-white">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/75 text-[#B08D57]">
                      {frame.year} · {frame.badge}
                    </span>
                    <span className="text-stone-300 bg-black/75 px-2 py-0.5 rounded text-[9px] font-mono">
                      {frame.expNumber}
                    </span>
                  </div>

                  {/* Lower Frame Text */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h4 className="font-heading text-base sm:text-lg font-normal text-white uppercase leading-snug">
                      {frame.title}
                    </h4>
                    <p className="font-body text-[10px] sm:text-[11px] text-stone-300 truncate mt-0.5">
                      {frame.camera} · {frame.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Film Sprocket Holes */}
          <div className="h-4 sm:h-4.5 bg-black flex items-center justify-between px-2.5 border-t border-stone-800 overflow-hidden">
            <div className="flex items-center gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`sprocket-bot-${i}`}
                  className="w-2 h-2.5 rounded-xs bg-[#222831] border border-stone-700 shrink-0"
                />
              ))}
            </div>
            <div className="text-[8px] font-mono text-[#B08D57] tracking-wider uppercase shrink-0">
              1981 → 2026 Archive
            </div>
          </div>
        </div>

        {/* Bottom Era Navigation Buttons */}
        <div className="grid grid-cols-4 gap-1.5 mt-3">
          {frames.map((frame, idx) => {
            const isSelected = idx === currentFrameIndex;
            return (
              <button
                key={`tab-${frame.id}`}
                onClick={() => setCurrentFrameIndex(idx)}
                className={`py-1.5 px-1 sm:px-2 text-center rounded-xl text-[11px] font-semibold tracking-wider uppercase transition-colors border cursor-pointer ${
                  isSelected
                    ? 'bg-[#B08D57] text-white border-[#B08D57]'
                    : 'bg-[#EFEFE8] dark:bg-[#181C16] border-[#D8D8CF] dark:border-[#2E3729] text-[#3B4436] dark:text-[#EFEFE8] hover:text-[#B08D57]'
                }`}
              >
                <span>{frame.year}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
