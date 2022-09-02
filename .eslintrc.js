// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     "plugin:vue/vue3-essential",
//     // "eslint:recommended",
//     // "plugin:prettier/recommended",
//   ],
//   parserOptions: {
//     parser: "@babel/eslint-parser",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
// };
module.exports = {
  env: {
    node: true,
  },
  extends: [
    // "plugin:vue/essential",
    "plugin:vue/vue3-strongly-recommended",
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "vue/html-closing-bracket-newline": 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 6
      },
      "multiline": {
        "max": 8
      }
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/html-indent": "off"
  }
}
