// Example webpack configuration with asset fingerprinting in production.
'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var kitten = require('kitten');

// must match config.webpack.dev_server.port
var devServerPort = 3808;

// set NODE_ENV=production on the environment to add asset fingerprints
var production = process.env.NODE_ENV === 'production';

// Static assets filenames
var jsFilenames = production ? '[name]-[chunkhash].js' : '[name].js';
var cssFilename = production ? 'webpack-style-[chunkhash].css' : 'webpack-style.css';


// Sass load paths
var webpackStylesheetsPaths = path.resolve(__dirname, '../webpack/stylesheets');
var appStylesheetsPaths = path.resolve(__dirname, '../app/assets/stylesheets');
var sassLoadPaths = kitten
                      .loadPaths
                      .concat([
                        webpackStylesheetsPaths,
                        appStylesheetsPaths,
                      ]);

// Modules resolving paths
var resolvingPaths = kitten.loadPaths.concat(path.join(__dirname, '..', 'webpack'));

var config = {
  entry: {
    // Sources are expected to live in $app_root/webpack
    'application': './webpack/javascripts/application.js',
  },

  output: {
    // Build assets directly in to public/webpack/, let webpack know
    // that all webpacked assets start with webpack/

    // must match config.webpack.output_dir
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',

    filename: jsFilenames,
  },

  resolve: {
    root: resolvingPaths,
  },

  plugins: [
    // must match config.webpack.manifest_filename
    new StatsPlugin('manifest.json', {
      // We only need assetsByChunkName
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true,
    }),
    new ExtractTextPlugin(cssFilename, { allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: ['css'] },
      { test: /\.(svg|png|jpe?g)$/, loaders: ['file?name=images/[name]-[hash].[ext]'] },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },

  sassLoader: {
    includePaths: sassLoadPaths,
  }
};

if (production) {
  config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  );
} else {
  config.devServer = {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
  config.output.publicPath = '//localhost:' + devServerPort + '/webpack/';
  // Source maps
  config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config;
