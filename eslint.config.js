const { defineConfig } = require('eslint/config');
const globals = require('globals');
const js = require('@eslint/js');

module.exports = defineConfig([
  { ignores: ["**/node_modules/", "**/dist/"] },
  { files: ['**/*.{js,mjs}'], languageOptions: { sourceType: 'module', globals: globals.node, } },
  { files: ['**/*.cjs'], languageOptions: { sourceType: 'commonjs' }, globals: globals.node, },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);
