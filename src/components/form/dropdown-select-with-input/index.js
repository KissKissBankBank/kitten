"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSelectWithInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = require("downshift");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _label = require("../../../components/form/label");

var _classnames = _interopRequireDefault(require("classnames"));

var _warningCircleIcon = require("../../../components/icons/warning-circle-icon");

var _checkedCircleIcon = require("../../../components/icons/checked-circle-icon");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _find = _interopRequireDefault(require("lodash/fp/find"));

var StyledDropdownSelectWithInput = _styledComponents.default.div.withConfig({
  displayName: "dropdown-select-with-input__StyledDropdownSelectWithInput",
  componentId: "sc-1daj2wr-0"
})(["position:relative;.k-Form-DropdownSelectWithInput__container{display:flex;box-sizing:border-box;position:relative;width:100%;overflow:hidden;padding:0 ", " 0 0;margin:0;border:", " solid ", ";background-color:", ";font-size:", ";height:", ";border-radius:", ";@media (min-width:", "px){height:", ";border-radius:", ";}}.k-Form-DropdownSelectWithInput__label--isHidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.k-Form-DropdownSelectWithInput__button{appearance:none;padding:0;border:none;font:inherit;color:inherit;background-color:transparent;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;flex:1 0 100%;}.k-Form-DropdownSelectWithInput__content{display:flex;align-items:center;", " color:", ";margin:0 ", " 0 ", ";font-size:", ";@media (min-width:", "px){font-size:", ";margin-left:", ";}}.k-Form-DropdownSelectWithInput__content--selectedItem{background:", ";border-radius:", ";padding:0 ", ";height:", ";@media (min-width:", "px){padding:0 ", ";height:", ";}}.k-Form-DropdownSelectWithInput__placeholder{font-size:", ";color:", ";}.k-Form-DropdownSelectWithInput__content__icon{margin-right:", ";display:flex;align-items:center;svg{display:block;max-width:", ";max-height:", ";}svg[fill],svg [fill]{fill:currentColor;}svg[stroke],svg [stroke]{stroke:currentColor;}@media (min-width:", "){margin-right:", ";}}&.k-Form-DropdownSelectWithInput--hideIconOnMobile{@media (max-width:", "){.k-Form-DropdownSelectWithInput__content__icon{display:none;}}}.k-Form-DropdownSelectWithInput__button__arrowBox{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;left:", ";@media (min-width:", "px){left:", ";}}.k-Form-DropdownSelectWithInput__button__statusBadges{position:absolute;top:0;right:", ";bottom:0;display:flex;align-items:center;justify-content:center;height:auto;right:", ";@media (min-width:", "px){right:", ";}svg{width:", ";height:", ";}}.k-Form-DropdownSelectWithInput__input{display:none;", " font-size:", ";color:", ";appearance:none;padding:0;border:none;background-color:transparent;@media (min-width:", "){font-size:", ";}}.k-Form-DropdownSelectWithInput__list{box-sizing:border-box;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;max-height:", ";padding:0;margin:0;overflow-y:scroll;background-color:", ";list-style:none;box-shadow:0 ", " ", " 0 rgba(0,0,0,0.1);border-bottom-left-radius:", ";border-bottom-right-radius:", ";@media (min-width:", "px){border-bottom-left-radius:", ";border-bottom-right-radius:", ";}&:not(:empty){border:", " solid ", ";border-top:0;}:focus{outline:", " solid ", ";outline-offset:", ";}}.k-Form-DropdownSelectWithInput__item{display:flex;align-items:center;transition:background-color .2s ease;box-sizing:border-box;padding:", ";color:", ";", " font-size:", ";user-select:none;min-height:", ";padding-top:", ";padding-bottom:", ";@media (min-width:", "px){min-height:", ";}&[aria-selected=\"true\"]{background-color:", ";}&[disabled]{color:", ";}}.k-Form-DropdownSelectWithInput__item__icon{margin-right:", ";min-width:", ";display:flex;align-items:center;justify-content:center;svg{display:block;max-width:100%;}@media (min-width:", "){margin-right:", ";}}.k-Form-DropdownSelectWithInput__separator{height:", ";background-color:", ";}&:focus-within{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:", ";}.k-Form-DropdownSelectWithInput__button:focus,.k-Form-DropdownSelectWithInput__input:focus{outline:", " solid ", ";outline-offset:", ";}}&.k-Form-DropdownSelectWithInput--error .k-Form-DropdownSelectWithInput__input,&.k-Form-DropdownSelectWithInput--valid .k-Form-DropdownSelectWithInput__input{padding-right:", ";}&.k-Form-DropdownSelectWithInput--error{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:", ";}}&.k-Form-DropdownSelectWithInput--valid{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{border-color:", ";}}&.k-Form-DropdownSelectWithInput--disabled{.k-Form-DropdownSelectWithInput__container,.k-Form-DropdownSelectWithInput__list{background-color:", ";border-color:", ";}.k-Form-DropdownSelectWithInput__button__arrowBox svg{fill:", ";}.k-Form-DropdownSelectWithInput__content,.k-Form-DropdownSelectWithInput__input{color:", ";}.k-Form-DropdownSelectWithInput__content--selectedItem{background-color:", ";color:", ";}}&.k-Form-DropdownSelectWithInput--isOpen{.k-Form-DropdownSelectWithInput__container{border-bottom-left-radius:0;border-bottom-right-radius:0;}}&.k-Form-DropdownSelectWithInput--hasItemSelected{.k-Form-DropdownSelectWithInput__button{flex:0 0 auto;}.k-Form-DropdownSelectWithInput__input{flex:1 0 auto;display:inline-block;}}&.k-Form-DropdownSelectWithInput--noDropdown{.k-Form-DropdownSelectWithInput__content{margin:0 ", ";@media (min-width:", "px){margin-left:", ";}}}"], (0, _typography.pxToRem)(10 + 10), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(8), _typographyConfig.default.fontStyles.light, _colorsConfig.default.font1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(-2), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(60), _colorsConfig.default.primary5, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(46), (0, _typography.stepToRem)(0), _colorsConfig.default.font2, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(17), (0, _typography.pxToRem)(17), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(40 + 10), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(24), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(310), _colorsConfig.default.background1, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(15), _colorsConfig.default.font1, _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), _colorsConfig.default.background3, _colorsConfig.default.font2, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(24 + 10), _colorsConfig.default.error3, _colorsConfig.default.tertiary2, _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.font2, _colorsConfig.default.font2, _colorsConfig.default.line2, _colorsConfig.default.background1, (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(10));

