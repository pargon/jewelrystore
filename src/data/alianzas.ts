import { CONTACT_INFO, WHATSAPP_MESSAGES, DEFAULT_IMAGES } from '../constants/app';
import { Product } from '../types/common';

export const ALIANZAS_DATA = {
  hero: {
    title: "Alianzas de Matrimonio",
    subtitle: "Para toda la vida",
    description: "Simboliza tu amor eterno con nuestras exclusivas alianzas de matrimonio. Diseños únicos crafteados con los mejores materiales."
  },
  
  services: [
    {
      title: "Grabado Personalizado",
      description: "Agrega nombres, fechas o mensajes especiales",
      icon: "✍️"
    },
    {
      title: "Ajuste de Tallas",
      description: "Ajustamos la talla perfecta sin costo adicional",
      icon: "📏"
    },
    {
      title: "Limpieza de Por Vida",
      description: "Mantenimiento y limpieza gratuita de por vida",
      icon: "✨"
    },
    {
      title: "Garantía Extendida",
      description: "2 años de garantía en todos nuestros productos",
      icon: "🛡️"
    }
  ],
  
  products: [
    {
      id: 1,
      name: "Alianzas Clásicas Oro Blanco",
      price: "$850",
      image: DEFAULT_IMAGES.placeholder,
      description: "Elegantes alianzas en oro blanco 18k, perfectas para simbolizar el amor eterno",
      material: "Oro Blanco 18k",
      width: "4mm"
    },
    {
      id: 2,
      name: "Alianzas Oro Amarillo con Diamantes",
      price: "$1,200",
      image: DEFAULT_IMAGES.placeholder,
      description: "Alianzas tradicionales en oro amarillo con incrustaciones de diamantes",
      material: "Oro Amarillo 18k",
      width: "5mm"
    },
    {
      id: 3,
      name: "Alianzas Platino Premium",
      price: "$1,850",
      image: DEFAULT_IMAGES.placeholder,
      description: "Máxima calidad en platino puro, hipoalergénicas y duraderas",
      material: "Platino 950",
      width: "4.5mm"
    },
    {
      id: 4,
      name: "Alianzas Bicolor Exclusivas",
      price: "$1,100",
      image: DEFAULT_IMAGES.placeholder,
      description: "Combinación única de oro blanco y amarillo en diseño exclusivo",
      material: "Oro Bicolor 18k",
      width: "5.5mm"
    }
  ],
  
  processSteps: [
    {
      step: 1,
      title: "Consulta Gratuita",
      description: "Agenda una cita para conocer tu estilo y preferencias"
    },
    {
      step: 2,
      title: "Diseño y Medidas",
      description: "Selecciona el diseño perfecto y tomamos las medidas exactas"
    },
    {
      step: 3,
      title: "Entrega Perfecta",
      description: "Recibe tu alianza en un empaque especial con certificado"
    }
  ]
};

// Funciones de acción para botones
export const ALIANZAS_ACTIONS = {
  scheduleAppointment: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.alianzas)}`,
      '_blank'
    );
  },
  
  callNow: () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self');
  },
  
  viewDetails: (product: Product) => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`¡Hola! Me interesa conocer más sobre ${product.name}.`)}`,
      '_blank'
    );
  }
};
