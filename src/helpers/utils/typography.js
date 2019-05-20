"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepToRem = exports.pxToRem = void 0;

var _modularscaleJs = _interopRequireDefault(require("modularscale-js"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var pxToRem = function pxToRem(sizeInPx) {
  if (sizeInPx === 0) return 0;
  var sizeInRem = sizeInPx / _typographyConfig.default.root;
  return "".concat(parseFloat(sizeInRem.toFixed(2)), "rem");
};

exports.pxToRem = pxToRem;

var stepToRem = function stepToRem(step) {
  var settings = {
    base: [1],
    ratio: _typographyConfig.default.scaleMultiplier
  };
  return "".concat(parseFloat((0, _modularscaleJs.default)(step, settings).toFixed(2)), "rem");
};

exports.stepToRem = stepToRem;