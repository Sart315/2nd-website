import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#161917] border border-white/15 text-[#F7F7F2] px-3.5 py-1.5 rounded-full text-xs shadow-xl animate-in fade-in duration-150">
          <span className="text-emerald-400 font-bold mr-1.5">●</span>
          WhatsApp Inquiry (+91 {STUDIO_INFO.phone})
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Chandralok Studio, I would like to inquire regarding wedding photography and cinema services.')}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#161917]/90 hover:bg-[#1E231F] border border-white/15 hover:border-emerald-500/60 flex items-center justify-center text-emerald-400 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md group"
        aria-label="Direct WhatsApp Inquiry"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-500/20 group-hover:fill-emerald-500/40 transition-colors" />
      </a>
    </div>
  );
};
