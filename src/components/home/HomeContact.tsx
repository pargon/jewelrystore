/**
 * HOME CONTACT COMPONENT
 * Sección de contacto y redes sociales
 */

import React from 'react';
import { SocialLinks } from '../../types/common';

interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
}

interface HomeContactProps {
  title: string;
  description: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLinks;
}

const HomeContact: React.FC<HomeContactProps> = ({ 
  title, 
  description, 
  contactInfo, 
  socialLinks 
}) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <section className="luxury-section">
      <div className="luxury-container">
        <div className="luxury-container-inner">
          <h2 className="luxury-title-section">{title}</h2>
          <p className="luxury-text-lead">{description}</p>
          
          <div className="luxury-grid luxury-grid-2">
            <div className="luxury-contact-info">
              <div className="luxury-contact-item">
                <h4 className="luxury-contact-label">Dirección</h4>
                <p className="luxury-contact-value">{contactInfo.address}</p>
              </div>
              
              <div className="luxury-contact-item">
                <h4 className="luxury-contact-label">Teléfono</h4>
                <p className="luxury-contact-value">{contactInfo.phone}</p>
              </div>
              
              <div className="luxury-contact-item">
                <h4 className="luxury-contact-label">Email</h4>
                <p className="luxury-contact-value">{contactInfo.email}</p>
              </div>
              
              <div className="luxury-contact-item">
                <h4 className="luxury-contact-label">Horarios</h4>
                <p className="luxury-contact-value">{contactInfo.hours}</p>
              </div>
            </div>
            
            <div className="luxury-contact-actions">
              <button className="luxury-btn luxury-btn-primary luxury-btn-large" onClick={handleWhatsAppClick}>
                <span className="luxury-button-text">💬 Contactar por WhatsApp</span>
              </button>
              
              <div className="luxury-social-links">
                <h4 className="luxury-contact-label">Síguenos</h4>
                <div className="luxury-social-buttons">
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                     className="luxury-btn luxury-btn-outline luxury-btn-social">
                    Instagram
                  </a>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                     className="luxury-btn luxury-btn-outline luxury-btn-social">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
