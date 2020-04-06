"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADER_HEIGHT = exports.HeaderItem = exports.HeaderItems = exports.Header = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Header = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    (0, _classCallCheck2.default)(this, Header);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fixed = _this$props.fixed,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "fixed"]);
      var headerClassName = (0, _classnames.default)('k-Header', {
        'is-fixed': fixed
      }, className);
      return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({
        className: headerClassName,
        role: "banner"
      }, other), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Header__container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Header__row"
      }, children)));
    }
  }]);
  return Header;
}(_react.default.Component);

exports.Header = Header;

var HeaderItems = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(HeaderItems, _React$Component2);

  var _super2 = _createSuper(HeaderItems);

  function HeaderItems() {
    (0, _classCallCheck2.default)(this, HeaderItems);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(HeaderItems, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          fixedSize = _this$props2.fixedSize,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "fixedSize"]);
      var itemsClassName = (0, _classnames.default)('k-Header__items', {
        'k-Header__items--fixedSize': fixedSize
      }, className);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: itemsClassName
      }, other));
    }
  }]);
  return HeaderItems;
}(_react.default.Component);

exports.HeaderItems = HeaderItems;

var HeaderItem = /*#__PURE__*/function (_React$Component3) {
  (0, _inherits2.default)(HeaderItem, _React$Component3);

  var _super3 = _createSuper(HeaderItem);

  function HeaderItem() {
    (0, _classCallCheck2.default)(this, HeaderItem);
    return _super3.apply(this, arguments);
  }

  (0, _createClass2.default)(HeaderItem, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          fixedSize = _this$props3.fixedSize,
          centered = _this$props3.centered,
          tag = _this$props3.tag,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["className", "fixedSize", "centered", "tag"]);
      var Tag = tag;
      var itemClassName = (0, _classnames.default)('k-Header__item', {
        'k-Header__item--fixedSize': fixedSize,
        'k-Header__item--centered': centered
      }, className);
      return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
        className: itemClassName
      }, other));
    }
  }]);
  return HeaderItem;
}(_react.default.Component);

exports.HeaderItem = HeaderItem;
var HEADER_HEIGHT = 65;
exports.HEADER_HEIGHT = HEADER_HEIGHT;
Header.defaultProps = {
  fixed: false
};
HeaderItems.defaultProps = {
  fixedSize: false
};
HeaderItem.defaultProps = {
  tag: 'div',
  // 'div', 'p', 'nav', …
  fixedSize: false,
  centered: false
};