import { MenuItem, Review } from '../types';

export const RESTAURANT_INFO = {
  name: "Yoli's Tacos Y Mas",
  tagline: "Authentic Homemade Mexican Food - Since 2014",
  address: "141 Tahitian Dr A, Bastrop, TX 78602",
  phone: "(512) 809-7426",
  phoneRaw: "+15128097426",
  whatsAppNumber: "15128097426",
  hoursSummary: "7AM-9PM Daily (Fri-Sat till 12AM)",
  ratingScore: "92%",
  ratingText: "92% Recommend",
  city: "Bastrop, TX",
  foundedYear: "2014",
  facebookUrl: "https://www.facebook.com/search/top?q=Yoli%27s%20Tacos%20Y%20Mas%20Bastrop",
  mapDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=141+Tahitian+Dr+A,+Bastrop,+TX+78602",
  mapEmbedUrl: "https://maps.google.com/maps?q=141+Tahitian+Dr+A,+Bastrop,+TX+78602&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'birria-tacos',
    name: 'Birria Tacos',
    spanishName: 'Tacos de Birria con Consomé',
    description: 'Crispy pan-fried corn tortillas filled with tender slow-simmered beef birria, melted Oaxaca cheese, diced onions, fresh cilantro, served with piping hot rich consommé dipping broth.',
    price: 13.99,
    category: 'specialties',
    iconName: 'Flame',
    badge: 'House Specialty',
    popular: true,
  },
  {
    id: 'breakfast-tacos',
    name: 'Breakfast Tacos',
    spanishName: 'Tacos Mañaneros Hechos a Mano',
    description: 'Fresh cracked eggs, crispy smoked bacon, savory chorizo, seasoned potatoes or refried beans wrapped in your choice of warm handmade corn or flour tortillas.',
    price: 3.49,
    category: 'breakfast',
    iconName: 'Egg',
    badge: 'Served from 7AM',
    popular: true,
  },
  {
    id: 'barbacoa',
    name: 'Barbacoa',
    spanishName: 'Auténtica Barbacoa de Res',
    description: 'Traditional slow-steamed beef cooked overnight until melt-in-your-mouth tender, served by the pound or taco with lime wedges, chopped cilantro, diced white onion, and hot tortillas.',
    price: 14.50,
    category: 'specialties',
    iconName: 'Sparkles',
    badge: 'Weekend Tradition',
    popular: true,
  },
  {
    id: 'enchiladas',
    name: 'Enchiladas',
    spanishName: 'Enchiladas Caseras (Rojas o Verdes)',
    description: 'Three hand-rolled corn tortillas loaded with seasoned shredded chicken or gooey melted cheese, drenched in Grandma Yoli’s slow-simmered red ancho or tangy tomatillo salsa.',
    price: 12.99,
    category: 'mains',
    iconName: 'Utensils',
    badge: 'Grandma’s Recipe',
  },
  {
    id: 'burritos',
    name: 'Burritos',
    spanishName: 'Burritos Gigantes',
    description: 'A large, warm flour tortilla stuffed to the brim with your choice of grilled carne asada, carnitas, or chicken, paired with Mexican rice, refried beans, shredded lettuce, and melted cheese.',
    price: 10.99,
    category: 'mains',
    iconName: 'Layers',
    badge: 'Big Portion',
  },
  {
    id: 'chips-salsa',
    name: 'Chips & Fresh Salsa',
    spanishName: 'Totopos Caseros y Salsa de Molcajete',
    description: 'Golden crispy tortilla chips fried fresh in-house every morning, paired with Grandma Yoli’s roasted tomato, garlic, and serrano pepper fire-roasted salsa.',
    price: 4.99,
    category: 'sides',
    iconName: 'Soup',
    badge: 'Fried In-House Daily',
    popular: true,
  },
  {
    id: 'rice-beans',
    name: 'Rice & Beans',
    spanishName: 'Arroz Rojo y Frijoles Refritos',
    description: 'Authentic Mexican red rice cooked in seasoned tomato broth and hearty slow-simmered pinto beans mashed with traditional spices.',
    price: 3.99,
    category: 'sides',
    iconName: 'CheckCircle2',
    badge: 'Fresh Daily',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    author: 'Lupe',
    quote: 'Their food was very tasteful',
    highlight: 'Very Tasteful & Fresh',
    tag: 'Verified Bastrop Local',
    rating: 5,
  },
  {
    id: 'review-2',
    author: 'Robin',
    quote: 'Tastes so authentic like grandma\'s kitchen',
    highlight: 'Just Like Grandma\'s Kitchen',
    tag: 'Regular Diner',
    rating: 5,
  },
  {
    id: 'review-3',
    author: 'Severo',
    quote: 'Great portions for price',
    highlight: 'Great Portions & Fair Price',
    tag: 'Verified Customer',
    rating: 5,
  }
];

export const SCHEDULE = [
  { day: 'Monday', hours: '7:00 AM – 9:00 PM', dayIndex: 1 },
  { day: 'Tuesday', hours: '7:00 AM – 9:00 PM', dayIndex: 2 },
  { day: 'Wednesday', hours: '7:00 AM – 9:00 PM', dayIndex: 3 },
  { day: 'Thursday', hours: '7:00 AM – 9:00 PM', dayIndex: 4 },
  { day: 'Friday', hours: '7:00 AM – 12:00 AM (Midnight)', dayIndex: 5 },
  { day: 'Saturday', hours: '7:00 AM – 12:00 AM (Midnight)', dayIndex: 6 },
  { day: 'Sunday', hours: '7:00 AM – 9:00 PM', dayIndex: 0 },
];
