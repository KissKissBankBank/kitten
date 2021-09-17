"use strict";

exports.__esModule = true;
exports.default = exports.numberUtils = void 0;
var numberUtils = {
  /**
   * Returns if a variable is a number or not.
   */
  isNumber: function isNumber(number) {
    var float = parseFloat(number);
    return !isNaN(float) && float + '' == number + '';
  }
}; // DEPRECATED: do not use default export.

exports.numberUtils = numberUtils;
var _default = numberUtils;
exports.default = _default;