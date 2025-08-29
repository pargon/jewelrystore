/**
 * HOME COMO COMPRAR COMPONENT
 * Sección de pasos de compra en el home - Diseño con cards
 */

import React from 'react';

interface HomeComoComprarProps {
  id?: string;
}

const HomeComoComprar: React.FC<HomeComoComprarProps> = ({ id }) => {
  const pasos = [
    {
      numero: "1",
      titulo: "Elegí tu producto",
      descripcion: "Explorá nuestra colección y seleccioná la joya que más te guste.",
      icono: "💍"
    },
    {
      numero: "2",
      titulo: "Realizá tu pedido",
      descripcion: "Agregá el producto al carrito y completá tus datos.",
      icono: "🛒"
    },
    {
      numero: "3",
      titulo: "Coordinamos la entrega",
      descripcion: "Recibí tu pedido en todo el país con envío seguro.",
      icono: "🚚"
    },
    {
      numero: "4",
      titulo: "Disfrutá tu joya",
      descripcion: "La calidad y confianza de siempre en cada detalle.",
      icono: "🎁"
    }
  ];

  return (
    <section id={id} className="luxury-section">
      <div className="luxury-container">
        <div className="luxury-container-inner">
          <h2 className="luxury-title-section">Cómo Comprar</h2>
          <p className="luxury-text-lead">Proceso simple y seguro para adquirir tus productos favoritos</p>
          
          <div className="luxury-grid luxury-grid-4">
            {pasos.map((paso) => (
              <div key={paso.numero} className="luxury-card">
                <div className="luxury-card-content">
                  <div className="luxury-card-text">
                    <div className="text-4xl mb-4 text-center">{paso.icono}</div>
                    <h3 className="luxury-title-card">{paso.numero}. {paso.titulo}</h3>
                    <p className="luxury-text-body">{paso.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default HomeComoComprar;
