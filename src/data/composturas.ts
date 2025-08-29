import { CONTACT_INFO, WHATSAPP_MESSAGES, DEFAULT_IMAGES } from '../constants/app';
import { Service } from '../types/common';

export const COMPOSTURAS_DATA = {
  hero: {
    title: "Servicio de Composturas",
    description: "Especialistas en reparación y mantenimiento de relojes y joyas. Más de 25 años devolviendo la vida a tus piezas más preciadas."
  },

  stats: [
    { number: "25+", label: "Años de Experiencia", icon: "🏆" },
    { number: "5,000+", label: "Reparaciones Exitosas", icon: "⚒️" },
    { number: "98%", label: "Satisfacción del Cliente", icon: "⭐" },
    { number: "24h", label: "Tiempo de Respuesta", icon: "⚡" }
  ],

  services: [
    {
      id: 1,
      title: "Reparación de Relojes",
      description: "Mantenimiento y reparación de todo tipo de relojes",
      price: "Desde $25",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "3-5 días laborales",
      category: "relojes",
      icon: "⌚",
      priority: "alta",
      includes: ["Diagnóstico gratuito", "Limpieza interna", "Cambio de batería", "Calibración"],
      warranty: "1 año",
      brands: ["Rolex", "Omega", "TAG Heuer", "Seiko", "Citizen", "Apple Watch"]
    },
    {
      id: 2,
      title: "Restauración de Joyas",
      description: "Devolvemos la vida a tus joyas más preciadas",
      price: "Desde $40",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "5-7 días laborales",
      category: "joyas",
      icon: "💎",
      priority: "alta",
      includes: ["Evaluación detallada", "Pulido profesional", "Engaste de piedras", "Garantía 6 meses"],
      warranty: "6 meses",
      brands: ["Oro", "Plata", "Platino", "Diamantes", "Perlas"]
    },
    {
      id: 3,
      title: "Cambio de Baterías",
      description: "Cambio rápido de baterías para relojes",
      price: "$15",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "Mientras esperas",
      category: "express",
      icon: "🔋",
      priority: "express",
      includes: ["Batería original", "Prueba de hermeticidad", "Limpieza básica", "Garantía 1 año"],
      warranty: "1 año",
      brands: ["Cuarzo", "Digital", "Solar", "Kinetic"]
    },
    {
      id: 4,
      title: "Ajuste de Tallas",
      description: "Ajustamos anillos, pulseras y cadenas",
      price: "Desde $20",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "1-2 días",
      category: "ajustes",
      icon: "📏",
      priority: "media",
      includes: ["Medición precisa", "Conservación del diseño", "Pulido final", "Sin daño al material"],
      warranty: "3 meses",
      brands: ["Anillos", "Pulseras", "Cadenas", "Brazaletes"]
    },
    {
      id: 5,
      title: "Soldadura de Metales",
      description: "Reparamos roturas en cadenas, anillos y pulseras",
      price: "Desde $30",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "2-3 días",
      category: "reparaciones",
      icon: "🔥",
      priority: "alta",
      includes: ["Soldadura invisible", "Refuerzo estructural", "Pulido completo", "Prueba de resistencia"],
      warranty: "6 meses",
      brands: ["Oro", "Plata", "Acero", "Platino"]
    },
    {
      id: 6,
      title: "Limpieza Profesional",
      description: "Limpieza profunda que devuelve el brillo original",
      price: "$18",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "1 día",
      category: "mantenimiento",
      icon: "✨",
      priority: "baja",
      includes: ["Limpieza ultrasónica", "Pulido a mano", "Desinfección", "Empaque premium"],
      warranty: "30 días",
      brands: ["Relojes", "Joyas", "Cadenas", "Pulseras"]
    },
    {
      id: 7,
      title: "Reemplazo de Cristales",
      description: "Cambio de cristales rotos o rayados",
      price: "Desde $35",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "2-4 días",
      category: "relojes",
      icon: "🔍",
      priority: "media",
      includes: ["Cristal original", "Sellado hermético", "Prueba de presión", "Garantía 6 meses"],
      warranty: "6 meses",
      brands: ["Mineral", "Zafiro", "Acrílico", "Gorilla Glass"]
    },
    {
      id: 8,
      title: "Reparación de Mecanismos",
      description: "Reparación de movimientos mecánicos y automáticos",
      price: "Desde $80",
      image: DEFAULT_IMAGES.placeholder,
      timeframe: "7-10 días",
      category: "relojes",
      icon: "⚙️",
      priority: "especializada",
      includes: ["Desmontaje completo", "Limpieza de componentes", "Lubricación", "Regulación de precisión"],
      warranty: "2 años",
      brands: ["Suizos", "Japoneses", "Alemanes", "Vintage"]
    }
  ],

  processSteps: [
    {
      step: 1,
      title: "Diagnóstico",
      description: "Evaluamos tu pieza sin costo y te damos un presupuesto detallado",
      icon: "🔍",
      duration: "15 min"
    },
    {
      step: 2,
      title: "Aprobación",
      description: "Una vez aprobado el presupuesto, comenzamos la reparación",
      icon: "✅",
      duration: "Inmediato"
    },
    {
      step: 3,
      title: "Reparación",
      description: "Nuestros expertos trabajan con precisión y cuidado",
      icon: "🔧",
      duration: "Variable"
    },
    {
      step: 4,
      title: "Control de Calidad",
      description: "Verificamos que todo funcione perfectamente",
      icon: "🛡️",
      duration: "30 min"
    },
    {
      step: 5,
      title: "Entrega",
      description: "Tu pieza lista con garantía incluida",
      icon: "📦",
      duration: "5 min"
    }
  ],

  categories: [
    { name: "Todos", active: true },
    { name: "Express", active: false },
    { name: "Relojes", active: false },
    { name: "Joyas", active: false },
    { name: "Reparaciones", active: false }
  ],

  faqs: [
    {
      question: "¿Cuánto tiempo toma una reparación?",
      answer: "Los tiempos varían según el tipo de reparación. Servicios simples como cambio de batería se hacen mientras esperas, mientras que reparaciones complejas pueden tomar 5-7 días."
    },
    {
      question: "¿Ofrecen garantía en sus reparaciones?",
      answer: "Sí, todas nuestras reparaciones incluyen garantía. El período varía según el servicio: desde 30 días hasta 2 años completos."
    },
    {
      question: "¿Qué marcas de relojes reparan?",
      answer: "Reparamos todas las marcas: Rolex, Omega, TAG Heuer, Seiko, Citizen, Casio, Apple Watch, Samsung, y muchas más."
    },
    {
      question: "¿El diagnóstico tiene costo?",
      answer: "No, el diagnóstico es completamente gratuito. Solo pagas si decides proceder con la reparación."
    },
    {
      question: "¿Trabajan con piezas vintage o antiguas?",
      answer: "Sí, somos especialistas en relojes y joyas vintage. Tenemos experiencia con piezas de más de 50 años de antigüedad."
    },
    {
      question: "¿Ofrecen servicio a domicilio?",
      answer: "Para reparaciones de alto valor (+$500) ofrecemos servicio de recolección y entrega a domicilio sin costo adicional."
    }
  ],

  testimonials: [
    {
      name: "María Carmen López",
      service: "Restauración de Joyas",
      comment: "Restauraron perfectamente el anillo de mi abuela. Quedó como nuevo pero conservando su esencia original.",
      rating: 5,
      timeAgo: "Hace 2 semanas"
    },
    {
      name: "Carlos Mendoza", 
      service: "Reparación de Relojes",
      comment: "Mi Rolex tenía 10 años sin servicio. Lo dejaron funcionando perfectamente y ahora es más preciso que nunca.",
      rating: 5,
      timeAgo: "Hace 1 mes"
    },
    {
      name: "Ana Sofía Torres",
      service: "Cambio de Baterías", 
      comment: "Servicio súper rápido. Cambio de batería mientras esperé tomando un café. Muy profesionales.",
      rating: 4,
      timeAgo: "Hace 3 días"
    }
  ],

  guarantees: [
    {
      title: "Diagnóstico Gratuito",
      description: "Evaluación completa sin costo",
      icon: "🆓"
    },
    {
      title: "Piezas Originales",
      description: "Solo usamos repuestos originales certificados",
      icon: "🔧"
    },
    {
      title: "Técnicos Certificados", 
      description: "Más de 25 años de experiencia",
      icon: "👨‍🔧"
    },
    {
      title: "Garantía Extendida",
      description: "Cobertura hasta 2 años según servicio",
      icon: "🛡️"
    }
  ]
};

// Funciones de acción para botones
export const COMPOSTURAS_ACTIONS = {
  requestService: (service: Service) => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.composturas)} Específicamente necesito: ${service.name}.`,
      '_blank'
    );
  },
  
  requestDiagnosis: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría solicitar un diagnóstico gratuito para mi reloj/joya.')}`,
      '_blank'
    );
  },

  moreInfo: (service: Service) => {
    alert(`Información detallada sobre ${service.name}:\n\nDescripción: ${service.description}\nCategoría: ${service.category}\nPrecio: ${service.price}`);
  },

  callNow: () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self');
  },

  whatsappContact: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.composturas)}`,
      '_blank'
    );
  },

  filterByCategory: (category: string, services: Service[]) => {
    if (category === 'Todos') return services;
    return services.filter(service => 
      service.category?.toLowerCase() === category.toLowerCase()
    );
  }
};
