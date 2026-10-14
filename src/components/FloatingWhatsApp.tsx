import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#121218] border border-[#2d2b3c] text-[#f7f4ee] px-3.5 py-1.5 rounded-sm text-xs shadow-2xl animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="text-[#25D366] font-medium mr-1.5">●</span>
          Chat on WhatsApp ({STUDIO_INFO.phone})
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Chandralok Studio, I would like to inquire regarding photography & filmmaking services.')}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 rounded-full bg-[#1b1b22] border border-[#383748] hover:border-[#25D366] flex items-center justify-center text-[#25D366] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 fill-[#25D366]/20 group-hover:fill-[#25D366]/30 transition-colors" />
      </a>
    </div>
  );
};
