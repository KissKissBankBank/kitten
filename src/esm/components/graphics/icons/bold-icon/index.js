import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var BoldIcon = function BoldIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "10",
    height: "12",
    viewBox: "0 0 10 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M5.488 11.2c2.336 0 3.872-1.216 3.872-3.184 0-1.008-.464-1.984-1.552-2.656.912-.656 1.28-1.536 1.28-2.4C9.088.912 7.504 0 5.216 0H0v11.2h5.488zm-.72-6.928H2.912V2.56h1.856c.96 0 1.392.208 1.392.848 0 .608-.432.864-1.392.864zm.176 4.368H2.912V6.688h2.032c.784 0 1.488.208 1.488.96 0 .8-.704.992-1.488.992z",
    fill: color
  }));
};
BoldIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
BoldIcon.defaultProps = {
  color: '#222',
  title: ''
};