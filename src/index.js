var path = require('path');
var getLoadPaths = function() {
  var kittenPath = require.resolve('kitten');
  var sassyMapsPath = require.resolve('sassy-maps');
  var modularscalePath = require.resolve('modularscale-sass');

  return [
    path.join(kittenPath, '..', '..', 'assets', 'stylesheets'),
    path.join(sassyMapsPath, '..'),
    path.join(modularscalePath, '..')
  ];
}

module.exports = {
  loadPaths: getLoadPaths()
};
