import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["circleColor", "checkedColor", "color", "bgColor", "title", "width", "height", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { computeFromRatio } from '../../../../helpers/utils/ratio';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;
export var CheckedCircleIcon = function CheckedCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      checkedColor = _ref.checkedColor,
      color = _ref.color,
      bgColor = _ref.bgColor,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

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
    height: computed.height,
    className: classNames('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: checkedColor || color,
    d: "M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
  }));
};
CheckedCircleIcon.prototype = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Please use `bgColor` instead'),
  checkedColor: deprecated(PropTypes.string, '`checkedColor` is deprecated. Please use `color` instead.'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
CheckedCircleIcon.defaultProps = {
  bgColor: COLORS.background1,
  color: COLORS.font1
};
export var checkedCircleIconAsString = function checkedCircleIconAsString(_ref2) {
  var color = _ref2.color,
      bgColor = _ref2.bgColor,
      circleColor = _ref2.circleColor,
      checkedColor = _ref2.checkedColor;
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle fill=\"".concat(circleColor || bgColor, "\" cx=\"10\" cy=\"10\" r=\"10\" /><path fill=\"").concat(checkedColor || color, "\" d=\"M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z\"/></svg>");
};