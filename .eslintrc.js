module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 180 }],
    'consistent-return': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
};
