/**
 * NAVBAR STYLES - Arquitectura Modular
 * Styled components para navegación superior luxury
 */

import styled from 'styled-components';

// Contenedor principal del navbar
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: rgba(28, 26, 23, 0.9);
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.75rem;
  }
`;

// Enlaces de navegación
export const NavbarLink = styled.a`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #C6A664;
  }
  
  &.active {
    color: #C6A664;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #C6A664;
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

// Logo/Brand en el navbar (opcional)
export const NavbarBrand = styled.div`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #C6A664;
  letter-spacing: 1px;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;
