import React, { useEffect, useState } from 'react';
import { useMotion } from '../context/MotionContext';

export const CustomCursor: React.FC = () => {
  const { reducedMotion } = useMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'play' | 'open'>('default');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestImage = target.closest('img, [data-cursor="view"]');
      const closestVideo = target.closest('video, [data-cursor="play"]');
      const closestLink = target.closest('a, button, [role="button"], [data-cursor="open"]');

      if (closestVideo) {
        setCursorType('play');
        setIsHovered(true);
      } else if (closestImage && !closestLink) {
        setCursorType('view');
        setIsHovered(true);
      } else if (closestLink) {
        setCursorType('open');
        setIsHovered(true);
      } else {
        setCursorType('default');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice || reducedMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer Halo */}
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          isHovered
            ? cursorType === 'play'
              ? 'w-14 h-14 bg-[#ff6b00]/80 text-white font-bold text-[10px] tracking-widest border border-[#ffb703]'
              : cursorType === 'view'
              ? 'w-14 h-14 bg-[#00e5ff]/80 text-[#050b14] font-bold text-[10px] tracking-widest border border-white'
              : 'w-10 h-10 bg-[#00e5ff]/20 border border-[#00e5ff]'
            : 'w-4 h-4 bg-[#00e5ff] shadow-[0_0_12px_#00e5ff]'
        }`}
      >
        {isHovered && cursorType !== 'default' && (
          <span className="uppercase select-none">
            {cursorType === 'play' ? 'PLAY' : cursorType === 'view' ? 'VIEW' : ''}
          </span>
        )}
      </div>
    </div>
  );
};
