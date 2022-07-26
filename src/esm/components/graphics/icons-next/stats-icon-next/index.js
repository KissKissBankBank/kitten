import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const StatsIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M22 8.074a2.592 2.592 0 0 0-2.593-2.593h-3.333V3.63a2.593 2.593 0 0 0-2.593-2.593h-2.963A2.593 2.593 0 0 0 7.926 3.63v4.814H4.593A2.593 2.593 0 0 0 2 11.037v8.519h20V8.074Zm-14.074 9.26H4.222v-6.297a.37.37 0 0 1 .37-.37h3.334v6.666Zm5.926 0h-3.704V3.63a.37.37 0 0 1 .37-.37h2.963a.37.37 0 0 1 .37.37v13.703Zm5.926 0h-3.704v-9.63h3.333a.37.37 0 0 1 .37.37v9.26ZM22 21.778H2V24h20v-2.222Z",
    fill: color
  }));
};
StatsIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
StatsIconNext.defaultProps = {
  color: '#222',
  title: null
};