"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDropdown = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _events = _interopRequireWildcard(require("../../../../helpers/dom/events"));

var useDropdown = function useDropdown(_ref) {
  var dropdownContentWidth = _ref.dropdownContentWidth,
      dropdownAnchorSide = _ref.dropdownAnchorSide,
      callOnToggle = _ref.callOnToggle,
      closeEvents = _ref.closeEvents,
      isExpanded = _ref.isExpanded,
      buttonId = _ref.buttonId,
      menuId = _ref.menuId;
  var dropdownRef = (0, _react.useRef)(null);
  var dropdownContentRef = (0, _react.useRef)(null);
  var dropdownButtonRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(!!isExpanded),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDropdownExpanded = _useState2[0],
      setDropdownExpandedState = _useState2[1];

  var handleButtonClick = function handleButtonClick() {
    setDropdownExpandedState(function (currentValue) {
      return !currentValue;
    });
  };

  var closeDropdown = function closeDropdown() {
    setDropdownExpandedState(false);
  };

  var handleKeydown = function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeDropdown();
    }

    if (e.key === 'Tab') {
      // Wait 5ms for the activeElement to change
      setTimeout(function () {
        if (dropdownRef.current && !dropdownRef.current.contains(document.activeElement)) {
          closeDropdown();
        }
      }, 5);
    }
  };

  var handleClickOutside = function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  (0, _react.useEffect)(function () {
    callOnToggle({
      isExpanded: isDropdownExpanded,
      expandBy: isDropdownExpanded ? buttonId : null
    });
    if (!isDropdownExpanded) return;
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);

    if (closeEvents) {
      closeEvents.forEach(function (ev) {
        window.addEventListener(ev, closeDropdown);
      });
    }

    return function () {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);

      if (closeEvents) {
        closeEvents.forEach(function (ev) {
          window.removeEventListener(ev, closeDropdown);
        });
      }
    };
  }, [isDropdownExpanded]);
  var dropdownProps = {
    ref: dropdownRef,
    'aria-live': 'polite',
    className: (0, _classnames.default)('k-HeaderNavDropdown', {
      'k-HeaderNavDropdown--isExpanded': isDropdownExpanded
    })
  };
  var buttonProps = {
    ref: dropdownButtonRef,
    id: buttonId,
    'aria-controls': menuId,
    isExpanded: isDropdownExpanded,
    onClick: handleButtonClick,
    className: 'k-HeaderNavDropdown__button'
  };
  var returnedWidth = dropdownContentWidth === NaN ? null : dropdownContentWidth;
  var menuProps = {
    ref: dropdownContentRef,
    id: menuId,
    className: (0, _classnames.default)('k-HeaderNavDropdown__menu', "k-HeaderNavDropdown__menu--is-".concat(dropdownAnchorSide || 'left')),
    style: {
      width: returnedWidth
    },
    'aria-hidden': !isDropdownExpanded
  };
  return {
    dropdownProps: dropdownProps,
    buttonProps: buttonProps,
    menuProps: menuProps,
    isDropdownExpanded: isDropdownExpanded
  };
};

exports.useDropdown = useDropdown;