import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var LinkIcon = function LinkIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M15.556 0l5.657 5.657-7.07 7.07-2.122-2.121-1.415 1.415 2.122 2.121-7.071 7.071L0 15.556l7.071-7.07 2.121 2.12 1.414-1.414-2.12-2.12L15.555 0zM7.071 11.313l-4.243 4.242 2.828 2.829L9.9 14.14l-.707-.706-1.414 1.414-1.414-1.414 1.414-1.415-.707-.707zm8.486-8.485L11.314 7.07l.707.707 1.414-1.413 1.414 1.414-1.413 1.414.707.707 4.242-4.243-2.828-2.828z",
    fill: color
  }));
};
LinkIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
LinkIcon.defaultProps = {
  color: '#222',
  title: ''
};