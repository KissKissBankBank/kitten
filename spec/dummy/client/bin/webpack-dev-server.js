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
});

// Start node server on `devServerPort`.
devServer.listen(devServerPort, 'localhost', err => {
  if (err) console.error(err);
  console.log(
    `=> 🔥  Webpack development server is running on port ${devServerPort}`
  );
});
