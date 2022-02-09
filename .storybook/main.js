const path = require('path')
const kittenPaths = require('../src/config/paths')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    let alteredConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        modules: ['node_modules'],
        alias: {
          ...config.resolve.alias,
          storybook: path.join(__dirname, './includes'),
          kitten: path.join(__dirname, '../assets/javascripts/kitten'),
          icons: path.join(__dirname, '../assets/images/icons'),
        },
        fallback: {
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
        },
      },
      context: __dirname,
      node: {
        __filename: true,
      },
    }
    alteredConfig.module.rules.push({
      test: /\.scss$/,
      resolve: {
        extensions: ['.scss', '.sass'],
      },
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: kittenPaths.getScssPaths(),
            },
          },
        },
      ],
      sideEffects: true,
    })
    return alteredConfig
  },
  stories: [
    '../assets/javascripts/kitten/**/stories.@(js|mdx)',
    '../assets/javascripts/kitten/**/*.stories.@(js|mdx)',
    '../doc/**/*.stories.@(js|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-measure',
    'storybook-addon-designs',
    'storybook-design-token',
    '@storybook/addon-storysource',
  ],
  staticDirs: ['./public'],
}
