import path from 'path';
export var getScssPaths = function getScssPaths() {
  var kittenStylesheetsPath = path.join(__dirname, '../../assets/stylesheets');
  return [kittenStylesheetsPath];
};