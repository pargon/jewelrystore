/**
 * COMPONENTE NAVEGACIÓN PRODUCTOS
 * Navbar específico para la página de productos con links apropiados
 */

import React from 'react';
import { Navbar } from '../shared';

const ProductosNavbar: React.FC = () => {
  const navLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/productos', text: 'Productos', active: true },
    { href: '/relojes', text: 'Relojes' },
    { href: '/smartwatches', text: 'Smartwatches' },
    { href: '/alianzas', text: 'Alianzas' },
    { href: '/contacto', text: 'Contacto' }
  ];

  return (
    <Navbar
      brand="Diamond"
      links={navLinks}
    />
  );
};

export default ProductosNavbar;
