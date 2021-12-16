import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var CheckedShieldIconNext = function CheckedShieldIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M22.766 3.461 12.383 0 2 3.461v9.29a10.356 10.356 0 0 0 6.391 9.584L12.383 24l3.992-1.665a10.356 10.356 0 0 0 6.39-9.583V3.46Zm-2.307 9.29a8.053 8.053 0 0 1-4.969 7.454L12.383 21.5l-3.107-1.296a8.053 8.053 0 0 1-4.969-7.452v-7.63l8.076-2.692 8.076 2.692v7.63Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.968 10.014-1.63 1.63 3.46 3.461c.216.217.51.339.816.339a1.154 1.154 0 0 0 .823-.365l5.768-6.153-1.684-1.577-4.934 5.284-2.62-2.619Z",
    fill: color
  }));
};
CheckedShieldIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
CheckedShieldIconNext.defaultProps = {
  color: '#222',
  title: null
};