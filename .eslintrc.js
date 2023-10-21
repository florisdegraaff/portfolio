module.exports = {
  plugins: ['react'],
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'eslint-config-prettier'], // Add eslint-config-prettier
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable the react-in-jsx-scope rule
    'react/jsx-max-props-per-line': ['error', { 'maximum': 3 }], // Allow up to 3 props per line
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi-style': ['error', 'last']
  },
};