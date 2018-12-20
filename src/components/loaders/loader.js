"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Circle = function Circle(_ref) {
  var color = _ref.color,
      others = (0, _objectWithoutProperties2.default)(_ref, ["color"]);
  var size = 5;
  return _react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(size * 2, " ").concat(size * 2)
  }, others), _react.default.createElement("circle", {
    fill: color,
    cx: size,
    cy: size,
    r: size
  }));
};

var Loader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck2.default)(this, Loader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Loader).apply(this, arguments));
  }

  (0, _createClass2.default)(Loader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tag = _this$props.tag,
          className = _this$props.className,
          color = _this$props.color,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["tag", "className", "color"]);
      var Tag = tag;
      var loaderClassName = (0, _classnames.default)('k-Loader', className);

      var circle = _react.default.createElement(Circle, {
        className: "k-Loader__circle",
        color: color
      });

      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: loaderClassName
      }, others), circle, circle, circle);
    }
  }]);
  return Loader;
}(_react.Component);

exports.Loader = Loader;
Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null
};