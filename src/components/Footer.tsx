import React from 'react';
import { Phone, MapPin, Clock, Heart, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D1B0E] text-[#FFF8E7] border-t-4 border-[#C65D2E]">
      {/* Prominent "Locally Owned & Family Operated" Banner */}
      <div className="bg-[#C65D2E] text-white py-4 px-4 text-center font-['Outfit'] font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 fill-white text-white" />
        <span>Locally Owned & Family Operated in Bastrop, TX Since 2014</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Story */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-[#FFF8E7] font-['Outfit']">
              Yoli's Tacos <span className="text-[#C65D2E]">Y Mas</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 max-w-md leading-relaxed">
              Authentic Homemade Mexican Food cooked with Grandma's cherished recipes. 
              Serving Bastrop families, locals, and visitors with fresh handmade tortillas, 
              crisp chips fried daily, slow-cooked birria, and warm hospitality.
            </p>

            <div className="pt-2">
              {/* Facebook Link required by prompt */}
              <a
                id="footer-facebook-link"
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow Yoli's on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300 font-['Outfit']">
              Contact & Address
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#FFF8E7]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C65D2E] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <a
                  id="footer-call-link"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-amber-300 font-bold transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300 font-['Outfit']">
              Store Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#FFF8E7]/80">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily:</p>
                  <p>7:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <div className="w-3.5 h-3.5 rounded-full bg-[#2E7D32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Fri & Sat Late Night:</p>
                  <p className="text-amber-300">Open until 12:00 AM Midnight</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8E7]/60">
          <p>© {new Date().getFullYear()} Yoli's Tacos Y Mas. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Location</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
