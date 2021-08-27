import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["statusType", "statusProps", "progressTitle", "children"];
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Status } from './status';
var StyledItem = styled.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-1iescn5-0"
})(["margin:", " 0 ", " 0;display:flex;flex-direction:column;padding-right:", ";&:first-of-type{margin-top:0;padding-top:0;}&:last-of-type{margin-bottom:0;padding-bottom:0;}li:not(:last-of-type){margin:0 !important;&::after{display:none;}}.k-VerticalProgress__step--content{padding-left:", ";@media (min-width:", "px){padding-left:", ";}}"], pxToRem(15), pxToRem(25), pxToRem(10), pxToRem(50), ScreenConfig.S.min, pxToRem(82));
export var Step = function Step(_ref) {
  var statusType = _ref.statusType,
      statusProps = _ref.statusProps,
      progressTitle = _ref.progressTitle,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledItem, _extends({
    className: "k-VerticalProgress__item"
  }, other), /*#__PURE__*/React.createElement(Status, _extends({
    statusType: statusType,
    progressTitle: progressTitle
  }, statusProps)), /*#__PURE__*/React.createElement("div", {
    className: "k-VerticalProgress__step--content"
  }, children));
};