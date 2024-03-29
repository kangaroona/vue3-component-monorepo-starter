module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'error',
    "@typescript-eslint/no-explicit-any": "off",
    "no-plusplus": "off"
  }
};
