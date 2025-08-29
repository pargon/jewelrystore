/**
 * COMPONENTE NAVBAR - Arquitectura Modular
 * Navegación superior luxury con estilos mejorados
 */

import React from 'react';
import { NavbarContainer, NavbarLink, NavbarBrand } from '../styled/NavbarStyles';

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
    <NavbarContainer className={className}>
      {brand && <NavbarBrand>{brand}</NavbarBrand>}
      
      {links.map((link, index) => (
        <NavbarLink
          key={index}
          href={link.href}
          className={link.active ? 'active' : ''}
        >
          {link.text}
        </NavbarLink>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
