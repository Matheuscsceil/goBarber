module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error', // linha muito grande retorna error
    'class-methods-use-this': 'off', // nao usar this sempre
    'no-param-reassign': 'off', // fazer alterações em parametros
    camelcase: 'off', // não usar camelcase sempre
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // declarar varável sem usar
  },
};
