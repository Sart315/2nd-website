import React, { useState, useEffect, useRef } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '4/5' | '16/9' | '3/2' | '1/1' | 'auto' | string;
  priority?: boolean;
  onClick?: () => void;
  caption?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio,
  priority = false,
  onClick,
  caption,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load with IntersectionObserver if not priority
  useEffect(() => {
    if (priority || isInView) return;

    if (typeof IntersectionObserver !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '200px 0px' }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority, isInView]);

  // Determine aspect ratio class
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '4/5':
        return 'aspect-[4/5]';
      case '16/9':
        return 'aspect-[16/9]';
      case '3/2':
        return 'aspect-[3/2]';
      case '1/1':
        return 'aspect-square';
      default:
        return '';
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative overflow-hidden select-none ${getAspectClass()} ${containerClassName}`}
    >
      {/* 01. Cinematic Dark Shimmer Skeleton with Aperture Pulse */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#131715] dark:bg-[#121514] text-[#C5A880]/60 overflow-hidden"
        >
          {/* Sweeping Champagne Shimmer Gradient */}
          <div className="absolute inset-0 -translate-x-full animate-luxury-shimmer bg-gradient-to-r from-transparent via-[#C5A880]/15 dark:via-white/10 to-transparent" />

          {/* Centered Aperture Icon with Breathing Pulse */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-[#C5A880]/30 flex items-center justify-center bg-[#161A18]/80 backdrop-blur-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-[#C5A880] animate-aperture-pulse"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A3ABA1]/70 font-mono">
              Loading Asset
            </span>
          </div>
        </div>
      )}

      {/* 02. Fallback State if image fails to load */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#161917] p-4 text-center border border-white/5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-[#C5A880]/50 mb-2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
            <line x1="9.69" y1="8" x2="21.17" y2="8" />
            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
            <line x1="14.31" y1="16" x2="2.83" y2="16" />
            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
          </svg>
          <span className="text-xs uppercase tracking-widest text-[#F7F7F2]/80 font-medium">
            Chandralok Studio
          </span>
          <span className="text-[10px] text-[#A3ABA1] mt-1">Archived Photography</span>
        </div>
      )}

      {/* 03. High-Resolution Image with Seamless Fade-In Transition */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${
            isLoaded && !hasError ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          } ${className}`}
        />
      )}

      {/* Optional micro-caption bar */}
      {caption && isLoaded && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="font-serif italic">{caption}</p>
        </div>
      )}
    </div>
  );
};
