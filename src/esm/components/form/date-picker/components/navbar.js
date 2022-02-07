import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import { pxToRem } from '../../../../helpers/utils/typography';
var StyledArrowIcon = styled.div.withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-19zp3yg-0"
})(["width:", ";height:", ";cursor:pointer;position:absolute;top:-", ";display:flex;align-items:center;justify-content:center;transition:transform 0.3s ease-in-out;", " ", ""], pxToRem(70), pxToRem(70), pxToRem(2), function (_ref) {
  var left = _ref.left;
  return left && css(["left:-", ";&:hover{transform:translate(-", ");}"], pxToRem(2), pxToRem(8));
}, function (_ref2) {
  var right = _ref2.right;
  return right && css(["right:-", ";&:hover{transform:translate(", ");}"], pxToRem(2), pxToRem(8));
});
export var Navbar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Navbar, _Component);

  function Navbar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
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
  };

  return Navbar;
}(Component);