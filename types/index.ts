export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  description: string;
  items: MenuItem[];
}

export interface Review {
  quote: string;
  source: string;
  author?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    note: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: BusinessHours[];
  established: number;
  yelp: {
    rating: number;
    reviews: number;
    url: string;
  };
  tripAdvisor: {
    rating: number;
    reviews: number;
    url: string;
  };
  google: {
    rating: number;
    reviews?: number;
  };
  social: {
    instagram: string;
    facebook: string;
    yelp: string;
  };
}

export interface CateringService {
  title: string;
  description: string;
  icon: string;
}

export interface GiftBasketOption {
  name: string;
  description: string;
  priceRange: string;
}

export interface CateringSection {
  id: string;
  label: string;
  description?: string;
  items: { name: string; description: string; price: string }[];
}
