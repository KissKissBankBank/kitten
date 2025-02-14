import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { computeFromRatio } from '../../../../helpers/utils/ratio';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;
export const FlashCircleIcon = _ref => {
  let {
    bgColor,
    color,
    circleColor,
    flashColor,
    width,
    height,
    title,
    className,
    ...props
  } = _ref;
  const computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: computed.width,
    height: computed.height,
    className: classNames('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 10 6-6-1.25 6h3.25l-6 6 1.25-6z",
    fill: flashColor || color,
    fillRule: "evenodd"
  }));
};
FlashCircleIcon.prototype = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  flashColor: deprecated(PropTypes.string, '`flashColor` is deprecated. Please use `color` instead.'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
FlashCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1
};