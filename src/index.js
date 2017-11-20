var path = require('path')

var getScssPaths = function() {
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

  var sassyMapsStylesheetsPath = path.join(
    __dirname,
    '../vendor/assets/stylesheets/kitten/sassy-maps/' +
    'node_modules/sassy-maps/sass'
  )
  var modularscalePath = require.resolve('modularscale-sass')

  return [
    kittenStylesheetsPath,
    karlStylesheetsPath,
    vendorStylesheetsPath,
    sassyMapsStylesheetsPath,
    path.join(modularscalePath, '..'),
  ]
}

var getJsPaths = function() {
  return [
    path.join(__dirname, '../assets/javascripts'),
  ]
}

var getImagesPaths = function() {
  return [
    path.join(__dirname, '../assets/images'),
  ]
}

var getFontsPaths = function() {
  return [
    path.join(__dirname, '../assets/fonts'),
  ]
}

module.exports = {
  scssPaths: getScssPaths(),
  jsPaths: getJsPaths(),
  imagesPaths: getImagesPaths(),
  fontsPaths: getFontsPaths(),
}
