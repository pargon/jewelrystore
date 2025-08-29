import React, { useState } from 'react';
import { Footer } from '../components/shared';
import { footerContactInfo, footerSocialLinks } from '../data/footerData';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Mensaje enviado correctamente. Nos contactaremos contigo pronto.');
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Dirección",
      details: ["Av. Principal 1234", "Centro Comercial Plaza", "Ciudad, País"]
    },
    {
      icon: "📞",
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@joyeriadiamond.com", "ventas@joyeriadiamond.com"]
    },
    {
      icon: "🕒",
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 19:00", "Sáb: 9:00 - 17:00", "Dom: 10:00 - 15:00"]
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📸", url: "#" },
    { name: "WhatsApp", icon: "💬", url: "#" },
    { name: "TikTok", icon: "🎵", url: "#" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-lato text-blue-500 text-2xl md:text-3xl mb-4">
              Estamos aquí para ti
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-6 text-blue-800">
              Contáctanos
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-700 font-openSans">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta, 
              cita o información sobre nuestros productos y servicios.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-roboto font-semibold mb-4 text-gray-900">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 font-openSans">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta-general">Consulta General</option>
                    <option value="productos">Información de Productos</option>
                    <option value="composturas">Servicio de Composturas</option>
                    <option value="alianzas">Alianzas de Matrimonio</option>
                    <option value="cita">Agendar Cita</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 transition-colors font-semibold"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Nuestra Ubicación</h2>
              <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-600">Mapa Interactivo</p>
                  <p className="text-sm text-gray-500">Av. Principal 1234, Centro Comercial Plaza</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full px-4 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 transition-colors">
                  Ver en Google Maps
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Síguenos</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-2xl mr-2">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-mint-200 to-green-200 text-mint-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Contacto Rápido</h2>
              <p className="mb-6">¿Necesitas ayuda inmediata? Contáctanos por WhatsApp</p>
              <button className="w-full px-6 py-3 bg-white text-mint-700 rounded-md hover:bg-mint-50 transition-colors font-semibold flex items-center justify-center shadow-md">
                <span className="mr-2">💬</span>
                Escribir por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">Encuentra respuestas rápidas a las consultas más comunes</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Cuál es el horario de atención?</h3>
              <p className="text-gray-600">Atendemos de lunes a viernes de 9:00 a 19:00, sábados de 9:00 a 17:00 y domingos de 10:00 a 15:00.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Hacen envíos a domicilio?</h3>
              <p className="text-gray-600">Sí, realizamos envíos a todo el país. Los tiempos y costos varían según la ubicación.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Ofrecen garantía en sus productos?</h3>
              <p className="text-gray-600">Todos nuestros productos incluyen garantía. El período varía según el tipo de producto.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">¿Puedo agendar una cita?</h3>
              <p className="text-gray-600">Por supuesto. Puedes agendar una cita llamándonos o enviando un mensaje por WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer
        title="Diamond Jewelry"
        description="Expertos en joyería de diamantes desde 1985"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
    </div>
  );
};

export default Contacto;
