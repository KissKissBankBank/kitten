import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
export var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          size = _this$props.size,
          icon = _this$props.icon,
          readonly = _this$props.readonly,
          iconOnRight = _this$props.iconOnRight,
          iconWithMinWidth = _this$props.iconWithMinWidth,
          others = _objectWithoutProperties(_this$props, ["className", "tag", "modifier", "size", "icon", "readonly", "iconOnRight", "iconWithMinWidth"]);

      var buttonClassNames = classNames('k-Button', (_classNames = {}, _defineProperty(_classNames, "k-Button--".concat(modifier), modifier), _defineProperty(_classNames, "k-Button--".concat(size), size), _defineProperty(_classNames, 'k-Button--icon', icon), _defineProperty(_classNames, 'is-readonly', readonly), _defineProperty(_classNames, 'k-Button--iconRight', iconOnRight), _defineProperty(_classNames, 'k-Button--iconWithMinWidth', iconWithMinWidth), _defineProperty(_classNames, 'k-Button--icon--tiny', size == 'tiny' && icon), _defineProperty(_classNames, 'k-Button--iconRight--tiny', size == 'tiny' && iconOnRight), _classNames), className); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: buttonClassNames,
        tabIndex: tabindex
      }, others));
    }
  }]);

  return Button;
}(Component);
Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  icon: false,
  readonly: false,
  iconOnRight: false,
  iconWithMinWidth: false
};