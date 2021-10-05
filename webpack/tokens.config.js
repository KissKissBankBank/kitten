const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = {
  mode: 'production',
  entry: {
    tokens: './assets/stylesheets/tokens.scss',
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
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new FixStyleOnlyEntriesPlugin()],
}
