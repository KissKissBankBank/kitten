"use strict";

exports.__esModule = true;
exports.encodeSvgString = void 0;

var _jsBase = require("js-base64");

var encodeSvgString = function encodeSvgString(svgString) {
  return "data:image/svg+xml;base64," + _jsBase.Base64.encode(svgString);
};

exports.encodeSvgString = encodeSvgString;