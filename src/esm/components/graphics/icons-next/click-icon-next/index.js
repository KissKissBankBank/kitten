import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const ClickIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "22",
    height: "22",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props, {
    viewBox: "0 0 70 70"
  }), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M39.03 18.92a3.36 3.36 0 0 1-5.73-2.37v-4.2a3.35 3.35 0 0 1 6.71 0v4.2c0 .89-.35 1.74-.98 2.37Zm13.58-4.9c.89 0 1.74.36 2.37 1a3.36 3.36 0 0 1 0 4.74l-3.36 3.35a3.36 3.36 0 0 1-4.75-4.74L50.23 15a3.36 3.36 0 0 1 2.38-.98ZM61 33.33a3.35 3.35 0 0 0-3.36-3.35h-4.2a3.36 3.36 0 1 0 0 6.7h4.2A3.36 3.36 0 0 0 61 33.33ZM12.31 61c-.9 0-1.75-.35-2.38-.98l.05.02a3.35 3.35 0 0 1 0-4.75l5.96-5.94-3.22-1.61a6.71 6.71 0 0 1-3.7-6v-.52a6.7 6.7 0 0 1 4.65-5.87l18.47-5.87a6.72 6.72 0 0 1 8.4 8.39l-5.88 18.45a6.71 6.71 0 0 1-12.41.96l-1.61-3.22-5.95 5.96c-.63.63-1.49.98-2.38.98Zm21.83-25.16L15.67 41.7l8.4 4.2 4.19 8.38 5.88-18.45ZM13.66 26.6a3.36 3.36 0 0 0 3.69-3.35v-2.52a3.35 3.35 0 0 1 3.36-3.35h2.37a3.46 3.46 0 0 0 3.5-3.03 3.35 3.35 0 0 0-3.35-3.68H20.7a10.08 10.08 0 0 0-10.08 10.06v2.37a3.45 3.45 0 0 0 3.03 3.5Zm34.75 32.71h-2.52a3.36 3.36 0 0 1-3.36-3.68 3.46 3.46 0 0 1 3.5-3.03h2.38a3.36 3.36 0 0 0 3.36-3.35v-2.38a3.45 3.45 0 0 1 3.03-3.5 3.36 3.36 0 0 1 3.68 3.36v2.52a10.06 10.06 0 0 1-10.07 10.06Z",
    clipRule: "evenodd"
  }));
};
ClickIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
ClickIconNext.defaultProps = {
  color: '#222',
  title: ''
};