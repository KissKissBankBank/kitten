import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
export var TabBar = /*#__PURE__*/function (_Component) {
  _inherits(TabBar, _Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _super.apply(this, arguments);
  }

  _createClass(TabBar, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var items = this.props.items;
      return items.map(function (item, key) {
        return _this.renderItem(item, key);
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, key) {
      var className = item.className,
          selected = item.selected,
          text = item.text,
          linkProps = _objectWithoutProperties(item, ["className", "selected", "text"]);

      var itemClassName = classNames('k-TabBar__item', className, {
        'is-selected': selected
      });
      return /*#__PURE__*/React.createElement("li", {
        key: key
      }, /*#__PURE__*/React.createElement("a", _extends({
        className: itemClassName
      }, linkProps), /*#__PURE__*/React.createElement(Markdown, {
        softBreak: "br",
        source: text
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: this.props.id,
        className: classNames('k-TabBar', this.props.className)
      }, /*#__PURE__*/React.createElement("nav", {
        className: classNames('k-TabBar__nav', this.props.navClassName)
      }, /*#__PURE__*/React.createElement("ul", {
        className: classNames('k-TabBar__list', this.props.listClassName)
      }, this.renderItems())));
    }
  }]);

  return TabBar;
}(Component);
TabBar.defaultProps = {
  id: null,
  className: null,
  navClassName: null,
  listClassName: null,
  items: []
};