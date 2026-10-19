import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div
          className={`hidden sm:block border px-3.5 py-1.5 rounded-full text-xs shadow-xl animate-in fade-in duration-150 ${
            isDark
              ? 'bg-[#161917] border-white/15 text-[#F7F7F2]'
              : 'bg-white border-[#2C3528]/20 text-[#1E2520]'
          }`}
        >
          <span className="text-emerald-500 font-bold mr-1.5">●</span>
          WhatsApp Inquiry (+91 {STUDIO_INFO.phone})
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello Chandralok Studio, I would like to inquire regarding wedding photography and cinema services.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full border flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md group ${
          isDark
            ? 'bg-[#161917]/95 hover:bg-[#1E231F] border-white/20 text-emerald-400 hover:border-emerald-500/60'
            : 'bg-white/95 hover:bg-[#F2F2EC] border-[#2C3528]/20 text-emerald-600 hover:border-emerald-600/60'
        }`}
        aria-label="Direct WhatsApp Inquiry"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-500/20 group-hover:fill-emerald-500/40 transition-colors" />
      </a>
    </div>
  );
};
