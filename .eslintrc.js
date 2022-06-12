module.exports = {
  extends: 'react-app',
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    semi: ['error', 'always'],
    quotes: ['error', 'single', {avoidEscape: true}],
  },
};
