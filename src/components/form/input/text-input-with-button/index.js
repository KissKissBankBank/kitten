"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textInput = require("../../../form/input/text-input");

const TextInputWithButton = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    buttonValue,
    modifier,
    buttonProps,
    inputValue,
    inset,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    ref: ref || null
  }, others, {
    value: inputValue,
    has: "button",
    buttonIsInset: inset,
    buttonProps: {
      modifier: modifier,
      children: buttonValue,
      ...buttonProps
    }
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