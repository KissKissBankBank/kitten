"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.nativeInputValueSetter = void 0;

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _elementHelper = _interopRequireDefault(require("../element-helper"));

var nativeInputValueSetter = function () {
  if (!_elementHelper.default.canUseDom()) return false;
  var valueDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  return valueDescriptor.set;
}();

exports.nativeInputValueSetter = nativeInputValueSetter;