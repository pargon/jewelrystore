/**
 * STYLED COMPONENTS - ProductCard
 * Estilos homologados con el diseño existente (solo Tailwind CSS)
 */

import React from 'react';

// Contenedor principal de la tarjeta (homologado con el diseño del sitio)
export const CardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div 
    className="relative bg-white rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
    style={{
      background: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid rgba(198, 166, 100, 0.2)',
      borderRadius: '12px',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      backdropFilter: 'blur(5px)'
    }}
  >
    {children}
  </div>
);

// Imagen del producto
export const CardImage: React.FC<{ src: string; alt: string; onError?: () => void }> = ({ src, alt, onError }) => (
  <img 
    src={src} 
    alt={alt}
    onError={onError}
    className="w-full h-48 object-cover rounded-lg mb-4"
    style={{
      backgroundColor: '#f8f9fa',
      border: '1px solid rgba(198, 166, 100, 0.1)'
    }}
  />
);

// Título del producto
export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 
    className="font-playfair text-lg font-semibold text-center mb-2"
    style={{ color: '#1a1a1a' }}
  >
    {children}
  </h3>
);

// Subtítulo/descripción
export const CardSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p 
    className="font-montserrat text-sm text-center mb-3"
    style={{ color: 'rgba(26, 26, 26, 0.7)' }}
  >
    {children}
  </p>
);

// Precio del producto
export const CardPrice: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p 
    className="font-montserrat text-xl font-bold text-center mb-4"
    style={{ color: '#C6A664' }}
  >
    {children}
  </p>
);

// Rating con estrellas
export const CardRating: React.FC<{ rating?: number; reviews?: number }> = ({ 
  rating = 5, 
  reviews = 0 
}) => (
  <div 
    className="font-montserrat text-sm text-center mb-4"
    style={{ color: '#C6A664' }}
  >
    {'★'.repeat(rating)}
    {reviews > 0 && (
      <span className="ml-1" style={{ color: 'rgba(26, 26, 26, 0.5)' }}>
        ({reviews})
      </span>
    )}
  </div>
);

// Botón Add to Cart (esquina superior izquierda)
export const CardAddToCartButton: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="absolute top-4 left-4 px-3 py-1 text-xs font-montserrat font-medium rounded transition-all duration-300"
    style={{
      backgroundColor: 'rgba(198, 166, 100, 0.9)',
      color: '#FFFFFF',
      border: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#C6A664';
      e.currentTarget.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(198, 166, 100, 0.9)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    {children}
  </button>
);

// Botón Wishlist (esquina superior derecha)
export const CardWishlistButton: React.FC<{
  onClick?: () => void;
  isActive?: boolean;
}> = ({ onClick, isActive = false }) => (
  <button 
    onClick={onClick}
    className="absolute top-4 right-4 text-xl transition-all duration-300 bg-transparent border-none"
    style={{
      color: isActive ? '#C6A664' : 'rgba(26, 26, 26, 0.4)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = '#C6A664';
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = isActive ? '#C6A664' : 'rgba(26, 26, 26, 0.4)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    {isActive ? '♥' : '♡'}
  </button>
);

// Botón Ver Detalles
export const CardDetailsButton: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="w-full py-3 px-4 font-montserrat text-sm font-medium rounded transition-all duration-300"
    style={{
      backgroundColor: 'transparent',
      border: '1px solid rgba(198, 166, 100, 0.3)',
      color: '#1a1a1a'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'rgba(198, 166, 100, 0.1)';
      e.currentTarget.style.borderColor = '#C6A664';
      e.currentTarget.style.color = '#C6A664';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.borderColor = 'rgba(198, 166, 100, 0.3)';
      e.currentTarget.style.color = '#1a1a1a';
    }}
  >
    {children}
  </button>
);

// Contenedor de contenido
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative h-full flex flex-col">
    {children}
  </div>
);

// Componentes de compatibilidad para mantener la funcionalidad existente
export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-4">
    {children}
  </div>
);

export const CardActions: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-2">
    {children}
  </div>
);

export const CardButtonPrimary: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <CardAddToCartButton onClick={onClick}>
    {children}
  </CardAddToCartButton>
);

export const CardButtonSecondary: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <CardDetailsButton onClick={onClick}>
    {children}
  </CardDetailsButton>
);

// Alias para descripción
export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CardSubtitle>{children}</CardSubtitle>
);
