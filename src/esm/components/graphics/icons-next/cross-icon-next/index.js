import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
export const CrossIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 17 18",
    width: "17",
    height: "18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M12.693 4.707a1 1 0 0 0-1.415 0L8.485 7.5 5.692 4.707a1 1 0 1 0-1.414 1.414l2.793 2.793-2.864 2.864a1 1 0 1 0 1.414 1.414l2.864-2.864 2.864 2.864a1 1 0 0 0 1.415-1.414L9.9 8.914l2.793-2.793a1 1 0 0 0 0-1.414Z"
  }));
};
CrossIconNext.prototype = {
  color: PropTypes.string,
  title: PropTypes.string
};
CrossIconNext.defaultProps = {
  color: COLORS.font1
};