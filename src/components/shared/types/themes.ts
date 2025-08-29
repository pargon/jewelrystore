/**
 * TEMAS PREDEFINIDOS PARA PÁGINAS
 * Configuraciones de colores opcionales para personalizar páginas
 */

export const pageThemes = {
  // Tema por defecto (neutral)
  default: {
    pageHeader: {
      bgGradient: 'from-gray-100 to-gray-200',
      textColor: 'text-gray-800'
    },
    ctaSection: {
      bgGradient: 'from-gray-200 to-gray-300',
      textColor: 'text-gray-800'
    }
  },

  // Tema para relojes (azul/indigo)
  relojes: {
    pageHeader: {
      bgGradient: 'from-blue-100 to-indigo-100',
      textColor: 'text-indigo-800'
    },
    ctaSection: {
      bgGradient: 'from-indigo-200 to-purple-200',
      textColor: 'text-indigo-800'
    }
  },

  // Tema para smartwatches (verde/teal)
  smartwatches: {
    pageHeader: {
      bgGradient: 'from-green-100 to-teal-100',
      textColor: 'text-teal-800'
    },
    ctaSection: {
      bgGradient: 'from-green-200 to-teal-200',
      textColor: 'text-teal-800'
    }
  },

  // Tema para alianzas (dorado/amber)
  alianzas: {
    pageHeader: {
      bgGradient: 'from-yellow-100 to-amber-100',
      textColor: 'text-amber-800'
    },
    ctaSection: {
      bgGradient: 'from-yellow-200 to-amber-200',
      textColor: 'text-amber-800'
    }
  },

  // Tema para composturas (gris/slate)
  composturas: {
    pageHeader: {
      bgGradient: 'from-slate-100 to-gray-200',
      textColor: 'text-slate-800'
    },
    ctaSection: {
      bgGradient: 'from-slate-200 to-gray-300',
      textColor: 'text-slate-800'
    }
  },

  // Tema para contacto (rosa/pink)
  contacto: {
    pageHeader: {
      bgGradient: 'from-rose-100 to-pink-100',
      textColor: 'text-rose-800'
    },
    ctaSection: {
      bgGradient: 'from-rose-200 to-pink-200',
      textColor: 'text-rose-800'
    }
  }
};

// Tipo para TypeScript
export type ThemeName = keyof typeof pageThemes;

// Helper para obtener tema
export const getPageTheme = (themeName: ThemeName = 'default') => {
  return pageThemes[themeName] || pageThemes.default;
};
