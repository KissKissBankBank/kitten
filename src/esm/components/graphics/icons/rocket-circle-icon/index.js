import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RocketIcon } from '../rocket-icon';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
const StyledRocketCircle = styled.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "sc-hjcjwz-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:var(border-radius-rounded);background-color:", ";@media (min-width:", "){width:", ";height:", ";}.k-RocketCircleIcon__rocketIcon{padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}"], _ref => {
  let {
    circleWidthMobile
  } = _ref;
  return pxToRem(circleWidthMobile);
}, _ref2 => {
  let {
    circleWidthMobile
  } = _ref2;
  return pxToRem(circleWidthMobile);
}, _ref3 => {
  let {
    bgColor
  } = _ref3;
  return bgColor;
}, pxToRem(ScreenConfig.S.min), _ref4 => {
  let {
    circleWidth
  } = _ref4;
  return pxToRem(circleWidth);
}, _ref5 => {
  let {
    circleWidth
  } = _ref5;
  return pxToRem(circleWidth);
}, pxToRem(2), pxToRem(1), _ref6 => {
  let {
    rocketWidthMobile
  } = _ref6;
  return pxToRem(rocketWidthMobile);
}, _ref7 => {
  let {
    rocketHeightMobile
  } = _ref7;
  return pxToRem(rocketHeightMobile);
}, pxToRem(ScreenConfig.S.min), _ref8 => {
  let {
    rocketWidth
  } = _ref8;
  return pxToRem(rocketWidth);
}, _ref9 => {
  let {
    rocketHeight
  } = _ref9;
  return pxToRem(rocketHeight);
});
export const RocketCircleIcon = _ref10 => {
  let {
    color,
    bgColor,
    circleColor,
    circleWidth,
    circleWidthMobile,
    rocketWidth,
    rocketWidthMobile,
    rocketHeight,
    rocketHeightMobile,
    rocketColor,
    rocketTitle,
    className,
    ...others
  } = _ref10;
  return /*#__PURE__*/React.createElement(StyledRocketCircle, _extends({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    bgColor: circleColor || bgColor,
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile,
    className: classNames('k-ColorSvg', className)
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