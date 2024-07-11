import globals from 'globals';

import jest from 'eslint-plugin-jest';
import prettier from 'eslint-config-prettier';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: tsEsLintParser,
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      jest,
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': tsEsLint,
      'sort-destructure-keys': sortDestructureKeys,
    },
    rules: {
      camelcase: 'error',
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-vars': 'error',
      'sort-destructure-keys/sort-destructure-keys': 2,
    },
  },
  prettier,
];
