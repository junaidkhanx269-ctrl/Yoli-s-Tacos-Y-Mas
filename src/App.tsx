import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuHighlights } from './components/MenuHighlights';
import { Reviews } from './components/Reviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { OrderModal } from './components/OrderModal';
import { CartItem, MenuItem } from './types';
import { MENU_ITEMS } from './data/restaurantData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  // Initialize with a popular starter or empty
  const [cart, setCart] = useState<CartItem[]>([
    { menuItem: MENU_ITEMS[0], quantity: 1, tortillaChoice: 'Corn' }
  ]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((c) => c.menuItem.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      } else {
        return [...prevCart, { menuItem: item, quantity: 1, tortillaChoice: 'Corn' }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#2D1B0E] flex flex-col font-sans pb-16 md:pb-0">
      {/* Navigation */}
      <Navbar
        onOpenOrder={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenOrder={() => setIsOrderModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Menu Highlights Section */}
        <MenuHighlights
          onSelectItem={handleAddToCart}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 4. Customer Reviews Section */}
        <Reviews />

        {/* 5. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Sticky Mobile Navigation Bar */}
      <MobileBottomBar
        onOpenOrder={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* Online Ordering Drawer / Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
