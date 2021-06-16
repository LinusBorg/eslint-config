module.exports = {
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  extends: ['./base', 'plugin:vue/vue3-essential'],
}
