"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderItem = exports.HeaderItems = exports.Header = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck2.default)(this, Header);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
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
      return _react.default.createElement("header", (0, _extends2.default)({
        className: headerClassName,
        role: "banner"
      }, other), _react.default.createElement("div", {
        className: "k-Header__container"
      }, _react.default.createElement("div", {
        className: "k-Header__row"
      }, children)));
    }
  }]);
  return Header;
}(_react.default.Component);

exports.Header = Header;

var HeaderItems =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(HeaderItems, _React$Component2);

  function HeaderItems() {
    (0, _classCallCheck2.default)(this, HeaderItems);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderItems).apply(this, arguments));
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
      return _react.default.createElement("div", (0, _extends2.default)({
        className: itemsClassName
      }, other));
    }
  }]);
  return HeaderItems;
}(_react.default.Component);

exports.HeaderItems = HeaderItems;

var HeaderItem =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(HeaderItem, _React$Component3);

  function HeaderItem() {
    (0, _classCallCheck2.default)(this, HeaderItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeaderItem).apply(this, arguments));
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
      return _react.default.createElement(Tag, (0, _extends2.default)({
        className: itemClassName
      }, other));
    }
  }]);
  return HeaderItem;
}(_react.default.Component);

exports.HeaderItem = HeaderItem;
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