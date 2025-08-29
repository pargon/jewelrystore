/**
 * HOME BRANDS COMPONENT
 * Sección de marcas que trabajamos
 */

import React from 'react';

interface HomeBrandsProps {
  title: string;
  description: string;
  brands: string[];
  id?: string;
}

const HomeBrands: React.FC<HomeBrandsProps> = ({ 
  title, 
  description, 
  brands,
  id 
}) => (
  <section id={id} className="luxury-section">
    <div className="luxury-container">
      <div className="luxury-container-inner">
        <h2 className="luxury-title-section">{title}</h2>
        <p className="luxury-text-lead">{description}</p>
        
        <div className="luxury-brands-text-grid">
          {brands.map((brand, index) => (
            <div key={index} className="luxury-brand-text">
              {brand}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  </section>
);

export default HomeBrands;
