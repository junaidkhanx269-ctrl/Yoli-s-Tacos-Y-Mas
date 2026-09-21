import React from 'react';
import { Phone, ShoppingBag, Star, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroTacosImg from '../assets/images/hero_tacos_1790008354899.jpg';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2D1B0E]">
      {/* Background Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTacosImg}
          alt="Authentic birria and street tacos at Yoli's Tacos Y Mas in Bastrop TX"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient: Dark brown to warm terracotta vignettes for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0E] via-[#2D1B0E]/80 to-[#2D1B0E]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B0E]/90 via-[#2D1B0E]/60 to-[#2D1B0E]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Heritage Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C65D2E]/90 text-[#FFF8E7] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg shadow-black/30 border border-white/15 mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Authentic Homemade Mexican Food • Since 2014</span>
        </div>

        {/* Restaurant Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#FFF8E7] tracking-tight leading-[1.08] font-['Outfit'] drop-shadow-md">
          Yoli's Tacos <span className="text-[#C65D2E]">Y Mas</span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-bold text-[#FFF8E7] font-['Outfit'] tracking-wide">
          Grandma's Recipes, <span className="text-[#E07B4D] italic font-serif">Homemade Daily</span>
        </p>

        {/* Narrative description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#FFF8E7]/90 leading-relaxed font-normal">
          From our family kitchen to your table in Bastrop, TX. Enjoy fresh handmade tortillas, 
          crispy chips fried in-house, slow-simmered birria, tender barbacoa, and savory breakfast tacos.
        </p>

        {/* REQUIRED 2 BUTTONS: [Call Now: (512) 809-7426] [Order Online] */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Button 1: Call Now */}
          <a
            id="hero-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#2E7D32] hover:bg-[#1E5622] text-white text-base sm:text-lg font-bold shadow-lg shadow-black/40 border border-emerald-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-emerald-200" />
            <span>Call Now: (512) 809-7426</span>
          </a>

          {/* Button 2: Order Online */}
          <button
            id="hero-order-online-btn"
            onClick={onOpenOrder}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C65D2E] hover:bg-[#A6471E] text-white text-base sm:text-lg font-bold shadow-xl shadow-[#C65D2E]/40 border border-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingBag className="w-5 h-5 text-amber-200" />
            <span>Order Online</span>
          </button>
        </div>

        {/* Quick Highlights / Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl text-center">
          <div className="flex flex-col items-center p-3 rounded-lg bg-black/25 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-lg sm:text-xl">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span>92%</span>
            </div>
            <span className="text-xs text-[#FFF8E7]/80 mt-0.5 font-medium">Recommend</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-black/25 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-1 text-emerald-400 font-bold text-lg sm:text-xl">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>7 AM</span>
            </div>
            <span className="text-xs text-[#FFF8E7]/80 mt-0.5 font-medium">Daily Breakfast</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-black/25 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-1 text-[#E07B4D] font-bold text-lg sm:text-xl">
              <Heart className="w-5 h-5 text-[#E07B4D] fill-[#E07B4D]" />
              <span>2014</span>
            </div>
            <span className="text-xs text-[#FFF8E7]/80 mt-0.5 font-medium">Family Owned</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-black/25 backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-1 text-[#FFF8E7] font-bold text-lg sm:text-xl">
              <MapPin className="w-5 h-5 text-[#C65D2E]" />
              <span>Bastrop</span>
            </div>
            <span className="text-xs text-[#FFF8E7]/80 mt-0.5 font-medium">141 Tahitian Dr</span>
          </div>
        </div>
      </div>
    </section>
  );
};
