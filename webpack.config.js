const path = require('path');

module.exports = {
  entry: {
    box: path.join(__dirname, './assets/javascripts/kitten/components/box'),
    buttons: path.join(__dirname, './assets/javascripts/kitten/components/buttons')
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    alias : {
      'kitten': path.join(__dirname, './assets/javascripts/kitten')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  externals: ['prop-types', 'radium', 'react', 'react-dom'],
};
