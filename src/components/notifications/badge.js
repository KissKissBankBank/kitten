"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Badge =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Badge, _Component);

  function Badge() {
    (0, _classCallCheck2.default)(this, Badge);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Badge).apply(this, arguments));
  }

  (0, _createClass2.default)(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          spaced = _this$props.spaced,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "spaced"]);
      var badgeClassName = (0, _classnames.default)('k-Badge', className, {
        'k-Badge--spaced': spaced
      });
      return _react.default.createElement("span", (0, _extends2.default)({
        role: "alert",
        className: badgeClassName
      }, others));
    }
  }]);
  return Badge;
}(_react.Component);

exports.Badge = Badge;
Badge.defaultProps = {
  className: null,
  spaced: false
};