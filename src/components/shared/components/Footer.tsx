/**
 * FOOTER COMPONENT - Refactorizado con patrón modular
 * Componente principal que orquesta FooterHeader, FooterContact y FooterSocial
 */

import React from "react";
import { ContactInfo, SocialLinks } from "../types";
import FooterHeader from "./FooterHeader";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

interface FooterProps {
  title?: string;
  description?: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({
  title = "Diamond Jewelry",
  description = "Expertos en joyería de diamantes desde 1985",
  contactInfo,
  socialLinks,
}) => {
  return (
    <footer className="luxury-footer" style={{ position: 'relative' }}>
      <div className="luxury-footer-container">
        <FooterHeader 
          title={title}
          description={description}
        />
        
        <div className="luxury-footer-content">
          <FooterContact 
            contactInfo={contactInfo}
          />
          
          <FooterSocial 
            socialLinks={socialLinks}
            contactInfo={contactInfo}
          />
        </div>

        <div className="luxury-footer-bottom">
          <p className="luxury-footer-copyright">
            © 2024 Diamond Jewelry. Todos los derechos reservados.
          </p>
        </div>

        {/* Icono flotante en el footer */}
        {/* <BackToTop position="fixed" /> */}
      </div>
    </footer>
  );
};

export default Footer;
