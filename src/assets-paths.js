var path = require('path')

var getScssPaths = function () {
  var kittenStylesheetsPath = path.join(
    __dirname,
    '../assets/stylesheets'
  )

  var modularscalePath = require.resolve('modularscale-sass')

  return [
    kittenStylesheetsPath,
    path.join(modularscalePath, '..'),
  ]
}

var getImagesPaths = function () {
  return [
    path.join(__dirname, '../assets/images'),
  ]
}

module.exports = {
  scssPaths: getScssPaths(),
  imagesPaths: getImagesPaths(),
}
