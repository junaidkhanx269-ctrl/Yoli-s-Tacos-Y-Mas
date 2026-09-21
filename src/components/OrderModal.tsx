import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Phone, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { CartItem, MenuItem } from '../types';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onAddToCart: (item: MenuItem) => void;
  onClearCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onAddToCart,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('ASAP (~15-20 mins)');
  const [salsaChoice, setSalsaChoice] = useState("Grandma Yoli's Red Molcajete (Spicy)");
  const [tortillaChoice, setTortillaChoice] = useState<'Corn' | 'Flour'>('Corn');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const tax = subtotal * 0.0825; // 8.25% Texas sales tax
  const total = subtotal + tax;

  const constructWhatsAppMessage = () => {
    let msg = `*🌮 New Pickup Order - Yoli's Tacos Y Mas*\n`;
    msg += `--------------------------------\n`;
    if (customerName.trim()) {
      msg += `*Customer:* ${customerName.trim()}\n`;
    }
    msg += `*Pickup Time:* ${pickupTime}\n`;
    msg += `*Tortilla Preference:* ${tortillaChoice} Tortillas\n`;
    msg += `*Salsa:* ${salsaChoice}\n`;
    if (specialInstructions.trim()) {
      msg += `*Special Notes:* ${specialInstructions.trim()}\n`;
    }
    msg += `--------------------------------\n*Items:*\n`;

    cart.forEach((item) => {
      msg += `• ${item.quantity}x ${item.menuItem.name} ($${(item.menuItem.price * item.quantity).toFixed(2)})\n`;
    });

    msg += `--------------------------------\n`;
    msg += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
    msg += `*Estimated Total (with tax):* $${total.toFixed(2)}\n\n`;
    msg += `_Thank you Yoli's family! Please confirm when my order is received._`;

    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${constructWhatsAppMessage()}`;
    window.open(url, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="order-online-modal"
        className="bg-[#FFFDF7] text-[#2D1B0E] w-full max-w-2xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-[#C65D2E]/40"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#2D1B0E] text-[#FFF8E7] flex items-center justify-between border-b border-[#C65D2E]/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#C65D2E] text-white flex items-center justify-center shadow">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold font-['Outfit']">
                Order Pickup Online
              </h3>
              <p className="text-xs text-[#FFF8E7]/70">
                141 Tahitian Dr A, Bastrop • Fresh & Hot Pickup
              </p>
            </div>
          </div>

          <button
            id="close-order-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* Cart items list */}
          {cart.length === 0 ? (
            <div className="text-center py-8 px-4 space-y-3 bg-white rounded-xl border border-dashed border-[#2D1B0E]/20">
              <div className="w-12 h-12 rounded-full bg-[#FFF8E7] text-[#C65D2E] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-extrabold text-base text-[#2D1B0E]">Your order bag is currently empty</p>
              <p className="text-xs text-[#2D1B0E]/70 max-w-xs mx-auto">
                Select your favorite homemade Mexican items below to get started!
              </p>

              {/* Quick-add buttons for popular items */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {MENU_ITEMS.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onAddToCart(item)}
                    className="p-2.5 text-left rounded-lg bg-[#FFF8E7] hover:bg-[#F3E5C5] border border-[#C65D2E]/20 transition-colors text-xs space-y-0.5"
                  >
                    <p className="font-bold text-[#2D1B0E] truncate">{item.name}</p>
                    <p className="text-[#C65D2E] font-black">${item.price.toFixed(2)}</p>
                    <span className="text-[10px] text-[#2E7D32] font-semibold">+ Add to Order</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#C65D2E]">
                  Your Selected Dishes ({cart.length})
                </h4>
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear All
                </button>
              </div>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="p-3 rounded-xl bg-white border border-[#2D1B0E]/10 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm text-[#2D1B0E] truncate">
                        {item.menuItem.name}
                      </p>
                      <p className="text-xs text-[#C65D2E] font-extrabold">
                        ${(item.menuItem.price * item.quantity).toFixed(2)}{' '}
                        <span className="text-[10px] text-[#2D1B0E]/50 font-normal">
                          (${item.menuItem.price.toFixed(2)} each)
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center border border-[#2D1B0E]/20 rounded-lg overflow-hidden bg-[#FFF8E7]">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="px-2 py-1 hover:bg-[#F3E5C5] text-[#2D1B0E] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-black min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="px-2 py-1 hover:bg-[#F3E5C5] text-[#2D1B0E] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add more items suggestion */}
              <div className="pt-1">
                <span className="text-xs font-bold text-[#2D1B0E]/70 block mb-1.5">
                  Quick Add Sides & Drinks:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {MENU_ITEMS.filter((m) => !cart.some((c) => c.menuItem.id === m.id)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onAddToCart(item)}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-[#2D1B0E]/15 text-xs font-semibold hover:border-[#C65D2E] hover:text-[#C65D2E] whitespace-nowrap transition-colors flex items-center gap-1 shrink-0"
                    >
                      <Plus className="w-3 h-3" />
                      {item.name} (${item.price.toFixed(2)})
                    </button>
                  ))}
                </div>
              </div>

              {/* Customization Details */}
              <div className="pt-2 border-t border-[#2D1B0E]/10 space-y-4">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#C65D2E] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Order Preferences & Pickup Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0E] mb-1">
                      Your Name for Pickup *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maria or John"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#2D1B0E]/20 text-xs focus:outline-none focus:ring-2 focus:ring-[#C65D2E]"
                    />
                  </div>

                  {/* Pickup Time */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0E] mb-1">
                      Requested Pickup Time
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#2D1B0E]/20 text-xs focus:outline-none focus:ring-2 focus:ring-[#C65D2E]"
                    >
                      <option>ASAP (~15-20 mins)</option>
                      <option>In 30-40 mins</option>
                      <option>In 1 hour</option>
                      <option>Later today (specify in notes)</option>
                    </select>
                  </div>

                  {/* Tortilla Preference */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0E] mb-1">
                      Tortilla Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTortillaChoice('Corn')}
                        className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                          tortillaChoice === 'Corn'
                            ? 'bg-[#C65D2E] text-white border-[#C65D2E]'
                            : 'bg-white text-[#2D1B0E] border-[#2D1B0E]/20'
                        }`}
                      >
                        Handmade Corn
                      </button>
                      <button
                        type="button"
                        onClick={() => setTortillaChoice('Flour')}
                        className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                          tortillaChoice === 'Flour'
                            ? 'bg-[#C65D2E] text-white border-[#C65D2E]'
                            : 'bg-white text-[#2D1B0E] border-[#2D1B0E]/20'
                        }`}
                      >
                        Warm Flour
                      </button>
                    </div>
                  </div>

                  {/* Salsa Preference */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0E] mb-1">
                      Grandma's Fresh Salsa
                    </label>
                    <select
                      value={salsaChoice}
                      onChange={(e) => setSalsaChoice(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#2D1B0E]/20 text-xs focus:outline-none focus:ring-2 focus:ring-[#C65D2E]"
                    >
                      <option>Grandma Yoli's Red Molcajete (Spicy)</option>
                      <option>Tangy Tomatillo Salsa Verde (Medium)</option>
                      <option>Fresh Pico de Gallo (Mild)</option>
                      <option>Extra Salsa on the side</option>
                    </select>
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0E] mb-1">
                    Special Kitchen Notes / Dietary Requests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., extra cilantro & lime wedges, crispy birria shell..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#2D1B0E]/20 text-xs focus:outline-none focus:ring-2 focus:ring-[#C65D2E]"
                  />
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="p-3.5 rounded-xl bg-[#FFF8E7] border border-[#2D1B0E]/10 space-y-1.5 text-xs">
                <div className="flex justify-between text-[#2D1B0E]/80">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#2D1B0E]/80">
                  <span>Estimated TX Tax (8.25%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#2D1B0E] pt-1.5 border-t border-[#2D1B0E]/10">
                  <span>Estimated Total</span>
                  <span className="text-[#C65D2E] text-base">${total.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-[#2D1B0E]/60 text-center pt-1">
                  Pay at counter upon pickup (Cash, Cards, Apple Pay accepted)
                </p>
              </div>

              {orderSent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your order was drafted for WhatsApp! You can also call (512) 809-7426 to verify right away.</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#2D1B0E]/10 space-y-2.5 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* WhatsApp Send Button */}
            <button
              id="modal-send-whatsapp-btn"
              onClick={handleSendWhatsApp}
              disabled={cart.length === 0}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp ({cart.length})</span>
            </button>

            {/* Direct Call In Order Button */}
            <a
              id="modal-call-kitchen-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2E7D32] hover:bg-[#1E5622] text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>Call Kitchen: (512) 809-7426</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-[#2D1B0E]/60">
            Yoli's Tacos Y Mas • 141 Tahitian Dr A, Bastrop TX • Open 7AM–9PM (Fri-Sat till 12AM)
          </p>
        </div>
      </div>
    </div>
  );
};
