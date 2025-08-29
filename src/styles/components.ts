
/**
 * Estilos centralizados para componentes
 * Patron: Componente con estilos aplicados directamente
 */

export const buttonStyles = {
  // Botones primarios
  primary: "px-8 py-3 bg-gray-800 text-white font-openSans font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300 shadow-lg",
  primaryGreen: "px-8 py-3 bg-green-600 text-white font-openSans font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg",
  primaryBlue: "px-8 py-3 bg-blue-600 text-white font-openSans font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg",
  primaryRose: "px-8 py-3 bg-rose-600 text-white font-openSans font-semibold rounded-lg hover:bg-rose-700 transition-colors duration-300 shadow-lg",
  primaryAmber: "px-8 py-3 bg-amber-600 text-white font-openSans font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300 shadow-lg",
  primaryPurple: "px-8 py-3 bg-purple-600 text-white font-openSans font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg",

  // Botones secundarios
  secondary: "px-8 py-3 border-2 border-gray-800 text-gray-800 font-openSans font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300",
  secondaryBlue: "px-8 py-3 border-2 border-blue-600 text-blue-600 font-openSans font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300",
  secondaryRose: "px-8 py-3 border-2 border-rose-600 text-rose-600 font-openSans font-semibold rounded-lg hover:bg-rose-600 hover:text-white transition-all duration-300",
  secondaryAmber: "px-8 py-3 border-2 border-amber-600 text-amber-600 font-openSans font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300",

  // Botones pequeños
  small: "px-3 py-2 text-sm font-openSans font-medium rounded transition-colors duration-300",
  smallPrimary: "px-3 py-2 bg-blue-600 text-white text-sm font-openSans font-medium rounded hover:bg-blue-700 transition-colors duration-300",
  smallSecondary: "px-3 py-2 border border-blue-300 text-blue-700 text-sm font-openSans font-medium rounded hover:bg-blue-50 transition-colors duration-300",

  // Botones especiales
  whatsapp: "flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white font-openSans font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg",
  heroWhite: "px-8 py-3 bg-white text-rose-700 rounded-lg font-lato font-semibold hover:bg-rose-50 transition-colors shadow-md",
  heroOutline: "px-8 py-3 border-2 border-white text-rose-800 rounded-lg font-semibold hover:bg-white hover:text-rose-700 transition-colors",
  fullWidth: "w-full px-4 py-2 rounded-lg font-openSans font-medium transition-colors duration-300",
};

export const cardStyles = {
  // Cards base
  base: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
  elevated: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
  simple: "bg-white rounded-lg shadow-sm border border-gray-100",
  
  // Cards con efectos especiales
  contactCard: "bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
  productCard: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
  serviceCard: "text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  
  // Cards con colores
  grayBackground: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300",
  coloredBorder: (color: string) => `p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md cursor-pointer ${
    color === 'green' ? 'border-green-200 hover:border-green-300 hover:bg-green-50' :
    color === 'blue' ? 'border-blue-200 hover:border-blue-300 hover:bg-blue-50' :
    color === 'pink' ? 'border-pink-200 hover:border-pink-300 hover:bg-pink-50' :
    color === 'rose' ? 'border-rose-200 hover:border-rose-300 hover:bg-rose-50' :
    color === 'purple' ? 'border-purple-200 hover:border-purple-300 hover:bg-purple-50' :
    color === 'amber' ? 'border-amber-200 hover:border-amber-300 hover:bg-amber-50' :
    'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
  }`,
};

export const textStyles = {
  // Títulos
  heroTitle: "text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-6",
  heroSubtitle: "font-lato italic text-2xl md:text-3xl mb-4 font-light",
  heroDescription: "text-xl mb-8 max-w-2xl mx-auto font-openSans",
  sectionTitle: "text-3xl font-roboto font-bold text-gray-900 mb-4",
  sectionSubtitle: "text-gray-600 font-openSans",
  cardTitle: "text-xl font-roboto font-semibold mb-2",
  cardSubtitle: "text-lg font-roboto font-semibold mb-2 text-gray-800",
  
  // Textos descriptivos
  description: "text-gray-600 font-openSans",
  smallDescription: "text-gray-600 font-openSans text-sm",
  extraSmallDescription: "font-openSans text-xs text-gray-600",
  
  // Precios y métricas
  price: "text-xl font-roboto font-bold text-gray-800",
  originalPrice: "text-sm text-gray-500 line-through",
  metric: "text-3xl font-roboto font-bold text-gray-800 mb-2",
  
  // Colores especiales
  coloredText: (color: string) => `font-roboto font-bold mb-2 ${
    color === 'rose' ? 'text-rose-600' :
    color === 'blue' ? 'text-blue-600' :
    color === 'purple' ? 'text-purple-600' :
    color === 'amber' ? 'text-amber-600' :
    color === 'green' ? 'text-green-600' :
    'text-gray-600'
  }`,
};

