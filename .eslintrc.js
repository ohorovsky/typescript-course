module.exports = {
  extends: 'airbnb',
  ecmaFeatures: {
    classes: true,
    jsx: true,
  },
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': 1,
    'no-use-before-define': 0,
    'quote-props': 1,
    'react/jsx-no-bind': 1,
    'react/prefer-stateless-function': 1,
    'padded-blocks': 0,
    'no-shadow': 1,
    'no-return-assign': 1,
    'no-case-declarations': 1,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'consistent-return': 1,
    'react/no-multi-comp': 1,
    'no-confusing-arrow': 0,
    'generator-star-spacing': 0,
    'no-console': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-bitwise': 0,
    'no-nested-ternary': 0,
    'react/jsx-no-target-blank': 0,
    'no-mixed-operators': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'class-methods-use-this': 0,
    'prefer-destructuring': 0,
    'no-useless-escape': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true }],
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/label-has-for': [2, { required: { every: ['id'] } }],
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/anchor-has-content': 0,
    'react-hooks/rules-of-hooks': 'error',
  },
  globals: {
    window: true,
    document: true,
  },
  plugins: [
    'react-hooks'
  ],
};
