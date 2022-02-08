import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var PeopleIconNext = function PeopleIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "10",
    height: "12",
    fill: "none",
    viewBox: "0 0 10 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M5 6a3 3 0 100-6 3 3 0 000 6zm0 6c2.761 0 5-.714 5-.714C10 8.919 7.761 7 5 7s-5 1.919-5 4.286c0 0 2.239.714 5 .714z",
    clipRule: "evenodd"
  }));
};
PeopleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
PeopleIconNext.defaultProps = {
  color: '#222',
  title: null
};