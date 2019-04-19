const { NODE_ENV } = process.env

const isESBuild = NODE_ENV === 'build-es'

module.exports = () => ({
  compact: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isESBuild ? false : 'commonjs',
        targets: {
          'browsers': [
            'last 2 versions',
            'ie >= 10',
          ],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        'loose': true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true,
      },
    ],
    'babel-plugin-styled-components',
  ],
})
