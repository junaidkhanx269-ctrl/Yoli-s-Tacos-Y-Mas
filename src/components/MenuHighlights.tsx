import React, { useState } from 'react';
import { 
  Flame, 
  Egg, 
  Sparkles, 
  Utensils, 
  Layers, 
  Soup, 
  CheckCircle2, 
  Plus, 
  ShoppingBag,
  Star,
  Check
} from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuHighlightsProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onSelectItem, onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'breakfast', label: 'Breakfast Tacos (7AM)' },
    { id: 'specialties', label: 'Birria & Barbacoa' },
    { id: 'mains', label: 'Enchiladas & Burritos' },
    { id: 'sides', label: 'Chips, Salsa & Sides' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C65D2E]" />;
      case 'Egg':
        return <Egg className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C65D2E]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#2E7D32]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-700" />;
      case 'Soup':
        return <Soup className="w-5 h-5 text-[#C65D2E]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />;
    }
  };

  const handleAddItem = (item: MenuItem) => {
    onSelectItem(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#FFFDF7] text-[#2D1B0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C65D2E]/10 text-[#C65D2E] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5" />
            Traditional Homemade Flavors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1B0E] font-['Outfit']">
            Menu Highlights
          </h2>
          <p className="text-sm sm:text-base text-[#2D1B0E]/75 leading-relaxed">
            Prepared fresh daily using Grandma's authentic recipes, hand-pressed tortillas, and premium meats. 
            Tap any dish to customize and add to your pickup order.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 sm:mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#C65D2E] text-white shadow-md shadow-[#C65D2E]/25'
                  : 'bg-[#FFF8E7] text-[#2D1B0E]/80 hover:bg-[#F3E5C5] border border-[#2D1B0E]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-card-${item.id}`}
              className="flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#2D1B0E]/10 shadow-sm hover:shadow-xl hover:border-[#C65D2E]/40 transition-all group relative"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF8E7] border border-[#C65D2E]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {renderIcon(item.iconName)}
                  </div>
                  
                  {item.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-[#2D1B0E] font-['Outfit'] group-hover:text-[#C65D2E] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-black text-[#C65D2E] font-['Outfit'] shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {item.spanishName && (
                  <p className="text-xs font-semibold text-[#C65D2E]/90 italic mt-0.5 mb-2">
                    {item.spanishName}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#2D1B0E]/80 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="mt-5 pt-4 border-t border-[#2D1B0E]/5 flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-[#2D1B0E]/60 flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  Made fresh to order
                </span>

                <button
                  id={`add-btn-${item.id}`}
                  onClick={() => handleAddItem(item)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    justAddedId === item.id
                      ? 'bg-[#2E7D32] text-white'
                      : 'bg-[#C65D2E] hover:bg-[#A6471E] text-white shadow-sm'
                  }`}
                >
                  {justAddedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#2D1B0E] text-[#FFF8E7] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C65D2E]/30 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-[#FFF8E7] font-['Outfit']">
              Craving something custom or placing a family feast?
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80">
              Call our kitchen directly or order online for fast, hot pickup!
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={onOpenOrderModal}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C65D2E] hover:bg-[#A6471E] text-white font-bold text-sm shadow-md transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Full Order</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
