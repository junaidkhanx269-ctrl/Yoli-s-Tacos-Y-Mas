import React from 'react';
import { Star, Quote, ThumbsUp, Heart, CheckCircle2 } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#FFF8E7] text-[#2D1B0E] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <ThumbsUp className="w-3.5 h-3.5" />
            Loved by Bastrop Locals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1B0E] font-['Outfit']">
            What Our Neighbors Say
          </h2>
          <p className="text-sm sm:text-base text-[#2D1B0E]/75 leading-relaxed">
            Real feedback from community members and taco lovers who stop by Yoli's Tacos Y Mas.
          </p>
        </div>

        {/* Rating Hero Stat Banner */}
        <div className="mt-10 max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#2D1B0E]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#C65D2E] text-white flex items-center justify-center font-black text-2xl font-['Outfit'] shadow-md">
              {RESTAURANT_INFO.ratingScore}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-extrabold text-[#2D1B0E] text-sm mt-0.5">
                {RESTAURANT_INFO.ratingText}
              </p>
              <p className="text-xs text-[#2D1B0E]/60">Based on verified Bastrop customer dining</p>
            </div>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Top Rated in Bastrop</span>
          </div>
        </div>

        {/* 3 User Reviews Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#2D1B0E]/10 shadow-sm hover:shadow-xl hover:border-[#C65D2E]/40 transition-all flex flex-col justify-between"
            >
              {/* Top Quote Icon and Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C65D2E]/20" />
                </div>

                {/* Main Quote text required by prompt */}
                <p className="text-lg sm:text-xl font-bold text-[#2D1B0E] leading-snug font-['Outfit'] italic">
                  "{rev.quote}"
                </p>

                <p className="mt-3 text-xs text-[#2D1B0E]/70 font-medium">
                  {rev.highlight}
                </p>
              </div>

              {/* Author & Tag */}
              <div className="mt-6 pt-4 border-t border-[#2D1B0E]/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C65D2E]/10 text-[#C65D2E] font-bold text-base flex items-center justify-center font-['Outfit']">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D1B0E]">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-[#2E7D32] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community note */}
        <div className="mt-10 text-center text-xs text-[#2D1B0E]/70 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#C65D2E] fill-[#C65D2E]" />
          <span>Proudly serving families, travelers, and taco enthusiasts across Bastrop County since 2014</span>
        </div>
      </div>
    </section>
  );
};
