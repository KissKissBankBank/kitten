const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: ['./styleguide/index.js'],
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.scss', '.js', '.json'],
    alias: {
      kitten: path.join(__dirname, './assets/javascripts/kitten'),
      icons: path.join(__dirname, './assets/images/icons')
    }
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'styleguide'),
    publicPath: '/assets/',
    watchContentBase: true,
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modudes/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
