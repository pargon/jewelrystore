import { CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants/app';
import { Product } from '../types/common';

// Agregando productos de products.ts para consolidar en un solo archivo
export const featuredProducts = [
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

export const newProducts = [
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
  }
];

export const PRODUCTOS_DATA = {
  features: [
    {
      title: "Calidad Premium",
      icon: "💎",
      description: "Productos de la más alta calidad y durabilidad"
    },
    {
      title: "Diseños Únicos", 
      icon: "🎨",
      description: "Piezas exclusivas y diseños vanguardistas"
    },
    {
      title: "Garantía Total",
      icon: "🛡️",
      description: "Respaldo completo en todos nuestros productos"
    },
    {
      title: "Envío Seguro",
      icon: "📦",
      description: "Envíos asegurados a todo el país"
    }
  ],

  products: [
    {
      id: 1,
      name: "Anillo de Compromiso Diamante",
      price: "$125.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegante anillo de compromiso con diamante central de 1 quilate",
      category: "Anillos",
      brand: "Diamond Collection"
    },
    {
      id: 2,
      name: "Collar de Perlas Cultivadas",
      price: "$85.000",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hermoso collar de perlas cultivadas naturales",
      category: "Collares",
      brand: "Pearl Luxury"
    },
    {
      id: 3,
      name: "Aretes de Oro Blanco",
      price: "$45.000",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Delicados aretes en oro blanco 18k con incrustaciones",
      category: "Aretes",
      brand: "Gold Style"
    },
    {
      id: 4,
      name: "Pulsera de Plata Sterling",
      price: "$32.000",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegante pulsera en plata sterling 925 con detalles únicos",
      category: "Pulseras",
      brand: "Silver Dreams"
    },
    {
      id: 5,
      name: "Cadena de Oro Amarillo",
      price: "$78.000",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cadena maciza de oro amarillo 18k, diseño clásico",
      category: "Cadenas",
      brand: "Golden Classic"
    },
    {
      id: 6,
      name: "Broche Art Déco",
      price: "$95.000",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Broche vintage estilo Art Déco con piedras preciosas",
      category: "Broches",
      brand: "Vintage Luxury"
    },
    {
      id: 7,
      name: "Gemelos de Platino",
      price: "$115.000",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Gemelos elegantes en platino con grabados personalizables",
      category: "Gemelos",
      brand: "Platinum Elite"
    },
    {
      id: 8,
      name: "Tiara de Novia",
      price: "$185.000",
      image: "https://images.unsplash.com/photo-1594736797933-d0409ba962d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Tiara exclusiva para novia con cristales y perlas",
      category: "Tiaras",
      brand: "Bridal Dreams"
    }
  ]
};

export const PRODUCTOS_ACTIONS = {
  viewDetails: (product: Product) => {
    // Lógica para mostrar detalles del producto
    window.location.href = `/producto/${product.id}`;
  },

  addToWishlist: (product: Product) => {
    // Lógica para agregar a lista de deseos
    alert(`${product.name} agregado a favoritos`);
  },

  contactWhatsApp: () => {
    const message = WHATSAPP_MESSAGES.general || 'Hola, estoy interesado en sus productos de joyería.';
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  },

  callPhone: () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  },

  sendEmail: () => {
    const subject = 'Consulta sobre Productos';
    const body = 'Hola, me gustaría recibir más información sobre sus productos.';
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
};
