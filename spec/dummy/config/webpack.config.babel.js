const path = require('path');
const StatsPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const kitten = require('kitten');
const merge = require('webpack-merge');
import developmentConfig from './webpack/development'
import productionConfig from './webpack/production'

// set NODE_ENV=production on the environment to add asset fingerprints
const production = process.env.NODE_ENV === 'production';

// Static assets filenames
const jsFilenames = production ? '[name]-[chunkhash].js' : '[name].js';
const cssFilename = production ? 'webpack-style-[chunkhash].css' : 'webpack-style.css';

// Sass load paths
const webpackStylesheetsPaths = path.resolve(__dirname, '../webpack/stylesheets');
const appStylesheetsPaths = path.resolve(__dirname, '../app/assets/stylesheets');
const sassLoadPaths = kitten
                      .scssPaths
                      .concat([
                        webpackStylesheetsPaths,
                        appStylesheetsPaths,
                      ]);

// Modules resolving paths
const resolvingPaths = kitten.jsPaths
                       .concat(kitten.imagesPaths)
                       .concat(path.join(__dirname, '..', 'webpack'));

const common = {
  entry: {
    // Sources are expected to live in $app_root/webpack
    'dummy': './webpack/javascripts/dummy.js',
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
    root: resolvingPaths.concat(path.resolve(__dirname, '../node_modules')),
  },

  resolveLoader: {
    root: path.resolve(__dirname, '../node_modules')
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
      {
        test: /\.jsx?$/,
        include: kitten.jsPaths.concat(path.resolve(__dirname, '../webpack/javascripts')),
        loader: 'babel',
        query: {
          // We passed the absolute path of all presets to prevent modules
          // resolving issues.
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
            'babel-preset-stage-2'
          ].map(require.resolve)
        }
      },
    ],
  },

  sassLoader: {
    includePaths: sassLoadPaths,
  }
};

let config;

if (production) {
  config = merge(common, productionConfig)
} else {
  config = merge(common, developmentConfig)
}

module.exports = config;
