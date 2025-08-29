/**
 * HOME HERO COMPONENT
 * Sección hero de la página principal
 */

import React from 'react';

interface HomeHeroProps {
  title: string;
  subtitle: string;
  description: string;
  onExploreClick: () => void;
  onHowBuyClick: () => void;
  onBrandsClick: () => void;
  onFooterContactClick: () => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ 
  title,
  subtitle, 
  description,
  onExploreClick,
  onHowBuyClick,
  onBrandsClick,
  onFooterContactClick
}) => (
  <section className="luxury-hero">
    <div className="luxury-hero-content">
      <h1 className="luxury-title-hero">{title}</h1>
      <h2 className="luxury-subtitle">{subtitle}</h2>
      <p className="luxury-text-lead">{description}</p>
      
      <div className="luxury-button-group">
        <button className="luxury-btn luxury-btn-secondary" onClick={onExploreClick}>
          <span className="luxury-button-text">Ver Nuestras Categorías</span>
        </button>
        <button className="luxury-btn luxury-btn-secondary" onClick={onHowBuyClick}>
          <span className="luxury-button-text">¿Cómo Comprar?</span>
        </button>
        <button className="luxury-btn luxury-btn-secondary" onClick={onBrandsClick}>
          <span className="luxury-button-text">Marcas de Lujo</span>
        </button>
        <button className="luxury-btn luxury-btn-secondary" onClick={onFooterContactClick}>
          <span className="luxury-button-text">Contacto</span>
        </button>
      </div>
    </div>
  </section>
);

export default HomeHero;
