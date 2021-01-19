import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../../components/typography/text';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var circleSize = 50;
var StyledTimeline = styled.div.withConfig({
  displayName: "timeline__StyledTimeline",
  componentId: "q8hmtt-0"
})(["position:relative;@media (max-width:", "){margin-left:", ";}.k-Timeline__verticalLine{background-image:linear-gradient( ", " 50%,rgba(255,255,255,0) 0% );background-position:right;background-size:", " ", ";background-repeat:repeat-y;position:absolute;height:100%;top:0;left:", ";width:", ";}.k-Timeline__list{list-style-type:none;padding:0;margin:0;}.k-Timeline__listItem{display:flex;align-items:center;justify-content:space-between;}.k-Timeline__listItem__bullet{box-sizing:border-box;height:", ";width:", ";border:", " solid ", ";background-color:", ";border-radius:50%;display:flex;justify-content:center;align-items:center;margin-right:", ";margin-left:", ";line-height:0;flex:0 0 ", ";position:relative;", ";@media (max-width:", "){margin-right:", ";}}&.k-Timeline--thin .k-Timeline__listItem__bullet{margin-top:", ";margin-bottom:", ";@media (min-width:", ") and (max-width:", "){margin-top:", ";margin-bottom:", ";}}&.k-Timeline--large .k-Timeline__listItem__bullet{margin-top:", ";margin-bottom:", ";@media (min-width:", ") and (max-width:", "){margin-top:", ";margin-bottom:", ";}}.k-Timeline__listItem__content{margin:", " 0;flex-grow:1;align-items:center;}"], ScreenConfig.XS.max, pxToRem(20), COLORS.line1, pxToRem(2), pxToRem(8), pxToRem(-1), pxToRem(2), pxToRem(circleSize), pxToRem(circleSize), pxToRem(2), COLORS.line1, COLORS.background1, pxToRem(40), pxToRem(-circleSize / 2), pxToRem(circleSize), TYPOGRAPHY.fontStyles.bold, pxToRem(ScreenConfig.XS.max), pxToRem(20), pxToRem(40), pxToRem(40), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.max), pxToRem(20), pxToRem(20), pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(ScreenConfig.M.max), pxToRem(60), pxToRem(60), pxToRem(25));
export var Timeline = function Timeline(_ref) {
  var children = _ref.children,
      itemHeight = _ref.itemHeight,
      props = _objectWithoutProperties(_ref, ["children", "itemHeight"]);

  return /*#__PURE__*/React.createElement(StyledTimeline, _extends({
    className: classNames('k-Timeline', "k-Timeline--".concat(itemHeight))
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "k-Timeline__verticalLine"
  }), /*#__PURE__*/React.createElement("ol", {
    className: "k-Timeline__list"
  }, React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "k-Timeline__listItem"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "tiny",
      className: "k-Timeline__listItem__bullet",
      "aria-hidden": true
    }, ++index), /*#__PURE__*/React.createElement("div", {
      className: "k-Timeline__listItem__content"
    }, child));
  })));
};
Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  itemHeight: PropTypes.oneOf(['thin', 'large'])
};
Timeline.defaultProps = {
  itemHeight: 'large'
};