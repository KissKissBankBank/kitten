"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUtils = void 0;
var stringUtils = {
  /**
   * Converts the first character to uppercase.
   */
  upcaseFirst: function upcaseFirst(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
exports.stringUtils = stringUtils;
