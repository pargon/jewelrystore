/**
 * COMPONENTE HERO RELOJES
 * Hero section específico para la página de relojes
 */

import React from 'react';
import { HeroSection } from '../shared';

interface RelojesHeroProps {
  onScrollToCollection: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RelojesHero: React.FC<RelojesHeroProps> = ({ onScrollToCollection }) => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <HeroSection
        title="Relojes de Lujo"
        subtitle="Diamond Jewelry • San Miguel • Buenos Aires"
        description="Especialistas en relojes de alta gama, smartwatches premium y cronómetros exclusivos.<br/>Cada pieza seleccionada por su calidad excepcional y diseño atemporal."
        primaryButton={{
          text: "Explorar Colección",
          href: "#coleccion",
          onClick: onScrollToCollection
        }}
        secondaryButton={{
          text: "Contactar Asesor",
          href: "https://wa.me/5491234567890",
          target: "_blank",
          rel: "noopener noreferrer"
        }}
        backgroundType="gradient"
      />
    </div>
  );
};

export default RelojesHero;
