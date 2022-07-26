"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("lodash/fp/has"));

var _isNull = _interopRequireDefault(require("lodash/fp/isNull"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdownButton = require("./dropdown-button");

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _useWindowWidthHook = require("../../../../helpers/hooks/use-window-width-hook");

var _events = _interopRequireWildcard(require("../../../../helpers/dom/events"));

var _a11y = require("../../../../helpers/dom/a11y");

var _dropdownConfig = require("../../../../constants/dropdown-config");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dropdown = /*#__PURE__*/_react.default.forwardRef((_ref, dropdownRef) => {
  let {
    button,
    buttonClassName,
    buttonContentOnCollapsed,
    buttonContentOnExpanded,
    buttonId,
    buttonStyles,
    className,
    closeEvents,
    closeOnOuterClick,
    dropdownContent,
    dropdownContentWidth,
    hasArrow,
    isExpanded,
    keepInitialButtonAction,
    onPositionUpdate,
    onToggle,
    positionedHorizontallyWith,
    positionedVerticallyWith,
    positionedWithBorder,
    refreshEvents
  } = _ref;
  const dropdownContentRef = (0, _react.useRef)(null);
  const dropdownButtonRef = (0, _react.useRef)(null);
  const [isExpandedState, setIsExpanded] = (0, _react.useState)(isExpanded);
  const [toggleByEventType, setToggleByEventType] = (0, _react.useState)(null);
  const [verticalReferenceElementState, setVerticalReferenceElement] = (0, _react.useState)(0);
  const [horizontalReferenceElementState, setHorizontalReferenceElement] = (0, _react.useState)(0);
  const windowWidth = (0, _useWindowWidthHook.useWindowWidth)();
  const {
    keyboard
  } = _events.default;

  const closeDropdownOnEsc = _ref2 => {
    let {
      keyCode
    } = _ref2;
    return keyCode === keyboard.esc ? toggle(false) : null;
  };

  const dropdownKbdTrigger = _ref3 => {
    let {
      keyCode
    } = _ref3;
    setToggleByEventType('keyboard');
    if (keyCode === keyboard.down) toggle(true);
    if (keyCode === keyboard.up) toggle(false);
  };

  const blur = event => {
    event.target.blur();
  };

  (0, _react.useEffect)(() => {
    handleDropdownPosition();
    handleClickOnLinks();

    const toggleEvent = evt => {
      var _evt$detail;

      return toggle(evt == null ? void 0 : (_evt$detail = evt.detail) == null ? void 0 : _evt$detail.nextExpandedState);
    };

    window.addEventListener(_events.TOGGLE_DROPDOWN_EVENT, toggleEvent);

    if (refreshEvents) {
      refreshEvents.forEach(ev => {
        window.addEventListener(ev, handleDropdownPosition);
      });
    }

    if (closeEvents) {
      closeEvents.forEach(ev => {
        window.addEventListener(ev, closeDropdown);
      });
    }

    window.addEventListener('keydown', closeDropdownOnEsc);

    if (!(0, _isNull.default)(dropdownButtonRef.current)) {
      dropdownButtonRef.current.addEventListener('keydown', dropdownKbdTrigger);
      dropdownButtonRef.current.addEventListener('mouseup', blur);
    }

    if (!(0, _has.default)('current')(dropdownRef)) {
      console.warn('The `ref` prop from <Dropdown /> should be set using `useRef`.');
    }

    return () => {
      revertHandleClickOnLinks();

      if (refreshEvents) {
        refreshEvents.forEach(ev => {
          window.removeEventListener(ev, handleDropdownPosition);
        });
      }

      if (closeEvents) {
        closeEvents.forEach(ev => {
          window.removeEventListener(ev, closeDropdown);
        });
      }

      window.removeEventListener('keydown', closeDropdownOnEsc);
      window.removeEventListener(_events.TOGGLE_DROPDOWN_EVENT, toggleEvent);

      if (!(0, _isNull.default)(dropdownButtonRef.current)) {
        dropdownButtonRef.current.removeEventListener('keydown', dropdownKbdTrigger);
        dropdownButtonRef.current.removeEventListener('mouseup', blur);
      }
    };
  }, []);

  const manageA11yOn = event => {
    event.stopPropagation();
    event.preventDefault();
    const focusableElements = (0, _a11y.getFocusableElementsFrom)(dropdownContentRef == null ? void 0 : dropdownContentRef.current);
    const kbdNav = (0, _a11y.keyboardNavigation)(focusableElements, {
      events: {
        prev: _events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
        next: _events.DROPDOWN_LAST_FOCUS_REACHED_EVENT
      },
      triggeredElement: dropdownButtonRef == null ? void 0 : dropdownButtonRef.current
    });
    const {
      tab,
      up,
      down,
      left,
      right,
      esc,
      shiftTab
    } = keyboard;
    if (event.keyCode === esc) return toggle(false);

    if (event.keyCode === left) {
      return (0, _events.dispatchEvent)(_events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT, dropdownButtonRef == null ? void 0 : dropdownButtonRef.current)();
    }

    if (event.keyCode === right) {
      return (0, _events.dispatchEvent)(_events.DROPDOWN_LAST_FOCUS_REACHED_EVENT, dropdownButtonRef == null ? void 0 : dropdownButtonRef.current)();
    }

    if (shiftTab(event) || event.keyCode === up) {
      return kbdNav.prev();
    }

    if (!event.shiftKey && [down, tab].includes(event.keyCode)) {
      return kbdNav.next();
    }
  };

  (0, _react.useEffect)(() => {
    if (isExpandedState && !(0, _isNull.default)(dropdownContentRef.current)) {
      setTimeout(() => {
        const focusableElements = (0, _a11y.getFocusableElementsFrom)(dropdownContentRef.current);

        if (focusableElements.length > 0) {
          toggleByEventType === 'keyboard' && focusableElements[0].focus();
          dropdownContentRef.current.addEventListener('keydown', manageA11yOn);
        }
      }, _dropdownConfig.DROPDOWN_ANIMATED_DELAY);
    }

    return () => {
      if (!(0, _isNull.default)(dropdownContentRef.current)) {
        dropdownContentRef.current.removeEventListener('keydown', manageA11yOn);
      }
    };
  }, [isExpandedState]);
  (0, _react.useEffect)(() => {
    if (!closeOnOuterClick || !isExpandedState) return;

    const handleBodyClick = event => {
      if (!event.target.matches("." + className.replace(/\s+/g, '.') + " *")) {
        toggle(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [closeOnOuterClick, isExpandedState]);

  const closeDropdown = () => {
    toggle(false);
  };

  const toggle = nextExpandedState => {
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

  const getComputedHeightElement = () => _elementHelper.domElementHelper.getComputedHeight(positionedVerticallyWith(), positionedWithBorder);

  const getComputedLeftElement = () => {
    if (positionedHorizontallyWith) {
      const computedLeftElement = _elementHelper.domElementHelper.getComputedLeft(positionedHorizontallyWith());

      if (!dropdownContentWidth || typeof dropdownContentWidth === 'number') {
        const minContentWidth = () => dropdownContentWidth > 200 ? dropdownContentWidth : 200;

        if (computedLeftElement + minContentWidth() > windowWidth) {
          return windowWidth - minContentWidth();
        }

        return computedLeftElement;
      }

      return computedLeftElement;
    }

    return 0;
  }; // Component listener callbacks


  const revertHandleClickOnLinks = () => handleClickOnLinks();

  const handleClickOnLinks = () => {
    if ((0, _isNull.default)(dropdownContentRef.current)) return;
    const links = dropdownContentRef.current.getElementsByTagName('a');
    Array.prototype.forEach.call(links, link => {
      link.removeEventListener('click', closeDropdown);
    });
  };

  const handleDropdownPosition = () => {
    if (_elementHelper.domElementHelper.canUseDom()) {
      onPositionUpdate();
      setVerticalReferenceElement(getComputedHeightElement());
      setHorizontalReferenceElement(getComputedLeftElement());
    }
  };

  const handleButtonClick = event => {
    event.stopPropagation();
    event.preventDefault();
    toggle(!isExpandedState);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: (0, _classnames.default)('k-Dropdown', {
      'k-Dropdown--isExpanded': isExpandedState
    }, className)
  }, button && (keepInitialButtonAction ? /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick,
    style: { ...buttonStyles
    }
  }, button, hasArrow && /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isExpandedState ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, button, hasArrow && /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isExpandedState ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  }))), !button && /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick
  }, isExpandedState ? buttonContentOnExpanded : buttonContentOnCollapsed), /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownContentRef,
    className: "k-Dropdown__content",
    style: {
      top: verticalReferenceElementState,
      left: horizontalReferenceElementState || 0,
      width: dropdownContentWidth
    },
    "aria-hidden": !isExpandedState,
    "aria-labelledby": buttonId
  }, dropdownContent));
});

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  button: _propTypes.default.node,
  buttonClassName: _propTypes.default.string,
  buttonContentOnCollapsed: _propTypes.default.node,
  buttonContentOnExpanded: _propTypes.default.node,
  buttonId: _propTypes.default.string,
  className: _propTypes.default.string,
  closeEvents: _propTypes.default.array,
  closeOnOuterClick: _propTypes.default.bool,
  dropdownContentWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  dropdownContent: _propTypes.default.node,
  isExpanded: _propTypes.default.bool,
  keepInitialButtonAction: _propTypes.default.bool,
  onPositionUpdate: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  positionedHorizontallyWith: _propTypes.default.func,
  positionedVerticallyWith: _propTypes.default.func.isRequired,
  positionedWithBorder: _propTypes.default.bool,
  refreshEvents: _propTypes.default.array
};
Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,
  // If set to true, keep the inital toggle events to focus on design button
  // trough `button` prop.
  keepInitialButtonAction: false,
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
  onPositionUpdate: function () {},
  // Called when the dropdown is opened or closed
  onToggle: function () {}
};