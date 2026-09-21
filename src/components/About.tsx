import React from 'react';
import { Heart, Sparkles, CheckCircle2, Flame, Award, Truck } from 'lucide-react';
import homemadeImg from '../assets/images/homemade_tortillas_1790008387932.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FFF8E7] text-[#2D1B0E] relative overflow-hidden">
      {/* Subtle traditional Mexican decorative pattern accents */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C65D2E] via-[#2E7D32] to-[#C65D2E]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame accent with terracotta / brown border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2D1B0E]/10 bg-white group">
                <img
                  src={homemadeImg}
                  alt="Fresh handmade tortillas, in-house fried chips and authentic molcajete salsa at Yoli's Tacos Y Mas"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0E]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">Made From Scratch Every Morning</p>
                  <p className="text-sm font-semibold">Fresh Tortillas • Hot Chips • Roasted Salsas</p>
                </div>
              </div>

              {/* Floating Story Pill */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#C65D2E] text-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-[#FFF8E7] max-w-[210px] transform rotate-1">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-5 h-5 text-amber-200" />
                  <span className="text-xs uppercase tracking-widest font-extrabold text-amber-200">Our Journey</span>
                </div>
                <p className="text-xs font-semibold leading-tight">
                  Started as a humble Bastrop food truck in 2014!
                </p>
              </div>

              {/* Year established tag */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-[#2E7D32] text-white py-2 px-4 rounded-xl shadow-lg border-2 border-[#FFF8E7] flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider">Since 2014 in Bastrop</span>
              </div>
            </div>
          </div>

          {/* Narrative Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C65D2E] flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-[#C65D2E]" />
                Family-Owned & Locally Beloved
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D1B0E] font-['Outfit'] leading-tight">
                Authentic Mexican Food, <span className="text-[#C65D2E]">Crafted With Tradition</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#2D1B0E]/85 leading-relaxed">
              In 2014, our family started cooking with a single dream and a cherished recipe book 
              passed down through generations. What began as a bustling local food truck quickly grew 
              into one of Bastrop's most beloved Mexican dining traditions.
            </p>

            <p className="text-sm sm:text-base text-[#2D1B0E]/80 leading-relaxed">
              At <strong className="text-[#2D1B0E] font-bold">Yoli's Tacos Y Mas</strong>, we take no shortcuts. 
              We rise before dawn to press fresh corn and flour tortillas, hand-cut and fry our golden tortilla 
              chips in-house daily, and roast fresh serrano chiles and vine-ripe tomatoes for our signature 
              molcajete-style salsa.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#2D1B0E]/10 shadow-sm hover:border-[#C65D2E]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C65D2E]/10 text-[#C65D2E] flex items-center justify-center mb-2.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2D1B0E]">Fresh Tortillas</h4>
                <p className="text-xs text-[#2D1B0E]/75 mt-1">
                  Hand-pressed daily, served piping hot right off the comal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#2D1B0E]/10 shadow-sm hover:border-[#2E7D32]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-2.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2D1B0E]">Chips In-House</h4>
                <p className="text-xs text-[#2D1B0E]/75 mt-1">
                  Fried crisp in small batches every single morning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFDF7] border border-[#2D1B0E]/10 shadow-sm hover:border-[#C65D2E]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#C65D2E]/10 text-[#C65D2E] flex items-center justify-center mb-2.5">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2D1B0E]">Homemade Salsa</h4>
                <p className="text-xs text-[#2D1B0E]/75 mt-1">
                  Grandma Yoli's fire-roasted recipe with bold Mexican flavor.
                </p>
              </div>
            </div>

            {/* Quote badge */}
            <div className="p-4 rounded-xl bg-[#2D1B0E] text-[#FFF8E7] flex items-center gap-4 border border-[#C65D2E]/40">
              <div className="w-12 h-12 rounded-full bg-[#C65D2E] flex items-center justify-center shrink-0 font-black text-lg text-white font-['Outfit']">
                Y
              </div>
              <div className="text-xs sm:text-sm">
                <p className="italic font-medium text-[#FFF8E7]/90">
                  "Cooking isn't just our business—it's how we share our heritage with Bastrop neighbors."
                </p>
                <span className="font-bold text-amber-300 mt-0.5 block">— The Yoli's Family</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
