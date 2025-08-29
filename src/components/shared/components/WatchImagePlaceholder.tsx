/**
 * COMPONENTE - WatchImagePlaceholder
 * Placeholder estético para imágenes de relojes faltantes
 */

import React from 'react';

interface WatchImagePlaceholderProps {
  brand: string;
  name: string;
  className?: string;
}

// Iconos SVG específicos por marca
const BrandIcons: Record<string, React.ReactElement> = {
  'Rolex': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 15 L55 25 L50 35 L45 25 Z" fill="currentColor"/>
      <circle cx="50" cy="50" r="3" fill="currentColor"/>
      <text x="50" y="75" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif">ROLEX</text>
    </svg>
  ),
  'Omega': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="50" y="75" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif">OMEGA</text>
    </svg>
  ),
  'TAG Heuer': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <polygon points="50,20 60,40 50,35 40,40" fill="currentColor"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
      <text x="50" y="75" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif">TAG HEUER</text>
    </svg>
  ),
  'Seiko': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="45" y="25" width="10" height="20" fill="currentColor"/>
      <circle cx="50" cy="50" r="2" fill="currentColor"/>
      <text x="50" y="75" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif">SEIKO</text>
    </svg>
  ),
  'Citizen': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M35 35 L65 35 L50 50 Z" fill="currentColor"/>
      <text x="50" y="75" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif">CITIZEN</text>
    </svg>
  ),
  'Tissot': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 30 L70 30 L50 50 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="50" y="75" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif">TISSOT</text>
    </svg>
  ),
  'Breitling': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M35 35 Q50 25 65 35 Q50 45 35 35" fill="currentColor"/>
      <path d="M35 65 Q50 55 65 65 Q50 75 35 65" fill="currentColor"/>
      <text x="50" y="80" textAnchor="middle" fontSize="6" fill="currentColor" fontFamily="serif">BREITLING</text>
    </svg>
  ),
  'IWC': (
    <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
      <rect x="47" y="20" width="6" height="15" fill="currentColor"/>
      <rect x="47" y="65" width="6" height="15" fill="currentColor"/>
      <text x="50" y="75" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="serif">IWC</text>
    </svg>
  )
};

// Icono genérico para marcas no específicas
const GenericWatchIcon = (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="currentColor">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
    <line x1="50" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="2"/>
    <line x1="50" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1"/>
    <circle cx="50" cy="50" r="3" fill="currentColor"/>
    <text x="50" y="80" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="serif">WATCH</text>
  </svg>
);

const WatchImagePlaceholder: React.FC<WatchImagePlaceholderProps> = ({ 
  brand, 
  name, 
  className = "" 
}) => {
  const brandIcon = BrandIcons[brand] || GenericWatchIcon;

  return (
    <div 
      className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex flex-col items-center justify-center p-6 border border-gray-200 transition-all duration-300 hover:shadow-md ${className}`}
      style={{
        minHeight: '192px', // h-48 equivalent
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        border: '1px solid rgba(198, 166, 100, 0.2)'
      }}
    >
      {/* Fondo decorativo sutil */}
      <div 
        className="absolute inset-0 opacity-5 rounded-lg"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(198, 166, 100, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(198, 166, 100, 0.2) 0%, transparent 50%)`
        }}
      />
      
      {/* Icono de marca */}
      <div 
        className="relative z-10 mb-3 transition-all duration-300 hover:scale-110"
        style={{ color: 'rgba(198, 166, 100, 0.8)' }}
      >
        {brandIcon}
      </div>
      
      {/* Nombre del producto */}
      <h4 
        className="relative z-10 text-center text-sm font-medium leading-tight font-playfair"
        style={{ 
          color: 'rgba(26, 26, 26, 0.8)',
          maxWidth: '200px',
          lineHeight: '1.3'
        }}
      >
        {name}
      </h4>
      
      {/* Indicador de imagen no disponible */}
      <div 
        className="relative z-10 mt-2 text-xs text-center opacity-60 font-montserrat"
        style={{ color: 'rgba(26, 26, 26, 0.5)' }}
      >
        Imagen no disponible
      </div>
    </div>
  );
};

export default WatchImagePlaceholder;
