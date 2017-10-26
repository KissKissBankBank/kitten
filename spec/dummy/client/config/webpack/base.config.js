import path from 'path'

// Resolving paths: these paths help webpack to know where to find modules,
// assets and loaders it needs for the assets compilation.
import resolve_paths from './resolve-paths'

// Webpack plugin
import webpack from 'webpack'

// Environment
const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const baseConfig = {
  entry: {
    // Entry name will determine the name of the output bundle.
    'app-kitten': [
      './entries/app-kitten',
    ],
    'app-dummy': [
      './entries/app-dummy'
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app', 'assets', 'webpack')
  },

  resolve: {
    root: resolve_paths.modules,
  },

  resolveLoader: {
    root: path.resolve(__dirname, '../../node_modules'),
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
        loader: 'file?name=images/[name].[ext]',
        include: /icons/, // Add images folders.
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file?name=fonts/[name].[ext]',
        include: /maax/, // Add fonts folders.
      },
      {
        test: /\.json$/,
        loader: 'json',
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
            'babel-preset-stage-2',
          ].map(require.resolve),
        },
        exclude: /node_modules/,
      },
    ],
  },
  sassLoader: {
    includePaths: resolve_paths.sass,
  }
};

export default baseConfig
