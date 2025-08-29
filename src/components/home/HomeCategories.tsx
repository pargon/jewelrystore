/**
 * HOME CATEGORIES COMPONENT
 * Sección de categorías principales
 */

import React from 'react';

interface Category {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface HomeCategoriesProps {
  title: string;
  description: string;
  categories: Category[];
  onCategoryClick: (link: string) => void;
  id?: string;
}

const HomeCategories: React.FC<HomeCategoriesProps> = ({ 
  title, 
  description, 
  categories, 
  onCategoryClick,
  id 
}) => (
  <section id={id} className="luxury-section">
    <div className="luxury-container">
      <div className="luxury-container-inner">
        <h2 className="luxury-title-section">{title}</h2>
        <p className="luxury-text-lead">{description}</p>
        
        <div className="luxury-grid luxury-grid-4">
          {categories.map((category, index) => (
            <div key={index} className="luxury-card">
              <div className="luxury-card-image">
                <img src={category.icon} alt={category.title} className="luxury-card-img" />
              </div>
              <div className="luxury-card-content">
                <div className="luxury-card-text">
                  <h3 className="luxury-title-card">{category.title}</h3>
                  <p className="luxury-text-body">{category.description}</p>
                </div>
                <div className="luxury-card-actions">
                  <button 
                    className="luxury-btn luxury-btn-outline luxury-btn-small"
                    onClick={() => onCategoryClick(category.link)}
                  >
                    <span className="luxury-button-text">Ver Más</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  </section>
);

export default HomeCategories;
