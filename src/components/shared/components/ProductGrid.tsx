/**
 * COMPONENTE REUTILIZABLE - ProductGrid
 * Grid responsivo de productos con espaciado mejorado
 */

import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showAddButton?: boolean;
  columns?: 'auto' | '1' | '2' | '3' | '4';
  sectionTitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewDetails,
  onAddToCart,
  showAddButton = true,
  columns = 'auto',
  sectionTitle
}) => {
  // Determinar las clases CSS basado en el número de columnas
  const getGridClasses = () => {
    switch (columns) {
      case '1':
        return 'grid-cols-1';
      case '2':
        return 'grid-cols-1 md:grid-cols-2';
      case '3':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case '4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case 'auto':
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    }
  };

  if (products.length === 0) {
    return (
      <div className="w-full py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 
            className="text-2xl font-playfair font-semibold mb-2"
            style={{ color: '#1a1a1a' }}
          >
            No se encontraron productos
          </h3>
          <p 
            className="font-montserrat"
            style={{ color: 'rgba(26, 26, 26, 0.6)' }}
          >
            Prueba con otros filtros o vuelve más tarde
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {sectionTitle && (
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-playfair font-bold mb-4"
            style={{ color: '#1a1a1a' }}
          >
            {sectionTitle}
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: '#C6A664' }}
          ></div>
        </div>
      )}
      
      {/* Grid con espaciado mejorado */}
      <div 
        className={`grid ${getGridClasses()} gap-8`}
        style={{
          width: '100%',
          justifyItems: 'center'
        }}
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-full max-w-sm"
            style={{ 
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <ProductCard
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
              showAddButton={showAddButton}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
