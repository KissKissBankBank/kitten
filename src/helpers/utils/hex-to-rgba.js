"use strict";

exports.__esModule = true;
exports.hexToRgba = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

// https://stackoverflow.com/a/51564734
var hexToRgba = function hexToRgba(hex, alpha) {
  if (alpha === void 0) {
    alpha = 1;
  }

  if (!hex) {
    hex = '#OOO';
  }

  var hexColorRegexp = hex.length <= 4 ? /\w/g : /\w\w/g;

  var _hex$match$map = hex.match(hexColorRegexp).map(function (hexColor) {
    return parseInt(hexColor.length < 2 ? "" + hexColor + hexColor : hexColor, 16);
  }),
      r = _hex$match$map[0],
      g = _hex$match$map[1],
      b = _hex$match$map[2];

  if ([r, g, b].includes(NaN)) return "rgba(0,0,0," + alpha + ")";
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
};

exports.hexToRgba = hexToRgba;