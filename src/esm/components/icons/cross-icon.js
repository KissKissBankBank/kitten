import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors-config';
import { computeFromRatio } from '../../helpers/utils/ratio';
var DEFAULT_WIDTH = 8;
var DEFAULT_HEIGHT = 8;
export var CrossIcon = function CrossIcon(_ref) {
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
    viewBox: "0 0 8 8",
    width: computed.width,
    height: computed.height,
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M.464 6.12L6.12.465 7.537 1.88 1.88 7.535z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.88.464L7.535 6.12 6.12 7.537.465 1.88z"
  }));
};
CrossIcon.prototype = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
CrossIcon.defaultProps = {
  color: COLORS.font1
};