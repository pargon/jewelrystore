/**
 * FOOTER CONTACT COMPONENT
 * Sección de información de contacto del footer
 */

import React from 'react';
import { ContactInfo } from '../types';

interface FooterContactProps {
  contactInfo: ContactInfo;
}

// Íconos SVG dorados para información de contacto
const LocationIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      clipRule="evenodd"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
      clipRule="evenodd"
    />
  </svg>
);

const FooterContact: React.FC<FooterContactProps> = ({ contactInfo }) => (
  <div className="luxury-footer-contact">
    <h3 className="luxury-footer-section-title">
      Información de Contacto
    </h3>

    <div className="luxury-footer-contact-list">
      <div className="luxury-footer-contact-item">
        <div className="luxury-footer-contact-icon">
          <LocationIcon />
        </div>
        <div>
          <h4 className="luxury-footer-contact-label">Dirección</h4>
          <p className="luxury-footer-contact-value">{contactInfo.address}</p>
        </div>
      </div>

      <div className="luxury-footer-contact-item">
        <div className="luxury-footer-contact-icon">
          <PhoneIcon />
        </div>
        <div>
          <h4 className="luxury-footer-contact-label">Teléfono</h4>
          <p className="luxury-footer-contact-value">{contactInfo.phone}</p>
        </div>
      </div>

      <div className="luxury-footer-contact-item">
        <div className="luxury-footer-contact-icon">
          <EmailIcon />
        </div>
        <div>
          <h4 className="luxury-footer-contact-label">Email</h4>
          <p className="luxury-footer-contact-value">{contactInfo.email}</p>
        </div>
      </div>

      <div className="luxury-footer-contact-item">
        <div className="luxury-footer-contact-icon">
          <ClockIcon />
        </div>
        <div>
          <h4 className="luxury-footer-contact-label">Horarios</h4>
          <p className="luxury-footer-contact-value">{contactInfo.hours}</p>
        </div>
      </div>
    </div>
  </div>
);

export default FooterContact;
