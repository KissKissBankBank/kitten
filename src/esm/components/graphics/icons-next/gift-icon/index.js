import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const GiftIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    d: "M.952 8.916v3.871c0 .407.11.807.319 1.16.209.353.509.645.87.849V22.4a2 2 0 002 2h16.621a2 2 0 002-2v-7.604a2.35 2.35 0 00.87-.85 2.28 2.28 0 00.32-1.159V8.916c0-.616-.251-1.207-.697-1.642a2.41 2.41 0 00-1.683-.68h-.48a4.172 4.172 0 00-.164-4.158A4.317 4.317 0 0019.34.944 4.445 4.445 0 0017.211.4c-.924 0-1.835.21-2.66.613a5.916 5.916 0 00-2.1 1.71 5.918 5.918 0 00-2.098-1.71A6.067 6.067 0 007.693.4c-.746 0-1.48.188-2.13.544-.652.357-1.198.87-1.588 1.492a4.174 4.174 0 00-.165 4.158h-.479a2.41 2.41 0 00-1.682.68 2.295 2.295 0 00-.697 1.642zm2.379 0h7.931v3.871H3.331V8.916zm1.19 13.161V15.11h6.741v6.967H4.521zm15.862 0H13.64V15.11h6.742v6.967zm1.19-9.29H13.64V8.916h7.931v3.871zM17.21 2.722c.526 0 1.03.204 1.402.567.372.363.581.856.581 1.369s-.209 1.006-.58 1.369a2.008 2.008 0 01-1.403.566h-3.569v-.387c0-.924.376-1.81 1.046-2.463a3.614 3.614 0 012.523-1.02zM5.71 4.658c0-.513.21-1.006.581-1.369a2.008 2.008 0 011.402-.567c.947 0 1.854.368 2.524 1.02a3.442 3.442 0 011.045 2.464v.387H7.693c-.526 0-1.03-.203-1.402-.566a1.912 1.912 0 01-.58-1.369z"
  }));
};
GiftIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
GiftIcon.defaultProps = {
  color: '#222',
  title: null
};