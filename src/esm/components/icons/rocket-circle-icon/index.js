import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RocketIcon } from '../rocket-icon';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledRocketCircle = styled.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "paapmm-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:100%;background-color:", ";@media (min-width:", "){width:", ";height:", ";}"], function (_ref) {
  var circleWidthMobile = _ref.circleWidthMobile;
  return pxToRem(circleWidthMobile);
}, function (_ref2) {
  var circleWidthMobile = _ref2.circleWidthMobile;
  return pxToRem(circleWidthMobile);
}, function (_ref3) {
  var circleColor = _ref3.circleColor;
  return circleColor;
}, pxToRem(ScreenConfig.S.min), function (_ref4) {
  var circleWidth = _ref4.circleWidth;
  return pxToRem(circleWidth);
}, function (_ref5) {
  var circleWidth = _ref5.circleWidth;
  return pxToRem(circleWidth);
});
var StyledRocketIcon = styled(function (_ref6) {
  var rocketWidth = _ref6.rocketWidth,
      rocketHeight = _ref6.rocketHeight,
      rocketHeightMobile = _ref6.rocketHeightMobile,
      rocketWidthMobile = _ref6.rocketWidthMobile,
      others = _objectWithoutProperties(_ref6, ["rocketWidth", "rocketHeight", "rocketHeightMobile", "rocketWidthMobile"]);

  return /*#__PURE__*/React.createElement(RocketIcon, others);
}).withConfig({
  displayName: "rocket-circle-icon__StyledRocketIcon",
  componentId: "paapmm-1"
})(["padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}"], pxToRem(2), pxToRem(1), function (_ref7) {
  var rocketWidthMobile = _ref7.rocketWidthMobile;
  return pxToRem(rocketWidthMobile);
}, function (_ref8) {
  var rocketHeightMobile = _ref8.rocketHeightMobile;
  return pxToRem(rocketHeightMobile);
}, pxToRem(ScreenConfig.S.min), function (_ref9) {
  var rocketWidth = _ref9.rocketWidth;
  return pxToRem(rocketWidth);
}, function (_ref10) {
  var rocketHeight = _ref10.rocketHeight;
  return pxToRem(rocketHeight);
});
export var RocketCircleIcon = function RocketCircleIcon(_ref11) {
  var circleColor = _ref11.circleColor,
      circleWidth = _ref11.circleWidth,
      circleWidthMobile = _ref11.circleWidthMobile,
      rocketWidth = _ref11.rocketWidth,
      rocketWidthMobile = _ref11.rocketWidthMobile,
      rocketHeight = _ref11.rocketHeight,
      rocketHeightMobile = _ref11.rocketHeightMobile,
      rocketColor = _ref11.rocketColor,
      rocketTitle = _ref11.rocketTitle,
      others = _objectWithoutProperties(_ref11, ["circleColor", "circleWidth", "circleWidthMobile", "rocketWidth", "rocketWidthMobile", "rocketHeight", "rocketHeightMobile", "rocketColor", "rocketTitle"]);

  return /*#__PURE__*/React.createElement(StyledRocketCircle, _extends({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    circleColor: circleColor
  }, others), /*#__PURE__*/React.createElement(StyledRocketIcon, {
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile,
    color: rocketColor,
    title: rocketTitle
  }));
};
RocketCircleIcon.defaultProps = {
  circleWidth: 24,
  circleWidthMobile: 20,
  circleColor: COLORS.valid,
  rocketWidth: 12,
  rocketHeight: 15,
  rocketWidthMobile: 10,
  rocketHeightMobile: 12,
  rocketColor: COLORS.background1,
  rocketTitle: ''
};
RocketCircleIcon.propTypes = {
  circlewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circlewidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circleColor: PropTypes.string,
  rocketWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketWidthMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketHeightMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rocketTitle: PropTypes.string,
  rocketColor: PropTypes.string
};