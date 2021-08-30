"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var BoldIcon = function BoldIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "10",
    height: "12",
    viewBox: "0 0 10 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.488 11.2c2.336 0 3.872-1.216 3.872-3.184 0-1.008-.464-1.984-1.552-2.656.912-.656 1.28-1.536 1.28-2.4C9.088.912 7.504 0 5.216 0H0v11.2h5.488zm-.72-6.928H2.912V2.56h1.856c.96 0 1.392.208 1.392.848 0 .608-.432.864-1.392.864zm.176 4.368H2.912V6.688h2.032c.784 0 1.488.208 1.488.96 0 .8-.704.992-1.488.992z",
    fill: color
  }));
};

exports.BoldIcon = BoldIcon;
BoldIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
BoldIcon.defaultProps = {
  color: '#222',
  title: ''
};