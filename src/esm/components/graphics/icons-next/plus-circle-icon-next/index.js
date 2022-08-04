import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const PlusCircleIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M13.64 7.5a6.14 6.14 0 1 1-12.28 0 6.14 6.14 0 0 1 12.28 0Zm1.36 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM6.78 4.1a.68.68 0 1 1 1.37 0v2.68h2.76a.68.68 0 0 1 0 1.37H8.15v2.76a.68.68 0 0 1-1.37 0V8.15H4.1a.68.68 0 0 1 0-1.37h2.7V4.1Z"
  }));
};
PlusCircleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
PlusCircleIconNext.defaultProps = {
  color: '#222',
  title: null
};