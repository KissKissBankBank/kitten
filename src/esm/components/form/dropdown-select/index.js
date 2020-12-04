import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import { Label } from '../../../components/form/label';
import classNames from 'classnames';
import { WarningCircleIcon } from '../../../components/icons/warning-circle-icon';
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import find from 'lodash/fp/find';
import { DropdownCombobox } from './combobox';
import { StyledDropdown } from './styles';
import COLORS from '../../../constants/colors-config';
export var DropdownSelect = function DropdownSelect(_ref) {
  var combobox = _ref.combobox,
      props = _objectWithoutProperties(_ref, ["combobox"]);

  if (combobox) return /*#__PURE__*/React.createElement(DropdownCombobox, props);
  var labelText = props.labelText,
      options = props.options,
      placeholder = props.placeholder,
      labelPropsGetter = props.labelPropsGetter,
      error = props.error,
      valid = props.valid,
      disabled = props.disabled,
      hideLabel = props.hideLabel,
      id = props.id,
      variant = props.variant,
      size = props.size,
      a11yStatusError = props.a11yStatusError,
      a11yStatusValid = props.a11yStatusValid,
      a11ySelectionMessageDisplayer = props.a11ySelectionMessageDisplayer,
      defaultSelectedValue = props.defaultSelectedValue,
      onChange = props.onChange,
      onInputChange = props.onInputChange,
      onMenuClose = props.onMenuClose,
      onMenuOpen = props.onMenuOpen,
      openOnLoad = props.openOnLoad;

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
      value: changes.selectedItem
    });
  }; // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.


  var flattenedOptions = function flattenedOptions() {
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
    return flatOptions;
  };

  var onIsOpenChange = function onIsOpenChange(changes) {
    if (changes.isOpen) return onMenuOpen({
      changes: changes
    });
    return onMenuClose({
      changes: changes
    });
  };

  var _useSelect = useSelect({
    id: "".concat(id, "_element"),
    toggleButtonId: id,
    items: flattenedOptions(),
    getA11ySelectionMessage: getA11ySelectionMessage,
    itemToString: itemToString,
    initialSelectedItem: initialSelectedItem,
    onSelectedItemChange: onSelectedItemChange,
    onIsOpenChange: onIsOpenChange,
    initialIsOpen: openOnLoad
  }),
      isOpen = _useSelect.isOpen,
      selectedItem = _useSelect.selectedItem,
      getToggleButtonProps = _useSelect.getToggleButtonProps,
      getLabelProps = _useSelect.getLabelProps,
      getMenuProps = _useSelect.getMenuProps,
      highlightedIndex = _useSelect.highlightedIndex,
      getItemProps = _useSelect.getItemProps;

  useEffect(function () {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  return /*#__PURE__*/React.createElement(StyledDropdown, {
    className: classNames('k-Form-Dropdown', "k-Form-Dropdown--".concat(variant), "k-Form-Dropdown--".concat(size), {
      'k-Form-Dropdown--isOpen': isOpen,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement(Label, _extends({
    className: classNames('k-Form-Dropdown__label', 'k-u-margin-bottom-single', {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/React.createElement("button", _extends({
    className: "k-Form-DropdownSelect__button",
    type: "button",
    disabled: disabled,
    value: selectedItem ? selectedItem.value : null
  }, getToggleButtonProps()), selectedItem ? /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelect__content"
  }, selectedItem.label) : /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelect__content k-Form-DropdownSelect__placeholder"
  }, placeholder), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelect__button__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  })), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelect__button__statusBadges"
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
  }, getMenuProps()), isOpen && flattenedOptions().map(function (item, index) {
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
  })));
};
DropdownSelect.defaultProps = {
  combobox: false,
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
DropdownSelect.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  combobox: PropTypes.bool,
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