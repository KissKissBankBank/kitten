import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import has from 'lodash/fp/has';
import isNull from 'lodash/fp/isNull';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from './dropdown-button';
import domElementHelper from '../../../../helpers/dom/element-helper';
import { useWindowWidth } from '../../../../helpers/utils/use-window-width-hook';
import domEvents, { TOGGLE_DROPDOWN_EVENT, DROPDOWN_FIRST_FOCUS_REACHED_EVENT, DROPDOWN_LAST_FOCUS_REACHED_EVENT, dispatchEvent } from '../../../../helpers/dom/events';
import { getFocusableElementsFrom, keyboardNavigation } from '../../../../helpers/dom/a11y';
import { DROPDOWN_ANIMATED_DELAY } from '../../../../constants/dropdown-config';
import { ArrowIcon } from '../../../../components/icons/arrow-icon';
export var Dropdown = React.forwardRef(function (_ref, dropdownRef) {
  var button = _ref.button,
      buttonClassName = _ref.buttonClassName,
      buttonContentOnCollapsed = _ref.buttonContentOnCollapsed,
      buttonContentOnExpanded = _ref.buttonContentOnExpanded,
      buttonId = _ref.buttonId,
      buttonStyles = _ref.buttonStyles,
      className = _ref.className,
      closeEvents = _ref.closeEvents,
      closeOnOuterClick = _ref.closeOnOuterClick,
      dropdownContent = _ref.dropdownContent,
      dropdownContentWidth = _ref.dropdownContentWidth,
      hasArrow = _ref.hasArrow,
      isExpanded = _ref.isExpanded,
      keepInitialButtonAction = _ref.keepInitialButtonAction,
      onPositionUpdate = _ref.onPositionUpdate,
      onToggle = _ref.onToggle,
      positionedHorizontallyWith = _ref.positionedHorizontallyWith,
      positionedVerticallyWith = _ref.positionedVerticallyWith,
      positionedWithBorder = _ref.positionedWithBorder,
      refreshEvents = _ref.refreshEvents;
  var dropdownContentRef = useRef(null);
  var dropdownButtonRef = useRef(null);

  var _useState = useState(isExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      isExpandedState = _useState2[0],
      setIsExpanded = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      toggleByEventType = _useState4[0],
      setToggleByEventType = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      verticalReferenceElementState = _useState6[0],
      setVerticalReferenceElement = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      horizontalReferenceElementState = _useState8[0],
      setHorizontalReferenceElement = _useState8[1];

  var windowWidth = useWindowWidth();
  var keyboard = domEvents.keyboard;

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

  useEffect(function () {
    handleDropdownPosition();
    handleClickOnLinks();

    var toggleEvent = function toggleEvent(evt) {
      var _evt$detail;

      return toggle(evt === null || evt === void 0 ? void 0 : (_evt$detail = evt.detail) === null || _evt$detail === void 0 ? void 0 : _evt$detail.nextExpandedState);
    };

    window.addEventListener(TOGGLE_DROPDOWN_EVENT, toggleEvent);

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

    if (!isNull(dropdownButtonRef.current)) {
      dropdownButtonRef.current.addEventListener('keydown', dropdownKbdTrigger);
      dropdownButtonRef.current.addEventListener('mouseup', blur);
    }

    if (!has('current')(dropdownRef)) {
      console.warn('The `ref` prop from <Dropdown /> should be set using `useRef`.');
    }

    return function () {
      revertHandleClickOnLinks();

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
      window.removeEventListener(TOGGLE_DROPDOWN_EVENT, toggleEvent);

      if (!isNull(dropdownButtonRef.current)) {
        dropdownButtonRef.current.removeEventListener('keydown', dropdownKbdTrigger);
        dropdownButtonRef.current.removeEventListener('mouseup', blur);
      }
    };
  }, []);

  var manageA11yOn = function manageA11yOn(event) {
    event.stopPropagation();
    event.preventDefault();
    var focusableElements = getFocusableElementsFrom(dropdownContentRef === null || dropdownContentRef === void 0 ? void 0 : dropdownContentRef.current);
    var kbdNav = keyboardNavigation(focusableElements, {
      events: {
        prev: DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
        next: DROPDOWN_LAST_FOCUS_REACHED_EVENT
      },
      triggeredElement: dropdownButtonRef === null || dropdownButtonRef === void 0 ? void 0 : dropdownButtonRef.current
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
      return dispatchEvent(DROPDOWN_FIRST_FOCUS_REACHED_EVENT, dropdownButtonRef === null || dropdownButtonRef === void 0 ? void 0 : dropdownButtonRef.current)();
    }

    if (event.keyCode === right) {
      return dispatchEvent(DROPDOWN_LAST_FOCUS_REACHED_EVENT, dropdownButtonRef === null || dropdownButtonRef === void 0 ? void 0 : dropdownButtonRef.current)();
    }

    if (shiftTab(event) || event.keyCode === up) {
      return kbdNav.prev();
    }

    if (!event.shiftKey && [down, tab].includes(event.keyCode)) {
      return kbdNav.next();
    }
  };

  useEffect(function () {
    if (isExpandedState && !isNull(dropdownContentRef.current)) {
      setTimeout(function () {
        var focusableElements = getFocusableElementsFrom(dropdownContentRef.current);

        if (focusableElements.length > 0) {
          toggleByEventType === 'keyboard' && focusableElements[0].focus();
          dropdownContentRef.current.addEventListener('keydown', manageA11yOn);
        }
      }, DROPDOWN_ANIMATED_DELAY);
    }

    return function () {
      if (!isNull(dropdownContentRef.current)) {
        dropdownContentRef.current.removeEventListener('keydown', manageA11yOn);
      }
    };
  }, [isExpandedState]);
  useEffect(function () {
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

  var getComputedHeightElement = function getComputedHeightElement() {
    return domElementHelper.getComputedHeight(positionedVerticallyWith(), positionedWithBorder);
  };

  var getComputedLeftElement = function getComputedLeftElement() {
    if (positionedHorizontallyWith) {
      var computedLeftElement = domElementHelper.getComputedLeft(positionedHorizontallyWith());

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
  }; // Component listener callbacks


  var revertHandleClickOnLinks = function revertHandleClickOnLinks() {
    return handleClickOnLinks();
  };

  var handleClickOnLinks = function handleClickOnLinks() {
    if (isNull(dropdownContentRef.current)) return;
    var links = dropdownContentRef.current.getElementsByTagName('a');
    Array.prototype.forEach.call(links, function (link) {
      link.removeEventListener('click', closeDropdown);
    });
  };

  var handleDropdownPosition = function handleDropdownPosition() {
    if (domElementHelper.canUseDom()) {
      onPositionUpdate();
      setVerticalReferenceElement(getComputedHeightElement());
      setHorizontalReferenceElement(getComputedLeftElement());
    }
  };

  var handleButtonClick = function handleButtonClick(event) {
    event.stopPropagation();
    event.preventDefault();
    toggle(!isExpandedState);
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: dropdownRef,
    className: classNames('k-Dropdown', {
      'k-Dropdown--isExpanded': isExpandedState
    }, className)
  }, button && (keepInitialButtonAction ? /*#__PURE__*/React.createElement(DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick,
    style: _extends({}, buttonStyles)
  }, button, hasArrow && /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isExpandedState ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, button, hasArrow && /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isExpandedState ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  }))), !button && /*#__PURE__*/React.createElement(DropdownButton, {
    ref: dropdownButtonRef,
    className: buttonClassName,
    id: buttonId,
    isExpanded: isExpandedState,
    onClick: handleButtonClick
  }, isExpandedState ? buttonContentOnExpanded : buttonContentOnCollapsed), /*#__PURE__*/React.createElement("div", {
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
Dropdown.propTypes = {
  button: PropTypes.node,
  buttonClassName: PropTypes.string,
  buttonContentOnCollapsed: PropTypes.node,
  buttonContentOnExpanded: PropTypes.node,
  buttonId: PropTypes.string,
  className: PropTypes.string,
  closeEvents: PropTypes.array,
  closeOnOuterClick: PropTypes.bool,
  dropdownContentWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dropdownContent: PropTypes.node,
  isExpanded: PropTypes.bool,
  keepInitialButtonAction: PropTypes.bool,
  onPositionUpdate: PropTypes.func,
  onToggle: PropTypes.func,
  positionedHorizontallyWith: PropTypes.func,
  positionedVerticallyWith: PropTypes.func.isRequired,
  positionedWithBorder: PropTypes.bool,
  refreshEvents: PropTypes.array
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
  onPositionUpdate: function onPositionUpdate() {},
  // Called when the dropdown is opened or closed
  onToggle: function onToggle() {}
};