import React from 'react';
import { useMotion } from '../context/MotionContext';

export const BackgroundCameraElements: React.FC = () => {
  const { reducedMotion } = useMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Multi-Color Studio Cinematic Lighting Atmosphere (Cyan, Orange, Yellow & Midnight Navy) */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#00e5ff]/14 via-[#0284c7]/10 to-transparent blur-[160px] rounded-full" />
      <div className="absolute top-[40%] -left-32 w-[700px] h-[700px] bg-gradient-to-tr from-[#ff6b00]/12 via-[#ffb703]/10 to-transparent blur-[180px] rounded-full" />
      <div className="absolute top-[70%] right-10 w-[600px] h-[600px] bg-gradient-to-tl from-[#00e5ff]/12 via-[#ff6b00]/10 to-transparent blur-[170px] rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#ffb703]/10 via-[#0a1b33]/20 to-transparent blur-[150px] rounded-full" />

      {/* 01. 3D FILMING LIGHT STAND WITH OCTABOX / SOFTBOX (Top Right) */}
      <div
        className={`absolute top-16 right-6 sm:right-20 w-72 h-96 opacity-35 ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full stroke-[#00e5ff] fill-none stroke-[1.2]">
          {/* Octagonal Softbox Studio Light Face */}
          <polygon
            points="100,20 135,35 150,70 135,105 100,120 65,105 50,70 65,35"
            stroke="#00e5ff"
            strokeWidth="1.6"
            fill="#00e5ff"
            fillOpacity="0.04"
          />
          <polygon
            points="100,35 125,47 135,70 125,93 100,105 75,93 65,70 75,47"
            stroke="#ffb703"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          {/* Center Light Bulb Filament Glow */}
          <circle cx="100" cy="70" r="10" stroke="#fef08a" strokeWidth="1" fill="#fef08a" fillOpacity="0.12" />
          <circle cx="100" cy="70" r="4" fill="#ffb703" fillOpacity="0.5" />
          
          {/* C-Stand Heavy Studio Arm & Extension */}
          <line x1="100" y1="120" x2="100" y2="150" stroke="#00e5ff" strokeWidth="2" />
          <line x1="85" y1="140" x2="115" y2="140" stroke="#ff6b00" strokeWidth="1.5" />
          {/* Central Riser Column */}
          <line x1="100" y1="150" x2="100" y2="270" stroke="#38bdf8" strokeWidth="2.5" />
          {/* C-Stand Locking Knobs */}
          <circle cx="100" cy="180" r="4" fill="#ff6b00" />
          <circle cx="100" cy="220" r="4" fill="#00e5ff" />
          {/* 3-Legged Heavy Studio Base with Sandbag weight */}
          <line x1="100" y1="270" x2="40" y2="295" stroke="#38bdf8" strokeWidth="2" />
          <line x1="100" y1="270" x2="160" y2="295" stroke="#38bdf8" strokeWidth="2" />
          <line x1="100" y1="270" x2="100" y2="300" stroke="#38bdf8" strokeWidth="2" />
          {/* Studio Sandbag */}
          <rect x="85" y="275" width="30" height="12" rx="2" stroke="#ff6b00" fill="#ff6b00" fillOpacity="0.25" />

          {/* Softbox Warm Light Rays Casting Downward */}
          <line x1="50" y1="90" x2="10" y2="180" stroke="#00e5ff" strokeOpacity="0.2" strokeDasharray="3 4" />
          <line x1="150" y1="90" x2="190" y2="180" stroke="#ffb703" strokeOpacity="0.2" strokeDasharray="3 4" />
        </svg>
      </div>

      {/* 02. 3D CINEMA CAMERA RIG ON HEAVY FLUID TRIPOD (Mid-Left) */}
      <div
        className={`absolute top-[35%] -left-6 sm:left-10 w-80 h-96 opacity-35 ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
        style={{ animationDelay: '-3s' }}
      >
        <svg viewBox="0 0 240 300" className="w-full h-full stroke-[#ff6b00] fill-none stroke-[1.2]">
          {/* Matte Box / Sun Hood on Camera */}
          <polygon
            points="145,55 185,45 185,105 145,95"
            stroke="#ff6b00"
            strokeWidth="1.6"
            fill="#ff6b00"
            fillOpacity="0.06"
          />
          {/* Cinema Prime Lens Barrel */}
          <rect x="115" y="62" width="30" height="26" rx="2" stroke="#00e5ff" strokeWidth="1.2" />
          <line x1="125" y1="62" x2="125" y2="88" stroke="#ffb703" strokeDasharray="2 2" />
          <line x1="135" y1="62" x2="135" y2="88" stroke="#ffb703" strokeDasharray="2 2" />
          
          {/* Cinema Camera Main Body (Sony FX / RED Style) */}
          <rect x="55" y="50" width="60" height="50" rx="3" stroke="#00e5ff" strokeWidth="1.8" />
          {/* Top Handle with Hot Shoe & Mic */}
          <path d="M70,50 L70,30 L105,30 L105,50" stroke="#ff6b00" strokeWidth="1.5" />
          {/* Directional Shotgun Mic on Top */}
          <line x1="90" y1="20" x2="135" y2="20" stroke="#ffb703" strokeWidth="2.5" />
          <rect x="110" y="16" width="25" height="8" rx="2" stroke="#ffb703" fill="#ffb703" fillOpacity="0.2" />
          
          {/* Articulating Director Field Monitor */}
          <rect x="75" y="12" width="30" height="20" rx="2" stroke="#00e5ff" />
          <line x1="80" y1="17" x2="100" y2="27" stroke="#00e5ff" strokeOpacity="0.4" />
          
          {/* Side Rosette Dial & Battery Pack */}
          <circle cx="85" cy="75" r="8" stroke="#ff6b00" />
          <circle cx="85" cy="75" r="3" fill="#ff6b00" fillOpacity="0.4" />
          <rect x="42" y="55" width="13" height="40" rx="2" stroke="#ffb703" fill="#ffb703" fillOpacity="0.15" />

          {/* Heavy Fluid Head Plate */}
          <rect x="70" y="100" width="35" height="15" rx="2" stroke="#00e5ff" strokeWidth="2" />
          <line x1="88" y1="108" x2="120" y2="125" strokeWidth="2" stroke="#ff6b00" />
          <circle cx="120" cy="125" r="3" fill="#ff6b00" />

          {/* Heavy Duty Studio Tripod Legs */}
          <line x1="88" y1="115" x2="40" y2="280" stroke="#38bdf8" strokeWidth="2" />
          <line x1="88" y1="115" x2="88" y2="290" stroke="#38bdf8" strokeWidth="2" />
          <line x1="88" y1="115" x2="140" y2="280" stroke="#38bdf8" strokeWidth="2" />
          {/* Tripod Mid-Level Spreader Braces */}
          <line x1="60" y1="200" x2="115" y2="200" stroke="#ffb703" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* 03. 3D ROTATING APERTURE RING & FOCAL CALIPER (Center Right) */}
      <div
        className={`absolute top-[58%] right-4 sm:right-16 w-80 h-80 opacity-30 ${
          reducedMotion ? '' : 'animate-aperture-slow'
        }`}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#00e5ff] fill-none">
          <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 6" stroke="#00e5ff" />
          <circle cx="100" cy="100" r="75" strokeWidth="1.5" stroke="#ff6b00" />
          <circle cx="100" cy="100" r="55" strokeWidth="0.8" strokeDasharray="2 4" stroke="#ffb703" />
          {/* Aperture Iris Blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="100"
              y1="45"
              x2="135"
              y2="100"
              transform={`rotate(${deg} 100 100)`}
              stroke="#00e5ff"
              strokeWidth="1.2"
            />
          ))}
          <circle cx="100" cy="100" r="28" stroke="#ff6b00" strokeWidth="1.6" />
          <text x="100" y="104" textAnchor="middle" fill="#ffb703" fontSize="8" fontFamily="monospace">
            f/1.2
          </text>
        </svg>
      </div>

      {/* 04. 3D FRESNEL SPOTLIGHT WITH BARNDOORS (Bottom Left) */}
      <div
        className={`absolute bottom-24 left-10 w-64 h-80 opacity-30 ${
          reducedMotion ? '' : 'animate-float-slow'
        }`}
        style={{ animationDelay: '-6s' }}
      >
        <svg viewBox="0 0 160 260" className="w-full h-full stroke-[#ffb703] fill-none stroke-[1.2]">
          {/* Fresnel Barndoors open */}
          <polygon points="65,30 95,30 115,10 45,10" stroke="#00e5ff" fill="#00e5ff" fillOpacity="0.06" />
          <polygon points="65,70 95,70 115,90 45,90" stroke="#ff6b00" fill="#ff6b00" fillOpacity="0.06" />
          <rect x="65" y="30" width="30" height="40" rx="2" stroke="#ffb703" strokeWidth="1.8" />
          <circle cx="80" cy="50" r="10" stroke="#fef08a" strokeWidth="1" fill="#fef08a" fillOpacity="0.15" />
          {/* Fresnel Stand Riser */}
          <line x1="80" y1="70" x2="80" y2="240" stroke="#38bdf8" strokeWidth="2" />
          <line x1="80" y1="240" x2="35" y2="255" stroke="#38bdf8" strokeWidth="1.8" />
          <line x1="80" y1="240" x2="125" y2="255" stroke="#38bdf8" strokeWidth="1.8" />
        </svg>
      </div>

      {/* 05. 3D FLOATING CAMERA BRAND WATERMARKS & VIEWFINDER GRIDS */}
      <div className="absolute top-[22%] left-1/4 opacity-15 font-mono text-[10px] text-[#00e5ff] tracking-[0.3em] uppercase pointer-events-none">
        SONY CINEMA LINE // S-LOG3
      </div>
      <div className="absolute top-[48%] right-1/4 opacity-15 font-mono text-[10px] text-[#ff6b00] tracking-[0.3em] uppercase pointer-events-none">
        CANON CINEMA EOS // DUAL PIXEL
      </div>
      <div className="absolute top-[78%] left-1/6 opacity-15 font-mono text-[10px] text-[#ffb703] tracking-[0.3em] uppercase pointer-events-none">
        FUJIFILM GFX 102MP // MEDIUM FORMAT
      </div>
    </div>
  );
};
