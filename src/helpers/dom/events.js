"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.domEvents = void 0;

/**
 * @module '../../helpers/dom/events'
 */
var domEvents = {
  /**
   * Object for mapping keyboard keys to browser's keyCode
   */
  keyboard: {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    pageDown: 34,
    end: 36,
    home: 36,
    space: 32,
    enter: 13
  }
}; // DEPRECATED: do not use default export.

exports.domEvents = domEvents;
var _default = domEvents;
exports.default = _default;