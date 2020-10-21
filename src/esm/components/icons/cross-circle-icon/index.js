import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { computeFromRatio } from '../../../helpers/utils/ratio';
import deprecated from 'prop-types-extra/lib/deprecated';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;
export var CrossCircleIcon = function CrossCircleIcon(_ref) {
  var color = _ref.color,
      bgColor = _ref.bgColor,
      circleColor = _ref.circleColor,
      crossColor = _ref.crossColor,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "bgColor", "circleColor", "crossColor", "width", "height", "title"]);

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
    fill: bgColor || circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: color || crossColor,
    d: "M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
  }));
};
CrossCircleIcon.prototype = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  crossColor: deprecated(PropTypes.string, '`crossColor` is deprecated. Please use `color` instead.'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
CrossCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1
};