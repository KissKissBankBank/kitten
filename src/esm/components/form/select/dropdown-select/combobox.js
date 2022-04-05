import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCombobox } from 'downshift';
import COLORS from '../../../../constants/colors-config';
import { Label } from '../../../form/label';
import classNames from 'classnames';
import { WarningCircleIcon } from '../../../graphics/icons/warning-circle-icon';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import { checkDeprecatedSizes } from '../../../../helpers/utils/deprecated';
import find from 'lodash/fp/find';
import flow from 'lodash/fp/flow';
import uniqBy from 'lodash/fp/uniqBy';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/fp/isObject';
import { StyledDropdown } from './styles';

var getLabelToFilter = function getLabelToFilter(item) {
  if (item.searchableLabel || isObject(item.label)) {
    return item.searchableLabel || '';
  }

  return item.label || '';
};

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
      uniqLabelOnSearch = _ref.uniqLabelOnSearch,
      menuZIndex = _ref.menuZIndex,
      className = _ref.className,
      value = _ref.value,
      _onBlur = _ref.onBlur,
      controlled = _ref.controlled,
      modifier = _ref.modifier,
      direction = _ref.direction,
      arrowPosition = _ref.arrowPosition,
      labelProps = _ref.labelProps,
      inputProps = _ref.inputProps;
  checkDeprecatedSizes(size);

  var _useState = useState([]),
      flattenedOptions = _useState[0],
      setFlattenedOptions = _useState[1];

  var _useState2 = useState([]),
      filteredOptions = _useState2[0],
      setFilteredOptions = _useState2[1];

  var getA11ySelectionMessage = function getA11ySelectionMessage(_ref2) {
    var itemToString = _ref2.itemToString,
        selectedItem = _ref2.selectedItem;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  var itemToString = function itemToString(item) {
    return item ? String(item.label) : '';
  };

  var initialSelectedItem = find(['value', defaultSelectedValue])(options);
  var selectedItemByValue = find(['value', value])(flattenedOptions) || null;

  var onSelectedItemChange = function onSelectedItemChange(changes) {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem,
      changes: changes
    });
  };

  var onInputValueChange = function onInputValueChange(changes) {
    var newItemsList = flow(filter(function (item) {
      var label = getLabelToFilter(item);
      return label.toLowerCase().startsWith(changes.inputValue.toLowerCase());
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
    if (changes.isOpen) {
      flattenedOptions && setFilteredOptions(flattenedOptions);
      return onMenuOpen({
        changes: changes
      });
    }

    return onMenuClose({
      changes: changes,
      hasNoResult: filteredOptions.length === 0
    });
  };

  var _useCombobox = useCombobox(_extends({
    id: id + "_element",
    inputId: id,
    items: filteredOptions,
    getA11ySelectionMessage: getA11ySelectionMessage,
    itemToString: itemToString,
    initialSelectedItem: initialSelectedItem,
    onSelectedItemChange: onSelectedItemChange,
    onInputValueChange: onInputValueChange,
    onIsOpenChange: onIsOpenChange,
    initialIsOpen: openOnLoad
  }, controlled && {
    selectedItem: selectedItemByValue
  })),
      isOpen = _useCombobox.isOpen,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getLabelProps = _useCombobox.getLabelProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getMenuProps = _useCombobox.getMenuProps,
      highlightedIndex = _useCombobox.highlightedIndex,
      getItemProps = _useCombobox.getItemProps,
      openMenu = _useCombobox.openMenu,
      inputValue = _useCombobox.inputValue;

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
    className: classNames('k-Form-Dropdown', "k-Form-Dropdown--" + modifier, "k-Form-Dropdown--" + direction, "k-Form-Dropdown--" + size, "k-Form-Dropdown--arrowPosition-" + arrowPosition, className, {
      'k-Form-Dropdown--isOpen': isOpen > 0,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/React.createElement(Label, _extends({}, labelProps, {
    className: classNames('k-Form-Dropdown__label', 'k-u-margin-bottom-single', labelProps == null ? void 0 : labelProps.className, {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/React.createElement("div", _extends({
    className: "k-Form-DropdownCombobox"
  }, getComboboxProps()), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    disabled: disabled
  }, inputProps, {
    onFocus: function onFocus() {
      return !isOpen && openMenu();
    },
    onClick: function onClick() {
      return !isOpen && openMenu();
    }
  }, getInputProps({
    onBlur: function onBlur() {
      _onBlur(find(['label', inputValue])(flattenedOptions) || null);
    }
  }), {
    className: classNames('k-Form-DropdownCombobox__input', inputProps.className)
  })), /*#__PURE__*/React.createElement("button", _extends({
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
  }, getMenuProps(), {
    role: isOpen ? 'listbox' : null
  }), isOpen && (filteredOptions.length > 0 ? filteredOptions.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_" + (item.level || 1), {
        'k-Form-Dropdown__item--higlighted': highlightedIndex === index
      }),
      key: "" + item.value + index,
      disabled: item.disabled
    }, getItemProps({
      item: item,
      index: index,
      disabled: item.disabled
    })), item.label);
  }) : /*#__PURE__*/React.createElement("li", {
    className: "k-Form-Dropdown__item",
    disabled: true
  }, noResultText || 'No result'))));
};
DropdownCombobox.defaultProps = {
  hideLabel: false,
  controlled: false,
  options: [],
  placeholder: 'Select',
  labelPropsGetter: function labelPropsGetter() {},
  size: 'medium',
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: function a11ySelectionMessageDisplayer(item) {
    return item + " is now selected.";
  },
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onInputChange: function onInputChange() {},
  onMenuClose: function onMenuClose() {},
  onMenuOpen: function onMenuOpen() {},
  openOnLoad: false,
  menuZIndex: 1000,
  modifier: 'hydrogen',
  direction: 'down',
  arrowPosition: 'left',
  inputProps: {}
};
DropdownCombobox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  comboboxButtonLabelText: PropTypes.string.isRequired,
  noResultText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  controlled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  size: PropTypes.oneOf(['micro', 'small', 'medium', 'large', 'huge', 'giant']),
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  onMenuClose: PropTypes.func,
  onMenuOpen: PropTypes.func,
  openOnLoad: PropTypes.bool,
  menuZIndex: PropTypes.number,
  modifier: PropTypes.oneOf(['hydrogen', 'nitrogen', 'boron']),
  direction: PropTypes.oneOf(['up', 'down']),
  arrowPosition: PropTypes.oneOf(['left', 'right']),
  inputProps: PropTypes.object
};