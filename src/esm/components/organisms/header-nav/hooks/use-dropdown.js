import "core-js/modules/web.dom-collections.for-each.js";
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
export var useDropdown = function useDropdown(_ref) {
  var _classNames;

  var dropdownContentWidth = _ref.dropdownContentWidth,
      dropdownAnchorSide = _ref.dropdownAnchorSide,
      callOnToggle = _ref.callOnToggle,
      closeEvents = _ref.closeEvents,
      isExpanded = _ref.isExpanded,
      _ref$buttonId = _ref.buttonId,
      buttonId = _ref$buttonId === void 0 ? 'button' : _ref$buttonId,
      _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === void 0 ? 'input' : _ref$inputId,
      _ref$menuId = _ref.menuId,
      menuId = _ref$menuId === void 0 ? 'menu' : _ref$menuId,
      _ref$dropdownClass = _ref.dropdownClass,
      dropdownClass = _ref$dropdownClass === void 0 ? 'k-HeaderNavDropdown' : _ref$dropdownClass;
  var dropdownRef = useRef(null);
  var dropdownContentRef = useRef(null);
  var dropdownButtonRef = useRef(null);
  var dropdownInputRef = useRef(null);

  var _useState = useState(!!isExpanded),
      isDropdownExpanded = _useState[0],
      setDropdownExpandedState = _useState[1];

  var handleButtonClick = function handleButtonClick() {
    setDropdownExpandedState(function (currentValue) {
      return !currentValue;
    });
  };

  var handleInputChange = function handleInputChange(changeEvent) {
    setDropdownExpandedState(changeEvent.target.value.length > 0);
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
    className: classNames(dropdownClass, (_classNames = {}, _classNames[dropdownClass + "--isExpanded"] = isDropdownExpanded, _classNames))
  };
  var buttonProps = {
    ref: dropdownButtonRef,
    id: buttonId,
    'aria-controls': menuId,
    isExpanded: isDropdownExpanded,
    onClick: handleButtonClick,
    className: dropdownClass + "__button"
  };
  var inputProps = {
    ref: dropdownInputRef,
    id: inputId,
    isExpanded: isDropdownExpanded,
    onChange: handleInputChange,
    className: dropdownClass + "__input"
  };
  var returnedWidth = dropdownContentWidth === NaN ? null : dropdownContentWidth;
  var menuProps = {
    ref: dropdownContentRef,
    id: menuId,
    className: classNames(dropdownClass + "__menu", dropdownClass + "__menu--is-" + (dropdownAnchorSide || 'left')),
    style: {
      width: returnedWidth
    },
    'aria-hidden': !isDropdownExpanded
  };
  return {
    dropdownProps: dropdownProps,
    buttonProps: buttonProps,
    menuProps: menuProps,
    isDropdownExpanded: isDropdownExpanded,
    inputProps: inputProps,
    openDropdown: function openDropdown() {
      return setDropdownExpandedState(true);
    },
    closeDropdown: function closeDropdown() {
      return setDropdownExpandedState(false);
    }
  };
};