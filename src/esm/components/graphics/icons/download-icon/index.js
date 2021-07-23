import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var DownloadIcon = function DownloadIcon(_ref) {
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
    d: "M7 4V0H5v4L3.172 2.207l-1.415 1.38L6 8.207l4.243-4.62-1.415-1.38L7 4zM0 8h2v5H0V8zm10 0h2v5h-2V8zM0 11h12v2H0v-2z"
  }));
};
DownloadIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
DownloadIcon.defaultProps = {
  color: '#fff',
  title: ''
};