import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../typography/text';
import { Paragraph as SideParagraph } from '../../../typography/paragraph/next';
import { ScreenConfig } from '../../../../constants/screen-config';
import COLORS from '../../../../constants/colors-config';
const StyledSideCard = styled.div.withConfig({
  displayName: "side-card__StyledSideCard",
  componentId: "sc-s3armu-0"
})(["background-color:", ";width:100%;box-sizing:border-box;@media (min-width:", "){padding:", ";border-radius:var(--border-radius-m);margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__title{margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__list{list-style:disc;margin-left:", ";padding:0;li{margin-bottom:", ";line-height:", ";font-size:", ";@media (min-width:", "){font-size:", ";}}}"], COLORS.primary5, pxToRem(ScreenConfig.L.min), pxToRem(30), pxToRem(15), pxToRem(20), pxToRem(15), pxToRem(10), pxToRem(22), stepToRem(-2), pxToRem(ScreenConfig.S.min), stepToRem(-1));

const Title = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({
    size: "small",
    tag: "h3",
    weight: "700",
    color: "font1",
    lineHeight: "1.3",
    className: classNames('k-DashboardLayout__flow__sideCard__title', className)
  }, props));
};

const Paragraph = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(SideParagraph, _extends({
    modifier: "tertiary",
    margin: false,
    className: classNames('k-DashboardLayout__flow__sideCard__paragraph', className)
  }, props));
};

const List = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DashboardLayout__flow__sideCard__list', className)
  }, props));
};

export const SideCard = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(StyledSideCard, _extends({
    className: classNames('k-DashboardLayout__flow__sideCard', className)
  }, props));
};
SideCard.Title = Title;
SideCard.Paragraph = Paragraph;
SideCard.List = List;