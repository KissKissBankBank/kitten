"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StatusIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["status"],
    _excluded2 = ["color"],
    _excluded3 = ["color"],
    _excluded4 = ["color"],
    _excluded5 = ["color"],
    _excluded6 = ["color"];

var StatusIconNext = function StatusIconNext(_ref) {
  var status = _ref.status,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  switch (status) {
    case 'warning':
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Warning, props);

    case 'disabled':
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Disabled, props);

    case 'success':
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Success, props);

    case 'danger':
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Danger, props);

    case 'pending':
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Pending, props);

    default:
      return /*#__PURE__*/_react.default.createElement(StatusIconNext.Info, props);
  }
};

exports.StatusIconNext = StatusIconNext;

StatusIconNext.Warning = function (_ref2) {
  var color = _ref2.color,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4 14",
    fill: color,
    width: "4",
    height: "14"
  }, props), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "2",
    cy: "12.25",
    r: "1.25"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "2.5",
    height: "9",
    x: ".75",
    rx: "1.25"
  }));
};

StatusIconNext.Disabled = StatusIconNext.Warning;

StatusIconNext.Info = function (_ref3) {
  var color = _ref3.color,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4 14",
    fill: color,
    width: "4",
    height: "14"
  }, props), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "2",
    cy: "1.25",
    r: "1.25",
    transform: "rotate(-180 2 1.25)"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "2.5",
    height: "9",
    x: "3.25",
    y: "13.5",
    rx: "1.25",
    transform: "rotate(-180 3.25 13.5)"
  }));
};

StatusIconNext.Danger = function (_ref4) {
  var color = _ref4.color,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 10",
    fill: color,
    width: "10",
    height: "10"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.005 3.23 2.529.755A1.25 1.25 0 1 0 .762 2.523l2.475 2.475L.762 7.472A1.25 1.25 0 0 0 2.53 9.24l2.475-2.475L7.479 9.24a1.25 1.25 0 0 0 1.768-1.768L6.772 4.998l2.475-2.475A1.25 1.25 0 0 0 7.48.755L5.005 3.23Z"
  }));
};

StatusIconNext.Success = function (_ref5) {
  var color = _ref5.color,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded5);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 9",
    fill: color,
    width: "11",
    height: "9"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "m2.134 6.553 1.767 1.768L5.67 6.553l4.42-4.419A1.25 1.25 0 0 0 8.321.366l-4.42 4.42-1.767-1.768A1.25 1.25 0 0 0 .366 4.785l1.768 1.768Z"
  }));
};

StatusIconNext.Pending = function (_ref6) {
  var color = _ref6.color,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref6, _excluded6);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 9",
    width: "8",
    height: "9",
    fill: color
  }, props, {
    style: {
      marginLeft: '2px'
    }
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M2.172.012C1.475.012.91.577.91 1.275v7.508h5.064a1.253 1.253 0 0 0 0-2.506H3.435V1.275C3.435.577 2.87.012 2.172.012Z",
    "clip-rule": "evenodd"
  }));
};

StatusIconNext.defaultProps = {
  status: 'info',
  color: 'var(--color-grey-900)'
};