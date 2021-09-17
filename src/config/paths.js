"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getScssPaths = void 0;

require("core-js/modules/es.array.join.js");

var _path = _interopRequireDefault(require("path"));

var getScssPaths = function getScssPaths() {
  var kittenStylesheetsPath = _path.default.join(__dirname, '../../assets/stylesheets');

  var modularscalePath = require.resolve('modularscale-sass');

  return [kittenStylesheetsPath, _path.default.join(modularscalePath, '..')];
};

exports.getScssPaths = getScssPaths;