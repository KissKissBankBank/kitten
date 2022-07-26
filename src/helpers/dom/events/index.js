"use strict";

exports.__esModule = true;
exports.domEvents = exports.dispatchEvent = exports.default = exports.TOGGLE_DROPDOWN_EVENT = exports.FOCUS_EVENT = exports.DROPDOWN_LAST_FOCUS_REACHED_EVENT = exports.DROPDOWN_FIRST_FOCUS_REACHED_EVENT = exports.DROPDOWN_EVENT = exports.DASHBOARD_SHOW_CONTENT_EVENT = exports.DASHBOARD_HIDE_CONTENT_EVENT = exports.A11Y_LAST_FOCUS_REACHED_EVENT = exports.A11Y_FIRST_FOCUS_REACHED_EVENT = exports.A11Y_EVENT = void 0;

/**
 * @module '../../helpers/dom/events'
 */
const domEvents = {
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
    shiftTab: event => {
      return event.keyCode === domEvents.keyboard.tab && event.shiftKey;
    }
  }
}; // Accessibility events

exports.domEvents = domEvents;
const A11Y_EVENT = 'accessibility';
exports.A11Y_EVENT = A11Y_EVENT;
const FOCUS_EVENT = 'focus';
exports.FOCUS_EVENT = FOCUS_EVENT;
const A11Y_FIRST_FOCUS_REACHED_EVENT = A11Y_EVENT + ":" + FOCUS_EVENT + ":firstElementReached";
exports.A11Y_FIRST_FOCUS_REACHED_EVENT = A11Y_FIRST_FOCUS_REACHED_EVENT;
const A11Y_LAST_FOCUS_REACHED_EVENT = A11Y_EVENT + ":" + FOCUS_EVENT + ":lastElementReached"; // Dropdown events

exports.A11Y_LAST_FOCUS_REACHED_EVENT = A11Y_LAST_FOCUS_REACHED_EVENT;
const DROPDOWN_EVENT = 'dropdown';
exports.DROPDOWN_EVENT = DROPDOWN_EVENT;
const TOGGLE_DROPDOWN_EVENT = DROPDOWN_EVENT + ":toggle:trigger";
exports.TOGGLE_DROPDOWN_EVENT = TOGGLE_DROPDOWN_EVENT;
const DROPDOWN_FIRST_FOCUS_REACHED_EVENT = DROPDOWN_EVENT + ":" + FOCUS_EVENT + ":firstElementReached";
exports.DROPDOWN_FIRST_FOCUS_REACHED_EVENT = DROPDOWN_FIRST_FOCUS_REACHED_EVENT;
const DROPDOWN_LAST_FOCUS_REACHED_EVENT = DROPDOWN_EVENT + ":" + FOCUS_EVENT + ":lastElementReached"; // DashboardLayout events

exports.DROPDOWN_LAST_FOCUS_REACHED_EVENT = DROPDOWN_LAST_FOCUS_REACHED_EVENT;
const DASHBOARD_HIDE_CONTENT_EVENT = 'dashboard:content:hide';
exports.DASHBOARD_HIDE_CONTENT_EVENT = DASHBOARD_HIDE_CONTENT_EVENT;
const DASHBOARD_SHOW_CONTENT_EVENT = 'dashboard:content:show';
exports.DASHBOARD_SHOW_CONTENT_EVENT = DASHBOARD_SHOW_CONTENT_EVENT;

const dispatchEvent = (eventName, detail) => function (root) {
  if (root === void 0) {
    root = window;
  }

  return detail ? root.dispatchEvent(new CustomEvent(eventName, {
    detail
  })) : root.dispatchEvent(new Event(eventName));
}; // DEPRECATED: do not use default export.


exports.dispatchEvent = dispatchEvent;
var _default = domEvents;
exports.default = _default;