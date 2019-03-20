// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const kittenPaths = require('../src/assets-paths')
const modulesPath = ['node_modules']

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: modulesPath.concat(kittenPaths.imagesPaths),
    alias: {
      kitten: path.join(__dirname, '../assets/javascripts/kitten'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: kittenPaths.scssPaths,
          }
        }]
      }
    ]
  },
};
