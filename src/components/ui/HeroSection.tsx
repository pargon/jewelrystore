/**
 * HERO SECTION - Versión Tailwind CSS
 * Componente hero reutilizable con estilos unificados usando Tailwind
 * Reemplazo de styled-components para mejorar la consistencia
 */

import React from 'react';
import DOMPurify from 'dompurify';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
  };
  secondaryButton?: {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
  };
  backgroundType?: 'gradient' | 'solid' | 'image';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundType = 'gradient',
  className = ''
}) => {
  // Sanitizar HTML para prevenir XSS
  const cleanTitle = DOMPurify.sanitize(title);
  const cleanSubtitle = subtitle ? DOMPurify.sanitize(subtitle) : undefined;
  const cleanDescription = description ? DOMPurify.sanitize(description) : undefined;

  // Estilos del contenedor basados en el tipo de fondo
  const backgroundClasses = {
    gradient: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
    solid: 'bg-gray-900',
    image: 'bg-gray-900 bg-cover bg-center'
  };

  return (
    <div className={`py-20 md:py-24 px-4 text-white ${backgroundClasses[backgroundType]} ${className}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white leading-tight tracking-wide"
          dangerouslySetInnerHTML={{ __html: cleanTitle }}
        />

        {/* Subtítulo */}
        {cleanSubtitle && (
          <h2 
            className="text-lg md:text-xl font-montserrat font-medium text-amber-200 mb-6 tracking-wide"
            dangerouslySetInnerHTML={{ __html: cleanSubtitle }}
          />
        )}

        {/* Descripción */}
        {cleanDescription && (
          <div 
            className="text-base md:text-lg font-montserrat text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        )}

        {/* Botones */}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                className="px-8 py-3 bg-amber-600 text-white font-montserrat font-semibold rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300 shadow-lg"
              >
                {primaryButton.text}
              </button>
            )}

            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                className="px-8 py-3 border-2 border-amber-600 text-amber-200 font-montserrat font-medium rounded-lg hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300"
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
