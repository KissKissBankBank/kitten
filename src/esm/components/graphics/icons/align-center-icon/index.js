import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const AlignCenterIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v2H3V8h9zm2-4v2H0V4h14zm-1-4v2H2V0h11z",
    fill: color
  }));
};
AlignCenterIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
AlignCenterIcon.defaultProps = {
  color: '#222',
  title: ''
};