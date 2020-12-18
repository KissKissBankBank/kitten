import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCombobox } from 'downshift';
import COLORS from '../../../constants/colors-config';
import { Label } from '../../../components/form/label';
import classNames from 'classnames';
import { WarningCircleIcon } from '../../../components/icons/warning-circle-icon';
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import find from 'lodash/fp/find';
import flow from 'lodash/fp/flow';
import uniqBy from 'lodash/fp/uniqBy';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/isEmpty';
import { StyledDropdown } from './styles';
export var DropdownCombobox = function DropdownCombobox(_ref) {
  var labelText = _ref.labelText,
      comboboxButtonLabelText = _ref.comboboxButtonLabelText,
      noResultText = _ref.noResultText,
      options = _ref.options,
      placeholder = _ref.placeholder,
      labelPropsGetter = _ref.labelPropsGetter,
      error = _ref.error,
      valid = _ref.valid,
      disabled = _ref.disabled,
      hideLabel = _ref.hideLabel,
      id = _ref.id,
      variant = _ref.variant,
      size = _ref.size,
      a11yStatusError = _ref.a11yStatusError,
      a11yStatusValid = _ref.a11yStatusValid,
      a11ySelectionMessageDisplayer = _ref.a11ySelectionMessageDisplayer,
      defaultSelectedValue = _ref.defaultSelectedValue,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      onMenuClose = _ref.onMenuClose,
      onMenuOpen = _ref.onMenuOpen,
      openOnLoad = _ref.openOnLoad,
      uniqLabelOnSearch = _ref.uniqLabelOnSearch;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      flattenedOptions = _useState2[0],
      setFlattenedOptions = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredOptions = _useState4[0],
      setFilteredOptions = _useState4[1];

  var getA11ySelectionMessage = function getA11ySelectionMessage(_ref2) {
    var itemToString = _ref2.itemToString,
        selectedItem = _ref2.selectedItem;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  var itemToString = function itemToString(item) {
    return item ? String(item.label) : '';
  };

  var initialSelectedItem = find(['value', defaultSelectedValue])(options);

  var onSelectedItemChange = function onSelectedItemChange(changes) {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem,
      changes: changes
    });
  };

  var onInputValueChange = function onInputValueChange(changes) {
    var newItemsList = flow(filter(function (item) {
      return item.value.toLowerCase().startsWith(changes.inputValue.toLowerCase());
    }), !isEmpty(changes.inputValue) && uniqLabelOnSearch ? uniqBy('label') : function (item) {
      return item;
    })(flattenedOptions);
    setFilteredOptions(newItemsList);
    onInputChange({
      value: changes.inputValue,
      changes: changes
    });
  };

  var onIsOpenChange = function onIsOpenChange(changes) {
    if (changes.isOpen) return onMenuOpen({
      changes: changes
    });
    return onMenuClose({
      changes: changes,
      hasNoResult: filteredOptions.length === 0
    });
  };

  var _useCombobox = useCombobox({
    id: "".concat(id, "_element"),
    inputId: id,
    items: filteredOptions,
    getA11ySelectionMessage: getA11ySelectionMessage,
    itemToString: itemToString,
    initialSelectedItem: initialSelectedItem,
    onSelectedItemChange: onSelectedItemChange,
    onInputValueChange: onInputValueChange,
    onIsOpenChange: onIsOpenChange,
    initialIsOpen: openOnLoad
  }),
      isOpen = _useCombobox.isOpen,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getLabelProps = _useCombobox.getLabelProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getMenuProps = _useCombobox.getMenuProps,
      highlightedIndex = _useCombobox.highlightedIndex,
      getItemProps = _useCombobox.getItemProps,
      openMenu = _useCombobox.openMenu;

  useEffect(function () {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  useEffect(function () {
    flattenedOptions && setFilteredOptions(flattenedOptions);
  }, [flattenedOptions]);
  useEffect(function () {
    // Turns a hierarchy of options with `children` into a flat array
    // of options with a `level` of 1, 2 or null.
    var flatOptions = [];
    options.map(function (option) {
      if (option.children) {
        option.level = 1;
        flatOptions.push(option);
        option.children.map(function (opt) {
          opt.level = 2;
          flatOptions.push(opt);
        });
      } else {
        flatOptions.push(option);
      }
    });
    setFlattenedOptions(flatOptions);
  }, [options]);
  return /*#__PURE__*/React.createElement(StyledDropdown, {
    className: classNames('k-Form-Dropdown', "k-Form-Dropdown--".concat(variant), "k-Form-Dropdown--".concat(size), {
      'k-Form-Dropdown--isOpen': isOpen > 0,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement(Label, _extends({
    className: classNames('k-Form-Dropdown__label', 'k-u-margin-bottom-single', {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/React.createElement("div", _extends({
    className: "k-Form-DropdownCombobox"
  }, getComboboxProps()), /*#__PURE__*/React.createElement("input", _extends({
    className: "k-Form-DropdownCombobox__input",
    placeholder: placeholder,
    disabled: disabled,
    onFocus: function onFocus() {
      return !isOpen && openMenu();
    },
    onClick: function onClick() {
      return !isOpen && openMenu();
    }
  }, getInputProps())), /*#__PURE__*/React.createElement("button", _extends({
    className: "k-Form-DropdownCombobox__arrowButton",
    type: "button",
    "aria-label": comboboxButtonLabelText,
    disabled: disabled
  }, getToggleButtonProps()), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownCombobox__arrowButton__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  }))), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownCombobox__statusBadges"
  }, error && /*#__PURE__*/React.createElement(WarningCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.error,
    "aria-label": a11yStatusError
  }), valid && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.valid,
    "aria-label": a11yStatusValid
  }))), /*#__PURE__*/React.createElement("ul", _extends({
    className: "k-Form-Dropdown__list"
  }, getMenuProps()), isOpen && (filteredOptions.length > 0 ? filteredOptions.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_".concat(item.level || 1), {
        'k-Form-Dropdown__item--higlighted': highlightedIndex === index
      }),
      key: "".concat(item.value).concat(index),
      disabled: item.disabled
    }, getItemProps({
      item: item,
      index: index,
      disabled: item.disabled
    })), item.label);
  }) : /*#__PURE__*/React.createElement("li", {
    className: "k-Form-Dropdown__item",
    disabled: true
  }, noResultText))));
};
DropdownCombobox.defaultProps = {
  hideLabel: false,
  options: [],
  placeholder: 'Select',
  labelPropsGetter: function labelPropsGetter() {},
  variant: 'andromeda',
  size: 'normal',
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: function a11ySelectionMessageDisplayer(item) {
    return "".concat(item, " is now selected.");
  },
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  onMenuClose: function onMenuClose() {},
  onMenuOpen: function onMenuOpen() {},
  openOnLoad: false
};
DropdownCombobox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  comboboxButtonLabelText: PropTypes.string.isRequired,
  noResultText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge', 'giant']),
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onMenuClose: PropTypes.func,
  onMenuOpen: PropTypes.func,
  openOnLoad: PropTypes.bool
};