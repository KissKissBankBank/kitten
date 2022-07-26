"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FacebookIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const FacebookIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "13",
    height: "26",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 26"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.445 26V14.16h3.85l.573-4.636H8.445V6.57c0-1.338.36-2.254 2.21-2.254H13V.184A29.988 29.988 0 0 0 9.565 0c-3.403 0-5.74 2.156-5.74 6.113v3.402H0v4.636h3.833V26h4.612Z",
    fill: color
  }));
};

exports.FacebookIconNext = FacebookIconNext;
FacebookIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FacebookIconNext.defaultProps = {
  color: '#fff',
  title: null
};