import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
export var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fixed = _this$props.fixed,
          other = _objectWithoutProperties(_this$props, ["className", "children", "fixed"]);

      var headerClassName = classNames('k-Header', {
        'is-fixed': fixed
      }, className);
      return /*#__PURE__*/React.createElement("header", _extends({
        className: headerClassName,
        role: "banner"
      }, other), /*#__PURE__*/React.createElement("div", {
        className: "k-Header__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Header__row"
      }, children)));
    }
  }]);

  return Header;
}(React.Component);
export var HeaderItems = /*#__PURE__*/function (_React$Component2) {
  _inherits(HeaderItems, _React$Component2);

  var _super2 = _createSuper(HeaderItems);

  function HeaderItems() {
    _classCallCheck(this, HeaderItems);

    return _super2.apply(this, arguments);
  }

  _createClass(HeaderItems, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          fixedSize = _this$props2.fixedSize,
          other = _objectWithoutProperties(_this$props2, ["className", "fixedSize"]);

      var itemsClassName = classNames('k-Header__items', {
        'k-Header__items--fixedSize': fixedSize
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: itemsClassName
      }, other));
    }
  }]);

  return HeaderItems;
}(React.Component);
export var HeaderItem = /*#__PURE__*/function (_React$Component3) {
  _inherits(HeaderItem, _React$Component3);

  var _super3 = _createSuper(HeaderItem);

  function HeaderItem() {
    _classCallCheck(this, HeaderItem);

    return _super3.apply(this, arguments);
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
      var itemClassName = classNames('k-Header__item', {
        'k-Header__item--fixedSize': fixedSize,
        'k-Header__item--centered': centered
      }, className);
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: itemClassName
      }, other));
    }
  }]);

  return HeaderItem;
}(React.Component);
export var HEADER_HEIGHT = 65;
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