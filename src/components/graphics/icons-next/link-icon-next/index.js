"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LinkIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var LinkIconNext = function LinkIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M13.98 1.03a3.47 3.47 0 0 0-4.93 0L6 4.1a3.51 3.51 0 0 0 0 4.95l.96.97c.3.3.77.3 1.06 0 .3-.3.3-.77 0-1.07L7.04 8a2 2 0 0 1 0-2.82l3.07-3.08a1.98 1.98 0 0 1 2.81 0 2 2 0 0 1 0 2.82L11.74 6.1l-.35.35a.75.75 0 0 0 1.06 1.07l.35-.36 1.18-1.19a3.51 3.51 0 0 0 0-4.94ZM2.02 14.97a3.47 3.47 0 0 0 4.93 0L10 11.9a3.51 3.51 0 0 0 0-4.95l-.96-.97a.75.75 0 0 0-1.06 0c-.3.3-.3.77 0 1.06l.97.98a2 2 0 0 1 0 2.82l-3.07 3.08c-.78.78-2.04.78-2.81 0a2 2 0 0 1 0-2.82l1.19-1.2.35-.35c.3-.3.3-.77 0-1.07a.75.75 0 0 0-1.06 0l-.35.36-1.18 1.19a3.51 3.51 0 0 0 0 4.94Z"
  }));
};

exports.LinkIconNext = LinkIconNext;
LinkIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LinkIconNext.defaultProps = {
  color: '#222',
  title: ''
};