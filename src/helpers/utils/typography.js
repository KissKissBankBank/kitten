"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.stepToRem = exports.pxToRem = void 0;

var _modularscaleJs = _interopRequireDefault(require("modularscale-js"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var pxToRem = function pxToRem(sizeInPx) {
  if (sizeInPx === 0) return 0;
  var sizeInRem = sizeInPx / _typographyConfig.default.root;
  return parseFloat(sizeInRem) + "rem";
};

exports.pxToRem = pxToRem;

var stepToRem = function stepToRem(step) {
  var settings = {
    base: [1],
    ratio: _typographyConfig.default.scaleMultiplier
  };
  return parseFloat((0, _modularscaleJs.default)(step, settings)) + "rem";
};

exports.stepToRem = stepToRem;