"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CheckedIcon = function CheckedIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 8",
    fill: color
  }, other), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z"
  }));
};

exports.CheckedIcon = CheckedIcon;
CheckedIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CheckedIcon.defaultProps = {
  color: '#fff',
  title: 'Checked'
};