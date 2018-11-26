"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnit = void 0;

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

var TextInputWithUnit =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextInputWithUnit, _Component);

  function TextInputWithUnit() {
    (0, _classCallCheck2.default)(this, TextInputWithUnit);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInputWithUnit).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInputWithUnit, [{
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
          valid = _this$props.valid,
          error = _this$props.error,
          type = _this$props.type,
          unit = _this$props.unit,
          unitWord = _this$props.unitWord,
          tiny = _this$props.tiny,
          disabled = _this$props.disabled,
          digits = _this$props.digits,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "valid", "error", "type", "unit", "unitWord", "tiny", "disabled", "digits"]);
      var textInputClassName = (0, _classnames.default)('k-TextInputWithUnit__input', className);
      var unitClassName = (0, _classnames.default)('k-TextInputWithUnit__unit', {
        'k-TextInputWithUnit__unit--tiny': tiny,
        'k-TextInputWithUnit__unitWord': unitWord,
        'is-valid': valid,
        'is-error': error,
        'is-inactive': disabled
      });
      var textInputWithUnitClassName = (0, _classnames.default)('k-TextInputWithUnit', {
        'k-TextInputWithUnit--fullWidth': !digits
      });
      return _react.default.createElement("div", {
        className: textInputWithUnitClassName
      }, _react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
        type: type,
        className: textInputClassName,
        valid: valid,
        error: error,
        tiny: tiny,
        disabled: disabled,
        digits: digits,
        ref: function ref(input) {
          return _this.input = input;
        }
      }, others, {
        tag: "input"
      })), _react.default.createElement("span", {
        className: unitClassName
      }, unit));
    }
  }]);
  return TextInputWithUnit;
}(_react.Component);

exports.TextInputWithUnit = TextInputWithUnit;
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  placeholder: null,
  valid: false,
  error: false,
  tiny: false,
  disabled: false,
  digits: null
};