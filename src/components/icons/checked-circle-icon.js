"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedCircleIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CheckedCircleIcon = function CheckedCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      checkedColor = _ref.checkedColor,
      props = _objectWithoutProperties(_ref, ["circleColor", "checkedColor"]);

  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), _react.default.createElement("title", null, "Checked circle"), _react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), _react.default.createElement("path", {
    fill: checkedColor,
    d: "M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
  }));
};

exports.CheckedCircleIcon = CheckedCircleIcon;
CheckedCircleIcon.defaultProps = {
  circleColor: '#fff',
  checkedColor: '#333'
};