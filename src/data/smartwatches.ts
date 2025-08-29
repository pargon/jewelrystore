import { CONTACT_INFO, WHATSAPP_MESSAGES, DEFAULT_IMAGES } from '../constants/app';
import { Product } from '../types/common';

export const SMARTWATCHES_DATA = {
  hero: {
    title: "Smartwatches",
    description: "La tecnología más avanzada en tu muñeca. Monitores de salud, GPS, conectividad y mucho más en los mejores smartwatches del mercado."
  },
  
  features: [
    {
      title: "Monitor Cardíaco",
      icon: "❤️",
      description: "Seguimiento continuo del ritmo cardíaco"
    },
    {
      title: "GPS Integrado", 
      icon: "📍",
      description: "Localización precisa y mapas offline"
    },
    {
      title: "Apps Nativas",
      icon: "📱", 
      description: "Aplicaciones optimizadas para tu muñeca"
    },
    {
      title: "Resistente al Agua",
      icon: "💧",
      description: "Certificación IPX8 para deportes acuáticos"
    }
  ],

  products: [
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: "$399",
      image: DEFAULT_IMAGES.placeholder,
      description: "El smartwatch más avanzado con GPS y monitoreo de salud",
      features: ["GPS", "Monitor Cardíaco", "Resistente al Agua", "Siri"],
      specs: {
        battery: "18 horas",
        display: "Always-On Retina",
        connectivity: "4G LTE",
        sensors: "ECG, SpO2, Temperatura"
      }
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 6",
      price: "$329", 
      image: DEFAULT_IMAGES.placeholder,
      description: "Smartwatch Android con seguimiento completo de fitness",
      features: ["Android Compatible", "Samsung Health", "40+ Deportes", "Bluetooth"],
      specs: {
        battery: "40 horas",
        display: "Super AMOLED",
        connectivity: "Bluetooth 5.3",
        sensors: "BioActive Sensor"
      }
    },
    {
      id: 3,
      name: "Garmin Fenix 7",
      price: "$699",
      image: DEFAULT_IMAGES.placeholder, 
      description: "Para aventureros extremos con GPS multi-banda",
      features: ["GPS Multi-banda", "Mapas Topográficos", "Batería 18 días", "Deportes"],
      specs: {
        battery: "18 días",
        display: "Memory-in-Pixel",
        connectivity: "Wi-Fi, Bluetooth",
        sensors: "PulseOx, Brújula"
      }
    },
    {
      id: 4,
      name: "Fitbit Versa 4",
      price: "$199",
      image: DEFAULT_IMAGES.placeholder,
      description: "Enfocado en fitness y bienestar personal", 
      features: ["6+ días batería", "Spotify", "Google Wallet", "Estrés"],
      specs: {
        battery: "6+ días",
        display: "AMOLED",
        connectivity: "Bluetooth, Wi-Fi", 
        sensors: "SpO2, Estrés, Sueño"
      }
    },
    {
      id: 5,
      name: "Amazfit GTR 4",
      price: "$179",
      image: DEFAULT_IMAGES.placeholder,
      description: "Gran autonomía con diseño premium",
      features: ["14 días batería", "150+ Deportes", "Alexa", "GPS"],
      specs: {
        battery: "14 días",
        display: "HD AMOLED",
        connectivity: "Bluetooth 5.0",
        sensors: "BioTracker 4.0"
      }
    },
    {
      id: 6,
      name: "Huawei Watch GT 3",
      price: "$229",
      image: DEFAULT_IMAGES.placeholder,
      description: "Elegancia con tecnología de punta",
      features: ["14 días batería", "100+ Deportes", "Llamadas Bluetooth", "Salud 24/7"],
      specs: {
        battery: "14 días",
        display: "AMOLED Color",
        connectivity: "Bluetooth 5.2",
        sensors: "TruSleep, TruRelax"
      }
    }
  ],

  categories: [
    { name: "Todos", active: true },
    { name: "Deportivo", active: false },
    { name: "Elegante", active: false },
    { name: "Aventura", active: false },
    { name: "Fitness", active: false }
  ],

  testimonials: [
    {
      name: "María González",
      product: "Apple Watch Series 9",
      comment: "Increíble la precisión del monitor cardíaco durante mis entrenamientos.",
      rating: 5
    },
    {
      name: "Carlos Ruiz", 
      product: "Garmin Fenix 7",
      comment: "Perfecto para mis aventuras de montañismo. GPS súper preciso.",
      rating: 5
    },
    {
      name: "Ana Torres",
      product: "Fitbit Versa 4", 
      comment: "Me encanta el seguimiento del sueño y las notificaciones.",
      rating: 4
    }
  ]
};

// Funciones de acción para botones
export const SMARTWATCHES_ACTIONS = {
  viewMore: (product: Product) => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.smartwatches(product.name))}`,
      '_blank'
    );
  },
  
  compare: () => {
    alert('Funcionalidad de comparación próximamente disponible');
  },

  requestQuote: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría una cotización personalizada para smartwatches.')}`,
      '_blank'
    );
  },

  callExpert: () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self');
  }
};
