"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInput = require("../../components/form/text-input");

var TextInputWithButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextInputWithButton, _Component);

  function TextInputWithButton() {
    (0, _classCallCheck2.default)(this, TextInputWithButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInputWithButton).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInputWithButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          value = _this$props.value,
          className = _this$props.className,
          textInputProps = _this$props.textInputProps,
          buttonProps = _this$props.buttonProps,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "value", "className", "textInputProps", "buttonProps"]);
      var TextInputWithButtonClassName = (0, _classnames.default)('k-TextInputWithButton', className);
      var textInputWithButtonInputClassName = (0, _classnames.default)('k-TextInputWithButton__input', textInputProps.className);
      var textInputWithButtonButtonClassName = (0, _classnames.default)('k-TextInputWithButton__button', buttonProps.className, {
        'is-valid': valid,
        'is-error': error,
        'is-disabled': disabled
      });
      return _react.default.createElement("div", (0, _extends2.default)({
        className: TextInputWithButtonClassName
      }, others), _react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, textInputProps, {
        valid: valid,
        error: error,
        disabled: disabled,
        className: textInputWithButtonInputClassName
      })), _react.default.createElement("button", (0, _extends2.default)({
        type: "button"
      }, buttonProps, {
        disabled: disabled,
        className: textInputWithButtonButtonClassName
      }), value));
    }
  }]);
  return TextInputWithButton;
}(_react.Component);

exports.TextInputWithButton = TextInputWithButton;
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  value: 'Button',
  textInputProps: {
    tag: 'input'
  },
  buttonProps: {}
};