import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const Cart = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 17,
    height: 16,
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6V4a4 4 0 1 1 8 0v2h4l-2 10h-12L.5 6h4zm2 0h4V4a2 2 0 0 0-4 0v2z"
  }));
};
Cart.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
Cart.defaultProps = {
  color: '#fff',
  title: ''
};