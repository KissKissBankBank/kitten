import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var PhoneIcon = function PhoneIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 18",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09 4.047 12.202c2.49 3.084 6.305 5.63 8.86 5.792.06.004.12.006.177.006 2.39 0 3.002-3.158 2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263 0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807 0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088 3.823 0 3.355 0"
  }));
};
PhoneIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
PhoneIcon.defaultProps = {
  color: '#222',
  title: ''
};