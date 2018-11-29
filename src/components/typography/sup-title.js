"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupTitle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var SupTitle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SupTitle, _Component);

  function SupTitle() {
    (0, _classCallCheck2.default)(this, SupTitle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SupTitle).apply(this, arguments));
  }

  (0, _createClass2.default)(SupTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          supTitleProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "tag"]);
      var supTitleClassName = (0, _classnames.default)('k-SupTitle', className);
      var Tag = tag;
      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: supTitleClassName
      }, supTitleProps));
    }
  }]);
  return SupTitle;
}(_react.Component);

exports.SupTitle = SupTitle;
SupTitle.defaultProps = {
  tag: 'div',
  children: 'Lorem ipsum'
};