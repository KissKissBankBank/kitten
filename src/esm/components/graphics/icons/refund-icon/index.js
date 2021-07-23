import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var RefundIcon = function RefundIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M7 11.774h.868v.308c0 .14 0 .21.014.35H7v1.708h1.19c.616 1.89 2.044 2.982 4.046 2.982 1.246 0 2.45-.392 3.346-1.33l-1.372-1.484c-.504.588-1.022.91-1.96.91-.77 0-1.554-.392-1.834-1.078h2.646v-1.708H9.94c-.014-.126-.014-.196-.014-.35 0-.126 0-.182.014-.308h3.122v-1.708h-2.66c.336-.756 1.092-1.162 1.834-1.162.84 0 1.372.308 1.834.966l1.372-1.428C14.854 7.644 13.748 7 12.25 7c-2.03 0-3.584 1.232-4.074 3.066H7v1.708z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 0C8.168 0 4.568 1.82 2.323 4.916V3H0v5.903h6V6.581H3.987c3.02-4.413 9.02-5.575 13.432-2.555 4.413 3.02 5.575 9.02 2.555 13.432-3.02 4.413-9.02 5.574-13.432 2.555-2.632-1.78-4.22-4.8-4.22-8.013v-.387H0V12c0 6.62 5.38 12 12 12s12-5.38 12-12S18.62 0 12 0z",
    fill: color
  }));
};
RefundIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
RefundIcon.defaultProps = {
  color: '#949494',
  title: ''
};