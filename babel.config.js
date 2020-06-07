const MIN_BABEL_VERSION = 7

module.exports = (api) => {
  api.assertVersion(MIN_BABEL_VERSION)

  const presetEnv = [ '@babel/preset-env' ]

  if (api.env('esm')) {
    presetEnv.push({
      bugfixes: true,
      targets: {
        esmodules: true
      }
    })
  }

  return {
    presets: [
      presetEnv
    ]
  }
}
