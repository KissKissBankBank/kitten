module.exports = api => {
  const isTest = api.env('test')
  const isESMBuild = process.env.BABEL_ENV === 'esm'

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-styled-components', { ssr: !isTest, displayName: !isTest }],
  ]

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: isESMBuild ? false : 'commonjs',
          useBuiltIns: 'usage',
          corejs: { version: '3.8', proposals: true },
          targets: {
            browsers: ['> 0.5% in FR, last 2 versions, Firefox ESR, not dead'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins,
  }
}
