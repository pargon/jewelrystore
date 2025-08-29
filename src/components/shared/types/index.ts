/**
 * TIPOS COMPARTIDOS
 * Interfaces y tipos para componentes reutilizables
 */

// Producto básico
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category?: string;
  brand?: string;
}

// Filtro de categoría
export interface Filter {
  id: string;
  label: string;
  color: string;
  isActive?: boolean;
}

// Footer related types
export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
}

// Props del PageHeader (title y description opcionales)
export interface PageHeaderProps {
  title?: string;
  description?: string;
  bgGradient?: string;
  textColor?: string;
}

// Props del CategoryFilters
export interface CategoryFiltersProps {
  filters: Filter[];
  onFilterClick: (filterId: string) => void;
}

// Props del ProductCard
export interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showAddButton?: boolean;
}

// Props del ProductGrid (actualizado)
export interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showAddButton?: boolean;
  columns?: 'auto' | '1' | '2' | '3' | '4';
  sectionTitle?: string;
}

// Props del CTASection
export interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  bgGradient?: string;
  textColor?: string;
  icon?: string;
}

// Tema de página
export interface PageTheme {
  pageHeader: {
    bgGradient: string;
    textColor: string;
  };
  ctaSection: {
    bgGradient: string;
    textColor: string;
  };
}

// Nombres de temas disponibles
export type ThemeName = 'default' | 'relojes' | 'smartwatches' | 'alianzas' | 'composturas' | 'contacto';
