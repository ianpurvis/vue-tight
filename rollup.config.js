import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-tight.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
}