var DropdownSelectWithInput = function DropdownSelectWithInput(_ref) {
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
      hideIconOnMobile = _ref.hideIconOnMobile;

  var getA11ySelectionMessage = function getA11ySelectionMessage(_ref2) {
    var itemToString = _ref2.itemToString,
        selectedItem = _ref2.selectedItem;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  var inputEl = (0, _react.useRef)(inputEl);

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

  var _useSelect = (0, _downshift.useSelect)({
    id: "".concat(id, "_element"),
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

  (0, _react.useEffect)(function () {
    if (!defaultSelectedValue) return;
    var initialSelectedItem = (0, _find.default)(['value', defaultSelectedValue])(options);
    selectItem(initialSelectedItem);
  }, [defaultSelectedValue]);
  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(StyledDropdownSelectWithInput, {
    className: (0, _classnames.default)('k-Form-DropdownSelectWithInput', className, {
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
  }, /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-DropdownSelectWithInput__label', 'k-u-margin-bottom-single', {
      'k-Form-DropdownSelectWithInput__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-DropdownSelectWithInput__container",
    onKeyDown: handleInputKeydown
  }, /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: "k-Form-DropdownSelectWithInput__button",
    type: "button",
    value: selectedItem ? selectedItem.value : null
  }, toggleButtonProps, getToggleButtonProps(), {
    disabled: disabled || deactivateDropdown
  }), selectedItem ? /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Form-DropdownSelectWithInput__content', {
      'k-Form-DropdownSelectWithInput__content--selectedItem': highlightOptionBox
    })
  }, selectedItem.icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__content__icon",
    "aria-hidden": true
  }, selectedItem.icon), selectedItem.labelSelected || selectedItem.label) : /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__content k-Form-DropdownSelectWithInput__placeholder"
  }, placeholder), !deactivateDropdown && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__button__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelectWithInput__button__statusBadges"
  }, error && /*#__PURE__*/_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.error,
    "aria-label": a11yStatusError
  }), valid && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.valid,
    "aria-label": a11yStatusValid
  }))), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputEl,
    type: "text",
    className: "k-Form-DropdownSelectWithInput__input",
    placeholder: inputPlaceholder,
    disabled: disabled,
    id: "".concat(id, "_element-input"),
    "aria-labelledby": "".concat(id, "_element-label ").concat(id),
    onChange: handleInputChange
  }, inputProps))), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: "k-Form-DropdownSelectWithInput__list"
  }, getMenuProps()), isOpen && !deactivateDropdown && options.map(function (item, index) {
    if (item.separator) return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      key: "separator".concat(index),
      className: "k-Form-DropdownSelectWithInput__separator",
      "aria-hidden": true
    }, getItemProps({
      item: item,
      index: index,
      disabled: true
    })));
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      className: (0, _classnames.default)('k-Form-DropdownSelectWithInput__item', {
        'k-Form-DropdownSelectWithInput__item--separator': item.separator,
        'k-Form-DropdownSelectWithInput__item--higlighted': highlightedIndex === index
      }),
      key: "".concat(item.value).concat(index),
      disabled: item.disabled
    }, getItemProps({
      item: item,
      index: index,
      disabled: item.disabled
    })), item.icon && /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Form-DropdownSelectWithInput__item__icon",
      "aria-hidden": true
    }, item.icon), item.labelInList || item.label);
  })));
};

exports.DropdownSelectWithInput = DropdownSelectWithInput;
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
  hideIconOnMobile: false
};
DropdownSelectWithInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.string.isRequired,
  hideLabel: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.object),
  placeholder: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string,
  labelPropsGetter: _propTypes.default.func,
  a11yStatusError: _propTypes.default.string,
  a11yStatusValid: _propTypes.default.string,
  a11ySelectionMessageDisplayer: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  toggleButtonProps: _propTypes.default.object,
  inputProps: _propTypes.default.object,
  resetOnBackspace: _propTypes.default.bool,
  highlightOptionBox: _propTypes.default.bool,
  openOnLoad: _propTypes.default.bool,
  deactivateDropdown: _propTypes.default.bool,
  menuZIndex: _propTypes.default.number,
  hideIconOnMobile: _propTypes.default.bool
};