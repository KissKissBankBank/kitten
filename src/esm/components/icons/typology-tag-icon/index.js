import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var TypologyTagIcon = function TypologyTagIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10.5 10.5",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M.6 7.8l2.1 2.1c.8.8 2 .8 2.8 0L10.4 5 10 .4 5.5 0 .6 4.9c-.8.8-.8 2.1 0 2.9zm7.3-5.3c.7.5.7 1.5.1 2.2-.6.6-1.6.7-2.2.1s-.7-1.6-.1-2.2 1.6-.7 2.2-.1z"
  }));
};
TypologyTagIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
TypologyTagIcon.defaultProps = {
  color: '#222',
  title: ''
};