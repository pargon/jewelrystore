/**
 * Design Tokens - Sistema de colores centralizado
 * Paleta de colores especificada por el usuario
 */

export const tokens = {
  colors: {
    // Nueva paleta de colores elegante y lujosa
    primary: '#C6A664',      // Dorado elegante - Color principal
    dark: '#1C1A17',         // Marrón-negruzco cálido - Fondo principal
    light: '#FFFFFF',        // Blanco puro - Texto principal
    medium: '#D9D6D2',       // Marfil suave/gris cálido - Texto secundario
    accent: '#A6894E',       // Dorado más oscuro - Botones hover y detalles metálicos
    
    // Variaciones para diferentes usos
    background: {
      primary: '#1C1A17',    // Fondo principal (marrón-negruzco cálido)
      secondary: '#2A251F',  // Fondo secundario (ligeramente más claro)
      tertiary: '#383229',   // Fondo terciario (cards, modals)
      accent: 'rgba(198, 166, 100, 0.1)', // Fondo con tinte dorado sutil
    },
    
    // Colores de superficie
    surface: {
      primary: '#2A251F',
      secondary: '#383229', 
      tertiary: '#453E35',
      accent: 'rgba(198, 166, 100, 0.15)', // Superficie con acento dorado
    },
    
    // Colores de texto
    text: {
      primary: '#FFFFFF',    // Blanco puro - Texto principal
      secondary: '#D9D6D2',  // Marfil suave - Texto secundario/descripciones
      accent: '#C6A664',     // Dorado elegante - Texto de acento
      inverse: '#1C1A17',    // Texto sobre fondos claros
    },
    
    // Colores de borde
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',     // Bordes sutiles blancos
      secondary: 'rgba(217, 214, 210, 0.2)',   // Bordes con tinte marfil
      accent: 'rgba(198, 166, 100, 0.4)',      // Bordes dorados
    },
  },
  
  // Espaciado
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  
  // Tipografía
  typography: {
    fontFamily: {
      primary: '"Playfair Display", serif',
      secondary: '"Source Sans Pro", sans-serif',
      accent: '"Dancing Script", cursive',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  // Sombras
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Bordes redondeados
  borderRadius: {
    sm: '0.125rem',
    md: '0.375rem', 
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
  },
};
