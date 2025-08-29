// Configuración de contacto centralizada
export const CONTACT_INFO = {
  phone: '1234567890',
  whatsapp: '1234567890',
  email: 'contacto@joyeriadiamond.com',
  address: 'Calle Principal 123, Ciudad',
  hours: 'Lun-Vie: 9:00-18:00, Sáb: 9:00-15:00'
};

// Mensajes de WhatsApp predefinidos
export const WHATSAPP_MESSAGES = {
  alianzas: '¡Hola! Me interesa agendar una cita para ver las alianzas.',
  relojes: '¡Hola! Me gustaría conocer más sobre los relojes disponibles.',
  smartwatches: (productName: string) => `¡Hola! Me interesa conocer más sobre el ${productName}.`,
  composturas: '¡Hola! Necesito información sobre servicios de reparación.',
  general: '¡Hola! Me interesa conocer más sobre sus joyas y relojes.'
};

// Esquemas de colores para diferentes secciones
export const COLOR_SCHEMES = {
  alianzas: {
    gradient: 'from-rose-100 to-pink-100',
    primary: 'rose',
    accent: 'text-rose-700'
  },
  relojes: {
    gradient: 'from-blue-100 to-indigo-100',
    primary: 'blue',
    accent: 'text-blue-700'
  },
  smartwatches: {
    gradient: 'from-purple-100 to-violet-100',
    primary: 'purple',
    accent: 'text-purple-700'
  },
  composturas: {
    gradient: 'from-amber-100 to-yellow-100',
    primary: 'amber',
    accent: 'text-amber-700'
  }
};

// URLs de imágenes por defecto
export const DEFAULT_IMAGES = {
  placeholder: '/api/placeholder/300/300',
  productPlaceholder: '/api/placeholder/300/200'
};
