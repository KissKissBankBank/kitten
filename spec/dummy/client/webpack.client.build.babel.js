import path from 'path'
const autoprefixer = require('autoprefixer')
import webpack from 'webpack'
import merge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import baseConfig from './config/webpack/base.config'

const production = process.env.NODE_ENV === 'production';

const jsFilenames = production ? '[name]-[chunkhash].js' : '[name].js';
const cssFilename = production ? '[name]-[chunkhash].scss' : '[name].scss';

const buildConfig = {
  output: {
    path: path.join(__dirname, '..', 'app', 'assets','webpack'),
    filename: jsFilenames,
  },
  plugins: [
    new ExtractTextPlugin(cssFilename, { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css-loader!postcss-loader!sass-loader'),
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['> 5%', 'ie >= 10', 'ios_saf >= 9'] }) ],
}

if (production) {
  console.log('Webpack production build for Rails');
} else {
  console.log('Webpack dev build for Rails');
  buildConfig.devtool = 'eval-source-map';
}

const config = merge(baseConfig, buildConfig)

module.exports = config

