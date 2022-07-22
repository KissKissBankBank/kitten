import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const InstrumentTagIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 11",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("polygon", {
    points: "9,11 0,11 0,0 5,0 5,4 9,4"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "9,3 6,3 6,0"
  }));
};
InstrumentTagIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
InstrumentTagIcon.defaultProps = {
  color: '#333',
  title: ''
};