import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "bgColor", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var HeartIconNext = function HeartIconNext(_ref) {
  var color = _ref.color,
      bgColor = _ref.bgColor,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 20 18",
    width: "20",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M10.222 5.142c.04-.209.028-.119.028-.119s.005-.033.009-.063c.053-.38.155-.752.305-1.106.229-.543.566-1.033.99-1.441.424-.408.926-.724 1.476-.929.55-.205 1.135-.294 1.72-.262 2.225.119 4.064 2.165 4.065 4.602.001.91-.193 1.809-.568 2.638a6.3116 6.3116 0 0 1-1.606 2.158.702.702 0 0 1-.069.053l-6.08 5.276a.7504.7504 0 0 1-.983.001l-6.15-5.33a6.3051 6.3051 0 0 1-1.605-2.157 6.369 6.369 0 0 1-.568-2.635c0-2.431 1.838-4.476 4.055-4.605.017-.001.034-.002.052-.002h.149c.015 0 .028.001.042.001v-.001c1.141 0 2.236.459 3.043 1.278.399.404.712.881.925 1.399.135.328.23.673.283 1.027.007.045.015.087.015.087l.028.13c.029.266.393.266.444 0Z",
    fill: bgColor
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.81.009a5.3746 5.3746 0 0 0-2.19.336c-.702.263-1.341.669-1.878 1.191A5.633 5.633 0 0 0 10 2.41a5.601 5.601 0 0 0-.742-.877A5.4322 5.4322 0 0 0 7.38.343 5.3934 5.3934 0 0 0 5.19.008C2.281.172 0 2.724 0 5.828a7.6115 7.6115 0 0 0 .673 3.145 7.515 7.515 0 0 0 1.908 2.573l6.106 5.312c.753.655 1.873.655 2.626 0l6.106-5.312a7.515 7.515 0 0 0 1.908-2.573c.446-.988.675-2.061.673-3.145C20 2.724 17.719.172 14.81.009Zm1.338 10.039L10 15.383l-6.148-5.329a5.5404 5.5404 0 0 1-1.415-1.9 5.622 5.622 0 0 1-.501-2.326c0-2.025 1.506-3.752 3.354-3.857h.194c.941 0 1.844.379 2.509 1.054.33.335.589.73.766 1.159.112.271.19.557.234.851.026.176.039.19.039.19.128 1.155 1.808 1.155 1.936 0 0 0 .011.005.034-.162.044-.315.129-.623.253-.917.19-.449.469-.855.82-1.193.349-.336.763-.597 1.217-.766.453-.169.936-.242 1.418-.216 1.851.098 3.355 1.826 3.355 3.854.001.802-.17 1.596-.501 2.328-.33.728-.812 1.377-1.415 1.901v-.006h-.001Z",
    fill: color,
    fillRule: "nonzero"
  }));
};
HeartIconNext.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string
};
HeartIconNext.defaultProps = {
  color: '#222',
  bgColor: 'transparent',
  title: null
};