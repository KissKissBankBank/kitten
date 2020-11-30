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
export var SupTitle = /*#__PURE__*/function (_Component) {
  _inherits(SupTitle, _Component);

  var _super = _createSuper(SupTitle);

  function SupTitle() {
    _classCallCheck(this, SupTitle);

    return _super.apply(this, arguments);
  }

  _createClass(SupTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          supTitleProps = _objectWithoutProperties(_this$props, ["className", "tag"]);

      var supTitleClassName = classNames('k-SupTitle', className);
      var Tag = tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: supTitleClassName
      }, supTitleProps));
    }
  }]);

  return SupTitle;
}(Component);
SupTitle.defaultProps = {
  tag: 'div',
  children: 'Lorem ipsum'
};