/**
 * STYLED COMPONENTS - CategoryFilters
 * Estilos separados para filtros de categorías
 */

import React from 'react';

// Contenedor principal de filtros
export const FiltersContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto px-4 py-8">
    {children}
  </div>
);

// Grupo de botones de filtros
export const FiltersButtonGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-wrap gap-4 justify-center mb-8">
    {children}
  </div>
);

// Botón individual de filtro (Montserrat para botones)
export const FilterButton: React.FC<{
  color: string;
  isActive?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ color, isActive = false, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 ${color} rounded-full hover:opacity-80 transition-all font-montserrat font-medium transform hover:scale-105 ${
      isActive ? 'ring-2 ring-offset-2 ring-indigo-400 shadow-lg' : ''
    }`}
  >
    {children}
  </button>
);
