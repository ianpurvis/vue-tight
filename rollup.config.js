import resolvePlugin from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-tight.cjs.js',
    format: 'cjs',
  },{
    file: 'dist/vue-tight.esm.js',
    format: 'esm',
  },{
    file: 'dist/vue-tight.es5.js',
    format: 'esm',
  }],
  plugins: [
    resolvePlugin(),
  ]
}
