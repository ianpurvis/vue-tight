module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: [
        "**/*.spec.js"
      ],
      env: {
        jest: true
      },
      plugins: [
        "jest"
      ],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
  }
}
