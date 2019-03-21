"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldPassword = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _marger = require("../../../layout/marger");

var _passwordInput = require("../../password-input");

var FieldPassword =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldPassword, _Component);

  function FieldPassword() {
    (0, _classCallCheck2.default)(this, FieldPassword);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldPassword).apply(this, arguments));
  }

  (0, _createClass2.default)(FieldPassword, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          iconLabel = _this$props.iconLabel,
          hiddenIconLabel = _this$props.hiddenIconLabel,
          textInputProps = (0, _objectWithoutProperties2.default)(_this$props, ["name", "iconLabel", "hiddenIconLabel"]);
      return _react.default.createElement(_marger.Marger, {
        top: "1.5"
      }, _react.default.createElement(_passwordInput.PasswordInput, {
        textInputProps: textInputProps,
        name: name,
        iconLabel: iconLabel,
        hiddenIconLabel: hiddenIconLabel
      }));
    }
  }]);
  return FieldPassword;
}(_react.Component);

exports.FieldPassword = FieldPassword;