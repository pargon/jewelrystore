module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    // Reglas personalizadas para mejorar la calidad del código
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    
    // Reglas de código limpio
    'prefer-const': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-template': 'warn',
    
    // Reglas para React
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off', // Usamos TypeScript
  },
  ignorePatterns: [
    'build/',
    'node_modules/',
    'public/',
    '*.min.js',
    'coverage/',
    '.eslintrc.js',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
