import { Product } from '../types';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "ALIANZAS DE ORO 18K",
    price: 25000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&crop=center",
    category: "alianzas",
    brand: "Diamond",
    isFeatured: true,
    description: "Alianzas clásicas de oro 18k, fabricadas a pedido",
    stock: 10
  },
  {
    id: 2,
    name: "RELOJ PADDLE WATCH",
    price: 32199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center",
    category: "relojes",
    brand: "Paddle Watch",
    isFeatured: true,
    description: "Reloj deportivo resistente al agua",
    stock: 5
  },
  {
    id: 3,
    name: "SMARTWATCH PADDLE",
    price: 45000,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop&crop=center",
    category: "smartwatches",
    brand: "Paddle",
    isFeatured: true,
    description: "Smartwatch con múltiples funciones deportivas",
    stock: 8
  }
];

export const newProducts: Product[] = [
  {
    id: 4,
    name: "RELOJ TOMMY HILFIGER",
    price: 28500,
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=300&fit=crop&crop=center",
    category: "relojes",
    brand: "Tommy Hilfiger",
    isNew: true,
    description: "Reloj elegante de la marca Tommy Hilfiger",
    stock: 3
  },
  {
    id: 5,
    name: "RELOJ CASIO G-SHOCK",
    price: 18900,
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=300&fit=crop&crop=center",
    category: "relojes",
    brand: "Casio",
    isNew: true,
    description: "Reloj resistente Casio G-Shock",
    stock: 12
  }
];
