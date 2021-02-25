import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledArrowIcon = styled.div.withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-9n4jek-0"
})(["width:", ";height:", ";cursor:pointer;position:absolute;top:-", ";display:flex;align-items:center;justify-content:center;transition:transform 0.3s ease-in-out;", " ", ""], pxToRem(70), pxToRem(70), pxToRem(2), function (_ref) {
  var left = _ref.left;
  return left && css(["left:-", ";&:hover{transform:translate(-", ");}"], pxToRem(2), pxToRem(8));
}, function (_ref2) {
  var right = _ref2.right;
  return right && css(["right:-", ";&:hover{transform:translate(", ");}"], pxToRem(2), pxToRem(8));
});
export var Navbar = /*#__PURE__*/function (_Component) {
  _inherits(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _super.apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPreviousClick = _this$props.onPreviousClick,
          onNextClick = _this$props.onNextClick,
          className = _this$props.className,
          iconColor = _this$props.iconColor,
          labels = _this$props.labels;
      return /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement(StyledArrowIcon, {
        "aria-label": labels.previoustMonth,
        onClick: function onClick() {
          return onPreviousClick();
        },
        left: true
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        color: iconColor,
        direction: "left"
      })), /*#__PURE__*/React.createElement(StyledArrowIcon, {
        "aria-label": labels.nextMonth,
        onClick: function onClick() {
          return onNextClick();
        },
        right: true
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        color: iconColor
      })));
    }
  }]);

  return Navbar;
}(Component);