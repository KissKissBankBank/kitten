import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var Title2Icon = function Title2Icon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "15",
    height: "12",
    viewBox: "0 0 15 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M9.008 0v2.56h-3.04v8.64H3.04V2.56H0V0h9.008zm2.652 4c1.36 0 2.43.77 2.43 2.2 0 .93-.51 1.64-1.66 2.23l-.42.22c-.52.26-.78.5-.84.87H14v1.6H9v-.63c0-1.39.52-2.56 1.88-3.25l.53-.27c.56-.29.84-.47.84-.8 0-.29-.26-.48-.63-.48-.55 0-1.08.29-1.45.89L9 5.41C9.5 4.57 10.54 4 11.66 4z",
    fill: color
  }));
};
Title2Icon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
Title2Icon.defaultProps = {
  color: '#222',
  title: ''
};