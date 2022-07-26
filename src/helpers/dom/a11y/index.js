"use strict";

exports.__esModule = true;
exports.keyboardNavigation = exports.getFocusableElementsFrom = void 0;

var _events = require("../events");

const notMinusTabindex = ':not([tabindex="-1"])';
const notDisabled = ':not([disabled])';
const FOCUSABLE_ELEMENTS = ['[contenteditable="true"]', '[href]', '[tabindex]', 'area', 'button', 'details', 'iframe', 'input', 'select', 'textarea'];
const focusableElements = FOCUSABLE_ELEMENTS.map(el => "" + el + notMinusTabindex + notDisabled).join(', ');

const isVisible = element => {
  const {
    display,
    visibility
  } = window.getComputedStyle(element);
  const isVisible = element.offsetWidth > 0 && element.offsetHeight > 0;
  return display !== 'none' && visibility !== 'hidden' && isVisible;
};

const getFocusableElementsFrom = root => [...root.querySelectorAll(focusableElements)].filter(el => isVisible(el));

exports.getFocusableElementsFrom = getFocusableElementsFrom;

const keyboardNavigation = function (elements, _temp) {
  let {
    events = {
      prev: _events.A11Y_FIRST_FOCUS_REACHED_EVENT,
      next: _events.A11Y_LAST_FOCUS_REACHED_EVENT
    },
    triggeredElement
  } = _temp === void 0 ? {} : _temp;
  const currentElementIndex = elements.indexOf(document.activeElement); // const lastElementIndex = elements.length - 1

  if (currentElementIndex < 0) {
    return {
      next: () => {
        (0, _events.dispatchEvent)(events.next, triggeredElement)();
      },
      prev: () => {
        (0, _events.dispatchEvent)(events.prev, triggeredElement)();
      }
    };
  }

  return {
    next: () => {
      const nextElement = elements[currentElementIndex + 1];
      nextElement ? nextElement.focus() : (0, _events.dispatchEvent)(events.next, triggeredElement)();
    },
    prev: () => {
      const prevElement = elements[currentElementIndex - 1];
      prevElement ? prevElement.focus() : (0, _events.dispatchEvent)(events.prev, triggeredElement)();
    }
  };
};

exports.keyboardNavigation = keyboardNavigation;