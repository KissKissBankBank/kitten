/* eslint no-var: 0, no-console: 0 */

// This file is used by the npm script:
// "hot-assets": "babel-node server-rails-hot.js"
//
// This is what creates the hot assets so that you can edit assets, JavaScript and Sass,
// referenced in your webpack config, and the page updated without you needing to reload
// the page.
//
// You can read more about Hot Module Replacement:
// https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07

// Import webpack modules.
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

// Import development webpack config.
import webpackConfig from './../webpack.client.dev.babel.js';

const devServerPort = process.env.HOT_RAILS_PORT || 3503;
const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  }
});

// Start node server on `devServerPort`.
devServer.listen(devServerPort, 'localhost', err => {
  if (err) console.error(err);
  console.log(
    `=> 🔥  Webpack development server is running on port ${devServerPort}`
  );
});
