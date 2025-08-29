/**
 * COMPONENTE COLECCIÓN PRODUCTOS
 * Sección de productos específica para catálogo general
 */

import React from 'react';
import { ProductGrid, Product } from '../shared';

interface ProductosCollectionProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductosCollection: React.FC<ProductosCollectionProps> = ({
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
        sectionTitle="Nuestro Catálogo Completo"
      />
    </div>
  );
};

export default ProductosCollection;
