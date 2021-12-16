import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var WarningIcon = function WarningIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "2",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M1.82 6.86H.168V0H1.82v6.86zM0 8.96c0-.28.098-.518.294-.714a.972.972 0 0 1 .714-.294c.28 0 .518.098.714.294a.972.972 0 0 1 .294.714c0 .27-.098.504-.294.7a.972.972 0 0 1-.714.294.972.972 0 0 1-.714-.294.956.956 0 0 1-.294-.7z",
    fill: color,
    fillRule: "evenodd"
  }));
};
WarningIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
WarningIcon.defaultProps = {
  color: '#fff',
  title: ''
};