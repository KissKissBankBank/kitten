"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.stepToRem = exports.pxToRem = void 0;

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var pxToRem = function pxToRem(sizeInPx) {
  if (sizeInPx === 0) return 0;
  var sizeInRem = sizeInPx / _typographyConfig.default.root;
  return parseFloat(sizeInRem) + "rem";
};

exports.pxToRem = pxToRem;
var fontSizeScale = {
  '-4': 10,
  '-3': 11,
  '-2': 12,
  '-1': 14,
  0: 16,
  1: 18,
  2: 20,
  3: 22,
  4: 24,
  5: 28,
  6: 32,
  7: 36,
  8: 41,
  9: 46,
  10: 52,
  11: 58,
  12: 64,
  13: 74,
  14: 84,
  15: 94,
  16: 105
};

var stepToRem = function stepToRem(step) {
  return pxToRem(fontSizeScale[step.toString()]);
};

exports.stepToRem = stepToRem;