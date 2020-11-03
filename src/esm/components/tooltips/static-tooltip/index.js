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
export var StaticTooltip = /*#__PURE__*/function (_Component) {
  _inherits(StaticTooltip, _Component);

  var _super = _createSuper(StaticTooltip);

  function StaticTooltip() {
    _classCallCheck(this, StaticTooltip);

    return _super.apply(this, arguments);
  }

  _createClass(StaticTooltip, [{
    key: "renderArrow",
    value: function renderArrow() {
      var style;

      if (this.props.arrowLeftPosition) {
        style = {
          left: this.props.arrowLeftPosition
        };
      }

      return /*#__PURE__*/React.createElement("span", {
        style: style,
        className: "k-StaticTooltip__arrow"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          arrowLeftPosition = _this$props.arrowLeftPosition,
          others = _objectWithoutProperties(_this$props, ["children", "className", "arrowLeftPosition"]);

      var staticTooltipClassName = classNames('k-StaticTooltip', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: staticTooltipClassName
      }, others), /*#__PURE__*/React.createElement("div", {
        className: "k-StaticTooltip__content"
      }, this.renderArrow(), children));
    }
  }]);

  return StaticTooltip;
}(Component);
StaticTooltip.defaultProps = {
  arrowLeftPosition: null
};