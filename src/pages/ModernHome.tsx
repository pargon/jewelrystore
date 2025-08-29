/**
 * HOME PAGE - Arquitectura Modular Factorizada
 * Siguiendo el patrón página + componente + styled
 */

import React from "react";
import { HomeHero, HomeCategories, HomeBrands, HomeComoComprar } from "../components/home";
import { Footer, BackToTop } from "../components/shared";
import { HOME_DATA, HOME_ACTIONS } from "../data/home";
import { footerContactInfo, footerSocialLinks } from "../data/footerData";

const ModernHome: React.FC = () => {

  // Handlers usando las acciones centralizadas
  const handleCategoryClick = (link: string) => {
    HOME_ACTIONS.navigateToCategory(link);
  };

  // Handler para scroll a categorías en el mismo home
  const handleExploreClick = () => {
    const element = document.getElementById('home-categories');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  // Handler para scroll a sección "cómo comprar" en el mismo home  
  const handleHowBuyClick = () => {
    const element = document.getElementById('home-como-comprar');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  // Handler para scroll a sección "marcas" en el mismo home
  const handleBrandsClick = () => {
    const element = document.getElementById('home-brands');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  // Handler para scroll al footer/contacto
  const handleFooterContactClick = () => {
    const element = document.querySelector('footer');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <>
      <HomeHero
        title={HOME_DATA.hero.title}
        subtitle={HOME_DATA.hero.subtitle}
        description={HOME_DATA.hero.subtitle}
        onExploreClick={handleExploreClick}
        onHowBuyClick={handleHowBuyClick}
        onBrandsClick={handleBrandsClick}
        onFooterContactClick={handleFooterContactClick}
      />
      <HomeCategories
        id="home-categories"
        title="Nuestras Especialidades"
        description="Encuentra exactamente lo que buscas en nuestras categorías principales"
        categories={HOME_DATA.categories.items}
        onCategoryClick={handleCategoryClick}
      />
      <HomeBrands
        id="home-brands"
        title={HOME_DATA.brands.title}
        description={HOME_DATA.brands.subtitle}
        brands={HOME_DATA.brands.names}
      />
      
      <HomeComoComprar id="home-como-comprar" />
      
      <Footer
        title="Diamond Jewelry"
        description="Expertos en joyería de diamantes desde 1985"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
      
      {/* Botón flotante para volver al inicio */}
      <BackToTop/>
    </>
  );
};

export default ModernHome;
