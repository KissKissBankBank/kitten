"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dispatchEvent = exports.DROPDOWN_LAST_FOCUS_REACHED_EVENT = exports.DROPDOWN_FIRST_FOCUS_REACHED_EVENT = exports.TOGGLE_DROPDOWN_EVENT = exports.DROPDOWN_EVENT = exports.A11Y_LAST_FOCUS_REACHED_EVENT = exports.A11Y_FIRST_FOCUS_REACHED_EVENT = exports.FOCUS_EVENT = exports.A11Y_EVENT = exports.domEvents = void 0;

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
    tab: 9,
    esc: 27,
    space: 32,
    enter: 13,
    shiftTab: function shiftTab(event) {
      return event.keyCode === domEvents.keyboard.tab && event.shiftKey;
    }
  }
}; // Accessibility events

exports.domEvents = domEvents;
var A11Y_EVENT = 'accessibility';
exports.A11Y_EVENT = A11Y_EVENT;
var FOCUS_EVENT = 'focus';
exports.FOCUS_EVENT = FOCUS_EVENT;
var A11Y_FIRST_FOCUS_REACHED_EVENT = "".concat(A11Y_EVENT, ":").concat(FOCUS_EVENT, ":firstElementReached");
exports.A11Y_FIRST_FOCUS_REACHED_EVENT = A11Y_FIRST_FOCUS_REACHED_EVENT;
var A11Y_LAST_FOCUS_REACHED_EVENT = "".concat(A11Y_EVENT, ":").concat(FOCUS_EVENT, ":lastElementReached"); // Dropdown events

exports.A11Y_LAST_FOCUS_REACHED_EVENT = A11Y_LAST_FOCUS_REACHED_EVENT;
var DROPDOWN_EVENT = 'dropdown';
exports.DROPDOWN_EVENT = DROPDOWN_EVENT;
var TOGGLE_DROPDOWN_EVENT = "".concat(DROPDOWN_EVENT, ":toggle:trigger");
exports.TOGGLE_DROPDOWN_EVENT = TOGGLE_DROPDOWN_EVENT;
var DROPDOWN_FIRST_FOCUS_REACHED_EVENT = "".concat(DROPDOWN_EVENT, ":").concat(FOCUS_EVENT, ":firstElementReached");
exports.DROPDOWN_FIRST_FOCUS_REACHED_EVENT = DROPDOWN_FIRST_FOCUS_REACHED_EVENT;
var DROPDOWN_LAST_FOCUS_REACHED_EVENT = "".concat(DROPDOWN_EVENT, ":").concat(FOCUS_EVENT, ":lastElementReached");
exports.DROPDOWN_LAST_FOCUS_REACHED_EVENT = DROPDOWN_LAST_FOCUS_REACHED_EVENT;

var dispatchEvent = function dispatchEvent(eventName, detail) {
  return function () {
    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return detail ? root.dispatchEvent(new CustomEvent(eventName, {
      detail: detail
    })) : root.dispatchEvent(new Event(eventName));
  };
}; // DEPRECATED: do not use default export.


exports.dispatchEvent = dispatchEvent;
var _default = domEvents;
exports.default = _default;