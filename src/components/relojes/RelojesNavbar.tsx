/**
 * COMPONENTE NAVEGACIÓN RELOJES
 * Navbar específico para la página de relojes con links apropiados
 */

import React from 'react';
import { Navbar } from '../shared';

const RelojesNavbar: React.FC = () => {
  const navLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/relojes', text: 'Relojes', active: true },
    { href: '/anillos', text: 'Anillos' },
    { href: '/collares', text: 'Collares' },
    { href: '/contacto', text: 'Contacto' }
  ];

  return (
    <Navbar
      brand="Diamond"
      links={navLinks}
    />
  );
};

export default RelojesNavbar;
