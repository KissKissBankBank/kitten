"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var TextInput =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextInput, _Component);

  function TextInput() {
    (0, _classCallCheck2.default)(this, TextInput);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInput).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInput, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          tiny = _this$props.tiny,
          digits = _this$props.digits,
          name = _this$props.name,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tag", "valid", "error", "disabled", "tiny", "digits", "name"]);
      var textInputClassName = (0, _classnames.default)('k-TextInput', className, {
        'k-TextInput--tiny': tiny,
        'k-TextAreaWrapper__input': tag == 'textarea',
        'is-valid': valid,
        'is-error': error,
        'is-disabled': disabled,
        'k-TextInput--twoDigits': digits === 2,
        'k-TextInput--sixDigits': digits === 6,
        'k-TextInput--twelveDigits': digits === 12
      });

      if (tag == 'textarea') {
        return _react.default.createElement("div", {
          className: "k-TextAreaWrapper"
        }, _react.default.createElement("textarea", (0, _extends2.default)({
          className: textInputClassName,
          ref: function ref(input) {
            return _this.input = input;
          },
          disabled: disabled,
          name: name
        }, others)), _react.default.createElement("div", {
          className: "k-TextAreaWrapper__gradient"
        }));
      } else {
        return _react.default.createElement("input", (0, _extends2.default)({
          className: textInputClassName,
          ref: function ref(input) {
            return _this.input = input;
          },
          disabled: disabled,
          type: "text",
          name: name
        }, others));
      }
    }
  }]);
  return TextInput;
}(_react.Component);

exports.TextInput = TextInput;
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  digits: null,
  name: 'text'
};