import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import domEvents, { TOGGLE_DROPDOWN_EVENT, DROPDOWN_FIRST_FOCUS_REACHED_EVENT, DROPDOWN_LAST_FOCUS_REACHED_EVENT, dispatchEvent } from '../../../../helpers/dom/events';
export var useDropdown = function useDropdown(_ref) {
  var dropdownContentWidth = _ref.dropdownContentWidth,
      dropdownAnchorSide = _ref.dropdownAnchorSide,
      callOnToggle = _ref.callOnToggle,
      closeEvents = _ref.closeEvents,
      isExpanded = _ref.isExpanded,
      buttonId = _ref.buttonId,
      menuId = _ref.menuId;
  var dropdownRef = useRef(null);
  var dropdownContentRef = useRef(null);
  var dropdownButtonRef = useRef(null);

  var _useState = useState(!!isExpanded),
      _useState2 = _slicedToArray(_useState, 2),
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

  useEffect(function () {
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
    className: classNames('k-HeaderNavDropdown', {
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
    className: classNames('k-HeaderNavDropdown__menu', "k-HeaderNavDropdown__menu--is-".concat(dropdownAnchorSide || 'left')),
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