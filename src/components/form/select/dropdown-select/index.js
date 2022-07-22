"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DropdownSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = require("downshift");

var _label = require("../../../form/label");

var _classnames = _interopRequireDefault(require("classnames"));

var _warningCircleIcon = require("../../../graphics/icons/warning-circle-icon");

var _checkedCircleIcon = require("../../../graphics/icons/checked-circle-icon");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _combobox = require("./combobox");

var _styles = require("./styles");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DropdownSelect = _ref => {
  let {
    combobox,
    ...props
  } = _ref;
  if (combobox) return /*#__PURE__*/_react.default.createElement(_combobox.DropdownCombobox, props);
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

  const initialSelectedItem = (0, _find.default)(['value', defaultSelectedValue])(flattenedOptions);
  const selectedItemByValue = (0, _find.default)(['value', value])(flattenedOptions) || null;

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
  } = (0, _downshift.useSelect)({
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
  (0, _react.useEffect)(() => {
    getLabelProps && labelPropsGetter(getLabelProps);
  }, [getLabelProps]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledDropdown, {
    className: (0, _classnames.default)('k-Form-Dropdown', "k-Form-Dropdown--" + modifier, "k-Form-Dropdown--" + direction, "k-Form-Dropdown--" + size, "k-Form-Dropdown--arrowPosition-" + arrowPosition, className, {
      'k-Form-Dropdown--isOpen': isOpen,
      'k-Form-Dropdown--error': error,
      'k-Form-Dropdown--valid': valid,
      'k-Form-Dropdown--disabled': disabled,
      'k-Form-Dropdown--scrollable': flattenedOptions.length > 5
    }),
    style: {
      '--menu-z-index': menuZIndex
    }
  }, /*#__PURE__*/_react.default.createElement(_label.Label, (0, _extends2.default)({}, labelProps, {
    className: (0, _classnames.default)('k-Form-Dropdown__label', 'k-u-margin-bottom-single', labelProps == null ? void 0 : labelProps.className, {
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
  }, getMenuProps(), {
    role: isOpen ? 'listbox' : null
  }), isOpen && flattenedOptions.map((item, index) => /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-Dropdown__item', "k-Form-Dropdown__item--level_" + (item.level || 1), {
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

exports.DropdownSelect = DropdownSelect;
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
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.string.isRequired,
  combobox: _propTypes.default.bool,
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
  onBlur: _propTypes.default.func,
  onInputChange: _propTypes.default.func,
  onMenuClose: _propTypes.default.func,
  onMenuOpen: _propTypes.default.func,
  openOnLoad: _propTypes.default.bool,
  uniqLabelOnSearch: _propTypes.default.bool,
  menuZIndex: _propTypes.default.number,
  modifier: _propTypes.default.oneOf(['hydrogen', 'nitrogen', 'boron']),
  direction: _propTypes.default.oneOf(['up', 'down']),
  arrowPosition: _propTypes.default.oneOf(['left', 'right'])
};