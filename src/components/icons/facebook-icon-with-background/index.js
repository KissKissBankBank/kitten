"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookIconWithBackground = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var FacebookIconWithBackground = function FacebookIconWithBackground(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 25",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.62 0H1.38A1.38 1.38 0 0 0 0 1.38v22.24A1.38 1.38 0 0 0 1.38 25h12v-9.65h-3.29v-3.8h3.25V8.77c0-3.23 2-5 4.85-5a26 26 0 0 1 2.93.23v3.32h-2c-1.57 0-1.87.74-1.87 1.83v2.42H21l-.49 3.78h-3.25V25h6.36A1.38 1.38 0 0 0 25 23.62V1.38A1.38 1.38 0 0 0 23.62 0z"
  }));
};

exports.FacebookIconWithBackground = FacebookIconWithBackground;
FacebookIconWithBackground.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FacebookIconWithBackground.defaultProps = {
  color: '#222',
  title: ''
};