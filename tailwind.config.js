/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Paleta oficial de colores de joyería de diamantes
        jewelry: {
          // Fondo y contenedores
          dark: '#1C1A17',        // Negro profundo - Fondos oscuros, textos destacados sobre dorado
          white: '#FFFFFF',       // Blanco puro - Texto en fondos oscuros, fondos de tarjetas
          lightGray: '#F9F9F9',   // Gris claro - Fondo general de la página, contraste suave
          
          // Texto y elementos secundarios
          warmGray: '#D9D6D2',    // Gris cálido - Texto secundario, descripciones
          neutralGray: '#666666',  // Gris neutro - Subtítulos, iconos, bordes
          
          // Elementos de lujo y destacados
          gold: '#C6A664',        // Dorado elegante - Botones primarios, precios destacados, rating stars
          goldDark: '#A6894E',    // Dorado oscuro - Hover en botones, acentos más sobrios
        },
        
        // Nueva paleta elegante y lujosa (mantener para compatibilidad)
        luxury: {
          background: '#1C1A17',    // Marrón-negruzco cálido, fondo principal
          gold: '#C6A664',         // Dorado elegante
          goldDark: '#A6894E',     // Dorado más oscuro para hover
          textPrimary: '#FFFFFF',  // Blanco puro
          textSecondary: '#D9D6D2', // Marfil suave/gris cálido
        },
        // Mantener algunos colores pasteles para compatibilidad
        pastelRose: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        pastelMint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        pastelLavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        pastelPeach: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'openSans': ['"Open Sans"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
