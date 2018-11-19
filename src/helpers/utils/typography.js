"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pxToRem = void 0;

var _typographyConfig = _interopRequireDefault(require("kitten/constants/typography-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pxToRem = function pxToRem(sizeInPx) {
  if (sizeInPx === 0) return 0;
  var sizeInRem = sizeInPx / _typographyConfig.default.root;
  return "".concat(sizeInRem, "rem");
};

exports.pxToRem = pxToRem;