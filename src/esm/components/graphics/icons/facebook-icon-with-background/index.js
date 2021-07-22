import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var FacebookIconWithBackground = function FacebookIconWithBackground(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 25",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M23.62 0H1.38A1.38 1.38 0 0 0 0 1.38v22.24A1.38 1.38 0 0 0 1.38 25h12v-9.65h-3.29v-3.8h3.25V8.77c0-3.23 2-5 4.85-5a26 26 0 0 1 2.93.23v3.32h-2c-1.57 0-1.87.74-1.87 1.83v2.42H21l-.49 3.78h-3.25V25h6.36A1.38 1.38 0 0 0 25 23.62V1.38A1.38 1.38 0 0 0 23.62 0z"
  }));
};
FacebookIconWithBackground.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
FacebookIconWithBackground.defaultProps = {
  color: '#222',
  title: ''
};