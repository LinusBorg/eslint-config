// module.exports = require("./base.js");
module.exports = {
  extends: ['./base.js'],
  // extends: ["./ts-vue.js"]
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      env: {
        node: true,
      },
    },
  ],
}
