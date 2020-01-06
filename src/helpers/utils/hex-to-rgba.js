"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgba = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

// https://stackoverflow.com/a/51564734
var hexToRgba = function hexToRgba(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!hex) {
    hex = '#OOO';
  }

  var hexColorRegexp = hex.length <= 4 ? /\w/g : /\w\w/g;

  var _hex$match$map = hex.match(hexColorRegexp).map(function (hexColor) {
    return parseInt(hexColor.length < 2 ? "".concat(hexColor).concat(hexColor) : hexColor, 16);
  }),
      _hex$match$map2 = (0, _slicedToArray2.default)(_hex$match$map, 3),
      r = _hex$match$map2[0],
      g = _hex$match$map2[1],
      b = _hex$match$map2[2];

  if ([r, g, b].includes(NaN)) return "rgba(0,0,0,".concat(alpha, ")");
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(alpha, ")");
};

exports.hexToRgba = hexToRgba;