import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RocketIcon } from '../rocket-icon';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledRocketCircle = styled.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "paapmm-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:100%;background-color:", ";@media (min-width:", "){width:", ";height:", ";}.k-RocketCircleIcon__rocketIcon{padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}"], function (_ref) {
  var circleWidthMobile = _ref.circleWidthMobile;
  return pxToRem(circleWidthMobile);
}, function (_ref2) {
  var circleWidthMobile = _ref2.circleWidthMobile;
  return pxToRem(circleWidthMobile);
}, function (_ref3) {
  var bgColor = _ref3.bgColor;
  return bgColor;
}, pxToRem(ScreenConfig.S.min), function (_ref4) {
  var circleWidth = _ref4.circleWidth;
  return pxToRem(circleWidth);
}, function (_ref5) {
  var circleWidth = _ref5.circleWidth;
  return pxToRem(circleWidth);
}, pxToRem(2), pxToRem(1), function (_ref6) {
  var rocketWidthMobile = _ref6.rocketWidthMobile;
  return pxToRem(rocketWidthMobile);
}, function (_ref7) {
  var rocketHeightMobile = _ref7.rocketHeightMobile;
  return pxToRem(rocketHeightMobile);
}, pxToRem(ScreenConfig.S.min), function (_ref8) {
  var rocketWidth = _ref8.rocketWidth;
  return pxToRem(rocketWidth);
}, function (_ref9) {
  var rocketHeight = _ref9.rocketHeight;
  return pxToRem(rocketHeight);
});
export var RocketCircleIcon = function RocketCircleIcon(_ref10) {
  var color = _ref10.color,
      bgColor = _ref10.bgColor,
      circleColor = _ref10.circleColor,
      circleWidth = _ref10.circleWidth,
      circleWidthMobile = _ref10.circleWidthMobile,
      rocketWidth = _ref10.rocketWidth,
      rocketWidthMobile = _ref10.rocketWidthMobile,
      rocketHeight = _ref10.rocketHeight,
      rocketHeightMobile = _ref10.rocketHeightMobile,
      rocketColor = _ref10.rocketColor,
      rocketTitle = _ref10.rocketTitle,
      others = _objectWithoutProperties(_ref10, ["color", "bgColor", "circleColor", "circleWidth", "circleWidthMobile", "rocketWidth", "rocketWidthMobile", "rocketHeight", "rocketHeightMobile", "rocketColor", "rocketTitle"]);

  return /*#__PURE__*/React.createElement(StyledRocketCircle, _extends({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    bgColor: circleColor || bgColor,
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile
  }, others), /*#__PURE__*/React.createElement(RocketIcon, {
    color: color,
    title: rocketTitle,
    className: "k-RocketCircleIcon__rocketIcon"
  }));
};
RocketCircleIcon.defaultProps = {
  bgColor: COLORS.valid,
  circleWidth: 24,
  circleWidthMobile: 20,
  color: COLORS.background1,
  rocketHeight: 15,
  rocketHeightMobile: 12,
  rocketTitle: '',
  rocketWidth: 12,
  rocketWidthMobile: 10
};
RocketCircleIcon.propTypes = {
  circlewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circlewidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  bgColor: PropTypes.string,
  rocketWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketWidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeightMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketTitle: PropTypes.string,
  rocketColor: deprecated(PropTypes.string, '`rocketColor` is deprecated. Please use `color` instead.'),
  color: PropTypes.string
};