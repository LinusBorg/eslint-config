module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.js'],
      env: {
        jest: true,
        browser: true,
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
