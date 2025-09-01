/**
 * BACK TO TOP COMPONENT
 * Botón flotante para regresar al inicio de la página
 */

import React, { useEffect, useState } from 'react';

interface BackToTopProps {
  className?: string;
  position?: 'fixed' | 'static';
}

const BackToTop: React.FC<BackToTopProps> = ({ 
  className = '', 
  position = 'static' 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando haya scroll de más de 300px (antes era 100px)
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // inicializa el estado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  // Solo mostrar el botón si hay suficiente scroll, sin importar si el footer es visible
  if (!visible) return null;

  return (
    <button
      onClick={handleScrollToTop}
      className={`${position === 'fixed' ? 'luxury-back-to-top-fixed' : 'luxury-back-to-top'} ${className}`}
      title="Volver al inicio"
    >
      <svg
        className="luxury-back-to-top-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <title>Volver al inicio</title>
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
      {position !== 'fixed' && (
        <span className="luxury-back-to-top-text">Inicio</span>
      )}
    </button>
  );
};

export default BackToTop;
