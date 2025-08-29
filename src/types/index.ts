// Tipos para la aplicación de joyería Diamond
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
  stock?: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export interface Brand {
  id: number;
  name: string;
  logo?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface Transaction {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    transactionDate: Date;
}