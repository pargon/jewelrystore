/**
 * COMPONENTE COLECCIÓN RELOJES
 * Sección de productos específica para relojes
 */

import React from 'react';
import { ProductGrid, Product } from '../shared';

interface RelojesCollectionProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const RelojesCollection: React.FC<RelojesCollectionProps> = ({
  products,
  onViewDetails,
  onAddToCart
}) => {
  return (
    <div id="coleccion" className="bg-white min-h-screen">
      <ProductGrid
        products={products}
        onViewDetails={onViewDetails}
        onAddToCart={onAddToCart}
        columns="4"
        sectionTitle="Nuestra Colección de Relojes"
      />
    </div>
  );
};

export default RelojesCollection;
