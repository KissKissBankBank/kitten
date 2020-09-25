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
export var ButtonIcon = /*#__PURE__*/function (_Component) {
  _inherits(ButtonIcon, _Component);

  var _super = _createSuper(ButtonIcon);

  function ButtonIcon() {
    _classCallCheck(this, ButtonIcon);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonIcon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          modifier = _this$props.modifier,
          size = _this$props.size,
          withoutHover = _this$props.withoutHover,
          verticalArrow = _this$props.verticalArrow,
          rounded = _this$props.rounded,
          others = _objectWithoutProperties(_this$props, ["className", "tag", "modifier", "size", "withoutHover", "verticalArrow", "rounded"]);

      var buttonIconClassNames = classNames('k-ButtonIcon', className, (_classNames = {}, _defineProperty(_classNames, "k-ButtonIcon--".concat(modifier), modifier), _defineProperty(_classNames, "k-ButtonIcon--".concat(size), size), _defineProperty(_classNames, 'k-ButtonIcon--withoutHover', withoutHover), _defineProperty(_classNames, 'k-ButtonIcon--verticalArrow', verticalArrow), _defineProperty(_classNames, 'k-ButtonIcon--rounded', rounded), _classNames)); // Adds keyboard accessibility to `<a>`

      var tabindex = tag == 'a' && !this.props.href ? 0 : null;
      var Tag = tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: buttonIconClassNames,
        tabIndex: tabindex
      }, others));
    }
  }]);

  return ButtonIcon;
}(Component);
ButtonIcon.defaultProps = {
  tag: 'button',
  size: null,
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false
};