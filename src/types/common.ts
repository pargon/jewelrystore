/**
 * TIPOS COMUNES - Interfaces centralizadas
 * Interfaces reutilizables para evitar el uso de 'any'
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
  features?: string[];
  specs?: Record<string, string>;
}

// Servicio de composturas
export interface Service {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category?: string;
  duration?: string;
  warranty?: string;
}

// Información de contacto
export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
}

// Enlaces sociales
export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp?: string;
}

// Datos de formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

// Datos de solicitud de servicio
export interface ServiceRequestData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  watchBrand?: string;
  watchModel?: string;
  problemDescription: string;
  urgency: 'low' | 'medium' | 'high';
}

// Filtro genérico
export interface Filter {
  name: string;
  active: boolean;
  count?: number;
}

// Categoría de producto
export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

// Acción genérica con producto
export type ProductAction = (product: Product) => void;

// Acción genérica con servicio
export type ServiceAction = (service: Service) => void;

// Función de filtrado
export type FilterFunction<T> = (category: string, items: T[]) => T[];

// Props comunes para componentes de display
export interface DisplayComponentProps {
  title: string;
  description: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLinks;
}
