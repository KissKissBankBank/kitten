import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "bgColor", "circleColor", "clockColor", "title", "className"];
import React from 'react';
import deprecated from 'prop-types-extra/lib/deprecated';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var ClockCircleIcon = function ClockCircleIcon(_ref) {
  var color = _ref.color,
      bgColor = _ref.bgColor,
      circleColor = _ref.circleColor,
      clockColor = _ref.clockColor,
      title = _ref.title,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    className: classNames('k-ColorSvg', className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    fill: clockColor || color,
    d: "M11 9h3v2H9V4h2v5z"
  }));
};
ClockCircleIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: ''
};
ClockCircleIcon.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  circleColor: deprecated(PropTypes.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  clockColor: deprecated(PropTypes.string, '`clockColor` is deprecated. Please use `color` instead.')
};