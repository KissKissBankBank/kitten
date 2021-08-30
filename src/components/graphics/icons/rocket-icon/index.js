"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RocketIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var RocketIcon = function RocketIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "14",
    height: "17",
    viewBox: "0 0 14 17",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.549 13.513c-.333.577-1.266 1.194-2.799 1.848-.2-1.654-.132-2.77.201-3.348l2.598 1.5zm5.286-2.54c.15 1.161.003 2.803-.443 4.922l-.08.368-1.88-2.846.225-.198a21.471 21.471 0 0 0 2.178-2.247zm-8.322-4.81c-.359.967-.664 2.067-.92 3.303L.187 9.263c1.738-1.59 3.18-2.624 4.325-3.1zM13.25.639c.09 3.845-.211 6.366-.902 7.562-.69 1.196-1.813 2.473-3.366 3.83l-3.464-2c.414-2.051.96-3.661 1.634-4.83.675-1.169 2.707-2.69 6.098-4.562zm-2.5 4.33a1.5 1.5 0 1 0-1.5 2.598 1.5 1.5 0 0 0 1.5-2.598z"
  }));
};

exports.RocketIcon = RocketIcon;
RocketIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
RocketIcon.defaultProps = {
  color: '#fff',
  title: ''
};