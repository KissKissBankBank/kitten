/**
 * @module '../../helpers/dom/events'
 */
export var domEvents = {
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

export var A11Y_EVENT = 'accessibility';
export var FOCUS_EVENT = 'focus';
export var A11Y_FIRST_FOCUS_REACHED_EVENT = A11Y_EVENT + ":" + FOCUS_EVENT + ":firstElementReached";
export var A11Y_LAST_FOCUS_REACHED_EVENT = A11Y_EVENT + ":" + FOCUS_EVENT + ":lastElementReached"; // Dropdown events

export var DROPDOWN_EVENT = 'dropdown';
export var TOGGLE_DROPDOWN_EVENT = DROPDOWN_EVENT + ":toggle:trigger";
export var DROPDOWN_FIRST_FOCUS_REACHED_EVENT = DROPDOWN_EVENT + ":" + FOCUS_EVENT + ":firstElementReached";
export var DROPDOWN_LAST_FOCUS_REACHED_EVENT = DROPDOWN_EVENT + ":" + FOCUS_EVENT + ":lastElementReached"; // DashboardLayout events

export var DASHBOARD_HIDE_CONTENT_EVENT = 'dashboard:content:hide';
export var DASHBOARD_SHOW_CONTENT_EVENT = 'dashboard:content:show';
export var dispatchEvent = function dispatchEvent(eventName, detail) {
  return function (root) {
    if (root === void 0) {
      root = window;
    }

    return detail ? root.dispatchEvent(new CustomEvent(eventName, {
      detail: detail
    })) : root.dispatchEvent(new Event(eventName));
  };
}; // DEPRECATED: do not use default export.

export default domEvents;