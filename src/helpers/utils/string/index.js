"use strict";

exports.__esModule = true;
exports.upcaseFirst = exports.stringUtils = void 0;
var stringUtils = {
  /**
   * Converts the first character to uppercase.
   */
  upcaseFirst: function upcaseFirst(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}; // Prefer specific export

exports.stringUtils = stringUtils;
var upcaseFirst = stringUtils.upcaseFirst;
exports.upcaseFirst = upcaseFirst;