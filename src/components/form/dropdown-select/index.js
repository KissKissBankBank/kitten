"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = require("downshift");

var _label = require("../label");

var _classnames = _interopRequireDefault(require("classnames"));

var _warningCircleIcon = require("../../graphics/icons/warning-circle-icon");

var _checkedCircleIcon = require("../../graphics/icons/checked-circle-icon");

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _combobox = require("./combobox");

var _styles = require("./styles");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _excluded = ["combobox"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownSelect = function DropdownSelect(_ref) {
  var combobox = _ref.combobox,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  if (combobox) return /*#__PURE__*/_react.default.createElement(_combobox.DropdownCombobox, props);
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
      onBlur = props.onBlur,
      onInputChange = props.onInputChange,
      onMenuClose = props.onMenuClose,
      onMenuOpen = props.onMenuOpen,
      openOnLoad = props.openOnLoad,
      menuZIndex = props.menuZIndex,
      className = props.className,
      value = props.value,
      controlled = props.controlled;

  var getA11ySelectionMessage = function getA11ySelectionMessage(_ref2) {
    var itemToString = _ref2.itemToString,
        selectedItem = _ref2.selectedItem;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  var itemToString = function itemToString(item) {
    return item ? String(item.label) : '';
  };

  var onSelectedItemChange = function onSelectedItemChange(changes) {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem
    });
  }; // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.


  var flattenedOptions = function () {
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
  }();

  var initialSelectedItem = (0, _find.default)(['value', defaultSelectedValue])(flattenedOptions);
  var selectedItemByValue = (0, _find.default)(['value', value])(flattenedOptions) || null;

  var onIsOpenChange = function onIsOpenChange(changes) {
    if (changes.isOpen) return onMenuOpen({
      changes: changes
    });
    setTimeout(function () {
      return onBlur(changes.selectedItem);
    }, 0);
    return onMenuClose({
      changes: changes
    });
  };

  var _useSelect = (0, _downshift.useSelect)((0, _extends2.default)({
    id: "".concat(id, "_element"),
    toggleButtonId: id,
    items: flattenedOptions,
    getA11ySelectionMessage: getA11ySelectionMessage,
    itemToString: itemToString,
    initialSelectedItem: initialSelectedItem,
    onSelectedItemChange: onSelectedItemChange,
    onIsOpenChange: onIsOpenChange,
    initialIsOpen: openOnLoad
  }, controlled && {
    selectedItem: selectedItemByValue
  })),
      isOpen = _useSelect.isOpen,
      selectedItem = _useSelect.selectedItem,
      getToggleButtonProps = _useSelect.getToggleButtonProps,
      getLabelProps = _useSelect.getLabelProps,
      getMenuProps = _useSelect.getMenuProps,
      highlightedIndex = _useSelect.highlightedIndex,
      getItemProps = _useSelect.getItemProps;

  (0, _react.useEffect)(function () {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDropdown, {
    className: (0, _classnames.default)('k-Form-Dropdown', "k-Form-Dropdown--".concat(variant), "k-Form-Dropdown--".concat(size), className, {
      'k-Form-Dropdown--isOpen': isOpen,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-Dropdown__label', 'k-u-margin-bottom-single', {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: "k-Form-DropdownSelect__button",
    type: "button",
    disabled: disabled,
    value: selectedItem ? selectedItem.value : null
  }, getToggleButtonProps()), selectedItem ? /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelect__content"
  }, selectedItem.label) : /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelect__content k-Form-DropdownSelect__placeholder"
  }, placeholder), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelect__button__arrowBox",
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: isOpen ? 'top' : 'bottom'
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Form-DropdownSelect__button__statusBadges"
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
  }, getMenuProps()), isOpen && flattenedOptions.map(function (item, index) {
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
  })));
};

exports.DropdownSelect = DropdownSelect;
DropdownSelect.defaultProps = {
  combobox: false,
  hideLabel: false,
  controlled: false,
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
  onBlur: function onBlur() {},
  onInputChange: function onInputChange() {},
  onMenuClose: function onMenuClose() {},
  onMenuOpen: function onMenuOpen() {},
  openOnLoad: false,
  uniqLabelOnSearch: false,
  menuZIndex: 1000
};
DropdownSelect.propTypes = {
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.string.isRequired,
  combobox: _propTypes.default.bool,
  hideLabel: _propTypes.default.bool,
  controlled: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.object),
  placeholder: _propTypes.default.string,
  labelPropsGetter: _propTypes.default.func,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  size: _propTypes.default.oneOf(['tiny', 'normal', 'big', 'huge', 'giant']),
  a11yStatusError: _propTypes.default.string,
  a11yStatusValid: _propTypes.default.string,
  a11ySelectionMessageDisplayer: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  onMenuClose: _propTypes.default.func,
  onMenuOpen: _propTypes.default.func,
  openOnLoad: _propTypes.default.bool,
  uniqLabelOnSearch: _propTypes.default.bool,
  menuZIndex: _propTypes.default.number
};