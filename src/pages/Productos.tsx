/**
 * PÁGINA PRODUCTOS - Catálogo General
 * Usando el patrón de arquitectura modular como Relojes
 */

import React from "react";
import { Product } from "../components/shared";
import {
  ProductosNavbar,
  ProductosHero,
  ProductosCollection,
  ProductosFooter,
} from "../components/productos";
import { PRODUCTOS_DATA, PRODUCTOS_ACTIONS } from "../data/productos";

const Productos: React.FC = () => {
  // Usar datos expandidos del archivo de datos
  const productosData: Product[] = PRODUCTOS_DATA.products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    category: product.category,
    brand: product.brand,
  }));

  // Handlers usando acciones funcionales
  const handleViewDetails = (product: Product) => {
    PRODUCTOS_ACTIONS.viewDetails(product);
  };

  const handleAddToCart = (product: Product) => {
    PRODUCTOS_ACTIONS.addToWishlist(product);
  };

  // Handler para scroll suave a la colección
  const handleScrollToCollection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("coleccion");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      {/* Navbar específico para productos */}
      <ProductosNavbar />

      {/* Hero Section específico para productos */}
      <ProductosHero onScrollToCollection={handleScrollToCollection} />

      {/* Sección de Colección específica para productos */}
      <ProductosCollection
        products={productosData}
        onViewDetails={handleViewDetails}
        onAddToCart={handleAddToCart}
      />

      {/* Footer específico para productos */}
      <ProductosFooter />
    </div>
  );
};

export default Productos;
