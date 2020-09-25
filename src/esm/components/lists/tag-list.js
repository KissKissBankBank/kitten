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

import React from 'react';
import classNames from 'classnames';
import { TypologyTagIcon } from '../../components/icons/typology-tag-icon';
export var TagList = /*#__PURE__*/function (_React$Component) {
  _inherits(TagList, _React$Component);

  var _super = _createSuper(TagList);

  function TagList(props) {
    var _this;

    _classCallCheck(this, TagList);

    _this = _super.call(this, props);
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TagList, [{
    key: "renderItem",
    value: function renderItem(element, index) {
      var TagIcon = this.props.icon;
      var key = element.key,
          item = element.item;
      var isFirstItem = index == 0;
      var isLastItem = index == this.props.items.length - 1;
      var itemClassName = classNames('k-TagList__item', {
        'k-TagList__item--first': isFirstItem
      }, {
        'k-TagList__item--last': isLastItem
      });
      var icon = isFirstItem && /*#__PURE__*/React.createElement(TagIcon, {
        className: "k-TagList__icon"
      });
      return /*#__PURE__*/React.createElement("li", {
        key: key,
        className: itemClassName
      }, icon, item);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.items) return null;

      var _this$props = this.props,
          className = _this$props.className,
          tiny = _this$props.tiny,
          icon = _this$props.icon,
          items = _this$props.items,
          others = _objectWithoutProperties(_this$props, ["className", "tiny", "icon", "items"]);

      var listClassName = classNames('k-TagList', {
        'k-TagList--tiny': tiny
      }, className);
      return /*#__PURE__*/React.createElement("ul", _extends({
        className: listClassName
      }, others), items.map(this.renderItem));
    }
  }]);

  return TagList;
}(React.Component);
TagList.defaultProps = {
  icon: TypologyTagIcon,
  className: null,
  tiny: false,
  items: null
};