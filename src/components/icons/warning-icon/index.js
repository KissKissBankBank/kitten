"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var WarningIcon = function WarningIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: "2",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M1.82 6.86H.168V0H1.82v6.86zM0 8.96c0-.28.098-.518.294-.714a.972.972 0 0 1 .714-.294c.28 0 .518.098.714.294a.972.972 0 0 1 .294.714c0 .27-.098.504-.294.7a.972.972 0 0 1-.714.294.972.972 0 0 1-.714-.294.956.956 0 0 1-.294-.7z",
    fill: color,
    fillRule: "evenodd"
  }));
};

exports.WarningIcon = WarningIcon;
WarningIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
WarningIcon.defaultProps = {
  color: '#fff',
  title: 'Warning'
};