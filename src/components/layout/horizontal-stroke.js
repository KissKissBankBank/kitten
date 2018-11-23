"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var HorizontalStroke =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HorizontalStroke, _Component);

  function HorizontalStroke() {
    (0, _classCallCheck2.default)(this, HorizontalStroke);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HorizontalStroke).apply(this, arguments));
  }

  (0, _createClass2.default)(HorizontalStroke, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "size"]);
      var horizontalStrokeClassName = (0, _classnames.default)('k-HorizontalStroke', {
        'k-HorizontalStroke--tiny': size == 'tiny',
        'k-HorizontalStroke--default': size == 'default',
        'k-HorizontalStroke--big': size == 'big',
        'k-HorizontalStroke--huge': size == 'huge'
      }, className);
      return _react.default.createElement("span", (0, _extends2.default)({
        className: horizontalStrokeClassName
      }, others));
    }
  }]);
  return HorizontalStroke;
}(_react.Component);

exports.HorizontalStroke = HorizontalStroke;
HorizontalStroke.propTypes = {
  size: _propTypes.default.oneOf(['tiny', 'default', 'big', 'huge'])
};
HorizontalStroke.defaultProps = {
  size: 'default'
};