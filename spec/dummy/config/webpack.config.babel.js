// Basic node modules
import path from 'path'

// Node modules specific to webpack

// This plugin is used to generate the manifest that will be used to match the
// last generated asset files.
import StatsPlugin from 'stats-webpack-plugin'

// This plugin is used to extract the css in a separate file.
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// This plugin is used to deep-merge correctly webpack configuration objects.
import merge from 'webpack-merge'

// Environment configuration
import developmentConfig from './webpack/development'
import productionConfig from './webpack/production'

// Resolving paths: these paths help webpack to know where to find modules,
// assets and loaders it needs for the assets compilation.
import RESOLVE_PATHS from './webpack/resolve-paths'

// On the dummy, this variable is not useful. It is meant to be an example for
// implementation on your production application.
const production = process.env.NODE_ENV === 'production';

// Static assets filenames
const jsFilenames = production ? '[name]-[chunkhash].js' : '[name].js';
const cssFilename = production ? 'webpack-style-[chunkhash].css' : 'webpack-style.css';

const commonConfig = {
  entry: {
    // Sources are expected to live in $app_root/webpack
    'dummy': './webpack/javascripts/dummy.js',
  },

  output: {
    // By default, with webpack-rails, assets are build in to public/webpack/.
    // This path must match config.webpack.output_dir.
    path: path.join(__dirname, '..', 'public', 'webpack'),

    publicPath: '/webpack/',
    filename: jsFilenames,
  },

  resolve: {
    root: RESOLVE_PATHS.MODULES,
  },

  resolveLoader: {
    root: RESOLVE_PATHS.LOADERS
  },

  plugins: [
    // The generated manifest is used by webpack-rails to know which are the last
    // generated asset files.
    // Its name must match config.webpack.manifest_filename
    new StatsPlugin('manifest.json', {
      // We only need assetsByChunkName; other information are useless for
      // webpack-rails.
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true,
    }),

    // Loaders matches scss files to be extracted with this plugin.
    new ExtractTextPlugin(cssFilename, { allChunks: true }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: ['css'] },
      {
        test: /\.(svg|png|jpe?g)$/,
        loaders: ['file?name=images/[name]-[hash].[ext]']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
      {
        test: /\.jsx?$/,
        include: RESOLVE_PATHS.JS,
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
    includePaths: RESOLVE_PATHS.SASS,
  }
};

let config;

if (production) {
  config = merge(commonConfig, productionConfig)
} else {
  config = merge(commonConfig, developmentConfig)
}

module.exports = config;
