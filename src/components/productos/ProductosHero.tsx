/**
 * COMPONENTE HERO PRODUCTOS
 * Hero section específico para la página de productos
 */

import React from 'react';
import { HeroSection } from '../shared';

interface ProductosHeroProps {
  onScrollToCollection: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ProductosHero: React.FC<ProductosHeroProps> = ({ onScrollToCollection }) => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <HeroSection
        title="Catálogo de Productos"
        subtitle="Diamond Jewelry • San Miguel • Buenos Aires"
        description="Descubre nuestra amplia colección de joyería fina y accesorios exclusivos.<br/>Cada pieza seleccionada por su calidad excepcional y diseño único."
        primaryButton={{
          text: 'Ver Catálogo',
          href: '#coleccion',
          onClick: onScrollToCollection
        }}
        secondaryButton={{
          text: 'Contactar',
          href: '/contacto'
        }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default ProductosHero;
