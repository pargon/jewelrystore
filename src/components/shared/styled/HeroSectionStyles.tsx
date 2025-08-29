/**
 * HERO SECTION STYLES - Arquitectura Modular
 * Styled components para secciones hero reutilizables
 */

import styled from 'styled-components';

// Container principal del hero
export const HeroContainer = styled.div<{ backgroundType?: 'gradient' | 'solid' | 'image' }>`
  padding: 5rem 1rem;
  
  ${props => {
    switch (props.backgroundType) {
      case 'gradient':
        return `
          background: linear-gradient(135deg, #1C1A17 0%, #1C1A17 50%, #666666 100%);
        `;
      case 'solid':
        return `
          background-color: #1C1A17;
        `;
      default:
        return `
          background: linear-gradient(135deg, #1C1A17 0%, #1C1A17 50%, #666666 100%);
        `;
    }
  }}
  
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

// Contenido centrado del hero
export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
`;

// Título principal
export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: 1px;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

// Subtítulo
export const HeroSubtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #C6A664;
  margin-bottom: 1.5rem;
  letter-spacing: 0.025em;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Descripción
export const HeroDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #D9D6D2;
  font-size: 1rem;
  line-height: 1.625;
  max-width: 32rem;
  margin: 0 auto 2rem;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

// Grupo de botones
export const HeroButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

// Botón primario
export const HeroPrimaryButton = styled.a`
  display: inline-block;
  background-color: #C6A664;
  color: #1C1A17;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #A6894E;
    box-shadow: 0 10px 25px rgba(198, 166, 100, 0.3);
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(198, 166, 100, 0.4);
  }
`;

// Botón secundario
export const HeroSecondaryButton = styled.a`
  display: inline-block;
  border: 1px solid #C6A664;
  color: #C6A664;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 12px 28px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #C6A664;
    color: #1C1A17;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(198, 166, 100, 0.4);
  }
`;
