"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HomeIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const HomeIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.977 6.186 13.305.396a2.352 2.352 0 0 0-2.61 0L2.027 6.182A2.301 2.301 0 0 0 1 8.102V22h8.8v-7.343h4.4V22H23V8.103a2.305 2.305 0 0 0-1.023-1.917ZM20.8 19.797h-4.4v-5.875a1.47 1.47 0 0 0-1.467-1.469H9.067a1.466 1.466 0 0 0-1.467 1.47v5.874H3.2V8.103a.103.103 0 0 1 .044-.085l8.672-5.79a.153.153 0 0 1 .168 0l8.672 5.79a.103.103 0 0 1 .044.085v11.694Z",
    fill: color
  }));
};

exports.HomeIconNext = HomeIconNext;
HomeIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
HomeIconNext.defaultProps = {
  color: '#222',
  title: null
};