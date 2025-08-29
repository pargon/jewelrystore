import { Category, Brand } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: "Relojes",
    slug: "relojes",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Smartwatches",
    slug: "smartwatches", 
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Alianzas",
    slug: "alianzas",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Composturas",
    slug: "composturas",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop&crop=center"
  }
];

export const brands: Brand[] = [
  { id: 1, name: "Paddle Watch" },
  { id: 2, name: "Tommy Hilfiger" },
  { id: 3, name: "Casio" },
  { id: 4, name: "Swatch" },
  { id: 5, name: "DKNY" },
  { id: 6, name: "Garmin" },
  { id: 7, name: "Adidas" },
  { id: 8, name: "Tressa" }
];
