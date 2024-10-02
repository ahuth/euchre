import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('@types/eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,cjs,mjs,ts,tsx}'],
    ignores: ['dist/**'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['src/**/*.{jsx,tsx}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierRecommended,
];
