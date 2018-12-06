"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GrabberIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var GrabberIcon =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(GrabberIcon, _React$Component);

  function GrabberIcon() {
    (0, _classCallCheck2.default)(this, GrabberIcon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GrabberIcon).apply(this, arguments));
  }

  (0, _createClass2.default)(GrabberIcon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var element = _reactDom.default.findDOMNode(this);

      element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", (0, _extends2.default)({
        viewBox: "0 0 100 100",
        width: "32",
        height: "32"
      }, this.props), _react.default.createElement("title", null, "Grabber"), _react.default.createElement("path", {
        d: "M0 0 v100 h20 v-100 z"
      }), _react.default.createElement("path", {
        d: "M40 0 v100 h20 v-100 z"
      }), _react.default.createElement("path", {
        d: "M80 0 v100 h20 v-100 z"
      }));
    }
  }]);
  return GrabberIcon;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.GrabberIcon = GrabberIcon;
var _default = GrabberIcon;
exports.default = _default;