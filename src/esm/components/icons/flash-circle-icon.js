import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors-config';
import { computeFromRatio } from '../../helpers/utils/ratio';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;
export var FlashCircleIcon = function FlashCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      flashColor = _ref.flashColor,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["circleColor", "flashColor", "width", "height", "title"]);

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
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 10 6-6-1.25 6h3.25l-6 6 1.25-6z",
    fill: flashColor,
    fillRule: "evenodd"
  }));
};
FlashCircleIcon.prototype = {
  circleColor: PropTypes.string,
  flashColor: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
FlashCircleIcon.defaultProps = {
  circleColor: COLORS.background1,
  flashColor: COLORS.font1
};