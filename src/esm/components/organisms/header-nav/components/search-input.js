import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "searchInputProps", "searchButtonProps", "onMenuToggle", "closeEvents"];
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.object.assign.js";
import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithButton } from '../../../../components/form/text-input-with-button';
import { SearchIcon } from '../../../../components/graphics/icons/search-icon';
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon';
import { Button } from '../../../../components/molecules/buttons/button';
import { Context } from './context';
import { useDropdown } from '../hooks/use-dropdown';
var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":searchMenu:close";
export var SearchInput = function SearchInput(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$searchInputProps = _ref.searchInputProps,
      searchInputProps = _ref$searchInputProps === void 0 ? {} : _ref$searchInputProps,
      _ref$searchButtonProp = _ref.searchButtonProps,
      searchButtonProps = _ref$searchButtonProp === void 0 ? {} : _ref$searchButtonProp,
      _ref$onMenuToggle = _ref.onMenuToggle,
      onMenuToggle = _ref$onMenuToggle === void 0 ? function () {} : _ref$onMenuToggle,
      _ref$closeEvents = _ref.closeEvents,
      closeEvents = _ref$closeEvents === void 0 ? [] : _ref$closeEvents,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var _useState = useState(true),
      isMobileInvisible = _useState[0],
      setMobileInvibility = _useState[1];

  var buttonElement = useRef(null);

  var _useDropdown = useDropdown({
    callOnToggle: callOnToggle,
    dropdownClass: 'k-HeaderNav__searchInputDropdown',
    closeEvents: [CLOSE_EVENT].concat(closeEvents),
    inputId: id + "__SearchMenu__Input",
    menuId: id + "__SearchMenu__Menu"
  }),
      dropdownProps = _useDropdown.dropdownProps,
      menuProps = _useDropdown.menuProps,
      inputProps = _useDropdown.inputProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded,
      openDropdown = _useDropdown.openDropdown,
      closeDropdown = _useDropdown.closeDropdown;

  var handleFoldButtonClick = function handleFoldButtonClick() {
    setMobileInvibility(function (current) {
      return !current;
    });
  };

  useEffect(function () {
    if (isMobileInvisible) {
      closeDropdown();
    } else {
      // Wait 5ms for the input to appear
      setTimeout(function () {
        var _dropdownProps$ref$cu;

        dropdownProps == null ? void 0 : (_dropdownProps$ref$cu = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu.querySelector('input').focus();
      }, 5);
    }
  }, [isMobileInvisible]);
  useEffect(function () {
    buttonElement.current.disabled = !isDropdownExpanded;

    if (isDropdownExpanded) {
      var _dropdownProps$ref, _dropdownProps$ref$cu2;

      dropdownProps == null ? void 0 : (_dropdownProps$ref = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref$cu2 = _dropdownProps$ref.current) == null ? void 0 : _dropdownProps$ref$cu2.querySelector('input').focus();
    } else {
      var _dropdownProps$ref2, _dropdownProps$ref2$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref2 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref2$c = _dropdownProps$ref2.current) == null ? void 0 : _dropdownProps$ref2$c.addEventListener('focusin', handleFocusIn);
    }

    return function () {
      var _dropdownProps$ref3, _dropdownProps$ref3$c;

      dropdownProps == null ? void 0 : (_dropdownProps$ref3 = dropdownProps.ref) == null ? void 0 : (_dropdownProps$ref3$c = _dropdownProps$ref3.current) == null ? void 0 : _dropdownProps$ref3$c.removeEventListener('focusin', handleFocusIn);
    };
  }, [isDropdownExpanded]);

  var handleFocusIn = function handleFocusIn() {
    var _dropdownProps$ref$cu3;

    if ((dropdownProps == null ? void 0 : (_dropdownProps$ref$cu3 = dropdownProps.ref.current) == null ? void 0 : _dropdownProps$ref$cu3.querySelector('input').value.length) > 0) {
      openDropdown();
    }
  };

  useEffect(function () {
    onMenuToggle({
      isDropdownExpanded: isDropdownExpanded
    });
  }, [isDropdownExpanded]);

  var handleInputChange = function handleInputChange(event) {
    inputProps.onChange(event);
    searchInputProps.onChange(event);
  };

  return /*#__PURE__*/React.createElement("form", _extends({}, props, dropdownProps, {
    className: classNames('k-HeaderNav__searchInput', className, dropdownProps.className, {
      'k-HeaderNav__searchInput--mobileInvisible': isMobileInvisible
    })
  }), /*#__PURE__*/React.createElement(TextInputWithButton, _extends({
    size: "tiny",
    rounded: true,
    buttonValue: /*#__PURE__*/React.createElement(SearchIcon, null),
    buttonProps: Object.assign({}, searchButtonProps, {
      ref: buttonElement
    }),
    autoComplete: "off",
    inset: true
  }, searchInputProps, inputProps, {
    onChange: handleInputChange,
    className: classNames('k-HeaderNav__searchInput__input', searchInputProps.className)
  })), isMobileInvisible ? /*#__PURE__*/React.createElement(Button, {
    icon: true,
    size: "tiny",
    borderRadius: 20,
    onClick: handleFoldButtonClick,
    className: "k-u-hidden@m-up"
  }, /*#__PURE__*/React.createElement(SearchIcon, null)) : /*#__PURE__*/React.createElement("button", {
    className: "k-u-reset-button k-HeaderNav__searchInput__mobileFold",
    onClick: handleFoldButtonClick
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    size: "big"
  })), /*#__PURE__*/React.createElement("div", _extends({}, menuProps, {
    className: classNames('k-HeaderNav__floatingDropdown', menuProps.className, {
      'k-HeaderNav__floatingDropdown--isExpanded': isDropdownExpanded
    })
  }), isDropdownExpanded && children));
};
SearchInput.propTypes = {
  searchInputProps: PropTypes.object,
  searchButtonProps: PropTypes.object,
  onMenuToggle: PropTypes.func,
  closeEvents: PropTypes.array
};