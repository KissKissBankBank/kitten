import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { computeFromRatio } from '../../../helpers/utils/ratio';
var DEFAULT_WIDTH = 14;
var DEFAULT_HEIGHT = 18;
export var LockIcon = function LockIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["color", "title", "width", "height"]);

  var computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 18",
    width: computed.width,
    height: computed.height,
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M5,6 L9,6 L9,4 C9,2.8954305 8.1045695,2 7,2 C5.8954305,2 5,2.8954305 5,4 L5,6 Z M11,6 L14,6 L14,18 L0,18 L0,6 L3,6 L3,4 C3,1.790861 4.790861,0 7,0 C9.209139,0 11,1.790861 11,4 L11,6 Z M6.5,11.9146471 L6.5,14.5 C6.5,14.7761424 6.72385763,15 7,15 C7.27614237,15 7.5,14.7761424 7.5,14.5 L7.5,11.9146471 C8.08259619,11.7087289 8.5,11.1531094 8.5,10.5 C8.5,9.67157288 7.82842712,9 7,9 C6.17157288,9 5.5,9.67157288 5.5,10.5 C5.5,11.1531094 5.91740381,11.7087289 6.5,11.9146471 Z"
  }));
};
LockIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
LockIcon.defaultProps = {
  color: COLORS.background1
};