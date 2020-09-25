import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var CameraIcon = function CameraIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "20",
    height: "16",
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M13 0l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3l2-3h6zm-3 5.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM16.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 1H8L7 3h6l-1-2z",
    fillRule: "evenodd"
  }));
};
CameraIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
CameraIcon.defaultProps = {
  color: '#222',
  title: 'Camera'
};