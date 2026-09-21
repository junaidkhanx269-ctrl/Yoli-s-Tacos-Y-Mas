export interface MenuItem {
  id: string;
  name: string;
  spanishName?: string;
  description: string;
  price: number;
  category: 'breakfast' | 'specialties' | 'mains' | 'sides';
  iconName: string;
  badge?: string;
  popular?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  tag: string;
  rating: number;
  highlight: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  tortillaChoice?: 'Corn' | 'Flour';
}
