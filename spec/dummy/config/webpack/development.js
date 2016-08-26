// This is webpack configuration for development environment.

// The port must match config.webpack.dev_server.port in webpack-rails
// configuration.
const devServerPort = 3808;

const developmentConfig = {
  output: {
    publicPath: '//localhost:' + devServerPort + '/webpack/',
  },
  devServer: {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  devtool: 'cheap-module-eval-source-map',
}

export default developmentConfig
