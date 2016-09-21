/* eslint-disable no-console */

/**
 * This is the webpack configuration used by the web-dev-server in
 * `spec/dummy/client/bin/webpack-dev-server.js`.
 * The compiled assets are served from memory at the relative path specified in
 * `publicPath`.
 */

// Import basic node modules.
import path from 'path'

// Node modules specific to webpack.

// Webpack module.
import webpack from 'webpack'

// This plugin is used to deep-merge correctly webpack configuration objects.
import merge from 'webpack-merge'

// Import common webpack config.
import baseConfig from './config/webpack/base.config'

const devServerPort = 3500
const developmentConfig = {
  entry: {
    dummy: [
    `webpack-dev-server/client?http://localhost:${devServerPort}`,
    'webpack/hot/only-dev-server'
   ],
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: `http://localhost:${devServerPort}/`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtools: 'eval-source-map',
}

const config = merge(baseConfig, developmentConfig)

console.log('Webpack HOT dev build for Rails');

module.exports = config

/* eslint-enable no-console */
