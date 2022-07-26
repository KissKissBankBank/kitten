import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const HourglassIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M6.5002-.0003v3.107l-2.263 2.643 2.263 2.644v3.106h-6.5v-3.106l2.263-2.644-2.263-2.643v-3.107h6.5zm-3.25 6.904l-1.75 2.044v1.052l.422-.001.974-.974a.5011.5011 0 01.638-.058l.069.058.974.974.423.001v-1.051l-1.75-2.045zm1.75-5.404h-3.5v1.052l.676.789c.01-.001.02-.001.031-.001h2.053l.061.004.679-.793v-1.051z",
    fill: color
  }));
};
HourglassIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
HourglassIcon.defaultProps = {
  color: '#222',
  title: ''
};