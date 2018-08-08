var path = require('path')

var getScssPaths = function () {
  var kittenStylesheetsPath = path.join(
    __dirname,
    '../assets/stylesheets'
  )
  var karlStylesheetsPath = path.join(
    __dirname,
    '../app/assets/stylesheets'
  )
  var vendorStylesheetsPath = path.join(
    __dirname,
    '../vendor/assets/stylesheets'
  )

  var modularscalePath = require.resolve('modularscale-sass')

  return [
    kittenStylesheetsPath,
    karlStylesheetsPath,
    vendorStylesheetsPath,
    path.join(modularscalePath, '..'),
  ]
}

var getJsPaths = function () {
  return [
    path.join(__dirname, '../assets/javascripts'),
  ]
}

var getImagesPaths = function () {
  return [
    path.join(__dirname, '../assets/images'),
  ]
}

module.exports = {
  scssPaths: getScssPaths(),
  jsPaths: getJsPaths(),
  imagesPaths: getImagesPaths(),
}
