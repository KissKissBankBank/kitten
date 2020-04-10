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

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GrabberIcon = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(GrabberIcon, _React$Component);

  var _super = _createSuper(GrabberIcon);

  function GrabberIcon() {
    (0, _classCallCheck2.default)(this, GrabberIcon);
    return _super.apply(this, arguments);
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
      return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
        viewBox: "0 0 100 100",
        width: "32",
        height: "32"
      }, this.props), /*#__PURE__*/_react.default.createElement("title", null, "Grabber"), /*#__PURE__*/_react.default.createElement("path", {
        d: "M0 0 v100 h20 v-100 z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M40 0 v100 h20 v-100 z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        d: "M80 0 v100 h20 v-100 z"
      }));
    }
  }]);
  return GrabberIcon;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.GrabberIcon = GrabberIcon;
var _default = GrabberIcon;
exports.default = _default;