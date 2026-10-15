import React from 'react';
import { useMotion } from '../context/MotionContext';

export const StudioSmokeAtmosphere: React.FC = () => {
  const { reducedMotion } = useMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 
        Fine-Art Photography Studio Smoke & Mist Atmosphere
        Hardware-accelerated soft radial gradients blending rich Moss Green (#3B4436) into Bone White (#EFEFE8)
        Optimized for 60fps buttery smooth scroll without heavy blur filters
      */}
      
      {/* Top Left Moss Green Studio Smoke Cloud */}
      <div
        className={`absolute -top-24 -left-16 w-[560px] h-[560px] rounded-full pointer-events-none ${
          reducedMotion ? '' : 'smoke-cloud-1'
        }`}
        style={{
          background: 'radial-gradient(circle at 45% 45%, rgba(59, 68, 54, 0.14) 0%, rgba(59, 68, 54, 0.06) 45%, transparent 75%)',
        }}
      />

      {/* Top Right Moss Green & Tan Studio Mist Cloud */}
      <div
        className={`absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none ${
          reducedMotion ? '' : 'smoke-cloud-2'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 68, 54, 0.12) 0%, rgba(176, 141, 87, 0.05) 45%, transparent 75%)',
        }}
      />

      {/* Center Left Soft Ambient Haze */}
      <div
        className="absolute top-1/2 -left-28 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 68, 54, 0.10) 0%, rgba(59, 68, 54, 0.03) 50%, transparent 75%)',
        }}
      />

      {/* Lower Right Organic Studio Fog */}
      <div
        className={`absolute bottom-16 -right-16 w-[520px] h-[520px] rounded-full pointer-events-none ${
          reducedMotion ? '' : 'smoke-cloud-1'
        }`}
        style={{
          background: 'radial-gradient(circle at 45% 45%, rgba(59, 68, 54, 0.12) 0%, rgba(59, 68, 54, 0.04) 45%, transparent 75%)',
        }}
      />
    </div>
  );
};
