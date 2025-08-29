/**
 * PÁGINA RELOJES - Arquitectura Modular Mejorada
 * Usando componentes específicos y separados
 */

import React from 'react';
import { Product } from '../components/shared';
import {
  RelojesNavbar,
  RelojesHero,
  RelojesCollection,
  RelojesFooter
} from '../components/relojes';
import { RELOJES_DATA, RELOJES_ACTIONS } from '../data/relojes';

const Relojes: React.FC = () => {
  // Usar datos expandidos del archivo de datos (8 productos)
  const relojesData: Product[] = RELOJES_DATA.products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    category: product.category,
    brand: product.brand
  }));

  // Handlers usando acciones funcionales
  const handleViewDetails = (product: Product) => {
    RELOJES_ACTIONS.viewDetails(product);
  };

  const handleAddToCart = (product: Product) => {
    RELOJES_ACTIONS.addToWishlist(product);
  };

  // Handler para scroll suave a la colección
  const handleScrollToCollection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('coleccion');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <div>
      {/* Navbar específico para relojes */}
      <RelojesNavbar />

      {/* Hero Section específico para relojes */}
      <RelojesHero onScrollToCollection={handleScrollToCollection} />

      {/* Sección de Colección específica para relojes */}
      <RelojesCollection
        products={relojesData}
        onViewDetails={handleViewDetails}
        onAddToCart={handleAddToCart}
      />

      {/* Footer específico para relojes */}
      <RelojesFooter />
    </div>
  );
};

export default Relojes;
