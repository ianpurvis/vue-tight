import resolvePlugin from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-tight.cjs',
    format: 'cjs',
  },{
    file: 'dist/vue-tight.mjs',
    format: 'esm',
  }],
  plugins: [
    resolvePlugin(),
  ]
}
