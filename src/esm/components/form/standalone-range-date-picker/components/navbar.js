import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import { Button } from '../../../action/button';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../typography/text';
var StyledText = styled(Text).withConfig({
  displayName: "navbar__StyledText",
  componentId: "sc-s8n4n7-0"
})(["margin-top:0;margin-bottom:", ";"], pxToRem(10));
var StyledButton = styled.div.withConfig({
  displayName: "navbar__StyledButton",
  componentId: "sc-s8n4n7-1"
})(["position:absolute;display:flex;justify-content:space-between;left:0;right:0;"]);
var StyledArrowIcon = styled(Button).withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-s8n4n7-2"
})(["align-items:center;justify-content:center;display:flex;"]);
export var Navbar = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Navbar, _PureComponent);

  function Navbar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onNextClick = _this$props.onNextClick,
        onPreviousClick = _this$props.onPreviousClick,
        className = _this$props.className,
        iconColor = _this$props.iconColor,
        title = _this$props.title,
        labels = _this$props.labels,
        previousMonth = _this$props.previousMonth,
        nextMonth = _this$props.nextMonth,
        months = _this$props.months;
    var previousAriaLabel = months !== undefined && months.length > 0 ? (labels && labels.previousMonth) + ", " + months[previousMonth.getMonth()] + " " + previousMonth.getFullYear() : "" + (labels && labels.previousMonth);
    var nextAriaLabel = months !== undefined && months.length > 0 ? (labels && labels.nextMonth) + ", " + months[nextMonth.getMonth()] + " " + nextMonth.getFullYear() : "" + (labels && labels.nextMonth);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledText, {
      tag: "p",
      size: "small",
      weight: "regular"
    }, title), /*#__PURE__*/React.createElement(StyledButton, {
      className: className
    }, /*#__PURE__*/React.createElement(StyledArrowIcon, {
      "aria-label": previousAriaLabel,
      onClick: function onClick() {
        return onPreviousClick();
      },
      fit: "icon"
    }, /*#__PURE__*/React.createElement(ArrowIcon, {
      fill: iconColor,
      direction: "left",
      width: "8",
      height: "8"
    })), /*#__PURE__*/React.createElement(StyledArrowIcon, {
      "aria-label": nextAriaLabel,
      onClick: function onClick() {
        return onNextClick();
      },
      fit: "icon"
    }, /*#__PURE__*/React.createElement(ArrowIcon, {
      fill: iconColor,
      direction: "right",
      width: "8",
      height: "8"
    }))));
  };

  return Navbar;
}(PureComponent);