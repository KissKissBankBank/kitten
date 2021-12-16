import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var EnvelopeIcon = function EnvelopeIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "17",
    height: "14",
    viewBox: "0 0 17 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M14.115 0h-11.2c-.637 0-1.247.255-1.697.71a2.435 2.435 0 0 0-.703 1.713v9.154c0 .643.253 1.259.703 1.713.45.455 1.06.71 1.697.71h11.2a2.382 2.382 0 0 0 1.697-.71 2.425 2.425 0 0 0 .703-1.713V2.423A2.443 2.443 0 0 0 15.812.71 2.399 2.399 0 0 0 14.115 0Zm-11.2 1.615h11.2c.212 0 .415.085.565.237.15.151.235.357.235.571v.967L9.984 6.793a2.512 2.512 0 0 1-2.952 0L2.115 3.39v-.967c0-.214.084-.42.234-.571a.796.796 0 0 1 .566-.237Zm11.2 10.77h-11.2a.796.796 0 0 1-.566-.237.811.811 0 0 1-.234-.571v-6.23l4 2.762a4.101 4.101 0 0 0 4.786 0l4.014-2.762v6.23c0 .214-.085.42-.235.571a.796.796 0 0 1-.565.237Z",
    fill: color
  }));
};
EnvelopeIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
EnvelopeIcon.defaultProps = {
  color: '#222',
  title: ''
};