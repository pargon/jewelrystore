/**
 * COMPONENTE REUTILIZABLE - PageHeader
 * Hero section para páginas de categorías usando styled components
 */

import React from 'react';
import { PageHeaderProps } from '../types';
import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderDescription
} from '../styled';

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  bgGradient = 'from-jewelry-dark to-gray-900',
  textColor = 'text-jewelry-white'
}) => {
  // Si no hay título ni descripción, no renderizar nada
  if (!title && !description) {
    return null;
  }

  // Detectar si es compacto (solo título sin descripción)
  const isCompact = !!(title && !description);

  return (
    <HeaderContainer bgGradient={bgGradient} textColor={textColor} compact={isCompact}>
      <HeaderContent>
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {description && <HeaderDescription>{description}</HeaderDescription>}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default PageHeader;
