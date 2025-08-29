/**
 * COMPONENTE FOOTER RELOJES
 * Footer específico para la página de relojes con diseño mejorado
 */

import React from "react";
import { Footer } from "../shared";
import { footerContactInfo, footerSocialLinks } from "../../data/footerData";

const RelojesFooter: React.FC = () => {
  return (
    <Footer contactInfo={footerContactInfo} socialLinks={footerSocialLinks} />
  );
};

export default RelojesFooter;
