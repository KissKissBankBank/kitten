const path = require('path')
const kittenPaths = require('../src/config/paths')

module.exports = {
  webpackFinal: async config => {
    let alteredConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        modules: ['node_modules'],
        alias: {
          ...config.resolve.alias,
          kitten: path.join(__dirname, '../assets/javascripts/kitten'),
          icons: path.join(__dirname, '../assets/images/icons'),
        },
      },
    }
    alteredConfig.module.rules.push({
      test: /\.(svg|png|jpe?g)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ],
    })
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
            includePaths: kittenPaths.getScssPaths(),
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
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
  ],
}
