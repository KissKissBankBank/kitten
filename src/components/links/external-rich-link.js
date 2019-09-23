"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ExternalRichLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ExternalRichLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ExternalRichLink, _React$Component);

  function ExternalRichLink(props) {
    (0, _classCallCheck2.default)(this, ExternalRichLink);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExternalRichLink).call(this, props));
  }

  (0, _createClass2.default)(ExternalRichLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
      var linkClassName = (0, _classnames.default)('k-ExternalRichLink', className);
      return _react.default.createElement("a", (0, _extends2.default)({
        className: linkClassName
      }, rest), _react.default.createElement("div", {
        className: "k-ExternalRichLink__element"
      }, this.props.children), _react.default.createElement("div", {
        className: (0, _classnames.default)('k-ExternalRichLink__element', 'k-ExternalRichLink__element--animate')
      }, _react.default.createElement("span", {
        className: (0, _classnames.default)('k-ButtonIcon', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--withoutHover', 'k-ButtonIcon--tiny', 'k-ButtonIcon--verticalArrow')
      }, _react.default.createElement("svg", {
        className: "k-ButtonIcon__svg",
        viewBox: "0 0 10 10",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("path", {
        d: "M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"
      }), _react.default.createElement("path", {
        d: "M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"
      })))));
    }
  }]);
  return ExternalRichLink;
}(_react.default.Component);

exports.ExternalRichLink = ExternalRichLink;
ExternalRichLink.defaultProps = {
  href: '#',
  children: 'I am a rich link!'
}; // DEPRECATED: do not use default export.

var _default = ExternalRichLink;
exports.default = _default;