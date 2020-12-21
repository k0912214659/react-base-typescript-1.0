module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb'
  ],
  rules: {
    'indent': 'off',
    'max-len' : 'off',
    'semi': ['error'],
    'camelcase': 'off',
    'prefer-destructuring': 'off',
    'global-require': 'off',
    'prefer-template': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'jsx-a11y/control-has-associated-label': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [2, { ignore: ['\.png$'] }],
    'import/no-dynamic-require': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'no-loop-func': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': [1, { allowExpressions: true, allowTypedFunctionExpressions: true }],
    '@typescript-eslint/no-unused-vars': [2],
    // Additional
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [
          ["@Base", "./src/base"],
          ["@Components", "./src/components"],
          ["@Reducers", "./src/reducers"],
          ["@API", "./src/api"],
          ["@Tools", "./src/tools"],
          ["@Hooks", "./src/hooks"],
          ["@Models", "./src/models"],
          ["@CSS", "./src/css"],
          ["@Services", "./src/services"],
          ["@Providers", "./src/providers"],
          ["@Env", "./src/env"],
          ["@Langs", "./src/langs"],
        ],
        "extensions": [".js", ".jsx", '.ts', '.tsx', '.mjs', ".json"]
      },
    },
    "import/parsers": {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mjs'],
    },
  },
  env: {
    "browser": true,
    "jest": true,
  },
};