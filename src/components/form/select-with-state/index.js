"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectWithState = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _events = _interopRequireDefault(require("../../../helpers/dom/events"));

// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.
//
// Also handles multi-level options. You can give `children: []` to each option
// and fill it with options to represent a hierarchy.
//
// E.g:
//    <SelectWithState options={
//      { label: 'Cat',
//        children: [{ label: 'A' }, { label: 'B' }]
//      } />
//
var SelectWithState = function SelectWithState(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      className = _ref.className,
      tiny = _ref.tiny,
      error = _ref.error,
      valid = _ref.valid,
      disabled = _ref.disabled,
      labelText = _ref.labelText,
      autoFill = _ref.autoFill,
      id = _ref.id,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value", "onChange", "onInputChange", "className", "tiny", "error", "valid", "disabled", "labelText", "autoFill", "id"]);

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var keyboard = _events.default.keyboard;
  (0, _react.useEffect)(function () {
    setSelectedValue(value);
  }, [value]);

  var handleChange = function handleChange(option) {
    var val = option && option.value ? option : {
      value: null,
      label: null
    };
    setSelectedValue(val);
    onChange(val);
    onInputChange({
      value: val,
      name: name
    });
  };

  var handleLightChange = function handleLightChange(e) {
    var val = e.target.value;
    setSelectedValue(val);
    onChange({
      value: val
    });
  };

  var onKeyDown = function onKeyDown(event) {
    if ([keyboard.enter, keyboard.space].includes(event.keyCode)) {
      event.preventDefault();
      event.stopPropagation();
      onRemove(event);
    }
  };

  var selectClassName = (0, _classnames.default)('k-Select', className, {
    'k-Select--tiny': tiny,
    'is-error': error,
    'is-valid': valid,
    'is-disabled': disabled
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: selectClassName
  }, labelText && /*#__PURE__*/_react.default.createElement("label", {
    className: "k-Select__label",
    htmlFor: id
  }, labelText), autoFill && /*#__PURE__*/_react.default.createElement("input", {
    autoComplete: autoFill,
    "x-autocompletetype": autoFill,
    xautocompletetype: autoFill,
    autocompletetype: autoFill,
    name: autoFill,
    style: {
      position: 'absolute',
      zIndex: '-1',
      opacity: '0'
    },
    onChange: handleLightChange
  }), /*#__PURE__*/_react.default.createElement(SelectWithMultiLevel, (0, _extends2.default)({
    id: id,
    value: selectedValue,
    onKeyDown: onKeyDown,
    onChange: handleChange,
    disabled: disabled,
    labelText: labelText
  }, props)));
};

exports.SelectWithState = SelectWithState;

var SelectWithMultiLevel = function SelectWithMultiLevel(_ref2) {
  var options = _ref2.options,
      inputProps = _ref2.inputProps,
      labelText = _ref2.labelText,
      id = _ref2.id,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["options", "inputProps", "labelText", "id"]);

  // Turns a hierarchy of options with `children` into a flat array
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
  }; // React-Select allows changing the way options are rendered.


  var optionRenderer = function optionRenderer(_ref3) {
    var level = _ref3.level,
        label = _ref3.label;
    if (!level) return label;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "k-Select__option--level".concat(level)
    }, label);
  };

  if (labelText && !inputProps['aria-labelledby']) {
    inputProps['aria-labelledby'] = id;
  }

  return /*#__PURE__*/_react.default.createElement(_reactSelect.default, (0, _extends2.default)({
    optionRenderer: optionRenderer,
    id: id
  }, props, {
    inputProps: inputProps,
    options: flattenedOptions()
  }));
};

SelectWithState.propTypes = {
  autoFill: _propTypes.default.string
};
SelectWithState.defaultProps = {
  onChange: function onChange() {},
  onInputChange: function onInputChange() {},
  clearable: false,
  searchable: false,
  deleteRemoves: false,
  multi: false,
  labelText: null,
  error: false,
  valid: false,
  disabled: false,
  tiny: false,
  name: null,
  inputProps: {},
  autoFill: undefined
}; // DEPRECATED: do not use default export.

var _default = SelectWithState;
exports.default = _default;