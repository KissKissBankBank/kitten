"use strict";

exports.__esModule = true;
exports.upcaseFirst = exports.stringUtils = void 0;
const stringUtils = {
  /**
   * Converts the first character to uppercase.
   */
  upcaseFirst(str) {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}; // Prefer specific export

exports.stringUtils = stringUtils;
const upcaseFirst = stringUtils.upcaseFirst;
exports.upcaseFirst = upcaseFirst;