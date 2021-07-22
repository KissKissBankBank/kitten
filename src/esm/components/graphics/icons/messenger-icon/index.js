import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var MessengerIcon = function MessengerIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 20 21",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M10 .938c-5.523 0-10 4.171-10 9.317 0 2.932 1.454 5.547 3.727 7.255v3.552l3.405-1.88c.908.253 1.871.39 2.868.39 5.523 0 10-4.172 10-9.317C20 5.109 15.523.938 10 .938zm.994 12.546l-2.547-2.732-4.969 2.732 5.466-5.838 2.609 2.733 4.907-2.733-5.466 5.838z"
  }));
};
MessengerIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
MessengerIcon.defaultProps = {
  color: '#fff',
  title: ''
};