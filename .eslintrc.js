module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      files: [
        '*.config.js',
        '.*rc.js',
        'bin/**/*.js',
        'lib/**/*.js'
      ],
      env: {
        node: true
      },
    },
    {
      files: [
        '**/*.spec.js'
      ],
      env: {
        node: true
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style'
      ],
      plugins: [
        'jest'
      ]
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true,
  rules: {
    indent: [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [ 'error', 'single', { 'avoidEscape': true } ],
    semi: [ 'error', 'never' ]
  }
}
