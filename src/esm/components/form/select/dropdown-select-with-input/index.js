import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Label } from '../../../form/label';
import classNames from 'classnames';
import { WarningCircleIcon } from '../../../graphics/icons/warning-circle-icon';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import find from 'lodash/fp/find';
var StyledDropdownSelectWithInput = styled.div.withConfig({
  displayName: "dropdown-select-with-input__StyledDropdownSelectWithInput",
  componentId: "sc-1dfffzr-0"
})(["position:relative;.k-Form-DropdownSelectWithInput__container{display:flex;box-sizing:border-box;position:relative;width:100%;overflow:hidden;padding:0 ", " 0 0;margin:0;border:var(--border);border-radius:var(--border-radius-s);background-color:", ";font-size:", ";}.k-Form-DropdownSelectWithInput__label--isHidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.k-Form-DropdownSelectWithInput__button{appearance:none;padding:0;border:none;font:inherit;color:inherit;background-color:transparent;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;flex:1 0 100%;}.k-Form-DropdownSelectWithInput__content{display:flex;align-items:center;", " color:", ";font-size:", ";@media (min-width:", "px){font-size:", ";}}.k-Form-DropdownSelectWithInput__content--selectedItem{background:", ";padding:0 ", ";border-radius:var(--border-radius-xs);}.k-Form-DropdownSelectWithInput__placeholder{font-size:", ";color:", ";}.k-Form-DropdownSelectWithInput__content__icon{margin-right:", ";display:flex;align-items:center;svg{display:block;max-width:", ";max-height:", ";}svg[fill],svg [fill]{fill:currentColor;}svg[stroke],svg [stroke]{stroke:currentColor;}}&.k-Form-DropdownSelectWithInput--hideIconOnMobile{@media (max-width:", "){.k-Form-DropdownSelectWithInput__content__icon{display:none;}}}.k-Form-DropdownSelectWithInput__button__arrowBox{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;left:", ";}.k-Form-DropdownSelectWithInput__button__statusBadges{position:absolute;top:0;right:", ";bottom:0;display:flex;align-items:center;justify-content:center;height:auto;right:", ";svg{width:", ";height:", ";}}.k-Form-DropdownSelectWithInput__input{display:none;", " font-size:", ";color:", ";appearance:none;padding:0 ", ";border:none;background-color:transparent;}.k-Form-DropdownSelectWithInput__list{box-sizing:border-box;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;max-height:", ";padding:0;margin:0;overflow-y:scroll;background-color:", ";list-style:none;box-shadow:0 ", " ", " 0 rgba(0,0,0,0.1);border-bottom-left-radius:var(--border-radius-s);border-bottom-right-radius:var(--border-radius-s);&:not(:empty){border:var(--border);border-top:0;}&:focus{outline-offset:", ";}}.k-Form-DropdownSelectWithInput__item{display:flex;align-items:center;transition:background-color 0.2s ease;box-sizing:border-box;padding:", ";color:", ";", " font-size:", ";user-select:none;min-height:", ";padding-top:", ";padding-bottom:", ";@media (min-width:", "px){min-height:", ";}&[aria-selected='true']{background-color:", ";}&[disabled]{color:var(--color-grey-600);}}.k-Form-DropdownSelectWithInput__item__icon{margin-right:", ";min-width:", ";display:flex;align-items:center;justify-content:center;svg{display:block;max-width:100%;}@media (min-width:", "){margin-right:", ";}}.k-Form-DropdownSelectWithInput__separator{height:", ";background-color:", ";}&:hover{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:var(--color-grey-500);}}&:focus-within{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:var(--color-grey-600);}.k-Form-DropdownSelectWithInput__button:focus,.k-Form-DropdownSelectWithInput__input:focus{outline-offset:var(--outline-offset-input);}}&.k-Form-DropdownSelectWithInput--error .k-Form-DropdownSelectWithInput__input,&.k-Form-DropdownSelectWithInput--valid .k-Form-DropdownSelectWithInput__input{padding-right:", ";}&.k-Form-DropdownSelectWithInput--error{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:", ";}}&.k-Form-DropdownSelectWithInput--valid{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:", ";}}&.k-Form-DropdownSelectWithInput--disabled{cursor:not-allowed;.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border:var(--color-grey-300);background-color:var(--color-grey-200);color:var(--color-grey-600);}.k-Form-DropdownSelectWithInput__button__arrowBox svg{cursor:not-allowed;fill:var(--color-grey-600);}.k-Form-DropdownSelectWithInput__content,.k-Form-DropdownSelectWithInput__input{cursor:not-allowed;color:var(--color-grey-600);}.k-Form-DropdownSelectWithInput__content--selectedItem{background-color:var(--color-grey-200);color:var(--color-grey-600);}}&.k-Form-DropdownSelectWithInput--tiny{.k-Form-DropdownSelectWithInput__container{height:", ";}.k-Form-DropdownSelectWithInput__button__arrowBox{left:", ";}.k-Form-DropdownSelectWithInput__content{margin:0 ", " 0 ", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{height:", ";}&.k-Form-DropdownSelectWithInput--noDropdown{.k-Form-DropdownSelectWithInput__content{margin:0 ", ";}}}&.k-Form-DropdownSelectWithInput--normal{.k-Form-DropdownSelectWithInput__container{height:", ";}.k-Form-DropdownSelectWithInput__button__arrowBox{left:", ";}.k-Form-DropdownSelectWithInput__content{margin:0 ", " 0 ", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{height:", ";}&.k-Form-DropdownSelectWithInput--noDropdown{.k-Form-DropdownSelectWithInput__content{margin:0 ", ";}}}&.k-Form-DropdownSelectWithInput--big,&.k-Form-DropdownSelectWithInput--huge,&.k-Form-DropdownSelectWithInput--giant{.k-Form-DropdownSelectWithInput__container{height:", ";padding:0 ", " 0 0;}.k-Form-DropdownSelectWithInput__button__arrowBox{left:", ";}.k-Form-DropdownSelectWithInput__content{margin:0 ", " 0 ", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{height:", ";}&.k-Form-DropdownSelectWithInput--noDropdown{.k-Form-DropdownSelectWithInput__content{margin:0 ", ";}}}@media (min-width:", "px){&.k-Form-DropdownSelectWithInput--big,&.k-Form-DropdownSelectWithInput--huge,&.k-Form-DropdownSelectWithInput--giant{.k-Form-DropdownSelectWithInput__input{font-size:", ";}.k-Form-DropdownSelectWithInput__button__arrowBox{left:", ";}.k-Form-DropdownSelectWithInput__content{margin-left:", ";}.k-Form-DropdownSelectWithInput__content__icon{margin-right:", ";}.k-Form-DropdownSelectWithInput__button__statusBadges{right:", ";}}&.k-Form-DropdownSelectWithInput--big{.k-Form-DropdownSelectWithInput__container{height:", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{padding:0 ", ";height:", ";}}&.k-Form-DropdownSelectWithInput--huge{.k-Form-DropdownSelectWithInput__container{height:", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{padding:0 ", ";height:", ";}}&.k-Form-DropdownSelectWithInput--giant{.k-Form-DropdownSelectWithInput__container{height:", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{padding:0 ", ";height:", ";}}}&.k-Form-DropdownSelectWithInput--isOpen{.k-Form-DropdownSelectWithInput__container{border-bottom-left-radius:0;border-bottom-right-radius:0;}}&.k-Form-DropdownSelectWithInput--hasItemSelected{.k-Form-DropdownSelectWithInput__button{flex:0 0 auto;}.k-Form-DropdownSelectWithInput__input{flex:1 0 auto;display:inline-block;}}"], pxToRem(10), COLORS.background1, stepToRem(-1), TYPOGRAPHY.fontStyles.light, COLORS.font1, pxToRem(-2), ScreenConfig.S.min, pxToRem(-1), COLORS.primary5, pxToRem(10), stepToRem(0), COLORS.font2, pxToRem(10), pxToRem(17), pxToRem(17), pxToRem(ScreenConfig.XS.max), pxToRem(15), pxToRem(40 + 10), pxToRem(10), pxToRem(24), pxToRem(24), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, pxToRem(5 + 2), pxToRem(310), COLORS.background1, pxToRem(5), pxToRem(5), pxToRem(-2), pxToRem(15), COLORS.font1, TYPOGRAPHY.fontStyles.light, stepToRem(-1), pxToRem(40), pxToRem(8), pxToRem(8), ScreenConfig.S.min, pxToRem(50), COLORS.background3, pxToRem(10), pxToRem(20), pxToRem(ScreenConfig.S.min), pxToRem(20), pxToRem(2), COLORS.line1, pxToRem(24 + 10), COLORS.error3, COLORS.tertiary2, pxToRem(40), pxToRem(15 + 2), pxToRem(5), pxToRem(40), pxToRem(28), pxToRem(4), pxToRem(50), pxToRem(15 + 2), pxToRem(5), pxToRem(40), pxToRem(36), pxToRem(5), pxToRem(60), pxToRem(10 + 10), pxToRem(20), pxToRem(10), pxToRem(40), pxToRem(40), pxToRem(10), ScreenConfig.S.min, stepToRem(0), pxToRem(30), pxToRem(60), pxToRem(15), pxToRem(20), pxToRem(70), pxToRem(15), pxToRem(46), pxToRem(80), pxToRem(15), pxToRem(53), pxToRem(90), pxToRem(15), pxToRem(64));
export var DropdownSelectWithInput = function DropdownSelectWithInput(_ref) {
  var labelText = _ref.labelText,
      options = _ref.options,
      placeholder = _ref.placeholder,
      inputPlaceholder = _ref.inputPlaceholder,
      labelPropsGetter = _ref.labelPropsGetter,
      error = _ref.error,
      valid = _ref.valid,
      disabled = _ref.disabled,
      hideLabel = _ref.hideLabel,
      id = _ref.id,
      a11yStatusError = _ref.a11yStatusError,
      a11yStatusValid = _ref.a11yStatusValid,
      a11ySelectionMessageDisplayer = _ref.a11ySelectionMessageDisplayer,
      defaultSelectedValue = _ref.defaultSelectedValue,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      toggleButtonProps = _ref.toggleButtonProps,
      inputProps = _ref.inputProps,
      resetOnBackspace = _ref.resetOnBackspace,
      highlightOptionBox = _ref.highlightOptionBox,
      openOnLoad = _ref.openOnLoad,
      deactivateDropdown = _ref.deactivateDropdown,
      className = _ref.className,
      menuZIndex = _ref.menuZIndex,
      hideIconOnMobile = _ref.hideIconOnMobile,
      size = _ref.size;

  var getA11ySelectionMessage = function getA11ySelectionMessage(_ref2) {
    var itemToString = _ref2.itemToString,
        selectedItem = _ref2.selectedItem;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  var inputEl = useRef(inputEl);

  var itemToString = function itemToString(item) {
    return item ? String(item.label) : '';
  };

  var onSelectedItemChange = function onSelectedItemChange(changes) {
    onChange(changes.selectedItem);
    onInputChange({
      selectValue: changes.selectedItem,
      inputValue: inputEl.value
    });
  };

  var onIsOpenChange = function onIsOpenChange(changes) {
    if (!changes.isOpen) {
      inputEl && inputEl.current && inputEl.current.focus();
    }
  };

  var handleInputChange = function handleInputChange(event) {
    onInputChange({
      selectValue: selectedItem,
      inputValue: event.target.value
    });
  };

  var _useSelect = useSelect({
    id: id + "_element",
    toggleButtonId: id,
    items: options,
    getA11ySelectionMessage: getA11ySelectionMessage,
    itemToString: itemToString,
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
      getItemProps = _useSelect.getItemProps,
      selectItem = _useSelect.selectItem;

  useEffect(function () {
    if (!defaultSelectedValue) return;
    var initialSelectedItem = find(['value', defaultSelectedValue])(options);
    selectItem(initialSelectedItem);
  }, [defaultSelectedValue]);
  useEffect(function () {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);

  var handleInputKeydown = function handleInputKeydown(event) {
    if (!resetOnBackspace || deactivateDropdown) return;

    if (inputEl.current.value === '' && event.key === 'Backspace') {
      // Prevent history.back()
      event.preventDefault();
      selectItem(null); // Because we ca’t access to the ref

      var buttonElement = document.getElementById(id);
      buttonElement.focus();
    }
  };

  return /*#__PURE__*/React.createElement(StyledDropdownSelectWithInput, {
    className: classNames('k-Form-DropdownSelectWithInput', className, "k-Form-DropdownSelectWithInput--" + size, {
      'k-Form-DropdownSelectWithInput--isOpen': isOpen,
      'k-Form-DropdownSelectWithInput--hasItemSelected': !!selectedItem,
      'k-Form-DropdownSelectWithInput--error': error,
      'k-Form-DropdownSelectWithInput--valid': valid,
      'k-Form-DropdownSelectWithInput--disabled': disabled,
      'k-Form-DropdownSelectWithInput--noDropdown': deactivateDropdown,
      'k-Form-DropdownSelectWithInput--hideIconOnMobile': hideIconOnMobile
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/React.createElement(Label, _extends({
    className: classNames('k-Form-DropdownSelectWithInput__label', 'k-u-margin-bottom-single', {
      'k-Form-DropdownSelectWithInput__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-DropdownSelectWithInput__container",
    onKeyDown: handleInputKeydown
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: "k-Form-DropdownSelectWithInput__button",
    type: "button",
    value: selectedItem ? selectedItem.value : null
  }, toggleButtonProps, getToggleButtonProps(), {
    disabled: disabled || deactivateDropdown
  }), selectedItem ? /*#__PURE__*/React.createElement("span", {
    className: classNames('k-Form-DropdownSelectWithInput__content', {
      'k-Form-DropdownSelectWithInput__content--selectedItem': highlightOptionBox
    })
  }, selectedItem.icon && /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__content__icon",
    "aria-hidden": true
  }, selectedItem.icon), selectedItem.labelSelected || selectedItem.label) : /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__content k-Form-DropdownSelectWithInput__placeholder"
  }, placeholder), !deactivateDropdown && /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__button__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  })), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__button__statusBadges"
  }, error && /*#__PURE__*/React.createElement(WarningCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.error,
    "aria-label": a11yStatusError
  }), valid && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.valid,
    "aria-label": a11yStatusValid
  }))), /*#__PURE__*/React.createElement("input", _extends({
    ref: inputEl,
    type: "text",
    className: "k-Form-DropdownSelectWithInput__input",
    placeholder: inputPlaceholder,
    disabled: disabled,
    id: id + "_element-input",
    "aria-labelledby": id + "_element-label " + id,
    onChange: handleInputChange
  }, inputProps))), isOpen && /*#__PURE__*/React.createElement("ul", _extends({
    className: "k-Form-DropdownSelectWithInput__list"
  }, getMenuProps()), !deactivateDropdown && options.map(function (item, index) {
    if (item.separator) return /*#__PURE__*/React.createElement("li", _extends({
      key: "separator" + index,
      className: "k-Form-DropdownSelectWithInput__separator",
      "aria-hidden": true
    }, getItemProps({
      item: item,
      index: index,
      disabled: true
    })));
    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames('k-Form-DropdownSelectWithInput__item', {
        'k-Form-DropdownSelectWithInput__item--separator': item.separator,
        'k-Form-DropdownSelectWithInput__item--higlighted': highlightedIndex === index
      }),
      key: "" + item.value + index,
      disabled: item.disabled
    }, getItemProps({
      item: item,
      index: index,
      disabled: item.disabled
    })), item.icon && /*#__PURE__*/React.createElement("span", {
      className: "k-Form-DropdownSelectWithInput__item__icon",
      "aria-hidden": true
    }, item.icon), item.labelInList || item.label);
  })));
};
DropdownSelectWithInput.defaultProps = {
  hideLabel: false,
  options: [],
  placeholder: 'Select',
  inputPlaceholder: 'kisskissbankbank',
  labelPropsGetter: function labelPropsGetter() {},
  a11yStatusError: 'Error',
  a11yStatusValid: 'Valid',
  a11ySelectionMessageDisplayer: function a11ySelectionMessageDisplayer() {},
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  toggleButtonProps: {},
  inputProps: {},
  resetOnBackspace: false,
  highlightOptionBox: true,
  openOnLoad: false,
  deactivateDropdown: false,
  menuZIndex: 1000,
  hideIconOnMobile: false,
  size: 'normal'
};
DropdownSelectWithInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  labelPropsGetter: PropTypes.func,
  a11yStatusError: PropTypes.string,
  a11yStatusValid: PropTypes.string,
  a11ySelectionMessageDisplayer: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
  toggleButtonProps: PropTypes.object,
  inputProps: PropTypes.object,
  resetOnBackspace: PropTypes.bool,
  highlightOptionBox: PropTypes.bool,
  openOnLoad: PropTypes.bool,
  deactivateDropdown: PropTypes.bool,
  menuZIndex: PropTypes.number,
  hideIconOnMobile: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'normal', 'big', 'huge', 'giant'])
};