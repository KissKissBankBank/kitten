"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderLogo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HeaderLogo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(HeaderLogo, _React$Component);

  var _super = _createSuper(HeaderLogo);

  function HeaderLogo() {
    (0, _classCallCheck2.default)(this, HeaderLogo);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(HeaderLogo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          src = _this$props.src,
          alt = _this$props.alt,
          width = _this$props.width,
          height = _this$props.height,
          lightOnM = _this$props.lightOnM,
          lightOnXxs = _this$props.lightOnXxs,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "src", "alt", "width", "height", "lightOnM", "lightOnXxs"]);
      var imgProps = {
        src: src,
        alt: alt,
        width: width,
        height: height
      };
      var linkClassName = (0, _classnames.default)('k-Header__logo', className, {
        'k-Header__logo--lightOnM': lightOnM,
        'k-Header__logo--lightOnXxs': lightOnXxs
      });
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        className: linkClassName
      }, other), /*#__PURE__*/_react.default.createElement("img", imgProps));
    }
  }]);
  return HeaderLogo;
}(_react.default.Component);

exports.HeaderLogo = HeaderLogo;
HeaderLogo.defaultProps = {
  href: '#',
  src: '#',
  alt: null,
  width: null,
  height: null,
  lightOnM: false,
  lightOnXxs: false
};