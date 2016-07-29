var path = require('path');
var kittenRootPath = path.resolve(__dirname, '..');

module.exports = {
  rootPath: kittenRootPath,
  dependenciesPaths: {
    sassyMaps: path.join(
      kittenRootPath,
      'node_modules',
      'sassy-maps',
      'sass'
    ),
    modularscale: path.join(
      kittenRootPath,
      'node_modules',
      'modularscale-sass',
      'stylesheets'
    )
  }
};
