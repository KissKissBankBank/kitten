"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipNew = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _marger = require("kitten/components/layout/marger");

var TooltipNew =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TooltipNew, _Component);

  function TooltipNew() {
    (0, _classCallCheck2.default)(this, TooltipNew);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TooltipNew).apply(this, arguments));
  }

  (0, _createClass2.default)(TooltipNew, [{
    key: "renderArrow",
    value: function renderArrow() {
      return _react.default.createElement("span", {
        className: "k-TooltipNew__arrow"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className"]);
      var tooltipNewClassName = (0, _classnames.default)('k-TooltipNew', className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: tooltipNewClassName,
        role: "tooltip"
      }, others), _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "2"
      }, children, this.renderArrow()));
    }
  }]);
  return TooltipNew;
}(_react.Component);

exports.TooltipNew = TooltipNew;