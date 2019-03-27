"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Switch =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Switch, _PureComponent);

  function Switch() {
    (0, _classCallCheck2.default)(this, Switch);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Switch).apply(this, arguments));
  }

  (0, _createClass2.default)(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          isChecked = _this$props.isChecked,
          disabled = _this$props.disabled,
          label = _this$props.label,
          big = _this$props.big,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["id", "isChecked", "disabled", "label", "big"]);
      var switchClassNames = (0, _classnames.default)('k-Switch__label', {
        'k-Switch__label--big': big
      });
      return _react.default.createElement("div", {
        className: "k-Switch"
      }, _react.default.createElement("input", (0, _extends2.default)({}, others, {
        id: id,
        type: "checkbox",
        className: "k-Switch__input",
        defaultChecked: isChecked,
        disabled: disabled
      })), _react.default.createElement("label", {
        htmlFor: id,
        className: switchClassNames
      }, label));
    }
  }]);
  return Switch;
}(_react.PureComponent); // DEPRECATED: do not use default export.


exports.Switch = Switch;
var _default = Switch;
exports.default = _default;