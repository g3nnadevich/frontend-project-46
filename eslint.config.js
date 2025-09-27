import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['bin/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/__tests__/**/*.js'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.node },
    },
  },
]
