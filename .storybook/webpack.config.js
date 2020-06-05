// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const kittenPaths = require('../src/config/paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      kitten: path.join(__dirname, '../assets/javascripts/kitten'),
      icons: path.join(__dirname, '../assets/images/icons'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
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
      },
    ],
  },
}
