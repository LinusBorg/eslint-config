module.exports = {
  extends: ['./base', 'plugin:vue/vue3-essential'],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'warn',
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['@vue/reactivity', '@vue/runtime-*', '@vue/shared'],
            message: 'Import from main package "vue" instead',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      // Declare <script setup> compiler hints as globals so eslint is happy
      files: ['./**/*.vue'],
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
  ],
}
