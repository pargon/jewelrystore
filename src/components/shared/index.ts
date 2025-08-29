/**
 * SHARED COMPONENTS - Índice principal
 * Arquitectura separada: components, styled, types
 */

// Re-exportar componentes principales
export {
  PageHeader,
  CategoryFilters,
  ProductCard,
  ProductGrid,
  CTASection,
  Footer,
  HeroSection,
  Navbar,
  BackToTop
} from './components';

// Re-exportar todos los styled components
export * from './styled';

// Re-exportar tipos
export * from './types';

// Re-exportar temas
export { pageThemes, getPageTheme } from './types/themes';
export type { ThemeName } from './types/themes';
