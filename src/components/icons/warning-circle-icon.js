"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningCircleIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WarningCircleIcon = function WarningCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      warningColor = _ref.warningColor,
      props = _objectWithoutProperties(_ref, ["circleColor", "warningColor"]);

  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), _react.default.createElement("title", null, "Warning"), _react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), _react.default.createElement("path", {
    fill: warningColor,
    d: "M9.034 7.088l-.07-1.862h2.072l-.07 1.862-.294 4.284H9.328l-.294-4.284zm-.28 6.398c0-.373.12-.684.357-.93.24-.248.535-.372.89-.372s.65.124.89.37c.237.248.356.56.356.932 0 .364-.12.67-.357.917-.24.247-.535.37-.89.37s-.65-.123-.89-.37c-.237-.247-.356-.553-.356-.917z"
  }));
};

exports.WarningCircleIcon = WarningCircleIcon;
WarningCircleIcon.defaultProps = {
  circleColor: '#fff',
  warningColor: '#333'
};