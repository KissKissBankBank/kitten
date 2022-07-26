"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DocIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const DocIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: 14,
    height: 20
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 0v7h7v13H0V0h7zm4 14H3v2h8v-2zm0-4H3v2h8v-2zM9 0l5 5H9V0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

exports.DocIcon = DocIcon;
DocIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
DocIcon.defaultProps = {
  color: '#222',
  title: ''
};