"use strict";

exports.__esModule = true;
exports.nativeInputValueSetter = void 0;

var _elementHelper = require("../element-helper");

var nativeInputValueSetter = function () {
  if (!_elementHelper.domElementHelper.canUseDom()) return false;
  var valueDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  return valueDescriptor.set;
}();

exports.nativeInputValueSetter = nativeInputValueSetter;