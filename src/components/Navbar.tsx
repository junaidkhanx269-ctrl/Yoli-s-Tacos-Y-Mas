import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrder: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check current Texas time for open/closed badge
  const isCurrentlyOpen = () => {
    try {
      const now = new Date();
      // Texas is America/Chicago
      const txTimeStr = now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour12: false, hour: 'numeric', minute: 'numeric' });
      const [hours, minutes] = txTimeStr.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;
      
      const day = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' })).getDay();
      const isWeekend = day === 5 || day === 6; // Fri or Sat
      
      const openMinutes = 7 * 60; // 7:00 AM
      const closeMinutes = isWeekend ? 24 * 60 : 21 * 60; // 12AM or 9PM

      return totalMinutes >= openMinutes && totalMinutes < closeMinutes;
    } catch {
      return true;
    }
  };

  const openStatus = isCurrentlyOpen();

  return (
    <header className="sticky top-0 z-40 bg-[#2D1B0E]/95 backdrop-blur-md text-[#FFF8E7] border-b border-[#C65D2E]/30 shadow-md">
      {/* Top micro-bar */}
      <div className="bg-[#C65D2E] text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              141 Tahitian Dr A, Bastrop, TX
            </span>
            <span className="hidden sm:inline-block text-[#FFF8E7]/60">•</span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Open Daily from 7:00 AM
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto font-semibold">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/20 text-[11px]">
              <span className={`w-2 h-2 rounded-full ${openStatus ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {openStatus ? 'Open Now' : 'Opens at 7 AM'}
            </span>
            <a
              id="top-call-link"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hover:underline flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF8E7] group-hover:text-[#E07B4D] transition-colors font-['Outfit']">
              Yoli's Tacos <span className="text-[#C65D2E]">Y Mas</span>
            </span>
          </div>
          <span className="text-[11px] sm:text-xs text-[#FFF8E7]/70 font-medium tracking-wide uppercase">
            Authentic Mexican Food • Bastrop, TX
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#about" className="hover:text-[#C65D2E] transition-colors">About</a>
          <a href="#menu" className="hover:text-[#C65D2E] transition-colors">Menu Highlights</a>
          <a href="#reviews" className="hover:text-[#C65D2E] transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-[#C65D2E] transition-colors">Hours & Location</a>
        </nav>

        {/* Desktop CTA actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#C65D2E] text-[#FFF8E7] hover:bg-[#C65D2E]/20 text-sm font-semibold transition-all"
          >
            <Phone className="w-4 h-4 text-[#C65D2E]" />
            <span>Call (512) 809-7426</span>
          </a>

          <button
            id="nav-order-online-btn"
            onClick={onOpenOrder}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C65D2E] hover:bg-[#A6471E] text-white text-sm font-bold shadow-md shadow-[#C65D2E]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Online</span>
            {cartCount > 0 && (
              <span className="ml-1 bg-white text-[#C65D2E] text-xs px-1.5 py-0.5 rounded-full font-extrabold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu and action toggler */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-order-quick-btn"
            onClick={onOpenOrder}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C65D2E] text-white text-xs font-bold shadow"
            aria-label="Order Online"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order</span>
            {cartCount > 0 && (
              <span className="ml-0.5 bg-white text-[#C65D2E] text-[10px] px-1 py-0.2 rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#FFF8E7] hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-[#2D1B0E] px-4 py-4 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#FFF8E7] font-medium border-b border-white/5"
          >
            About Yoli's
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#FFF8E7] font-medium border-b border-white/5"
          >
            Menu Highlights
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#FFF8E7] font-medium border-b border-white/5"
          >
            Customer Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#FFF8E7] font-medium border-b border-white/5"
          >
            Hours & Location
          </a>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              id="mobile-menu-call"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#C65D2E] text-center text-xs font-bold text-white bg-[#C65D2E]/20"
            >
              <Phone className="w-3.5 h-3.5 text-[#C65D2E]" />
              Call (512) 809-7426
            </a>
            <button
              id="mobile-menu-order"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#C65D2E] text-center text-xs font-bold text-white"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Order Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
