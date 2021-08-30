"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var EmbedIcon = function EmbedIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "12",
    viewBox: "0 0 24 12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.457 8.198V6.126l7.042-2.562v2.1l-4.48 1.498 4.48 1.498v2.086L.457 8.198zm10.108 3.696H8.479L13.449.106h2.072l-4.956 11.788zM23.543 6.14v2.072l-7.042 2.548V8.674l4.48-1.498-4.48-1.498v-2.1l7.042 2.562z"
  }));
};

exports.EmbedIcon = EmbedIcon;
EmbedIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EmbedIcon.defaultProps = {
  color: '#222',
  title: ''
};