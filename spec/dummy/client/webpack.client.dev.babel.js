import path from 'path'
const autoprefixer = require('autoprefixer')
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './config/webpack/base.config'

const devServerPort = process.env.HOT_RAILS_PORT || 3503
const developmentConfig = {
  entry: {
    dummy: [
    `webpack-dev-server/client?http://localhost:${devServerPort}`,
    'webpack/hot/only-dev-server'
   ],
  },
  output: {
    filename: '[name].js',
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
          'postcss',
          'sass',
        ],
      },
    ],
  },
  postcss: [ autoprefixer({ browsers: ['> 5%', 'ie >= 10', 'ios_saf >= 9'] }) ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtools: 'eval-source-map',
}

const config = merge(baseConfig, developmentConfig)

console.log('Webpack HOT dev build for Rails');

module.exports = config
