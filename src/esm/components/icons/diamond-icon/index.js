import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
export var DiamondIcon = function DiamondIcon(_ref) {
  var title = _ref.title,
      color = _ref.color,
      others = _objectWithoutProperties(_ref, ["title", "color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "28",
    viewBox: "0 0 19 28"
  }, others), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M14 14l-4 10-4-10h8zm5 0l-7 10 4-10h3zM4 14l4 10-7-10h3zm8-6l2 4H6l2-4h4zm3 0l4 4h-3l-2-4h1zM6 8l-2 4H1l4-4h1zm12.1070508-5.64951905l.75 1.2990381-3.4641016 2.00000005-.75-1.2990382 3.4641016-1.99999995zm-16.7141016 0L4.8570508 4.3504809l-.75 1.2990382L.6429492 3.64951905l.75-1.2990381zM10.5 0v4H9V0h1.5z"
  }));
};
DiamondIcon.defaultProps = {
  title: null,
  color: COLORS.background1
};
DiamondIcon.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};