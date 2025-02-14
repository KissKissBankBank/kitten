import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import { Label } from '../../../form/label';
import classNames from 'classnames';
import { WarningCircleIcon } from '../../../graphics/icons/warning-circle-icon';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import find from 'lodash/fp/find';
import { DropdownCombobox } from './combobox';
import { StyledDropdown } from './styles';
import COLORS from '../../../../constants/colors-config';
export const DropdownSelect = _ref => {
  let {
    combobox,
    ...props
  } = _ref;
  if (combobox) return /*#__PURE__*/React.createElement(DropdownCombobox, props);
  const {
    labelText,
    options,
    placeholder,
    labelPropsGetter,
    error,
    valid,
    disabled,
    hideLabel,
    id,
    size,
    a11yStatusError,
    a11yStatusValid,
    a11ySelectionMessageDisplayer,
    defaultSelectedValue,
    onChange,
    onBlur,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    openOnLoad,
    menuZIndex,
    className,
    value,
    controlled,
    modifier,
    direction,
    arrowPosition,
    labelProps
  } = props;

  const getA11ySelectionMessage = _ref2 => {
    let {
      itemToString,
      selectedItem
    } = _ref2;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  const itemToString = item => item ? String(item.label) : '';

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem
    });
  }; // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.


  const flattenedOptions = function () {
    const flatOptions = [];
    options.map(option => {
      if (option.children) {
        option.level = 1;
        flatOptions.push(option);
        option.children.map(opt => {
          opt.level = 2;
          flatOptions.push(opt);
        });
      } else {
        flatOptions.push(option);
      }
    });
    return flatOptions;
  }();

  const initialSelectedItem = find(['value', defaultSelectedValue])(flattenedOptions);
  const selectedItemByValue = find(['value', value])(flattenedOptions) || null;

  const onIsOpenChange = changes => {
    if (changes.isOpen) return onMenuOpen({
      changes
    });
    setTimeout(() => onBlur(changes.selectedItem), 0);
    return onMenuClose({
      changes
    });
  };

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    id: id + "_element",
    toggleButtonId: id,
    items: flattenedOptions,
    getA11ySelectionMessage,
    itemToString,
    initialSelectedItem,
    onSelectedItemChange,
    onIsOpenChange,
    initialIsOpen: openOnLoad,
    ...(controlled && {
      selectedItem: selectedItemByValue
    })
  });
  useEffect(() => {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  return /*#__PURE__*/React.createElement(StyledDropdown, {
    className: classNames('k-Form-Dropdown', "k-Form-Dropdown--" + modifier, "k-Form-Dropdown--" + direction, "k-Form-Dropdown--" + size, "k-Form-Dropdown--arrowPosition-" + arrowPosition, className, {
      'k-Form-Dropdown--isOpen': isOpen,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled,
      'k-Form-Dropdown--scrollable': flattenedOptions.length > 5
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/React.createElement(Label, _extends({}, labelProps, {
    className: classNames('k-Form-Dropdown__label', 'k-u-margin-bottom-single', labelProps == null ? void 0 : labelProps.className, {
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
  }, getMenuProps(), {
    role: isOpen ? 'listbox' : null
  }), isOpen && flattenedOptions.map((item, index) => /*#__PURE__*/React.createElement("li", _extends({
    className: classNames('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_" + (item.level || 1), {
      'k-Form-Dropdown__item--higlighted': highlightedIndex === index
    }),
    key: "" + item.value + index,
    disabled: item.disabled
  }, getItemProps({
    item,
    index,
    disabled: item.disabled
  })), item.label))));
};
DropdownSelect.defaultProps = {
  combobox: false,
  hideLabel: false,
  controlled: false,
  options: [],
  placeholder: 'Select',
  labelPropsGetter: () => {},
  size: 'medium',
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: item => item + " is now selected.",
  onChange: () => {},
  onBlur: () => {},
  onInputChange: () => {},
  onMenuClose: () => {},
  onMenuOpen: () => {},
  openOnLoad: false,
  uniqLabelOnSearch: false,
  menuZIndex: 1000,
  modifier: 'hydrogen',
  direction: 'down',
  arrowPosition: 'left'
};
DropdownSelect.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  combobox: PropTypes.bool,
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
  onBlur: PropTypes.func,
  onInputChange: PropTypes.func,
  onMenuClose: PropTypes.func,
  onMenuOpen: PropTypes.func,
  openOnLoad: PropTypes.bool,
  uniqLabelOnSearch: PropTypes.bool,
  menuZIndex: PropTypes.number,
  modifier: PropTypes.oneOf(['hydrogen', 'nitrogen', 'boron']),
  direction: PropTypes.oneOf(['up', 'down']),
  arrowPosition: PropTypes.oneOf(['left', 'right'])
};