import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { computeFromRatio } from '../../../helpers/utils/ratio';
import deprecated from 'prop-types-extra/lib/deprecated';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;
export var WarningCircleIcon = function WarningCircleIcon(_ref) {
  var bgColor = _ref.bgColor,
      color = _ref.color,
      circleColor = _ref.circleColor,
      warningColor = _ref.warningColor,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["bgColor", "color", "circleColor", "warningColor", "width", "height", "title"]);

  var computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: computed.width,
    height: computed.height
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: warningColor || color,
    d: "M9.034 7.088l-.07-1.862h2.072l-.07 1.862-.294 4.284H9.328l-.294-4.284zm-.28 6.398c0-.373.12-.684.357-.93.24-.248.535-.372.89-.372s.65.124.89.37c.237.248.356.56.356.932 0 .364-.12.67-.357.917-.24.247-.535.37-.89.37s-.65-.123-.89-.37c-.237-.247-.356-.553-.356-.917z"
  }));
};
WarningCircleIcon.prototype = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Use `bgColor` instead.'),
  warningColor: deprecated(PropTypes.string, '`warningColor` is deprecated. Use `color` instead.'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
WarningCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1
};