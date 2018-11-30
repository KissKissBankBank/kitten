"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marger = void 0;

var _react = _interopRequireDefault(require("react"));

var _typographyConfig = _interopRequireDefault(require("kitten/constants/typography-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Marger = function Marger(_ref) {
  var top = _ref.top,
      bottom = _ref.bottom,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["top", "bottom", "style"]);

  var gutter = 10 / _typographyConfig.default.root; // Transform 10 to .625 for have rem unit.

  var styles = _objectSpread({}, style, {
    marginTop: top ? "".concat(top * gutter, "rem") : null,
    marginBottom: bottom ? "".concat(bottom * gutter, "rem") : null
  });

  return _react.default.createElement("div", _extends({
    style: styles
  }, props));
};

exports.Marger = Marger;
Marger.defaultProps = {
  top: 0,
  bottom: 0
};