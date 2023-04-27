import resolvePlugin from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-tight.cjs.js',
    format: 'cjs',
  },{
    file: 'dist/vue-tight.esm.js',
    format: 'esm',
  }],
  plugins: [
    resolvePlugin(),
  ]
}
