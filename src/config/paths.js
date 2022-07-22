"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getScssPaths = void 0;

var _path = _interopRequireDefault(require("path"));

const getScssPaths = () => {
  const kittenStylesheetsPath = _path.default.join(__dirname, '../../assets/stylesheets');

  return [kittenStylesheetsPath];
};

exports.getScssPaths = getScssPaths;