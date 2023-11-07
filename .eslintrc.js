export default {
  extends: ['./index.js'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      env: {
        node: true,
      },
    },
  ],
}
