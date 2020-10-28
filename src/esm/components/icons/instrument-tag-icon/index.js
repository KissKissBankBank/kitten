import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var InstrumentTagIcon = function InstrumentTagIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

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