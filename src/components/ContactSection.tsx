import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink, Check, Copy, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO, SCHEDULE } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Determine current day of week in Central Time (Bastrop, TX)
  const getCentralDayIndex = () => {
    try {
      const centralDateStr = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
      return new Date(centralDateStr).getDay();
    } catch {
      return new Date().getDay();
    }
  };

  const currentDayIndex = getCentralDayIndex();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FFFDF7] text-[#2D1B0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C65D2E]/10 text-[#C65D2E] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            Visit Us in Bastrop
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1B0E] font-['Outfit']">
            Hours & Location
          </h2>
          <p className="text-sm sm:text-base text-[#2D1B0E]/75 leading-relaxed">
            Conveniently located off Tahitian Drive. Stop in for dine-in, call ahead for pickup, or reach us on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hours & Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Cards */}
            <div className="bg-white rounded-2xl p-6 border border-[#2D1B0E]/10 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-[#2D1B0E] font-['Outfit'] flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C65D2E]" />
                Call or Visit
              </h3>

              {/* Address card */}
              <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#2D1B0E]/5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#C65D2E] uppercase tracking-wider block mb-0.5">
                      Physical Address
                    </span>
                    <p className="text-sm font-bold text-[#2D1B0E]">
                      {RESTAURANT_INFO.address}
                    </p>
                    <p className="text-xs text-[#2D1B0E]/70 mt-0.5">
                      Bastrop, Texas 78602
                    </p>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="p-2 rounded-lg bg-white border border-[#2D1B0E]/10 hover:bg-gray-50 text-xs font-semibold text-[#2D1B0E] flex items-center gap-1 shadow-2xs transition-colors shrink-0"
                    title="Copy address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#2D1B0E]/60" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-[#2D1B0E]/10 flex items-center gap-2">
                  <a
                    id="contact-directions-link"
                    href={RESTAURANT_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C65D2E] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Driving Directions
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Click-to-call button */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#2D1B0E]/70 uppercase tracking-wider block">
                  Click to Call Our Kitchen
                </span>
                <a
                  id="contact-call-btn"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#2E7D32] hover:bg-[#1E5622] text-white font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: (512) 809-7426</span>
                </a>
              </div>

              {/* WhatsApp direct link */}
              <a
                id="contact-whatsapp-link"
                href={`https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=Hi%20Yoli's%20Tacos!%20I'd%20like%20to%20place%20an%20order%20or%20ask%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/10 font-bold text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Hours Table Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#2D1B0E]/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold text-[#2D1B0E] font-['Outfit'] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C65D2E]" />
                  Weekly Hours
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] font-bold">
                  Open 7 Days
                </span>
              </div>

              <div className="divide-y divide-[#2D1B0E]/5 text-sm">
                {SCHEDULE.map((item) => {
                  const isToday = item.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`py-2.5 px-3 flex items-center justify-between rounded-lg transition-colors ${
                        isToday
                          ? 'bg-[#FFF8E7] font-bold border-l-4 border-[#C65D2E] text-[#2D1B0E]'
                          : 'text-[#2D1B0E]/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C65D2E] text-white font-extrabold uppercase">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={`${isToday ? 'text-[#C65D2E]' : 'text-[#2D1B0E]'}`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#2D1B0E]/10 text-xs text-[#2D1B0E]/70 text-center">
                Breakfast served daily starting at 7:00 AM • Late night tacos Fri & Sat till 12:00 AM
              </div>
            </div>
          </div>

          {/* Map Embed Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#2D1B0E]/10 shadow-md">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-bold text-[#2D1B0E] uppercase tracking-wider">
                    Interactive Location Map
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#C65D2E] hover:underline flex items-center gap-1"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-[#2D1B0E]/10 bg-slate-100">
                <iframe
                  title="Yoli's Tacos Y Mas Map Location at 141 Tahitian Dr A Bastrop TX"
                  src={RESTAURANT_INFO.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#2D1B0E]/70">
                <span>📍 141 Tahitian Dr A, Bastrop, TX 78602</span>
                <span>Near Tahitian Village • Easy parking out front</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
