"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MegaphoneIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const MegaphoneIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "39",
    height: "27",
    viewBox: "0 0 39 27",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M22.345 24a1.656 1.656 0 0 1-1.655-1.655v-1.18l-4.138-.992v1.345a4.967 4.967 0 0 1-5.446 4.945 5.061 5.061 0 0 1-4.485-5.09v-3.58L3.31 17v.38a1.655 1.655 0 1 1-3.311 0V6.622a1.656 1.656 0 0 1 3.31 0v.384l17.38-4.17v-1.18a1.655 1.655 0 1 1 3.31 0v20.69a1.655 1.655 0 0 1-1.655 1.656ZM9.931 21.518a1.655 1.655 0 1 0 3.31 0v-2.14l-3.31-.794v2.934Zm10.76-15.282-17.38 4.17v3.183l17.38 4.175V6.236Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeWidth: "3",
    d: "M31.5 12.5h6m-6.897-6.371 1.879-1.879M31.121 19 33 20.879"
  }));
};

exports.MegaphoneIconNext = MegaphoneIconNext;
MegaphoneIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
MegaphoneIconNext.defaultProps = {
  color: '#222',
  title: null
};