import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Status } from './status';
const StyledItem = styled.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-hcrd93-0"
})(["margin:", " 0 ", " 0;display:flex;flex-direction:column;padding-right:", ";&:first-of-type{margin-top:0;padding-top:0;}&:last-of-type{margin-bottom:0;padding-bottom:0;}& li:not(:last-of-type){margin:0 !important;&::after{display:none;}}.k-VerticalProgress__step--content{padding-left:", ";}"], pxToRem(10), pxToRem(10), pxToRem(10), pxToRem(50));
export const Step = _ref => {
  let {
    statusType,
    statusProps,
    progressTitle,
    children,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledItem, _extends({
    className: "k-VerticalProgress__item"
  }, other), /*#__PURE__*/React.createElement(Status, _extends({
    statusType: statusType,
    progressTitle: progressTitle
  }, statusProps)), /*#__PURE__*/React.createElement("div", {
    className: "k-VerticalProgress__step--content"
  }, children));
};