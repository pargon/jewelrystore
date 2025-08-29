// Configuración de fuentes Google Fonts para Joyería Diamond

export const fontFamilies = {
  // Fuente principal para títulos elegantes - serif clásica
  display: 'Playfair Display, Georgia, serif',
  
  // Fuente secundaria para texto body - moderna y legible
  body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  
  // Fuente script para elementos decorativos
  script: 'Dancing Script, cursive',
  
  // Fuente serif alternativa para texto largo
  serif: 'Crimson Text, Georgia, serif'
};

export const fontSizes = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem'      // 128px
};

export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900'
};

// Clases de utilidad predefinidas
export const textStyles = {
  // Títulos principales
  hero: 'font-display font-bold text-6xl md:text-7xl lg:text-8xl',
  title: 'font-display font-bold text-4xl md:text-5xl',
  subtitle: 'font-display font-semibold text-2xl md:text-3xl',
  
  // Texto decorativo
  script: 'font-script font-medium text-xl md:text-2xl',
  scriptLarge: 'font-script font-semibold text-3xl md:text-4xl',
  
  // Texto de contenido
  body: 'font-body font-normal text-base',
  bodyLarge: 'font-body font-normal text-lg',
  caption: 'font-body font-medium text-sm',
  
  // Botones
  button: 'font-body font-semibold text-base',
  buttonSmall: 'font-body font-medium text-sm',
  
  // Navegación
  nav: 'font-body font-medium text-base',
  navTitle: 'font-display font-bold text-xl md:text-2xl'
};
