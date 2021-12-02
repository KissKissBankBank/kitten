"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.defaultProps = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var defaultProps = function defaultProps(WrappedComponent, props) {
  return /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2.default)(defaultProps, _React$Component);

    function defaultProps() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = defaultProps.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, this.props));
    };

    return defaultProps;
  }(_react.default.Component);
}; // DEPRECATED: do not use default export.


exports.defaultProps = defaultProps;
var _default = defaultProps;
exports.default = _default;