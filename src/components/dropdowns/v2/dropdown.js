"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dropdown = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("lodash/fp/has"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _emitter = _interopRequireDefault(require("../../../helpers/utils/emitter"));

var _dropdownButton = require("./dropdown-button");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

var _useWindowWidthHook = require("../../../helpers/utils/use-window-width-hook");

var _events = _interopRequireWildcard(require("../../../helpers/dom/events"));

var _a11y = require("../../../helpers/dom/a11y");

var _dropdownConfig = require("../../../constants/dropdown-config");

var Dropdown = _react.default.forwardRef(function (_ref, dropdownRef) {
  var arrowHorizontalPosition = _ref.arrowHorizontalPosition,
      button = _ref.button,
      buttonClassName = _ref.buttonClassName,
      buttonContentOnCollapsed = _ref.buttonContentOnCollapsed,
      buttonContentOnExpanded = _ref.buttonContentOnExpanded,
      buttonId = _ref.buttonId,
      className = _ref.className,
      closeEvents = _ref.closeEvents,
      closeOnOuterClick = _ref.closeOnOuterClick,
      contentHorizontalPosition = _ref.contentHorizontalPosition,
      dropdownContent = _ref.dropdownContent,
      dropdownContentWidth = _ref.dropdownContentWidth,
      dropdownListArrow = _ref.dropdownListArrow,
      isExpanded = _ref.isExpanded,
      keepInitialButtonAction = _ref.keepInitialButtonAction,
      onPositionUpdate = _ref.onPositionUpdate,
      onToggle = _ref.onToggle,
      positionedHorizontallyWith = _ref.positionedHorizontallyWith,
      positionedVerticallyWith = _ref.positionedVerticallyWith,
      positionedWith = _ref.positionedWith,
      positionedWithBorder = _ref.positionedWithBorder,
      refreshEvents = _ref.refreshEvents;
  var dropdownContentRef = (0, _react.useRef)(null);
  var arrowRef = (0, _react.useRef)(null);
  var dropdownButtonRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(isExpanded),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isExpandedState = _useState2[0],
      setIsExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      toggleByEventType = _useState4[0],
      setToggleByEventType = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      verticalReferenceElementState = _useState6[0],
      setVerticalReferenceElement = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      horizontalReferenceElementState = _useState8[0],
      setHorizontalReferenceElement = _useState8[1];

  var windowWidth = (0, _useWindowWidthHook.useWindowWidth)();
  var keyboard = _events.default.keyboard;

  var closeDropdownOnEsc = function closeDropdownOnEsc(_ref2) {
    var keyCode = _ref2.keyCode;
    return keyCode === keyboard.esc ? toggle(false) : null;
  };

  var dropdownKbdTrigger = function dropdownKbdTrigger(_ref3) {
    var keyCode = _ref3.keyCode;
    setToggleByEventType('keyboard');
    if (keyCode === keyboard.down) toggle(true);
    if (keyCode === keyboard.up) toggle(false);
  };

  var blur = function blur(event) {
    event.target.blur();
  };

  (0, _react.useEffect)(function () {
    handleDropdownPosition();
    handleClickOnLinks();

    _emitter.default.on(_events.TOGGLE_DROPDOWN_EVENT, toggle);

    if (refreshEvents) {
      refreshEvents.forEach(function (ev) {
        window.addEventListener(ev, handleDropdownPosition);
      });
    }

    if (closeEvents) {
      closeEvents.forEach(function (ev) {
        window.addEventListener(ev, closeDropdown);
      });
    }

    window.addEventListener('keydown', closeDropdownOnEsc);
    dropdownButtonRef.current.addEventListener('keydown', dropdownKbdTrigger);
    dropdownButtonRef.current.addEventListener('mouseup', blur);

    if (!(0, _has.default)('current')(dropdownRef)) {
      console.warn('The `ref` prop from <Dropdown /> should be set using `useRef`.');
    }

    return function () {
      revertHandleClickOnLinks();

      _emitter.default.off(_events.TOGGLE_DROPDOWN_EVENT, toggle);

      if (refreshEvents) {
        refreshEvents.forEach(function (ev) {
          window.removeEventListener(ev, handleDropdownPosition);
        });
      }

      if (closeEvents) {
        closeEvents.forEach(function (ev) {
          window.removeEventListener(ev, closeDropdown);
        });
      }

      window.removeEventListener('keydown', closeDropdownOnEsc);
      dropdownButtonRef.current.removeEventListener('keydown', dropdownKbdTrigger);
      dropdownButtonRef.current.removeEventListener('mouseup', blur);
    };
  }, []);

  var manageA11yOn = function manageA11yOn(event) {
    event.stopPropagation();
    event.preventDefault();
    var focusableElements = (0, _a11y.getFocusableElementsFrom)(dropdownContentRef.current);
    var kbdNav = (0, _a11y.keyboardNavigation)(focusableElements, {
      events: {
        prev: _events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
        next: _events.DROPDOWN_LAST_FOCUS_REACHED_EVENT
      },
      triggeredElement: dropdownButtonRef.current
    });
    var tab = keyboard.tab,
        up = keyboard.up,
        down = keyboard.down,
        left = keyboard.left,
        right = keyboard.right,
        esc = keyboard.esc,
        shiftTab = keyboard.shiftTab;
    if (event.keyCode === esc) return toggle(false);

    if (event.keyCode === left) {
      return (0, _events.dispatchEvent)(_events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT, dropdownButtonRef.current)();
    }

    if (event.keyCode === right) {
      return (0, _events.dispatchEvent)(_events.DROPDOWN_LAST_FOCUS_REACHED_EVENT, dropdownButtonRef.current)();
    }

    if (shiftTab(event) || event.keyCode === up) {
      return kbdNav.prev();
    }

    if (!event.shiftKey && [down, tab].includes(event.keyCode)) {
      return kbdNav.next();
    }
  };

  (0, _react.useEffect)(function () {
    if (isExpandedState) {
      setTimeout(function () {
        var focusableElements = (0, _a11y.getFocusableElementsFrom)(dropdownContentRef.current);

        if (focusableElements.length > 0) {
          toggleByEventType === 'keyboard' && focusableElements[0].focus();
          dropdownContentRef.current.addEventListener('keydown', manageA11yOn);
        }
      }, _dropdownConfig.DROPDOWN_ANIMATED_DELAY);
    }

    return function () {
      dropdownContentRef.current.removeEventListener('keydown', manageA11yOn);
    };
  }, [isExpandedState]);
  (0, _react.useEffect)(function () {
    if (!closeOnOuterClick || !isExpandedState) return;

    var handleBodyClick = function handleBodyClick(event) {
      if (!event.target.matches(".".concat(className.replace(/\s+/g, '.'), " *"))) {
        toggle(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);
    return function () {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [closeOnOuterClick, isExpandedState]);

  var closeDropdown = function closeDropdown() {
    toggle(false);
  };

  var toggle = function toggle(nextExpandedState) {
    // Set toggleByEventType to click by default when dropdown menu is hidden.
    // The value will be override on keyboard event. This fix a bug on
    // space/enter keyboard events which trigger click event.
    if (!nextExpandedState) {
      setToggleByEventType('click');
    }

    setIsExpanded(nextExpandedState);
    onToggle({
      isExpanded: nextExpandedState,
      expandBy: nextExpandedState ? buttonId : null
    });
  };

  var isSelfReference = function isSelfReference() {
    return typeof positionedWith === 'undefined' && typeof positionedVerticallyWith === 'undefined';
  };

  var getVerticalReferenceElement = function getVerticalReferenceElement() {
    if (!isSelfReference()) {
      return (positionedVerticallyWith || positionedWith)();
    } // Prevent error from ref not set by `useRef`.


    return (0, _has.default)('current')(dropdownRef) ? dropdownRef.current : dropdownRef;
  };

  var getComputedHeightElement = function getComputedHeightElement() {
    return _elementHelper.default.getComputedHeight(getVerticalReferenceElement(), positionedWithBorder);
  };

  var getComputedLeftElement = function getComputedLeftElement() {
    if (positionedHorizontallyWith) {
      var computedLeftElement = _elementHelper.default.getComputedLeft(positionedHorizontallyWith());

      if (!dropdownContentWidth || typeof dropdownContentWidth === 'number') {
        var minContentWidth = function minContentWidth() {
          return dropdownContentWidth > 200 ? dropdownContentWidth : 200;
        };

        if (computedLeftElement + minContentWidth() > windowWidth) {
          return windowWidth - minContentWidth();
        }

        return computedLeftElement;
      }

      return computedLeftElement;
    }

    return 0;
  };

  var getArrowPositionStyle = function getArrowPositionStyle() {
    return (0, _extends2.default)({
      position: 'absolute',
      top: 0
    }, arrowHorizontalPosition);
  };

  var getDropdownContentStyle = function getDropdownContentStyle() {
    return (0, _extends2.default)({
      top: verticalReferenceElementState,
      left: horizontalReferenceElementState || 0,
      width: dropdownContentWidth
    }, contentHorizontalPosition);
  }; // Component listener callbacks


  var revertHandleClickOnLinks = function revertHandleClickOnLinks() {
    return handleClickOnLinks();
  };

  var handleClickOnLinks = function handleClickOnLinks() {
    var links = dropdownContentRef.current.getElementsByTagName('a');
    Array.prototype.forEach.call(links, function (link) {
      link.removeEventListener('click', closeDropdown);
    });
  };

  var handleDropdownPosition = function handleDropdownPosition() {
    if (_elementHelper.default.canUseDom()) {
      onPositionUpdate();
      setVerticalReferenceElement(getComputedHeightElement());
      setHorizontalReferenceElement(getComputedLeftElement());
    }
  };

  var handleButtonClick = function handleButtonClick(event) {
    event.stopPropagation();
    event.preventDefault();
    toggle(!isExpandedState);
  }; // Rendering


  var renderButtonContentElement = function renderButtonContentElement() {
    if (isExpandedState) {
      return buttonContentOnExpanded;
    }

    return buttonContentOnCollapsed;
  };

  var Arrow = function Arrow() {
    if (!dropdownListArrow) return null;
    return /*#__PURE__*/_react.default.createElement("span", {
      ref: arrowRef,
      style: getArrowPositionStyle()
    }, dropdownListArrow);
  };

  var dropdownClassName = (0, _classnames.default)('k-Dropdown', {
    'is-expanded': isExpandedState,
    'k-Dropdown--asReference': isSelfReference()
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: dropdownClassName
  }, button && (keepInitialButtonAction ? /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick
  }, button) : button), !button && /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick
  }, renderButtonContentElement()), /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownContentRef,
    className: "k-Dropdown__content",
    style: getDropdownContentStyle(),
    "aria-hidden": !isExpandedState,
    "aria-labelledby": buttonId
  }, dropdownContent, /*#__PURE__*/_react.default.createElement(Arrow, null)));
});

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  arrowHorizontalPosition: _propTypes.default.object,
  button: _propTypes.default.node,
  buttonClassName: _propTypes.default.string,
  buttonContentOnCollapsed: _propTypes.default.node,
  buttonContentOnExpanded: _propTypes.default.node,
  buttonId: _propTypes.default.string,
  className: _propTypes.default.string,
  closeEvents: _propTypes.default.array,
  closeOnOuterClick: _propTypes.default.bool,
  contentHorizontalPosition: _propTypes.default.object,
  dropdownContentWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  dropdownContent: _propTypes.default.node,
  dropdownListArrow: _propTypes.default.node,
  isExpanded: _propTypes.default.bool,
  keepInitialButtonAction: _propTypes.default.bool,
  onPositionUpdate: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  positionedHorizontallyWith: _propTypes.default.func,
  positionedVerticallyWith: _propTypes.default.func,
  positionedWith: (0, _deprecated.default)(_propTypes.default.func, 'Prefere use `positionedVerticallyWith` when using `Dropdown` component.'),
  positionedWithBorder: _propTypes.default.bool,
  refreshEvents: _propTypes.default.array
};
Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,
  // If set to true, keep the inital toggle events to focus on design button
  // trough `button` prop.
  keepInitialButtonAction: false,
  // Custom horizontal position for content and content arrow.
  contentHorizontalPosition: {},
  arrowHorizontalPosition: {
    left: '50%'
  },
  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',
  isExpanded: false,
  // List of events that will trigger the update of the reference element
  // height.
  refreshEvents: [],
  // eg. ['resize']
  // List of events that will trigger the closure.
  closeEvents: [],
  // If set to true, close dropdown on outer click.
  closeOnOuterClick: false,
  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function onPositionUpdate() {},
  // Called when the dropdown is opened or closed
  onToggle: function onToggle() {}
}; // DEPRECATED: do not use default export.

var _default = Dropdown;
exports.default = _default;