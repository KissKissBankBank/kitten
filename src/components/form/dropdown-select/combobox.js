"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownCombobox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = require("downshift");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _label = require("../../../components/form/label");

var _classnames = _interopRequireDefault(require("classnames"));

var _warningCircleIcon = require("../../../components/icons/warning-circle-icon");

var _checkedCircleIcon = require("../../../components/icons/checked-circle-icon");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _styles = require("./styles");

var DropdownCombobox = function DropdownCombobox(_ref) {
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
      openOnLoad = _ref.openOnLoad;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      flattenedOptions = _useState2[0],
      setFlattenedOptions = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
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

  var initialSelectedItem = (0, _find.default)(['value', defaultSelectedValue])(options);

  var onSelectedItemChange = function onSelectedItemChange(changes) {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem,
      changes: changes
    });
  };

  var onInputValueChange = function onInputValueChange(changes) {
    var newItemsList = flattenedOptions.filter(function (item) {
      return item.value.toLowerCase().startsWith(changes.inputValue.toLowerCase());
    });
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

  var _useCombobox = (0, _downshift.useCombobox)({
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
      getItemProps = _useCombobox.getItemProps;

  (0, _react.useEffect)(function () {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  (0, _react.useEffect)(function () {
    flattenedOptions && setFilteredOptions(flattenedOptions);
  }, [flattenedOptions]);
  (0, _react.useEffect)(function () {
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
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDropdown, {
    className: (0, _classnames.default)('k-Form-Dropdown', "k-Form-Dropdown--".concat(variant), "k-Form-Dropdown--".concat(size), {
      'k-Form-Dropdown--isOpen': isOpen > 0,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    })
  }, /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-Dropdown__label', 'k-u-margin-bottom-single', {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "k-Form-DropdownCombobox"
  }, getComboboxProps()), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    className: "k-Form-DropdownCombobox__input",
    placeholder: placeholder,
    disabled: disabled
  }, getInputProps())), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: "k-Form-DropdownCombobox__arrowButton",
    type: "button",
    "aria-label": comboboxButtonLabelText,
    disabled: disabled
  }, getToggleButtonProps()), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownCombobox__arrowButton__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownCombobox__statusBadges"
  }, error && /*#__PURE__*/_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.error,
    "aria-label": a11yStatusError
  }), valid && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.valid,
    "aria-label": a11yStatusValid
  }))), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: "k-Form-Dropdown__list"
  }, getMenuProps()), isOpen && (filteredOptions.length > 0 ? filteredOptions.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
      className: (0, _classnames.default)('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_".concat(item.level || 1), {
        'k-Form-Dropdown__item--higlighted': highlightedIndex === index
      }),
      key: "".concat(item.value).concat(index),
      disabled: item.disabled
    }, getItemProps({
      item: item,
      index: index,
      disabled: item.disabled
    })), item.label);
  }) : /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-Dropdown__item",
    disabled: true
  }, noResultText))));
};

exports.DropdownCombobox = DropdownCombobox;
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
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.string.isRequired,
  comboboxButtonLabelText: _propTypes.default.string.isRequired,
  noResultText: _propTypes.default.string.isRequired,
  hideLabel: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.object),
  placeholder: _propTypes.default.string,
  labelPropsGetter: _propTypes.default.func,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  size: _propTypes.default.oneOf(['tiny', 'normal', 'big', 'huge', 'giant']),
  a11yStatusError: _propTypes.default.string,
  a11yStatusValid: _propTypes.default.string,
  a11ySelectionMessageDisplayer: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  onMenuClose: _propTypes.default.func,
  onMenuOpen: _propTypes.default.func,
  openOnLoad: _propTypes.default.bool
};