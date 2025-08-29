import { CONTACT_INFO, WHATSAPP_MESSAGES, DEFAULT_IMAGES } from '../constants/app';
import { Product } from '../types/common';

export const RELOJES_DATA = {
  features: [
    {
      title: "Precisión Suiza",
      icon: "⚙️",
      description: "Movimientos de alta precisión certificados"
    },
    {
      title: "Materiales Premium", 
      icon: "💎",
      description: "Oro, platino y aceros de la más alta calidad"
    },
    {
      title: "Garantía Internacional",
      icon: "🛡️",
      description: "Respaldo mundial de las mejores marcas"
    },
    {
      title: "Ediciones Limitadas",
      icon: "🌟",
      description: "Piezas exclusivas y de colección"
    }
  ],

  products: [
    {
      id: 1,
      name: "Rolex Submariner",
      price: "$8,500",
      image: DEFAULT_IMAGES.placeholder,
      description: "Reloj de lujo con resistencia al agua hasta 300 metros",
      category: "lujo",
      features: ["Resistente al agua 300m", "Movimiento automático", "Acero 904L", "Bisel unidireccional"],
      specs: {
        movement: "Perpetual, mecánico automático",
        waterproof: "300 metros",
        case: "Oystersteel de 40 mm",
        bracelet: "Oyster, eslabones macizos de tres piezas"
      },
      brand: "Rolex"
    },
    {
      id: 2,
      name: "Omega Speedmaster",
      price: "$3,200",
      image: DEFAULT_IMAGES.placeholder,
      description: "El reloj que llegó a la luna, cronógrafo profesional",
      category: "deportivo",
      features: ["Cronógrafo manual", "Cristal hesalita", "Resistente al agua 50m", "Movimiento 1861"],
      specs: {
        movement: "Omega Co-Axial Calibre 1861",
        waterproof: "50 metros",
        case: "Acero inoxidable de 42 mm",
        bracelet: "Acero inoxidable con cierre desplegable"
      },
      brand: "Omega"
    },
    {
      id: 3,
      name: "TAG Heuer Carrera",
      price: "$1,800",
      image: DEFAULT_IMAGES.placeholder,
      description: "Elegancia deportiva con precisión suiza",
      category: "deportivo",
      features: ["Cronógrafo automático", "Cristal zafiro", "Resistente al agua 100m", "Calibre Heuer 02"],
      specs: {
        movement: "Automático Calibre Heuer 02",
        waterproof: "100 metros",
        case: "Acero pulido de 41 mm",
        bracelet: "Acero con cierre de seguridad"
      },
      brand: "TAG Heuer"
    },
    {
      id: 4,
      name: "Seiko Prospex",
      price: "$450",
      image: DEFAULT_IMAGES.placeholder,
      description: "Reloj deportivo con excelente relación calidad-precio",
      category: "deportivo",
      features: ["Solar", "Cronógrafo", "Resistente al agua 200m", "Brújula digital"],
      specs: {
        movement: "Solar V192",
        waterproof: "200 metros",
        case: "Acero inoxidable de 43.5 mm",
        bracelet: "Acero inoxidable con cierre doble"
      },
      brand: "Seiko"
    },
    {
      id: 5,
      name: "Citizen Eco-Drive",
      price: "$320",
      image: DEFAULT_IMAGES.placeholder,
      description: "Tecnología solar, nunca necesita cambio de batería",
      category: "clasico",
      features: ["Tecnología Eco-Drive", "Resistente al agua 100m", "Fecha", "Cristal mineral"],
      specs: {
        movement: "Eco-Drive E111",
        waterproof: "100 metros",
        case: "Acero inoxidable de 40 mm",
        bracelet: "Acero inoxidable pulido"
      },
      brand: "Citizen"
    },
    {
      id: 6,
      name: "Tissot PRC 200",
      price: "$275",
      image: DEFAULT_IMAGES.placeholder,
      description: "Reloj suizo con resistencia al agua hasta 200 metros",
      category: "clasico",
      features: ["Cuarzo suizo", "Resistente al agua 200m", "Cristal zafiro", "Corona roscada"],
      specs: {
        movement: "Cuarzo suizo",
        waterproof: "200 metros",
        case: "Acero inoxidable de 39 mm",
        bracelet: "Acero inoxidable con cierre desplegable"
      },
      brand: "Tissot"
    },
    {
      id: 7,
      name: "Breitling Navitimer",
      price: "$4,200",
      image: DEFAULT_IMAGES.placeholder,
      description: "Cronógrafo de aviación con regla de cálculo",
      category: "lujo",
      features: ["Cronógrafo automático", "Regla de cálculo", "Cristal zafiro", "Movimiento B01"],
      specs: {
        movement: "Breitling Calibre 01",
        waterproof: "30 metros",
        case: "Acero inoxidable de 41 mm",
        bracelet: "Piel de cocodrilo con cierre desplegable"
      },
      brand: "Breitling"
    },
    {
      id: 8,
      name: "IWC Pilot's Watch",
      price: "$5,800",
      image: DEFAULT_IMAGES.placeholder,
      description: "Reloj de aviación con tradición alemana",
      category: "lujo",
      features: ["Automático", "Reserva de marcha 42h", "Cristal zafiro", "Antimagnético"],
      specs: {
        movement: "IWC Calibre 82100",
        waterproof: "60 metros",
        case: "Acero inoxidable de 40 mm",
        bracelet: "Piel con cierre IWC"
      },
      brand: "IWC"
    }
  ],

  categories: [
    { name: "Todos", active: true },
    { name: "Lujo", active: false },
    { name: "Deportivos", active: false },
    { name: "Clásicos", active: false }
  ],

  services: [
    {
      title: "Certificación de Autenticidad",
      description: "Cada reloj viene con certificado oficial de autenticidad",
      icon: "🏆"
    },
    {
      title: "Servicio Técnico Especializado",
      description: "Mantenimiento y reparación por técnicos certificados",
      icon: "🔧"
    },
    {
      title: "Garantía Extendida",
      description: "Cobertura completa hasta 5 años en marcas seleccionadas",
      icon: "⚡"
    },
    {
      title: "Financiamiento Disponible",
      description: "Planes de pago flexibles hasta 24 meses sin intereses",
      icon: "💳"
    }
  ],

  testimonials: [
    {
      name: "Roberto Mendoza",
      product: "Rolex Submariner",
      comment: "Excelente servicio y el reloj llegó en perfectas condiciones. Una inversión que vale la pena.",
      rating: 5
    },
    {
      name: "Patricia Silva", 
      product: "Omega Speedmaster",
      comment: "Siempre quise tener un Speedmaster. El equipo me ayudó a encontrar el modelo perfecto.",
      rating: 5
    },
    {
      name: "Alejandro Torres",
      product: "TAG Heuer Carrera", 
      comment: "Gran reloj deportivo. La atención personalizada hizo la diferencia en mi compra.",
      rating: 4
    }
  ],

  brands: [
    { name: "Rolex", logo: "🌟", description: "La corona en relojería de lujo" },
    { name: "Omega", logo: "🚀", description: "Precisión que llegó a la luna" },
    { name: "TAG Heuer", logo: "🏁", description: "Vanguardia en cronógrafos deportivos" },
    { name: "Breitling", logo: "✈️", description: "Instrumentos para profesionales" },
    { name: "IWC", logo: "⚙️", description: "Ingeniería relojera alemana" },
    { name: "Seiko", logo: "🎯", description: "Innovación japonesa desde 1881" }
  ]
};

// Funciones de acción para botones
export const RELOJES_ACTIONS = {
  viewDetails: (product: Product) => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.relojes)} Específicamente me interesa el ${product.name}.`,
      '_blank'
    );
  },
  
  addToWishlist: (product: Product) => {
    alert(`${product.name} agregado a tu lista de deseos`);
  },

  requestQuote: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría una cotización personalizada para relojes de lujo.')}`,
      '_blank'
    );
  },

  contactAdvisor: () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self');
  },

  filterByCategory: (category: string, products: Product[]) => {
    if (category === 'Todos') return products;
    return products.filter(product => 
      product.category?.toLowerCase() === category.toLowerCase()
    );
  }
};
