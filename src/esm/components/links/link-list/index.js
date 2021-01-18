import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export var LinkList = /*#__PURE__*/function (_Component) {
  _inherits(LinkList, _Component);

  var _super = _createSuper(LinkList);

  function LinkList() {
    var _this;

    _classCallCheck(this, LinkList);

    _this = _super.call(this);
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LinkList, [{
    key: "renderItems",
    value: function renderItems() {
      return this.props.items.map(this.renderItem);
    }
  }, {
    key: "renderItem",
    value: function renderItem(element) {
      var key = element.key,
          item = element.item,
          href = element.href,
          active = element.active,
          weight = element.weight,
          className = element.className,
          others = _objectWithoutProperties(element, ["key", "item", "href", "active", "weight", "className"]);

      var _this$props = this.props,
          color = _this$props.color,
          lineHeight = _this$props.lineHeight,
          itemMargin = _this$props.itemMargin;
      var linkListClassName = classNames('k-LinkList__link', className, {
        'is-active': active,
        'k-LinkList__link--light': color == 'light',
        'k-LinkList__link--dark': color == 'dark',
        'k-LinkList__link--normalLineHeight': lineHeight == 'normal',
        'k-LinkList__link--regularWeight': this.props.weight == 'regular' && !weight,
        'k-LinkList__link--lightWeight': this.props.weight == 'light' && !weight,
        'k-LinkList__item--regularWeight': weight == 'regular',
        'k-LinkList__item--lightWeight': weight == 'light'
      });
      var linkListItemClassName = classNames('k-LinkList__item', {
        'k-LinkList__item--doubleMargin': itemMargin == 'double',
        'k-LinkList__item--tripleMargin': itemMargin == 'triple'
      });
      return /*#__PURE__*/React.createElement("li", {
        className: linkListItemClassName,
        key: key
      }, /*#__PURE__*/React.createElement("a", _extends({}, others, {
        href: href,
        className: linkListClassName
      }), item));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          margin = _this$props2.margin,
          items = _this$props2.items,
          lineHeight = _this$props2.lineHeight,
          itemMargin = _this$props2.itemMargin,
          others = _objectWithoutProperties(_this$props2, ["className", "margin", "items", "lineHeight", "itemMargin"]);

      var listClassName = classNames('k-LinkList', className, {
        'k-LinkList--withoutMargin': !margin
      });
      return /*#__PURE__*/React.createElement("ul", _extends({}, others, {
        className: listClassName
      }), this.renderItems());
    }
  }]);

  return LinkList;
}(Component);
LinkList.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double', 'triple']),
  weight: PropTypes.oneOf(['regular', 'light'])
};
LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [],
  // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular'
};