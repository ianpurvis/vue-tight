import { resolve } from 'path'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import resolvePlugin from '@rollup/plugin-node-resolve'

const babelConfigPath = resolve(__dirname, 'babel.config.js')

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/vue-tight.cjs.js',
    format: 'cjs',
    plugins: [
      getBabelOutputPlugin({
        configFile: babelConfigPath,
        envName: 'cjs'
      })
    ]
  },{
    file: 'dist/vue-tight.esm.js',
    format: 'esm',
    plugins: [
      getBabelOutputPlugin({
        configFile: babelConfigPath,
        envName: 'esm'
      })
    ]
  },{
    file: 'dist/vue-tight.es5.js',
    format: 'esm',
    plugins: [
      getBabelOutputPlugin({
        configFile: babelConfigPath,
        envName: 'es5'
      })
    ]
  }],
  plugins: [
    resolvePlugin(),
  ]
}
