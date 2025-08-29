/**
 * BACK TO TOP COMPONENT
 * Botón flotante para regresar al inicio de la página
 */

import React, { useEffect, useState, useRef } from 'react';

interface BackToTopProps {
  className?: string;
  position?: 'fixed' | 'static';
}

const BackToTop: React.FC<BackToTopProps> = ({ 
  className = '', 
  position = 'static' 
}) => {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // inicializa el estado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observerRef.current.observe(footer);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  if (!visible || footerVisible) return null;

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
