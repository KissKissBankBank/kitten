"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var StaticTooltip =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(StaticTooltip, _Component);

  function StaticTooltip() {
    (0, _classCallCheck2.default)(this, StaticTooltip);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StaticTooltip).apply(this, arguments));
  }

  (0, _createClass2.default)(StaticTooltip, [{
    key: "renderArrow",
    value: function renderArrow() {
      var style;

      if (this.props.arrowLeftPosition) {
        style = {
          left: this.props.arrowLeftPosition
        };
      }

      return _react.default.createElement("span", {
        style: style,
        className: "k-StaticTooltip__arrow"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          arrowLeftPosition = _this$props.arrowLeftPosition,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "arrowLeftPosition"]);
      var staticTooltipClassName = (0, _classnames.default)('k-StaticTooltip', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: staticTooltipClassName
      }, others), _react.default.createElement("div", {
        className: "k-StaticTooltip__content"
      }, this.renderArrow(), children));
    }
  }]);
  return StaticTooltip;
}(_react.Component);

exports.StaticTooltip = StaticTooltip;
StaticTooltip.defaultProps = {
  arrowLeftPosition: null
};