import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hi Yoli's Tacos Y Mas! I would like to ask a question or place an order for pickup."
  );

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2D1B0E] text-[#FFF8E7] text-xs font-semibold py-2 px-3.5 rounded-xl shadow-xl border border-[#2E7D32]/40 animate-bounce duration-1000">
          <span>Chat with Yoli's Kitchen!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp FAB Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="Chat with Yoli's Tacos on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-white" />
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />
      </a>
    </div>
  );
};
