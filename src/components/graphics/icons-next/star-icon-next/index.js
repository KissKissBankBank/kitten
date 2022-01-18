"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StarIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title", "bgColor"];

var StarIconNext = function StarIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      bgColor = _ref.bgColor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: bgColor,
    d: "m12.36 5.52.23.5.55.07 4.52.54c.43.05.6.57.28.86l-3.34 3.1-.4.39.1.54.88 4.48a.5.5 0 0 1-.73.53l-3.96-2.22-.49-.28-.49.28-3.96 2.22a.5.5 0 0 1-.73-.53l.88-4.47.1-.55-.4-.38-3.34-3.1a.5.5 0 0 1 .28-.87l4.52-.54.55-.06.23-.51 1.9-4.14a.5.5 0 0 1 .91 0l1.9 4.14Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "m6.74 5.1-4.52.54a1.5 1.5 0 0 0-.84 2.59l3.34 3.1-.89 4.48a1.5 1.5 0 0 0 2.21 1.6L10 15.18l3.96 2.23a1.5 1.5 0 0 0 2.2-1.6l-.88-4.48 3.34-3.1a1.5 1.5 0 0 0-.84-2.6l-4.52-.53-1.9-4.13a1.5 1.5 0 0 0-2.72 0L6.74 5.1Zm1.35 1.85L10 2.8l1.45 3.15.46 1.01 4.56.55-3.37 3.12.9 4.51-4-2.24-4 2.24.9-4.5L3.53 7.5l4.56-.55Z"
  }));
};

exports.StarIconNext = StarIconNext;
StarIconNext.propTypes = {
  color: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  title: _propTypes.default.string
};
StarIconNext.defaultProps = {
  color: '#222',
  bgColor: 'transparent',
  title: null
};