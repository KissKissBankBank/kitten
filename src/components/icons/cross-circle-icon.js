"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrossCircleIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CrossCircleIcon = function CrossCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      crossColor = _ref.crossColor,
      props = _objectWithoutProperties(_ref, ["circleColor", "crossColor"]);

  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), _react.default.createElement("title", null, "Cross circle"), _react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), _react.default.createElement("path", {
    fill: crossColor,
    d: "M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
  }));
};

exports.CrossCircleIcon = CrossCircleIcon;
CrossCircleIcon.defaultProps = {
  circleColor: '#fff',
  crossColor: '#333'
};