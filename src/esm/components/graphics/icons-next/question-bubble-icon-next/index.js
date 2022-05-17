import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var QuestionBubbleIconNext = function QuestionBubbleIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m10.82 24.71-.98-.4-1.01.3.85 2.88-.85-2.88h-.01l-.03.01-.12.04-.43.13a788.56 788.56 0 0 0-4.4 1.32 1015.56 1015.56 0 0 1 1.31-4.84l.13-.46.03-.12.01-.03v-.01l-2.89-.8 2.9.8.25-.94-.34-.91a12.97 12.97 0 0 1-.87-4.3 11.1 11.1 0 0 1 11.1-11.1A11.1 11.1 0 0 1 26.6 14.5a11.1 11.1 0 0 1-11.11 11.08c-1.66 0-3.28-.3-4.66-.87Zm-8.39-4.86s-1 3.64-1.95 7.22a2.02 2.02 0 0 0 2.55 2.43c3.22-1 6.65-2.01 6.65-2.01 1.77.73 3.8 1.1 5.8 1.1a14.1 14.1 0 1 0 0-28.17A14.1 14.1 0 0 0 1.37 14.5c0 1.72.42 3.66 1.06 5.35Zm12.48 1.97c-.76 0-1.35-.61-1.35-1.36 0-.76.59-1.37 1.35-1.37a1.37 1.37 0 1 1 0 2.73Zm4.65-9.85c0 2-1.4 3.5-3.5 3.92v1.67H13.8v-3.5h.63c1.47 0 2.86-.7 2.86-2.13 0-1.19-1-1.87-2.12-1.87-1.22 0-2.19.53-2.93 1.87l-1.45-1.59a5.22 5.22 0 0 1 4.36-2.37c2.54 0 4.4 1.63 4.4 4Z"
  }));
};
QuestionBubbleIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
QuestionBubbleIconNext.defaultProps = {
  color: '#222',
  title: null
};