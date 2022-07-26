"use strict";

exports.__esModule = true;
exports.nativeInputValueSetter = void 0;

var _elementHelper = require("../element-helper");

const nativeInputValueSetter = (() => {
  if (!_elementHelper.domElementHelper.canUseDom()) return false;
  const valueDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  return valueDescriptor.set;
})();

exports.nativeInputValueSetter = nativeInputValueSetter;