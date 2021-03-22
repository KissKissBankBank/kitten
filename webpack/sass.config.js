const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: ['./assets/stylesheets/index.js'],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      icons: path.join(__dirname, './assets/images/icons'),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modudes/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'STYLE.css',
    }),
  ],
}
