"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DropdownCombobox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = require("downshift");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _label = require("../../../form/label");

var _classnames = _interopRequireDefault(require("classnames"));

var _warningCircleIcon = require("../../../graphics/icons/warning-circle-icon");

var _checkedCircleIcon = require("../../../graphics/icons/checked-circle-icon");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _uniqBy = _interopRequireDefault(require("lodash/fp/uniqBy"));

var _filter = _interopRequireDefault(require("lodash/fp/filter"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isObject = _interopRequireDefault(require("lodash/fp/isObject"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getLabelToFilter = item => {
  if (item.searchableLabel || (0, _isObject.default)(item.label)) {
    return item.searchableLabel || '';
  }

  return item.label || '';
};

const DropdownCombobox = _ref => {
  let {
    labelText,
    comboboxButtonLabelText,
    noResultText,
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
    onInputChange,
    onMenuClose,
    onMenuOpen,
    openOnLoad,
    uniqLabelOnSearch,
    menuZIndex,
    className,
    value,
    onBlur,
    controlled,
    modifier,
    direction,
    arrowPosition,
    labelProps,
    inputProps
  } = _ref;
  const [flattenedOptions, setFlattenedOptions] = (0, _react.useState)([]);
  const [filteredOptions, setFilteredOptions] = (0, _react.useState)([]);

  const getA11ySelectionMessage = _ref2 => {
    let {
      itemToString,
      selectedItem
    } = _ref2;
    return a11ySelectionMessageDisplayer(itemToString(selectedItem));
  };

  const itemToString = item => item ? String(item.label) : '';

  const initialSelectedItem = (0, _find.default)(['value', defaultSelectedValue])(options);
  const selectedItemByValue = (0, _find.default)(['value', value])(flattenedOptions) || null;

  const onSelectedItemChange = changes => {
    onChange(changes.selectedItem);
    onInputChange({
      value: changes.selectedItem,
      changes
    });
  };

  const onInputValueChange = changes => {
    const newItemsList = (0, _flow.default)((0, _filter.default)(item => {
      const label = getLabelToFilter(item);
      return label.toLowerCase().startsWith(changes.inputValue.toLowerCase());
    }), !(0, _isEmpty.default)(changes.inputValue) && uniqLabelOnSearch ? (0, _uniqBy.default)('label') : item => item)(flattenedOptions);
    setFilteredOptions(newItemsList);
    onInputChange({
      value: changes.inputValue,
      changes
    });
  };

  const onIsOpenChange = changes => {
    if (changes.isOpen) {
      flattenedOptions && setFilteredOptions(flattenedOptions);
      return onMenuOpen({
        changes
      });
    }

    return onMenuClose({
      changes,
      hasNoResult: filteredOptions.length === 0
    });
  };

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getComboboxProps,
    getInputProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    inputValue
  } = (0, _downshift.useCombobox)({
    id: id + "_element",
    inputId: id,
    items: filteredOptions,
    getA11ySelectionMessage,
    itemToString,
    initialSelectedItem,
    onSelectedItemChange,
    onInputValueChange,
    onIsOpenChange,
    initialIsOpen: openOnLoad,
    ...(controlled && {
      selectedItem: selectedItemByValue
    })
  });
  (0, _react.useEffect)(() => {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  (0, _react.useEffect)(() => {
    flattenedOptions && setFilteredOptions(flattenedOptions);
  }, [flattenedOptions]);
  (0, _react.useEffect)(() => {
    // Turns a hierarchy of options with `children` into a flat array
    // of options with a `level` of 1, 2 or null.
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
    setFlattenedOptions(flatOptions);
  }, [options]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDropdown, {
    className: (0, _classnames.default)('k-Form-Dropdown', "k-Form-Dropdown--" + modifier, "k-Form-Dropdown--" + direction, "k-Form-Dropdown--" + size, "k-Form-Dropdown--arrowPosition-" + arrowPosition, className, {
      'k-Form-Dropdown--isOpen': isOpen > 0,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({}, labelProps, {
    className: (0, _classnames.default)('k-Form-Dropdown__label', 'k-u-margin-bottom-single', labelProps == null ? void 0 : labelProps.className, {
      'k-Form-Dropdown__label--isHidden': hideLabel
    })
  }, getLabelProps()), labelText), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "k-Form-DropdownCombobox"
  }, getComboboxProps()), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    placeholder: placeholder,
    disabled: disabled
  }, inputProps, {
    onFocus: () => !isOpen && openMenu(),
    onClick: () => !isOpen && openMenu()
  }, getInputProps({
    onBlur: () => {
      onBlur((0, _find.default)(['label', inputValue])(flattenedOptions) || null);
    }
  }), {
    className: (0, _classnames.default)('k-Form-DropdownCombobox__input', inputProps.className)
  })), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
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
  }, getMenuProps(), {
    role: isOpen ? 'listbox' : null
  }), isOpen && (filteredOptions.length > 0 ? filteredOptions.map((item, index) => /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_" + (item.level || 1), {
      'k-Form-Dropdown__item--higlighted': highlightedIndex === index
    }),
    key: "" + item.value + index,
    disabled: item.disabled
  }, getItemProps({
    item,
    index,
    disabled: item.disabled
  })), item.label)) : /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Form-Dropdown__item",
    disabled: true
  }, noResultText || 'No result'))));
};

exports.DropdownCombobox = DropdownCombobox;
DropdownCombobox.defaultProps = {
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
  menuZIndex: 1000,
  modifier: 'hydrogen',
  direction: 'down',
  arrowPosition: 'left',
  inputProps: {}
};
DropdownCombobox.propTypes = {
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.string.isRequired,
  comboboxButtonLabelText: _propTypes.default.string.isRequired,
  noResultText: _propTypes.default.string.isRequired,
  hideLabel: _propTypes.default.bool,
  controlled: _propTypes.default.bool,
  options: _propTypes.default.arrayOf(_propTypes.default.object),
  placeholder: _propTypes.default.string,
  labelPropsGetter: _propTypes.default.func,
  size: _propTypes.default.oneOf(['micro', 'small', 'medium', 'large', 'huge', 'giant']),
  a11yStatusError: _propTypes.default.string,
  a11yStatusValid: _propTypes.default.string,
  a11ySelectionMessageDisplayer: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  onMenuClose: _propTypes.default.func,
  onMenuOpen: _propTypes.default.func,
  openOnLoad: _propTypes.default.bool,
  menuZIndex: _propTypes.default.number,
  modifier: _propTypes.default.oneOf(['hydrogen', 'nitrogen', 'boron']),
  direction: _propTypes.default.oneOf(['up', 'down']),
  arrowPosition: _propTypes.default.oneOf(['left', 'right']),
  inputProps: _propTypes.default.object
};