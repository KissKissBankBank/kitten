import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../../components/typography/text';
import { Paragraph as SideParagraph } from '../../../../components/typography/paragraph/next';
import { ScreenConfig } from '../../../../constants/screen-config';
import COLORS from '../../../../constants/colors-config';
var StyledSideCard = styled.div.withConfig({
  displayName: "side-card__StyledSideCard",
  componentId: "s3armu-0"
})(["background-color:", ";width:100%;box-sizing:border-box;@media (min-width:", "){padding:", ";border-radius:", ";margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__title{margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__list{list-style:disc;margin-left:", ";padding:0;li{margin-bottom:", ";line-height:", ";font-size:", ";@media (min-width:", "){font-size:", ";}}}"], COLORS.primary5, pxToRem(ScreenConfig.L.min), pxToRem(30), pxToRem(8), pxToRem(15), pxToRem(20), pxToRem(15), pxToRem(10), pxToRem(22), stepToRem(-2), pxToRem(ScreenConfig.S.min), stepToRem(-1));

var Title = function Title(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    size: "tiny",
    tag: "h3",
    weight: "bold",
    color: "font1",
    lineHeight: "1.3",
    className: classNames('k-DashboardLayout__flow__sideCard__title', className)
  }, props));
};

var Paragraph = function Paragraph(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["className"]);

  return /*#__PURE__*/React.createElement(SideParagraph, _extends({
    modifier: "tertiary",
    margin: false,
    className: classNames('k-DashboardLayout__flow__sideCard__paragraph', className)
  }, props));
};

var List = function List(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ["className"]);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DashboardLayout__flow__sideCard__list', className)
  }, props));
};

export var SideCard = function SideCard(_ref4) {
  var className = _ref4.className,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return /*#__PURE__*/React.createElement(StyledSideCard, _extends({
    className: classNames('k-DashboardLayout__flow__sideCard', className)
  }, props));
};
SideCard.Title = Title;
SideCard.Paragraph = Paragraph;
SideCard.List = List;