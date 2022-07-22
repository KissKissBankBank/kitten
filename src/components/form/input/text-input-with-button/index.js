"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textInput = require("../../../form/input/text-input");

var _excluded = ["buttonValue", "modifier", "buttonProps", "inputValue", "inset"];

var TextInputWithButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var buttonValue = _ref.buttonValue,
      modifier = _ref.modifier,
      buttonProps = _ref.buttonProps,
      inputValue = _ref.inputValue,
      inset = _ref.inset,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    ref: ref || null
  }, others, {
    value: inputValue,
    has: "button",
    buttonIsInset: inset,
    buttonProps: (0, _extends2.default)({
      modifier: modifier,
      children: buttonValue
    }, buttonProps)
  }));
});

exports.TextInputWithButton = TextInputWithButton;
TextInputWithButton.propTypes = {
  inset: _propTypes.default.bool,
  modifier: _propTypes.default.string,
  buttonValue: _propTypes.default.node,
  buttonProps: _propTypes.default.object,
  inputValue: _propTypes.default.string
};
TextInputWithButton.defaultProps = {
  buttonValue: 'Button',
  buttonProps: {
    disabled: false
  },
  modifier: 'beryllium',
  inset: false
};