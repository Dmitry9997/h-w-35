import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': ['error', prettierConfig] // подключаем конфиг
    }
  }
];
