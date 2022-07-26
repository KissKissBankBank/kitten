module.exports = api => {
  const isTest = api.env('test')
  const isESMBuild = process.env.BABEL_ENV === 'esm'

  const plugins = [
    ['@babel/plugin-transform-runtime', { corejs: false }],
    '@babel/plugin-transform-react-jsx',
    ['babel-plugin-styled-components', { ssr: !isTest, displayName: !isTest }],
  ]

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules: isESMBuild ? false : 'auto',
          loose: true,
          targets: {
            browsers: ['> 0.5% in FR, last 2 versions, Firefox ESR, not dead'],
          },
        },
      ],
    ],
    plugins,
  }
}
