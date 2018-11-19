"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PasswordIcon = function PasswordIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 12",
    fill: color,
    width: "18"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M9 0C4 0 0 4 0 6s4 6 9 6 9-4 9-6-4-6-9-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), _react.default.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "2"
  }));
};

exports.PasswordIcon = PasswordIcon;
PasswordIcon.defaultProps = {
  color: '#222'
};