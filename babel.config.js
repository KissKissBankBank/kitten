module.exports = api => {
  const isTest = api.env('test')
  const plugins = [
    '@babel/plugin-transform-runtime',
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
          targets: {
            browsers: ['last 2 versions', 'ie >= 10'],
          },
        },
      ],
    ],
    plugins,
  }
}
