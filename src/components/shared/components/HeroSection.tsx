/**
 * COMPONENTE HERO SECTION - Arquitectura Modular
 * Sección hero reutilizable para diferentes páginas
 */

import React from "react";
import DOMPurify from "dompurify";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtonGroup,
  HeroPrimaryButton,
  HeroSecondaryButton,
} from "../styled/HeroSectionStyles";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    href?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
  backgroundType?: "gradient" | "solid" | "image";
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundType = "gradient",
  className = "",
}) => {
  return (
    <HeroContainer backgroundType={backgroundType} className={className}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>

        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}

        {description && (
          <HeroDescription
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description, {
                ALLOWED_TAGS: ["br", "strong", "em", "span"],
                ALLOWED_ATTR: ["class"],
              }),
            }}
          />
        )}

        {(primaryButton || secondaryButton) && (
          <HeroButtonGroup>
            {primaryButton && (
              <HeroPrimaryButton
                href={primaryButton.href || "#"}
                onClick={primaryButton.onClick}
                role="button"
              >
                {primaryButton.text}
              </HeroPrimaryButton>
            )}

            {secondaryButton && (
              <HeroSecondaryButton
                href={secondaryButton.href}
                target={secondaryButton.target}
                rel={secondaryButton.rel}
                role="button"
              >
                {secondaryButton.text}
              </HeroSecondaryButton>
            )}
          </HeroButtonGroup>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
