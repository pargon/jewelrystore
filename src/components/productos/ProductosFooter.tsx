/**
 * COMPONENTE FOOTER PRODUCTOS
 * Footer específico para la página de productos
 */

import React from 'react';
import { Footer } from '../shared';
import { footerContactInfo, footerSocialLinks } from '../../data/footerData';

const ProductosFooter: React.FC = () => {
  return (
    <Footer
      title="Diamond Jewelry"
      description="Tu destino para joyería fina y productos exclusivos desde 1985"
      contactInfo={footerContactInfo}
      socialLinks={footerSocialLinks}
    />
  );
};

export default ProductosFooter;
