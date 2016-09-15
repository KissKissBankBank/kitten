import path from 'path'

// Resolving paths: these paths help webpack to know where to find modules,
// assets and loaders it needs for the assets compilation.
import RESOLVE_PATHS from './resolve-paths'

// Webpack plugin
import webpack from 'webpack'

// Environment
const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const baseConfig = {
  entry: {
    dummy: [
      './app/javascripts/dummy',
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app', 'assets','webpack')
  },

  resolve: {
    root: RESOLVE_PATHS.MODULES,
  },

  resolveLoader: {
    root: RESOLVE_PATHS.MODULES,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(svg|png|jpe?g)$/,
        loaders: ['file?name=images/[name].[ext]']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          // We passed the absolute path of all presets to prevent modules
          // resolving issues.
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
            'babel-preset-stage-0',
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

export default baseConfig
