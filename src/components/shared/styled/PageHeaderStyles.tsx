/**
 * STYLED COMPONENTS - PageHeader
 * Estilos separados para el hero section
 */

import React from 'react';

// Contenedor principal del hero (padding dinámico)
export const HeaderContainer: React.FC<{
  bgGradient: string;
  textColor: string;
  children: React.ReactNode;
  compact?: boolean;
}> = ({ bgGradient, textColor, children, compact = false }) => (
  <div className={`bg-gradient-to-r ${bgGradient} ${textColor} ${compact ? 'py-8' : 'py-16'}`}>
    {children}
  </div>
);

// Contenedor interno responsivo
export const HeaderContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto px-4">
    <div className="text-center">
      {children}
    </div>
  </div>
);

// Título principal (Playfair Display para elegancia)
export const HeaderTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
    {children}
  </h1>
);

// Descripción del hero (Montserrat para legibilidad)
export const HeaderDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xl mb-8 max-w-2xl mx-auto font-montserrat opacity-80">
    {children}
  </p>
);
