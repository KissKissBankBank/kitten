import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const BubbleIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 1-1.595-.794l-2.067-2.735H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7.47a4 4 0 0 1-4 4h-2.338l-2.066 2.736c-.379.5-.97.794-1.596.794Zm-2.066-4.735a2.001 2.001 0 0 0-1.596-.795H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.47a2 2 0 0 1-2 2h-2.338c-.627 0-1.218.295-1.595.795L10 17l-2.066-2.735Z",
    fillRule: "evenodd",
    fill: color
  }));
};
BubbleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
BubbleIconNext.defaultProps = {
  color: '#222',
  title: null
};