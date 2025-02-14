import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const StarIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M8.999 0l1.93 5.974c.028.09.112.15.206.15l6.274-.013-5.084 3.68a.216.216 0 0 0-.079.242L14.198 16l-5.072-3.7a.216.216 0 0 0-.255 0L3.801 16l1.953-5.967a.216.216 0 0 0-.079-.243L.591 6.111l6.274.012c.094 0 .178-.06.207-.15L8.999 0z"
  }));
};
StarIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
StarIcon.defaultProps = {
  color: '#222',
  title: ''
};