import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const SearchIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "23",
    height: "26",
    viewBox: "0 0 23 26",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("rect", {
    width: "12",
    height: "15",
    x: "1",
    y: "1",
    stroke: color,
    strokeWidth: "2",
    rx: "2"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "a",
    width: "18",
    height: "19",
    x: "5",
    y: "6.896",
    fill: "#000",
    maskUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M5 6.896h18v19H5z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.381 18.11a4 4 0 1 1-4.762-6.429 4 4 0 0 1 4.762 6.43Zm.48 2.062a6 6 0 1 1 1.584-1.245l3.055 3.055a1 1 0 0 1-1.414 1.415l-3.225-3.225Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M15.381 18.11a4 4 0 1 1-4.762-6.429 4 4 0 0 1 4.762 6.43Zm.48 2.062a6 6 0 1 1 1.584-1.245l3.055 3.055a1 1 0 0 1-1.414 1.415l-3.225-3.225Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#E7F1FF",
    d: "m15.381 18.11.894 1.205.018-.013.018-.014-.93-1.177Zm.039-.028.871 1.22.019-.013.018-.013-.908-1.194Zm.441 2.09 1.06-1.06-.792-.793-.984.535.716 1.318Zm1.584-1.245-1.111-1.008-.96 1.058 1.01 1.01 1.06-1.06Zm3.055 3.055 1.06-1.06-1.06 1.06Zm-1.414 1.415-1.06 1.06 1.06-1.06Zm-6.086-3c1.225 0 2.36-.403 3.275-1.082l-1.788-2.409c-.415.309-.928.49-1.487.49v3Zm-5.5-5.5a5.5 5.5 0 0 0 5.5 5.5v-3a2.5 2.5 0 0 1-2.5-2.5h-3Zm5.5-5.5a5.5 5.5 0 0 0-5.5 5.5h3a2.5 2.5 0 0 1 2.5-2.5v-3Zm5.5 5.5a5.5 5.5 0 0 0-5.5-5.5v3a2.5 2.5 0 0 1 2.5 2.5h3Zm-2.172 4.379a5.494 5.494 0 0 0 2.172-4.38h-3c0 .812-.385 1.533-.989 1.992l1.817 2.388Zm-.017.012a.442.442 0 0 1-.02.014l-1.743-2.44a2.535 2.535 0 0 0-.096.072l1.859 2.354ZM13 22.396a7.473 7.473 0 0 0 3.577-.906l-1.432-2.636a4.473 4.473 0 0 1-2.145.543v3Zm-7.5-7.5a7.5 7.5 0 0 0 7.5 7.5v-3a4.5 4.5 0 0 1-4.5-4.5h-3Zm7.5-7.5a7.5 7.5 0 0 0-7.5 7.5h3a4.5 4.5 0 0 1 4.5-4.5v-3Zm7.5 7.5a7.5 7.5 0 0 0-7.5-7.5v3a4.5 4.5 0 0 1 4.5 4.5h3Zm-1.944 5.039a7.478 7.478 0 0 0 1.944-5.038h-3c0 1.164-.44 2.222-1.166 3.022l2.222 2.016Zm-2.172.053 3.055 3.055 2.122-2.121-3.056-3.056-2.12 2.122Zm3.055 3.055a.5.5 0 0 1 0-.707l2.122 2.121a2.5 2.5 0 0 0 0-3.535l-2.122 2.12Zm0-.707a.5.5 0 0 1 .707 0l-2.12 2.121a2.5 2.5 0 0 0 3.535 0l-2.122-2.121Zm.707 0-3.224-3.225-2.122 2.121 3.225 3.225 2.121-2.121Z",
    mask: "url(#a)"
  }));
};
SearchIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
SearchIconNext.defaultProps = {
  color: '#222',
  title: ''
};