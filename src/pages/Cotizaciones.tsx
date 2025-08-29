/**
 * PÁGINA COTIZACIONES - Solicitar Presupuestos
 * Usando el patrón de arquitectura modular como Relojes
 */

import React, { useState } from 'react';
import { Footer } from '../components/shared';
import { footerContactInfo, footerSocialLinks } from '../data/footerData';

const Cotizaciones: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    categoria: '',
    producto: '',
    presupuesto: '',
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
    
    // Crear mensaje para WhatsApp
    const mensaje = `
*Nueva Solicitud de Cotización*

*Datos del Cliente:*
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}

*Producto de Interés:*
- Categoría: ${formData.categoria}
- Producto: ${formData.producto}
- Presupuesto aproximado: ${formData.presupuesto}

*Mensaje adicional:*
${formData.mensaje}

Enviado desde la web de Diamond Jewelry
    `.trim();

    const whatsappUrl = `https://wa.me/5491165295239?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categorias = [
    "Relojes de Lujo",
    "Smartwatches", 
    "Anillos de Compromiso",
    "Alianzas de Matrimonio",
    "Collares y Cadenas",
    "Aretes y Pendientes",
    "Pulseras",
    "Broches y Gemelos",
    "Reparaciones y Composturas",
    "Otro"
  ];

  const rangosPresupuesto = [
    "Menos de $50.000",
    "$50.000 - $100.000",
    "$100.000 - $200.000", 
    "$200.000 - $500.000",
    "$500.000 - $1.000.000",
    "Más de $1.000.000"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="luxury-section bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="luxury-container">
          <div className="luxury-container-inner text-center py-20">
            <h1 className="luxury-title-hero text-white mb-6">
              Solicita tu Cotización
            </h1>
            <p className="luxury-text-lead text-green-200 mb-4">
              Gratuita • Sin Compromiso • Respuesta en 24hs
            </p>
            <p className="luxury-text-body text-green-300 max-w-3xl mx-auto">
              Obtén un presupuesto personalizado para el producto que buscas. 
              Nuestros expertos te brindarán la mejor cotización del mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <div className="max-w-4xl mx-auto">
              <div className="luxury-grid luxury-grid-2 gap-12">
                {/* Formulario */}
                <div>
                  <h2 className="luxury-title-section mb-8">Completa tus Datos</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="luxury-grid luxury-grid-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div className="luxury-grid luxury-grid-2 gap-4">
                      <div>
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                          Categoría de Interés *
                        </label>
                        <select
                          id="categoria"
                          name="categoria"
                          value={formData.categoria}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecciona una categoría</option>
                          {categorias.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700 mb-2">
                          Presupuesto Aproximado
                        </label>
                        <select
                          id="presupuesto"
                          name="presupuesto"
                          value={formData.presupuesto}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Selecciona un rango</option>
                          {rangosPresupuesto.map((rango, index) => (
                            <option key={index} value={rango}>{rango}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="producto" className="block text-sm font-medium text-gray-700 mb-2">
                        Producto Específico
                      </label>
                      <input
                        type="text"
                        id="producto"
                        name="producto"
                        value={formData.producto}
                        onChange={handleInputChange}
                        placeholder="Ej: Rolex Submariner, Anillo de diamante 1 quilate, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje Adicional
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos más sobre lo que buscas..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="luxury-btn luxury-btn-primary luxury-btn-large w-full"
                    >
                      <span className="luxury-button-text">Solicitar Cotización por WhatsApp</span>
                    </button>
                  </form>
                </div>

                {/* Información Adicional */}
                <div>
                  <h2 className="luxury-title-section mb-8">¿Por qué Cotizar con Nosotros?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">⚡</div>
                      <div>
                        <h3 className="luxury-title-card mb-2">Respuesta Rápida</h3>
                        <p className="luxury-text-body">Te respondemos en menos de 24 horas con una cotización detallada.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">💰</div>
                      <div>
                        <h3 className="luxury-title-card mb-2">Mejores Precios</h3>
                        <p className="luxury-text-body">Trabajamos directamente con importadores para ofrecerte los mejores precios.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">🎯</div>
                      <div>
                        <h3 className="luxury-title-card mb-2">Asesoramiento Personalizado</h3>
                        <p className="luxury-text-body">Nuestros expertos te guían para encontrar exactamente lo que necesitas.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">🛡️</div>
                      <div>
                        <h3 className="luxury-title-card mb-2">Sin Compromiso</h3>
                        <p className="luxury-text-body">La cotización es completamente gratuita y sin ningún tipo de compromiso.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-green-50 rounded-lg">
                    <h3 className="luxury-title-card text-green-800 mb-4">Contacto Directo</h3>
                    <div className="space-y-2 text-green-700">
                      <p><strong>WhatsApp:</strong> +54 9 11 6529-5239</p>
                      <p><strong>Teléfono:</strong> +54 11 4664-2891</p>
                      <p><strong>Email:</strong> info@diamondjewelry.com</p>
                      <p><strong>Horario:</strong> Lun-Sáb 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        title="Diamond Jewelry"
        description="Cotizaciones gratuitas y personalizadas"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
    </div>
  );
};

export default Cotizaciones;
