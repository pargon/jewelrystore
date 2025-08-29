/**
 * PÁGINA CÓMO COMPRAR - Proceso de Compra
 * Usando el patrón de arquitectura modular como Relojes
 */

import React from 'react';
import { Footer } from '../components/shared';
import { footerContactInfo, footerSocialLinks } from '../data/footerData';

const ComoComprar: React.FC = () => {
  const pasos = [
    {
      numero: "1",
      titulo: "Selecciona tu Producto",
      descripcion: "Navega por nuestro catálogo y encuentra el producto perfecto para ti. Puedes filtrar por categoría, marca o precio.",
      icono: "🔍"
    },
    {
      numero: "2", 
      titulo: "Consulta y Asesoramiento",
      descripcion: "Contáctanos por WhatsApp, teléfono o email para recibir asesoramiento personalizado sobre tu elección.",
      icono: "💬"
    },
    {
      numero: "3",
      titulo: "Cotización Personalizada",
      descripcion: "Te enviaremos una cotización detallada con precios actualizados, opciones de financiación y tiempos de entrega.",
      icono: "💰"
    },
    {
      numero: "4",
      titulo: "Confirmación de Pedido", 
      descripcion: "Una vez que confirmes tu pedido, coordinaremos los detalles de pago y envío contigo.",
      icono: "✅"
    },
    {
      numero: "5",
      titulo: "Pago Seguro",
      descripcion: "Ofrecemos múltiples opciones de pago: efectivo, transferencia bancaria, tarjetas de crédito y financiación.",
      icono: "🔒"
    },
    {
      numero: "6",
      titulo: "Envío o Retiro",
      descripcion: "Puedes retirar tu pedido en nuestra tienda en San Miguel o elegir envío a domicilio asegurado.",
      icono: "📦"
    }
  ];

  const metodasPago = [
    "Efectivo",
    "Transferencia Bancaria", 
    "Tarjetas de Crédito (Visa, Mastercard, American Express)",
    "Financiación hasta 12 cuotas sin interés",
    "Financiación hasta 18 cuotas con interés",
    "Ahora 12 y Ahora 18"
  ];

  const garantias = [
    "Garantía oficial de fábrica en todos los productos",
    "Certificado de autenticidad en joyas y relojes",
    "Servicio técnico autorizado",
    "Cambios y devoluciones dentro de los 15 días", 
    "Mantenimiento gratuito el primer año"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="luxury-section bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="luxury-container">
          <div className="luxury-container-inner text-center py-20">
            <h1 className="luxury-title-hero text-white mb-6">
              Cómo Comprar
            </h1>
            <p className="luxury-text-lead text-blue-200 mb-4">
              Proceso Simple • Seguro • Personalizado
            </p>
            <p className="luxury-text-body text-blue-300 max-w-3xl mx-auto">
              Te guiamos paso a paso para que tengas la mejor experiencia de compra. 
              Nuestro equipo está disponible para ayudarte en todo momento.
            </p>
          </div>
        </div>
      </section>

      {/* Pasos del Proceso */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <h2 className="luxury-title-section text-center mb-12">Proceso de Compra</h2>
            <div className="luxury-grid luxury-grid-3 gap-8">
              {pasos.map((paso, index) => (
                <div key={index} className="luxury-card">
                  <div className="luxury-card-content">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{paso.icono}</div>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                        {paso.numero}
                      </div>
                    </div>
                    <div className="luxury-card-text text-center">
                      <h3 className="luxury-title-card mb-4">{paso.titulo}</h3>
                      <p className="luxury-text-body">{paso.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Pago */}
      <section className="luxury-section luxury-section-alt">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <div className="luxury-grid luxury-grid-2 gap-12">
              <div>
                <h2 className="luxury-title-section mb-8">Métodos de Pago</h2>
                <ul className="space-y-4">
                  {metodasPago.map((metodo, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-600 mr-3">✅</span>
                      <span className="luxury-text-body">{metodo}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="luxury-title-section mb-8">Garantías y Servicios</h2>
                <ul className="space-y-4">
                  {garantias.map((garantia, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-600 mr-3">🛡️</span>
                      <span className="luxury-text-body">{garantia}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="luxury-container-inner text-center">
            <h2 className="luxury-title-section mb-6">¿Listo para Comprar?</h2>
            <p className="luxury-text-lead mb-8 max-w-2xl mx-auto">
              Nuestro equipo está disponible para ayudarte a encontrar el producto perfecto.
            </p>
            <div className="luxury-button-group">
              <a href="/productos" className="luxury-btn luxury-btn-primary luxury-btn-large">
                <span className="luxury-button-text">Ver Catálogo</span>
              </a>
              <a href="/contacto" className="luxury-btn luxury-btn-outline luxury-btn-large">
                <span className="luxury-button-text">Contactar Asesor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer
        title="Diamond Jewelry"
        description="Tu proceso de compra seguro y personalizado"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
    </div>
  );
};

export default ComoComprar;
