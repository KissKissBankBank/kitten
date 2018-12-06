"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Switch, _React$Component);

  function Switch() {
    (0, _classCallCheck2.default)(this, Switch);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Switch).apply(this, arguments));
  }

  (0, _createClass2.default)(Switch, [{
    key: "render",
    value: function render() {
      var switchClassNames = (0, _classnames.default)('k-Switch__label', {
        'k-Switch__label--big': this.props.big
      });
      return _react.default.createElement("div", {
        className: "k-Switch"
      }, _react.default.createElement("input", {
        id: this.props.id,
        type: "checkbox",
        className: "k-Switch__input",
        defaultChecked: this.props.isChecked,
        disabled: this.props.disabled
      }), _react.default.createElement("label", {
        htmlFor: this.props.id,
        className: switchClassNames
      }, this.props.label));
    }
  }]);
  return Switch;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.Switch = Switch;
var _default = Switch;
exports.default = _default;