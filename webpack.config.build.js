const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: ['./styleguide/index.js'],
  resolve: {
    extensions: ['.scss', '.js', '.json'],
    alias: {
      icons: path.join(__dirname, './assets/images/icons')
    }
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'build/app.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modudes/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build/app.css',
    }),
  ]
}
