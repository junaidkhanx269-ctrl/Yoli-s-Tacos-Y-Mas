import React from 'react';
import { Phone, ShoppingBag, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileBottomBarProps {
  onOpenOrder: () => void;
  cartCount: number;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenOrder, cartCount }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2D1B0E]/95 backdrop-blur-md border-t border-[#C65D2E]/40 px-3 py-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Call Now */}
        <a
          id="mobile-sticky-call"
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="col-span-4 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#2E7D32] hover:bg-[#1E5622] text-white font-bold text-xs shadow-md transition-colors"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Call Kitchen</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          id="mobile-sticky-whatsapp"
          href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Hi%20Yoli's%20Tacos!%20I'd%20like%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Sticky Order Button */}
        <button
          id="mobile-sticky-order"
          onClick={onOpenOrder}
          className="col-span-5 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#C65D2E] hover:bg-[#A6471E] text-white font-extrabold text-xs shadow-md shadow-[#C65D2E]/40 transition-transform active:scale-95"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span className="truncate">Order Online</span>
          {cartCount > 0 && (
            <span className="bg-white text-[#C65D2E] text-[11px] font-black px-1.5 py-0.2 rounded-full ml-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
