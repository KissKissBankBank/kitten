"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyboardNavigation = exports.getFocusableElementsFrom = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _events = require("./events");

var notMinusTabindex = ':not([tabindex="-1"])';
var notDisabled = ':not([disabled])';
var FOCUSABLE_ELEMENTS = ['[contenteditable="true"]', '[href]', '[tabindex]', 'area', 'button', 'details', 'iframe', 'input', 'select', 'textarea'];
var focusableElements = FOCUSABLE_ELEMENTS.map(function (el) {
  return "".concat(el).concat(notMinusTabindex).concat(notDisabled);
}).join(', ');

var isVisible = function isVisible(element) {
  var _window$getComputedSt = window.getComputedStyle(element),
      display = _window$getComputedSt.display,
      visibility = _window$getComputedSt.visibility;

  var isVisible = element.offsetWidth > 0 && element.offsetHeight > 0;
  return display !== 'none' && visibility !== 'hidden' && isVisible;
};

var getFocusableElementsFrom = function getFocusableElementsFrom(root) {
  return (0, _toConsumableArray2.default)(root.querySelectorAll(focusableElements)).filter(function (el) {
    return isVisible(el);
  });
};

exports.getFocusableElementsFrom = getFocusableElementsFrom;

var keyboardNavigation = function keyboardNavigation(elements) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$events = _ref.events,
      events = _ref$events === void 0 ? {
    prev: _events.A11Y_FIRST_FOCUS_REACHED_EVENT,
    next: _events.A11Y_LAST_FOCUS_REACHED_EVENT
  } : _ref$events,
      triggeredElement = _ref.triggeredElement;

  var currentElementIndex = elements.indexOf(document.activeElement);
  var lastElementIndex = elements.length - 1;

  if (currentElementIndex < 0) {
    return {
      next: function next() {
        (0, _events.dispatchEvent)(events.next, triggeredElement)();
      },
      prev: function prev() {
        (0, _events.dispatchEvent)(events.prev, triggeredElement)();
      }
    };
  }

  return {
    next: function next() {
      var nextElement = elements[currentElementIndex + 1];
      nextElement ? nextElement.focus() : (0, _events.dispatchEvent)(events.next, triggeredElement)();
    },
    prev: function prev() {
      var prevElement = elements[currentElementIndex - 1];
      prevElement ? prevElement.focus() : (0, _events.dispatchEvent)(events.prev, triggeredElement)();
    }
  };
};

exports.keyboardNavigation = keyboardNavigation;