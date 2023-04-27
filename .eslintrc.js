module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'import/order': 'warn',
    'react/display-name': 'off',
    'no-throw-literal': 'off',
    'no-return-assign': 'off',
    'react/no-this-in-sfc': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',
    '@next/next/no-img-element': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-return-await': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'array-callback-return': 'warn',
    'no-restricted-globals': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-return': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    camelcase: 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'no-useless-constructor': 'warn',
    'no-empty-function': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'warn',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'warn',
    'no-useless-escape': 'off',
    'dot-notation': 'off',
    'spaced-comment': 'off',
    'import/no-named-as-default': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'react/jsx-no-bind': 'warn',
    'react/no-danger': 'off',
    'no-unused-expressions': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-destructuring': 'warn',
    'arrow-body-style': 'warn',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-boolean-value': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'react/no-unknown-property': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',

    'react/self-closing-comp': 'warn',
  },
};
