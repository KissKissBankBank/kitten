"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusTrap = void 0;

var _react = require("react");

var KEYCODE_TAB = 9;

var useFocusTrap = function useFocusTrap(_ref) {
  var shouldTrapFocus = _ref.shouldTrapFocus;
  var elRef = (0, _react.useRef)(null);

  function handleFocus(e) {
    var focusableEls = elRef.current.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'),
        firstFocusableEl = focusableEls[0],
        lastFocusableEl = focusableEls[focusableEls.length - 1];
    var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    }
    /* tab */
    else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
  }

  (0, _react.useEffect)(function () {
    if (shouldTrapFocus) {
      elRef.current.addEventListener('keydown', handleFocus);
      return function (_) {
        elRef.current.removeEventListener('keydown', handleFocus);
      };
    }
  }, [shouldTrapFocus]);
  return elRef;
};

exports.useFocusTrap = useFocusTrap;