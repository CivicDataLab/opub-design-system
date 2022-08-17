module.exports = {
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    '@next/next/no-img-element': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
