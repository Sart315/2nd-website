import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundCameraElements: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* High-Performance Studio Ambient Lighting (Warm Halogen / Golden Hour Vignette) */}
      {isDark ? (
        <>
          {/* Subtle top spotlight - static, no layout repaints */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 20%, rgba(229, 169, 60, 0.25) 0%, rgba(180, 83, 9, 0.08) 50%, transparent 80%)',
            }}
          />
          {/* Subtle warm rim light on right */}
          <div
            className="absolute top-1/3 -right-32 w-[500px] h-[500px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(217, 119, 6, 0.2) 0%, transparent 70%)',
            }}
          />
          {/* Subtle soft cool rim light on bottom left */}
          <div
            className="absolute bottom-10 -left-32 w-[500px] h-[500px] opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(148, 163, 184, 0.15) 0%, transparent 70%)',
            }}
          />
        </>
      ) : (
        <>
          {/* Light Mode - Warm Gallery Daylight */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute top-1/2 -right-20 w-[450px] h-[450px] opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(217, 119, 6, 0.08) 0%, transparent 70%)',
            }}
          />
        </>
      )}
    </div>
  );
};
