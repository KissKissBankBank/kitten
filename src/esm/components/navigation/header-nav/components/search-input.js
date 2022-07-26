import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithButton } from '../../../form/input/text-input-with-button';
import { SearchIcon } from '../../../graphics/icons/search-icon';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { Button } from '../../../action/button';
import { Context } from './context';
import { useDropdown } from '../hooks/use-dropdown';
const namespace = 'kkbbAndCo';
const CLOSE_EVENT = namespace + ":searchMenu:close";
export const SearchInput = _ref => {
  let {
    children,
    className,
    searchInputProps = {},
    searchButtonProps = {},
    onMenuToggle = () => {},
    closeEvents = [],
    a11yMobileOpen = 'Ouvrir la recherche',
    a11yMobileClose = 'Fermer la recherche',
    ...props
  } = _ref;
  const {
    id,
    callOnToggle
  } = useContext(Context);
  const [isMobileInvisible, setMobileInvibility] = useState(true);
  const buttonElement = useRef(null);
  const {
    dropdownProps,
    menuProps,
    inputProps,
    isDropdownExpanded,
    openDropdown,
    closeDropdown
  } = useDropdown({
    callOnToggle,
    dropdownClass: 'k-HeaderNav__searchInputDropdown',
    closeEvents: [CLOSE_EVENT, ...closeEvents],
    inputId: id + "__SearchMenu__Input",
    menuId: id + "__SearchMenu__Menu"
  });

  const handleFoldButtonClick = () => {
    setMobileInvibility(current => {
      return !current;
    });
  };

  useEffect(() => {
    if (isMobileInvisible) {
      closeDropdown();
    } else {
      // Wait 5ms for the input to appear
      setTimeout(() => {
        var _dropdownProps$ref$cu;

        dropdownProps == null ? void 0 : (_dropdownProps$ref$cu = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu.querySelector('input').focus();
      }, 5);
    }
  }, [isMobileInvisible]);
  useEffect(() => {
    buttonElement.current.disabled = !isDropdownExpanded;

    if (isDropdownExpanded) {
      var _dropdownProps$ref, _dropdownProps$ref$cu2;

      dropdownProps == null ? void 0 : (_dropdownProps$ref = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref$cu2 = _dropdownProps$ref.current) == null ? void 0 : _dropdownProps$ref$cu2.querySelector('input').focus();
    } else {
      var _dropdownProps$ref2, _dropdownProps$ref2$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref2 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref2$c = _dropdownProps$ref2.current) == null ? void 0 : _dropdownProps$ref2$c.addEventListener('focusin', handleFocusIn);
    }

    return () => {
      var _dropdownProps$ref3, _dropdownProps$ref3$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref3 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref3$c = _dropdownProps$ref3.current) == null ? void 0 : _dropdownProps$ref3$c.removeEventListener('focusin', handleFocusIn);
    };
  }, [isDropdownExpanded]);

  const handleFocusIn = () => {
    var _dropdownProps$ref$cu3;

    if ((dropdownProps == null ? void 0 : (_dropdownProps$ref$cu3 = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu3.querySelector('input').value.length) > 0) {
      openDropdown();
    }
  };

  useEffect(() => {
    onMenuToggle({
      isDropdownExpanded
    });
  }, [isDropdownExpanded]);

  const handleInputChange = event => {
    inputProps.onChange(event);
    searchInputProps.onChange(event);
  };

  const handleKeyDown = event => {
    if (!isDropdownExpanded) return;
    const arrowKeys = ['ArrowDown', 'ArrowUp'];
    if (!arrowKeys.includes(event.key)) return;
    const wrapper = event.target.closest('form.k-HeaderNav__searchInput');
    const focusableElements = Array.from(wrapper.querySelectorAll('.k-HeaderNav__floatingDropdown button, .k-HeaderNav__floatingDropdown a, input'));
    const focusedElementIndex = focusableElements.findIndex(el => el === document.activeElement);
    let destination = 0;

    if (event.key === 'ArrowDown' && focusedElementIndex < focusableElements.length - 1) {
      destination = focusedElementIndex + 1;
    }

    if (event.key === 'ArrowUp' && focusedElementIndex > 0) {
      destination = focusedElementIndex - 1;
    }

    event.preventDefault();
    focusableElements[destination].focus();
  };

  return /*#__PURE__*/React.createElement("form", _extends({}, props, dropdownProps, {
    className: classNames('k-HeaderNav__searchInput', className, dropdownProps.className, {
      'k-HeaderNav__searchInput--mobileInvisible': isMobileInvisible
    }),
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/React.createElement(TextInputWithButton, _extends({
    id: "SearchInput",
    size: "small",
    rounded: true,
    buttonValue: /*#__PURE__*/React.createElement(SearchIcon, null),
    buttonProps: { ...searchButtonProps,
      ref: buttonElement
    },
    autoComplete: "off",
    inset: true
  }, searchInputProps, inputProps, {
    onChange: handleInputChange,
    className: classNames('k-HeaderNav__searchInput__input', searchInputProps.className)
  })), isMobileInvisible ? /*#__PURE__*/React.createElement(Button, {
    fit: "icon",
    size: "small",
    rounded: true,
    onClick: handleFoldButtonClick,
    className: "k-u-hidden@m-up"
  }, /*#__PURE__*/React.createElement(SearchIcon, null), /*#__PURE__*/React.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, a11yMobileOpen)) : /*#__PURE__*/React.createElement("button", {
    className: "k-u-reset-button k-HeaderNav__searchInput__mobileFold",
    onClick: handleFoldButtonClick
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    size: "large"
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, a11yMobileClose)), /*#__PURE__*/React.createElement("div", _extends({}, menuProps, {
    className: classNames('k-HeaderNav__floatingDropdown', menuProps.className, {
      'k-HeaderNav__floatingDropdown--isExpanded': isDropdownExpanded
    })
  }), isDropdownExpanded && children));
};
SearchInput.propTypes = {
  searchInputProps: PropTypes.object,
  searchButtonProps: PropTypes.object,
  onMenuToggle: PropTypes.func,
  closeEvents: PropTypes.array,
  a11yMobileOpen: PropTypes.node,
  a11yMobileClose: PropTypes.node
};