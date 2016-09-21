/* eslint-disable no-console */

/**
 * This is the webpack configuration to build assets.
 * It compiles entry assets in the Rails application folder
 * `app/assets/webpack`.
 */

// Import basic node modules.
import path from 'path'

// Node modules specific to webpack.

// Webpack module.
import webpack from 'webpack'

// This plugin is used to deep-merge correctly webpack configuration objects.
import merge from 'webpack-merge'

// This plugin is used to extract the css in a separate file.
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Import common webpack config.
import baseConfig from './config/webpack/base.config'

// Resolving paths: these paths help webpack to know where to find modules,
// assets and loaders it needs for the assets compilation.
import RESOLVE_PATHS from './config/webpack/resolve-paths'

// On the dummy, this variable is not useful. It is meant to be an example for
// implementation on your production application.
const production = process.env.NODE_ENV === 'production';

// Static assets filenames
const jsFilenames = production ? '[name]-bundle-[chunkhash].js' : '[name]-bundle.js';
const cssFilename = production ? 'dummy-bundle-[chunkhash].scss' : 'dummy-bundle.scss';

const buildConfig = {
  output: {
    path: path.join(__dirname, '..', 'app', 'assets','webpack'),
    filename: jsFilenames,
  },
  plugins: [
    // Loaders matches scss files to be extracted with this plugin.
    new ExtractTextPlugin(cssFilename, { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ]
  },
  sassLoader: {
    includePaths: RESOLVE_PATHS.SASS,
  }
}

// Enable devtools if the build is intended to be used on development
// environment.
if (production) {
  console.log('Webpack production build for Rails');
} else {
  console.log('Webpack dev build for Rails');
  buildConfig.devtool = 'eval-source-map';
}

const config = merge(baseConfig, buildConfig)

module.exports = config

/* eslint-enable no-console */
