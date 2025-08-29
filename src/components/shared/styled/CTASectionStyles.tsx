/**
 * STYLED COMPONENTS - CTASection
 * Estilos separados para sección de llamada a la acción
 */

import React from 'react';

// Contenedor principal de CTA
export const CTAContainer: React.FC<{
  bgGradient: string;
  textColor: string;
  children: React.ReactNode;
}> = ({ bgGradient, textColor, children }) => (
  <div className={`bg-gradient-to-r ${bgGradient} ${textColor} py-16`}>
    {children}
  </div>
);

// Contenido centrado
export const CTAContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto px-4 text-center">
    {children}
  </div>
);

// Icono opcional
export const CTAIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="text-6xl mb-4">{icon}</div>
);

// Título de CTA (Playfair Display para elegancia)
export const CTATitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-playfair font-semibold mb-4">{children}</h2>
);

// Descripción de CTA (Montserrat para legibilidad)
export const CTADescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xl mb-8 font-montserrat max-w-2xl mx-auto">
    {children}
  </p>
);

// Botón de CTA (paleta de joyería)
export const CTAButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="px-8 py-3 bg-jewelry-white text-jewelry-neutralGray rounded-lg font-montserrat font-semibold hover:bg-jewelry-lightGray hover:text-jewelry-dark transition-colors shadow-md transform hover:scale-105"
  >
    {children}
  </button>
);
