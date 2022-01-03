"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StarIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var StarIconNext = function StarIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    fill: color,
    d: "m7.74 7.6-4.52.54a1.5 1.5 0 0 0-.84 2.59l3.34 3.1-.89 4.48a1.5 1.5 0 0 0 2.21 1.6L11 17.68l3.96 2.23a1.5 1.5 0 0 0 2.2-1.6l-.88-4.48 3.34-3.1a1.5 1.5 0 0 0-.84-2.6l-4.52-.53-1.9-4.13a1.5 1.5 0 0 0-2.72 0L7.74 7.6Zm1.35 1.85L11 5.3l1.45 3.15.46 1.01 4.56.55-3.37 3.12.9 4.51-4-2.24-4 2.24.9-4.5L4.53 10l4.56-.55Z"
  }));
};

exports.StarIconNext = StarIconNext;
StarIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
StarIconNext.defaultProps = {
  color: '#222',
  title: null
};