/**
 * COMPONENTE REUTILIZABLE - ProductCard
 * Tarjeta de producto elegante usando nuevo diseño luxury
 */

import React, { useState } from 'react';
import { ProductCardProps } from '../types';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardPrice,
  CardRating,
  CardAddToCartButton,
  CardWishlistButton,
  CardDetailsButton
} from '../styled';
import WatchImagePlaceholder from './WatchImagePlaceholder';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToCart,
  showAddButton = true
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    // Aquí se podría agregar lógica para guardar en wishlist
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <CardContainer>
      <CardContent>
        {/* Botones superiores */}
        {showAddButton && (
          <CardAddToCartButton onClick={() => onAddToCart?.(product)}>
            Consultar →
          </CardAddToCartButton>
        )}
        
        <CardWishlistButton 
          isActive={isWishlisted}
          onClick={handleWishlistClick}
        />

        {/* Imagen del producto con fallback */}
        {imageError || !product.image || product.image.includes('/api/placeholder') ? (
          <WatchImagePlaceholder 
            brand={product.brand || 'Generic'} 
            name={product.name}
            className="mb-4"
          />
        ) : (
          <CardImage 
            src={product.image} 
            alt={product.name} 
            onError={handleImageError}
          />
        )}

        {/* Información del producto */}
        <CardTitle>{product.name}</CardTitle>
        <CardSubtitle>{product.description}</CardSubtitle>
        <CardPrice>{product.price}</CardPrice>
        
        {/* Rating con estrellas */}
        <CardRating rating={5} reviews={60} />

        {/* Botón Ver Detalles */}
        <CardDetailsButton onClick={() => onViewDetails?.(product)}>
          Ver Detalles
        </CardDetailsButton>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
