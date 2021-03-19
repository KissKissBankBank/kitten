const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  mode: 'production',
  entry: {
    utilities: './assets/stylesheets/utilities.scss',
  },
  output: {
    path: path.resolve(__dirname, '../src/stylesheets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer(), cssnano],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new FixStyleOnlyEntriesPlugin()],
}
