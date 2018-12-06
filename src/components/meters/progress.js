"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var valueMax = 100;

var Progress =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Progress, _Component);

  function Progress() {
    (0, _classCallCheck2.default)(this, Progress);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Progress).apply(this, arguments));
  }

  (0, _createClass2.default)(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          value = _this$props.value,
          rampProps = _this$props.rampProps,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "color", "value", "rampProps"]);
      var progressClassName = (0, _classnames.default)('k-Progress', className);
      var progressValue = value > valueMax ? valueMax : value;
      var style = {
        backgroundColor: "".concat(color),
        width: "".concat(progressValue, "%")
      };
      var rampClassName = (0, _classnames.default)('k-Progress__ramp', rampProps.className);
      return _react.default.createElement("div", (0, _extends2.default)({}, others, {
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "".concat(valueMax),
        "aria-valuenow": progressValue,
        className: progressClassName
      }), _react.default.createElement("div", (0, _extends2.default)({}, rampProps, {
        className: rampClassName
      }), _react.default.createElement("div", {
        className: "k-Progress__slider",
        style: style
      })));
    }
  }]);
  return Progress;
}(_react.Component);

exports.Progress = Progress;
Progress.defaultProps = {
  className: null,
  color: null,
  value: 50,
  rampProps: {}
};