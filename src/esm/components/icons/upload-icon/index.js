import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var UploadIcon = function UploadIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M7 4.207v4H5v-4L3.172 6 1.757 4.62 6 0 10.243 4.62 8.828 6 7 4.207zM0 8h2v5H0zM10 8h2v5h-2zM0 11h12v2H0z"
  }));
};
UploadIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
UploadIcon.defaultProps = {
  color: '#fff',
  title: ''
};