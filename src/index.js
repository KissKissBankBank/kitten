var path = require('path');
var kittenPath = require.resolve('kitten');

var getScssPaths = function() {
  var kittenStylesheetsPath = path.join(
    kittenPath,
    '../../assets/stylesheets'
  )
  var karlStylesheetsPath = path.join(
    kittenPath,
    '../../app/assets/stylesheets'
  )
  var vendorStylesheetsPath = path.join(
    kittenPath,
    '../../vendor/assets/stylesheets'
  )
  var modularscalePath = require.resolve('modularscale-sass');

  return [
    kittenStylesheetsPath,
    karlStylesheetsPath,
    vendorStylesheetsPath,
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
