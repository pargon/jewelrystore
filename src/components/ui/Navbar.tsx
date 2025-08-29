/**
 * NAVBAR - Versión Tailwind CSS
 * Componente de navegación unificado usando Tailwind en lugar de styled-components
 * Mejora la consistencia y mantenibilidad del sistema de estilos
 */

import React from 'react';

export interface NavbarProps {
  brand?: string;
  links: Array<{
    href: string;
    text: string;
    active?: boolean;
  }>;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brand,
  links,
  className = ''
}) => {
  return (
    <nav className={`bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-md p-4 md:p-6 shadow-xl border-b border-gray-700 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        {brand && (
          <div className="text-2xl md:text-3xl font-playfair font-bold text-amber-200 tracking-wide">
            {brand}
          </div>
        )}
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-montserrat font-medium text-lg transition-all duration-300 hover:text-amber-200 focus:outline-none focus:text-amber-200 ${
                link.active
                  ? 'text-amber-200 border-b-2 border-amber-200 pb-1'
                  : 'text-gray-300 hover:border-b-2 hover:border-amber-200 hover:pb-1'
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (placeholder for future implementation) */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-amber-200 focus:outline-none focus:text-amber-200 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (simple implementation) */}
      <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`block py-2 font-montserrat font-medium transition-all duration-300 hover:text-amber-200 focus:outline-none focus:text-amber-200 ${
              link.active
                ? 'text-amber-200 border-l-4 border-amber-200 pl-4'
                : 'text-gray-300 hover:border-l-4 hover:border-amber-200 hover:pl-4'
            }`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
