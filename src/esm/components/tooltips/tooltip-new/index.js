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
import { Marger } from '../../../components/layout/marger';
export var TooltipNew = /*#__PURE__*/function (_Component) {
  _inherits(TooltipNew, _Component);

  var _super = _createSuper(TooltipNew);

  function TooltipNew() {
    _classCallCheck(this, TooltipNew);

    return _super.apply(this, arguments);
  }

  _createClass(TooltipNew, [{
    key: "renderArrow",
    value: function renderArrow() {
      return /*#__PURE__*/React.createElement("span", {
        className: "k-TooltipNew__arrow"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          others = _objectWithoutProperties(_this$props, ["children", "className"]);

      var tooltipNewClassName = classNames('k-TooltipNew', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: tooltipNewClassName,
        role: "tooltip"
      }, others), /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "2"
      }, children, this.renderArrow()));
    }
  }]);

  return TooltipNew;
}(Component);