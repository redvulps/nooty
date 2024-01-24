module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script',
        project: './tsconfig.eslint.json'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true, allowNumber: false, allowNullableObject: false, allowNullableBoolean: false, allowNullableString: true, allowNullableNumber: false, allowAny: false }],
    'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line', return: 'parens-new-line', arrow: 'parens-new-line', condition: 'parens-new-line', logical: 'parens-new-line', prop: 'parens-new-line' }]
  }
};