export const layoutStyles = {
  // Contenedores principales
  container: "container mx-auto px-4",
  section: "py-16",
  heroSection: "py-16",
  
  // Grids
  grid1: "grid grid-cols-1 gap-8",
  grid2: "grid grid-cols-1 md:grid-cols-2 gap-8",
  grid3: "grid grid-cols-1 md:grid-cols-3 gap-8",
  grid4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  grid6: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
  gridAuto: "grid gap-8",
  
  // Flex layouts
  flexCenter: "flex justify-center items-center",
  flexCenterCol: "flex flex-col justify-center items-center",
  flexBetween: "flex justify-between items-center",
  flexWrap: "flex flex-wrap gap-4 justify-center",
  flexResponsive: "flex flex-col sm:flex-row gap-4 justify-center",
  
  // Espaciado
  spacing: {
    textCenter: "text-center",
    textCenterMb: "text-center mb-8",
    textCenterMb12: "text-center mb-12",
    mb4: "mb-4",
    mb6: "mb-6",
    mb8: "mb-8",
    p4: "p-4",
    p6: "p-6",
    spaceY2: "space-y-2",
    spaceY4: "space-y-4",
    spaceX2: "space-x-2",
    spaceX4: "space-x-4",
  },
};

export const backgroundStyles = {
  // Fondos sólidos
  white: "bg-white",
  gray50: "bg-gray-50",
  gray100: "bg-gray-100",
  
  // Gradientes por sección
  gradients: {
    home: "bg-gradient-to-r from-gray-100 to-gray-200",
    alianzas: "bg-gradient-to-r from-rose-100 to-pink-100",
    relojes: "bg-gradient-to-r from-blue-100 to-indigo-100",
    smartwatches: "bg-gradient-to-r from-purple-100 to-indigo-100",
    composturas: "bg-gradient-to-r from-amber-100 to-orange-100",
    contacto: "bg-gradient-to-r from-blue-100 to-cyan-100",
    newsletter: "bg-gradient-to-r from-gray-800 to-gray-900 text-white",
  },
  
  // Fondos con color
  rose50: "bg-rose-50",
  blue50: "bg-blue-50",
  amber50: "bg-amber-50",
  purple50: "bg-purple-50",
  green50: "bg-green-50",
};

export const animationStyles = {
  // Transiciones
  transition: "transition-colors duration-300",
  transitionAll: "transition-all duration-300",
  transitionShadow: "transition-shadow duration-300",
  transitionTransform: "transition-all duration-300 transform",
  
  // Hover effects
  hoverShadow: "hover:shadow-lg",
  hoverShadowXl: "hover:shadow-xl",
  hoverTranslate: "hover:-translate-y-1",
  hoverTranslate2: "hover:-translate-y-2",
  
  // Estados especiales
  cursorPointer: "cursor-pointer",
};

// Función helper para combinar estilos
export const combineStyles = (...styles: string[]) => styles.join(' ');

// Función helper para estilos condicionales
export const conditionalStyles = (condition: boolean, trueStyle: string, falseStyle: string = '') => 
  condition ? trueStyle : falseStyle;

// Función helper para estilos de color dinámicos
export const getColorStyles = (color: string) => ({
  button: buttonStyles[`primary${color.charAt(0).toUpperCase() + color.slice(1)}` as keyof typeof buttonStyles] || buttonStyles.primary,
  text: textStyles.coloredText(color),
  background: backgroundStyles[`${color}50` as keyof typeof backgroundStyles] || backgroundStyles.gray50,
});
