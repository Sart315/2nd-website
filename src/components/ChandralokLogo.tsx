import React, { useState } from 'react';
import officialLogoImg from '../assets/images/chandralok_official_logo.png';

interface ChandralokLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showHindi?: boolean;
  showSubtitle?: boolean;
  className?: string;
  variant?: 'full' | 'icon-only' | 'badge-only';
}

export const ChandralokLogo: React.FC<ChandralokLogoProps> = ({
  size = 'md',
  showHindi = true,
  showSubtitle = true,
  className = '',
  variant = 'full',
}) => {
  // Multi-tier fallback so logo NEVER fails when published or live
  const [attempt, setAttempt] = useState(0);

  const fallbackSources = [
    officialLogoImg,
    '/logo.png',
    '/chandralok_official_logo.png',
    '/logo.jpg',
  ];

  const currentSrc = fallbackSources[attempt];
  const isSvgFallback = attempt >= fallbackSources.length;

  const handleImageError = () => {
    setAttempt((prev) => prev + 1);
  };

  const iconDimension = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-13 h-13 sm:w-16 sm:h-16',
    xl: 'w-18 h-18 sm:w-24 sm:h-24',
  }[size];

  const titleSize = {
    sm: 'text-[11px] sm:text-sm',
    md: 'text-xs sm:text-base font-bold',
    lg: 'text-base sm:text-xl font-extrabold',
    xl: 'text-xl sm:text-3xl font-extrabold',
  }[size];

  const hindiSize = {
    sm: 'text-[9px] sm:text-[11px]',
    md: 'text-[11px] sm:text-[13px]',
    lg: 'text-xs sm:text-base',
    xl: 'text-sm sm:text-lg',
  }[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Official 3D Signage Logo Circular Badge */}
      <div
        className={`relative ${iconDimension} shrink-0 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#00e5ff] via-[#ffb703] to-[#ff6b00] shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0a121e] flex items-center justify-center">
          {!isSvgFallback ? (
            <img
              src={currentSrc}
              alt="चन्द्रलोक फोटो स्टूडियो सिरसागंज (Chandralok Studio Official Logo)"
              onError={handleImageError}
              className="w-full h-full object-cover"
              loading="eager"
            />
          ) : (
            /* Pristine Inline SVG Vector Fallback - Guaranteed to ALWAYS render even offline or if image fails */
            <svg viewBox="0 0 100 100" className="w-full h-full p-1" fill="none">
              <circle cx="50" cy="50" r="48" fill="#0d1829" stroke="#00e5ff" strokeWidth="1.5" />
              {/* Corner Viewfinder cyan brackets */}
              <path d="M26 30 L20 30 L20 36" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M74 30 L80 30 L80 36" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 48 L20 54 L26 54" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M80 48 L80 54 L74 54" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" />
              {/* Orange Camera Body Brackets */}
              <rect x="28" y="32" width="44" height="26" rx="6" stroke="#ff6b00" strokeWidth="3" />
              {/* Top Yellow Flash / Hotshoe */}
              <rect x="42" y="27" width="16" height="5" rx="2" fill="#ffb703" />
              {/* Lens Yellow Crescent with CS */}
              <circle cx="50" cy="45" r="10" stroke="#ffb703" strokeWidth="2.5" fill="#050b14" />
              <path d="M48 40 C43 43 43 49 48 51" stroke="#00e5ff" strokeWidth="1.5" fill="none" />
              <circle cx="53" cy="45" r="2" fill="#ffb703" />
              {/* Hindi Brand Name "चन्द्रलोक" */}
              <text x="50" y="69" textAnchor="middle" fill="#00e5ff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                चन्द्रलोक
              </text>
              {/* Hindi "फोटो स्टूडियो" */}
              <text x="50" y="80" textAnchor="middle" fill="#ff6b00" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                फोटो स्टूडियो
              </text>
              {/* Yellow Pill "सिरसागंज" */}
              <rect x="30" y="84" width="40" height="9" rx="4.5" fill="#ffb703" />
              <text x="50" y="91" textAnchor="middle" fill="#050b14" fontSize="6.5" fontWeight="bold">
                सिरसागंज
              </text>
            </svg>
          )}
        </div>
      </div>

      {variant !== 'icon-only' && (
        /* Typography: English Brand Name + Hindi Name + Sirsaganj */
        <div className="flex flex-col leading-tight min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`font-display tracking-[0.12em] uppercase text-white truncate ${titleSize}`}
            >
              CHANDRALOK <span className="text-[#00e5ff]">STUDIO</span>
            </span>
          </div>

          {showHindi && (
            <span
              className={`font-hindi font-bold text-[#ffb703] tracking-wide mt-0.5 truncate drop-shadow-[0_1px_4px_rgba(255,183,3,0.3)] ${hindiSize}`}
            >
              चन्द्रलोक फोटो स्टूडियो
            </span>
          )}

          {showSubtitle && (
            <span className="text-[8px] sm:text-[10px] tracking-[0.18em] text-[#ff6b00] uppercase font-semibold mt-0.5 truncate">
              ESTD. 1981 · SIRSAGANJ
            </span>
          )}
        </div>
      )}
    </div>
  );
};
