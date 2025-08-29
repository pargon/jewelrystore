/**
 * STYLED COMPONENTS - ProductGrid
 * Estilos elegantes para grid de productos luxury
 */

import React from 'react';

// Contenedor principal del grid (limitado a 1200px con padding mejorado)
export const GridContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="product-section bg-jewelry-lightGray py-12">
    <div 
      className="container mx-auto px-6 lg:px-8"
      style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}
    >
      {children}
    </div>
  </section>
);

// Título de la sección (Playfair Display + negro profundo + peso 700)
export const GridSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-playfair text-3xl text-left mb-8 text-jewelry-dark" style={{ fontWeight: 700, letterSpacing: '1px' }}>
    {children}
  </h2>
);

// Grid responsivo optimizado para e-commerce
export const Grid: React.FC<{
  columns: 'auto' | '1' | '2' | '3' | '4' | '5' | '6';
  children: React.ReactNode;
}> = ({ columns, children }) => {
  const getGridClasses = () => {
    switch (columns) {
      case '1':
        return 'grid-cols-1';
      case '2':
        return 'grid-cols-1 sm:grid-cols-2';
      case '3':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case '4':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case '5':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      case '6':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6';
      default:
        // Auto-fit optimizado para e-commerce (más productos visibles)
        return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]';
    }
  };

  return (
    <div className={`grid gap-8 ${getGridClasses()}`}>
      {children}
    </div>
  );
};

// Estado vacío del grid (mejorado)
export const EmptyState: React.FC<{
  icon?: string;
  title?: string;
  description?: string;
}> = ({
  icon = '🔍',
  title = 'No se encontraron productos',
  description = 'Prueba con otros filtros o vuelve más tarde'
}) => (
  <div className="col-span-full py-16">
    <div className="text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-primary font-semibold mb-2 text-gray-700">
        {title}
      </h3>
      <p className="text-gray-500 font-openSans">
        {description}
      </p>
    </div>
  </div>
);
