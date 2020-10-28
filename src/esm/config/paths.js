import path from 'path';
export var getScssPaths = function getScssPaths() {
  var kittenStylesheetsPath = path.join(__dirname, '../../assets/stylesheets');

  var modularscalePath = require.resolve('modularscale-sass');

  return [kittenStylesheetsPath, path.join(modularscalePath, '..')];
};