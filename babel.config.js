module.exports = api => {
  const isTest = api.env('test')
  const isESMBuild = process.env.BABEL_ENV === 'esm'

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      { useESModules: isESMBuild }
    ],
    '@babel/plugin-transform-react-jsx',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    ['babel-plugin-styled-components', { ssr: !isTest, displayName: !isTest }],
  ]

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isESMBuild ? false : 'commonjs',
          targets: {
            browsers: ['> 0.5% in FR, last 2 versions, Firefox ESR, not dead'],
          },
        },
      ],
    ],
    plugins,
  }
}
