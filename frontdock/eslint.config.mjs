import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

export default [
  // Configuración básica de ESLint
  js.configs.recommended,

  // Configuración de Next.js
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      // Aquí puedes agregar o personalizar reglas específicas de Next.js
    },
  },

  // Configuración de jest-dom
  {
    plugins: {
      'jest-dom': jestDomPlugin,
    },
    rules: {
      ...jestDomPlugin.configs.recommended.rules,
      // Aquí puedes agregar o personalizar reglas específicas de jest-dom
      'jest-dom/prefer-checked': 'error',
      'jest-dom/prefer-enabled-disabled': 'error',
      'jest-dom/prefer-required': 'error',
      'jest-dom/prefer-to-have-attribute': 'error',
    },
  },

  // Configuración de testing-library
  {
    plugins: {
      'testing-library': testingLibraryPlugin,
    },
    rules: {
      ...testingLibraryPlugin.configs.react.rules,
      // Aquí puedes agregar o personalizar reglas específicas de testing-library
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'error',
      'testing-library/no-node-access': 'error',
    },
  },
];