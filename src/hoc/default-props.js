"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var defaultProps = function defaultProps(WrappedComponent, props) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(defaultProps, _React$Component);

      function defaultProps() {
        (0, _classCallCheck2.default)(this, defaultProps);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(defaultProps).apply(this, arguments));
      }

      (0, _createClass2.default)(defaultProps, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, this.props));
        }
      }]);
      return defaultProps;
    }(_react.default.Component)
  );
}; // DEPRECATED: do not use default export.


exports.defaultProps = defaultProps;
var _default = defaultProps;
exports.default = _default;