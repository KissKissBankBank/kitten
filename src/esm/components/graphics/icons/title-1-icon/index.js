import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var Title1Icon = function Title1Icon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M9.008 0v2.56h-3.04v8.64H3.04V2.56H0V0h9.008zm3.442 4.2v5.4h1.53v1.6H9V9.6h1.62V6.24l-.122.08c-.17.102-.369.184-.598.245a3.469 3.469 0 01-.9.115V5.16l.21-.016c.277-.031.544-.104.8-.219a1.47 1.47 0 00.73-.725h1.71z",
    fill: color
  }));
};
Title1Icon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
Title1Icon.defaultProps = {
  color: '#222',
  title: ''
};