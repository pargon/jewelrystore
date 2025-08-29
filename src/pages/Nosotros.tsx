/**
 * PÁGINA NOSOTROS - Sobre la Empresa
 * Usando el patrón de arquitectura modular como Relojes
 */

import React from 'react';
import { Footer } from '../components/shared';
import { footerContactInfo, footerSocialLinks } from '../data/footerData';

const Nosotros: React.FC = () => {
  const empresaInfo = {
    titulo: "Sobre Diamond Jewelry",
    fundacion: "1985",
    experiencia: "40 años de experiencia",
    historia: "Desde 1985, Diamond Jewelry ha sido sinónimo de calidad y elegancia en el mundo de la joyería y relojería. Ubicados en el corazón de San Miguel, Buenos Aires, nos especializamos en ofrecer las mejores marcas y productos de alta gama.",
    mision: "Nuestra misión es brindar a nuestros clientes productos de la más alta calidad, con un servicio personalizado y profesional que supere sus expectativas.",
    valores: [
      {
        titulo: "Calidad Premium",
        descripcion: "Solo trabajamos con las mejores marcas y materiales del mercado"
      },
      {
        titulo: "Servicio Personalizado", 
        descripcion: "Cada cliente recibe atención individualizada y asesoramiento experto"
      },
      {
        titulo: "Confianza y Tradición",
        descripcion: "40 años respaldando cada venta con garantía y servicio post-venta"
      },
      {
        titulo: "Innovación Constante",
        descripcion: "Siempre a la vanguardia de las últimas tendencias y tecnologías"
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="luxury-section bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="luxury-container">
          <div className="luxury-container-inner text-center py-20">
            <h1 className="luxury-title-hero text-white mb-6">
              {empresaInfo.titulo}
            </h1>
            <p className="luxury-text-lead text-gray-200 mb-4">
              {empresaInfo.experiencia} • San Miguel • Buenos Aires
            </p>
            <p className="luxury-text-body text-gray-300 max-w-3xl mx-auto">
              {empresaInfo.historia}
            </p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <div className="text-center mb-12">
              <h2 className="luxury-title-section mb-6">Nuestra Misión</h2>
              <p className="luxury-text-lead max-w-4xl mx-auto">
                {empresaInfo.mision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="luxury-section luxury-section-alt">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <h2 className="luxury-title-section text-center mb-12">Nuestros Valores</h2>
            <div className="luxury-grid luxury-grid-4">
              {empresaInfo.valores.map((valor, index) => (
                <div key={index} className="luxury-card">
                  <div className="luxury-card-content">
                    <div className="luxury-card-text">
                      <h3 className="luxury-title-card mb-4">{valor.titulo}</h3>
                      <p className="luxury-text-body">{valor.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="luxury-container-inner">
            <div className="luxury-grid luxury-grid-3 text-center">
              <div className="luxury-card">
                <div className="luxury-card-content">
                  <h3 className="luxury-title-hero text-6xl font-bold text-gray-800 mb-2">40+</h3>
                  <p className="luxury-text-lead">Años de Experiencia</p>
                </div>
              </div>
              <div className="luxury-card">
                <div className="luxury-card-content">
                  <h3 className="luxury-title-hero text-6xl font-bold text-gray-800 mb-2">50+</h3>
                  <p className="luxury-text-lead">Marcas Exclusivas</p>
                </div>
              </div>
              <div className="luxury-card">
                <div className="luxury-card-content">
                  <h3 className="luxury-title-hero text-6xl font-bold text-gray-800 mb-2">1000+</h3>
                  <p className="luxury-text-lead">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        title="Diamond Jewelry"
        description="Especialistas en joyería y relojería desde 1985"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
    </div>
  );
};

export default Nosotros;
