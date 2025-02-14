import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const ClockIcon = _ref => {
  let {
    className,
    color,
    bgColor,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11",
    width: "10",
    height: "10",
    className: classNames('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "5",
    fill: bgColor,
    stroke: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 5h1.5v1H5V2.5h1z",
    fill: color
  }));
};
ClockIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: ''
};
ClockIcon.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
};