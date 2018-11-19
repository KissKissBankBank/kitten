"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderItem = exports.HeaderItems = exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fixed = _this$props.fixed,
          other = _objectWithoutProperties(_this$props, ["className", "children", "fixed"]);

      var headerClassName = (0, _classnames.default)('k-Header', {
        'is-fixed': fixed
      }, className);
      return _react.default.createElement("header", _extends({
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
  _inherits(HeaderItems, _React$Component2);

  function HeaderItems() {
    _classCallCheck(this, HeaderItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderItems).apply(this, arguments));
  }

  _createClass(HeaderItems, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          fixedSize = _this$props2.fixedSize,
          other = _objectWithoutProperties(_this$props2, ["className", "fixedSize"]);

      var itemsClassName = (0, _classnames.default)('k-Header__items', {
        'k-Header__items--fixedSize': fixedSize
      }, className);
      return _react.default.createElement("div", _extends({
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
  _inherits(HeaderItem, _React$Component3);

  function HeaderItem() {
    _classCallCheck(this, HeaderItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderItem).apply(this, arguments));
  }

  _createClass(HeaderItem, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          fixedSize = _this$props3.fixedSize,
          centered = _this$props3.centered,
          tag = _this$props3.tag,
          other = _objectWithoutProperties(_this$props3, ["className", "fixedSize", "centered", "tag"]);

      var Tag = tag;
      var itemClassName = (0, _classnames.default)('k-Header__item', {
        'k-Header__item--fixedSize': fixedSize,
        'k-Header__item--centered': centered
      }, className);
      return _react.default.createElement(Tag, _extends({
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