var path = require('path');

module.exports = {
  loadPaths: function() {
    var kittenPath = require.resolve('kitten');
    var sassyMapsPath = require.resolve('sassy-maps');
    var modularscalePath = require.resolve('modularscale-sass');

    return [
      path.join(kittenPath, '..', '..', 'assets', 'stylesheets'),
      path.join(sassyMapsPath, '..'),
      path.join(modularscalePath, '..')
    ];
  }
};
