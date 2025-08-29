/**
 * FOOTER HEADER COMPONENT
 * Sección de encabezado del footer con título y descripción
 */

import React from 'react';

interface FooterHeaderProps {
  title: string;
  description: string;
}

const FooterHeader: React.FC<FooterHeaderProps> = ({ title, description }) => (
  <div className="luxury-footer-header">
    <h2 className="luxury-footer-title">{title}</h2>
    <p className="luxury-footer-description">{description}</p>
  </div>
);

export default FooterHeader;
