import { CONTACT_INFO, WHATSAPP_MESSAGES } from '../constants/app';
import { ContactFormData } from '../types/common';

export const CONTACTO_DATA = {
  hero: {
    title: "Contáctanos",
    subtitle: "Estamos aquí para ti",
    description: "Estamos aquí para ayudarte. Contáctanos para cualquier consulta, cita o información sobre nuestros productos y servicios."
  },

  contactInfo: [
    {
      icon: "📍",
      title: "Dirección",
      details: [CONTACT_INFO.address, "Centro Comercial Plaza", "Planta Baja, Local 15-16"],
      action: "Ver en Google Maps",
      actionUrl: "https://maps.google.com"
    },
    {
      icon: "📞",
      title: "Teléfono",
      details: [`+${CONTACT_INFO.phone}`, "Línea directa disponible"],
      action: "Llamar Ahora",
      actionUrl: `tel:+${CONTACT_INFO.phone}`
    },
    {
      icon: "✉️",
      title: "Email",
      details: [CONTACT_INFO.email, "Respuesta en 24 horas"],
      action: "Enviar Email",
      actionUrl: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: "🕒",
      title: "Horarios",
      details: [CONTACT_INFO.hours, "Citas disponibles", "Asesoría personalizada"],
      action: "Agendar Cita",
      actionUrl: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría agendar una cita.')}`
    }
  ],

  formSubjects: [
    { value: "", label: "Selecciona un asunto" },
    { value: "consulta-general", label: "Consulta General" },
    { value: "productos", label: "Información de Productos" },
    { value: "composturas", label: "Servicio de Composturas" },
    { value: "alianzas", label: "Alianzas de Matrimonio" },
    { value: "relojes", label: "Relojes y SmartWatches" },
    { value: "cita", label: "Agendar Cita Presencial" },
    { value: "cotizacion", label: "Solicitar Cotización" },
    { value: "garantia", label: "Garantías y Devoluciones" },
    { value: "otro", label: "Otro" }
  ],

  socialMedia: [
    { 
      name: "WhatsApp", 
      icon: "💬", 
      url: `https://wa.me/${CONTACT_INFO.whatsapp}`,
      description: "Contacto directo e inmediato",
      color: "green"
    },
    { 
      name: "Facebook", 
      icon: "📘", 
      url: "#",
      description: "Síguenos para ofertas exclusivas",
      color: "blue"
    },
    { 
      name: "Instagram", 
      icon: "📸", 
      url: "#",
      description: "Ve nuestras últimas piezas",
      color: "pink"
    },
    { 
      name: "TikTok", 
      icon: "🎵", 
      url: "#",
      description: "Contenido y tutoriales",
      color: "purple"
    }
  ],

  quickActions: [
    {
      title: "Emergencia de Reparación",
      description: "¿Tu reloj se rompió? Contacto inmediato",
      icon: "🚨",
      action: "WhatsApp Urgente",
      color: "red",
      url: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡URGENTE! Necesito reparación inmediata para mi reloj/joya.')}`
    },
    {
      title: "Consulta de Precios",
      description: "Pregunta por precios y disponibilidad",
      icon: "💰",
      action: "Consultar Precios",
      color: "blue",
      url: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría consultar precios y disponibilidad.')}`
    },
    {
      title: "Agendar Visita",
      description: "Reserva tu cita para ver productos",
      icon: "📅",
      action: "Agendar Ahora",
      color: "green",
      url: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría agendar una cita para visitar la tienda.')}`
    }
  ],

  businessHours: [
    { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM", available: true },
    { day: "Sábado", hours: "9:00 AM - 5:00 PM", available: true },
    { day: "Domingo", hours: "10:00 AM - 3:00 PM", available: true },
    { day: "Días Festivos", hours: "Horarios especiales", available: false }
  ],

  faqs: [
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Atendemos de lunes a viernes de 9:00 a 19:00, sábados de 9:00 a 17:00 y domingos de 10:00 a 15:00. Los días festivos manejamos horarios especiales."
    },
    {
      question: "¿Hacen envíos a domicilio?",
      answer: "Sí, realizamos envíos a todo el país. Para compras superiores a $100 el envío es gratuito. Los tiempos de entrega varían de 2-5 días hábiles según la ubicación."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Todos nuestros productos incluyen garantía. Relojes: 1-2 años, Joyas: 6 meses-1 año, Reparaciones: 3 meses-2 años según el servicio."
    },
    {
      question: "¿Puedo agendar una cita?",
      answer: "Por supuesto. Recomendamos agendar cita para asesoría personalizada. Puedes hacerlo llamando, por WhatsApp o llenando el formulario."
    },
    {
      question: "¿Aceptan tarjetas de crédito?",
      answer: "Aceptamos todas las tarjetas de crédito y débito principales, transferencias bancarias, y ofrecemos planes de financiamiento hasta 24 meses sin intereses."
    },
    {
      question: "¿Hacen evaluaciones de joyas para seguro?",
      answer: "Sí, ofrecemos servicio de evaluación certificada para seguros, avalúos comerciales y herencias. El costo varía según la complejidad de la pieza."
    }
  ],

  services: [
    {
      title: "Asesoría Personalizada",
      description: "Expertos que te ayudan a elegir la pieza perfecta",
      icon: "👥"
    },
    {
      title: "Servicio Post-Venta",
      description: "Mantenimiento y soporte después de tu compra",
      icon: "🛠️"
    },
    {
      title: "Financiamiento",
      description: "Planes de pago flexibles hasta 24 meses",
      icon: "💳"
    },
    {
      title: "Garantía Extendida",
      description: "Protección completa para tu inversión",
      icon: "🛡️"
    }
  ]
};

// Funciones de acción para botones
export const CONTACTO_ACTIONS = {
  submitForm: (formData: ContactFormData) => {
    // Aquí se podría integrar con un servicio de email
    const message = `Nuevo contacto:\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\nAsunto: ${formData.subject || 'Consulta general'}\nMensaje: ${formData.message}`;
    
    // Por ahora, enviamos por WhatsApp
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    
    return { success: true, message: "Mensaje enviado correctamente. Nos contactaremos contigo pronto." };
  },

  quickWhatsApp: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`,
      '_blank'
    );
  },

  callDirect: () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self');
  },

  sendEmail: () => {
    window.open(`mailto:${CONTACT_INFO.email}`, '_self');
  },

  openMaps: () => {
    window.open('https://maps.google.com', '_blank');
  },

  scheduleAppointment: () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría agendar una cita para visitar la tienda y recibir asesoría personalizada.')}`,
      '_blank'
    );
  }
};
