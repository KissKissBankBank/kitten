import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { computeFromRatio } from '../../../helpers/utils/ratio';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;
export var CheckedCircleIcon = function CheckedCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      checkedColor = _ref.checkedColor,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["circleColor", "checkedColor", "title", "width", "height"]);

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
    fill: checkedColor,
    d: "M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
  }));
};
CheckedCircleIcon.prototype = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
CheckedCircleIcon.defaultProps = {
  circleColor: COLORS.background1,
  checkedColor: COLORS.font1
};
export var checkedCircleIconAsString = function checkedCircleIconAsString(_ref2) {
  var circleColor = _ref2.circleColor,
      checkedColor = _ref2.checkedColor;
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle fill=\"".concat(circleColor, "\" cx=\"10\" cy=\"10\" r=\"10\" /><path fill=\"").concat(checkedColor, "\" d=\"M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z\"/></svg>");
};