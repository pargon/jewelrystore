/**
 * FOOTER SOCIAL COMPONENT
 * Sección de redes sociales y WhatsApp del footer
 */

import React from 'react';
import { SocialLinks, ContactInfo } from '../types';

interface FooterSocialProps {
  socialLinks: SocialLinks;
  contactInfo: ContactInfo;
}

// Íconos SVG para redes sociales
const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.017 0C8.396 0 7.971.01 6.76.048 2.124.207.207 2.124.048 6.76.01 7.971 0 8.396 0 12.017c0 3.622.01 4.046.048 5.258.159 4.636 2.076 6.553 6.712 6.712 1.211.037 1.636.048 5.258.048 3.622 0 4.046-.01 5.258-.048 4.635-.159 6.553-2.076 6.712-6.712.037-1.212.048-1.636.048-5.258 0-3.621-.01-4.046-.048-5.258C23.833 2.124 21.916.207 17.28.048 16.069.01 15.644 0 12.017 0zm0 2.17c3.557 0 3.982.01 5.188.048 3.37.153 4.914 1.698 5.067 5.068.037 1.205.048 1.63.048 5.185 0 3.554-.01 3.98-.048 5.184-.153 3.37-1.697 4.914-5.067 5.067-1.206.038-1.631.048-5.188.048-3.558 0-3.982-.01-5.188-.048-3.37-.153-4.914-1.697-5.067-5.067-.037-1.204-.048-1.63-.048-5.184 0-3.555.01-3.98.048-5.185.153-3.37 1.697-4.915 5.067-5.068 1.206-.037 1.63-.048 5.188-.048zm0 3.68c-3.618 0-6.55 2.932-6.55 6.55s2.932 6.55 6.55 6.55 6.55-2.932 6.55-6.55-2.932-6.55-6.55-6.55zm0 10.8c-2.346 0-4.25-1.904-4.25-4.25s1.904-4.25 4.25-4.25 4.25 1.904 4.25 4.25-1.904 4.25-4.25 4.25zm8.33-11.07c0 .845-.685 1.53-1.53 1.53-.845 0-1.53-.685-1.53-1.53 0-.845.685-1.53 1.53-1.53.845 0 1.53.685 1.53 1.53z"
      clipRule="evenodd"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
  </svg>
);

const FooterSocial: React.FC<FooterSocialProps> = ({ 
  socialLinks, 
  contactInfo 
}) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, "_blank");
  };

  return (
    <div className="luxury-footer-social">
      {/* Botón de WhatsApp */}
      <div className="luxury-footer-whatsapp">
        <h3 className="luxury-footer-section-title">
          Contacto Directo
        </h3>
        <button
          className="luxury-footer-whatsapp-btn"
          onClick={handleWhatsAppClick}
        >
          <WhatsAppIcon />
          <span>Contactar por WhatsApp</span>
        </button>
      </div>

      {/* Redes sociales */}
      <div className="luxury-footer-social-networks">
        <h3 className="luxury-footer-section-title">
          Síguenos en Redes
        </h3>
        <div className="luxury-footer-social-links">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-footer-social-link"
            title="Síguenos en Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-footer-social-link"
            title="Síguenos en Facebook"
          >
            <FacebookIcon />
          </a>

          <button
            className="luxury-footer-social-link luxury-footer-social-btn"
            onClick={handleWhatsAppClick}
            title="Síguenos en nuestro Canal de WhatsApp"
          >
            <WhatsAppIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
