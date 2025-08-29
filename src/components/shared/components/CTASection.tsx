/**
 * COMPONENTE REUTILIZABLE - CTASection
 * Sección de llamada a la acción usando styled components
 */

import React from 'react';
import { CTASectionProps } from '../types';
import {
  CTAContainer,
  CTAContent,
  CTAIcon,
  CTATitle,
  CTADescription,
  CTAButton
} from '../styled';

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  bgGradient = 'from-gray-200 to-gray-300',
  textColor = 'text-gray-800',
  icon
}) => {
  return (
    <CTAContainer bgGradient={bgGradient} textColor={textColor}>
      <CTAContent>
        {icon && <CTAIcon icon={icon} />}
        <CTATitle>{title}</CTATitle>
        <CTADescription>{description}</CTADescription>
        <CTAButton onClick={onButtonClick}>
          {buttonText}
        </CTAButton>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
