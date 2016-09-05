var path = require('path');
var kittenPath = require.resolve('kitten');

var getScssPaths = function() {
  var sassyMapsPath = require.resolve('sassy-maps');
  var modularscalePath = require.resolve('modularscale-sass');

  return [
    path.join(kittenPath, '..', '..', 'assets/stylesheets'),
    path.join(kittenPath, '..', '..', 'app/assets/stylesheets'),
    path.join(kittenPath, '..', '..', 'vendor/assets/stylesheets'),
    path.join(sassyMapsPath, '..'),
    path.join(modularscalePath, '..'),
  ];
}

var getJsPaths = function() {
  return [
    path.join(kittenPath, '..', '..', 'assets/javascripts'),
  ];
}

var getImagesPaths = function() {
  return [
    path.join(kittenPath, '..', '..', 'assets/images'),
  ];
}

module.exports = {
  scssPaths: getScssPaths(),
  jsPaths: getJsPaths(),
  imagesPaths: getImagesPaths(),
};
