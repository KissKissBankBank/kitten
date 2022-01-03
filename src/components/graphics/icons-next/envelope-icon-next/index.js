"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EnvelopeIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var EnvelopeIconNext = function EnvelopeIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "nonzero",
    d: "M16.65.45H3.35a2.8 2.8 0 0 0-2.02.87A3 3 0 0 0 .5 3.4v11.18c0 .78.3 1.54.83 2.1a2.8 2.8 0 0 0 2.02.86h13.3a2.76 2.76 0 0 0 2.02-.87 2.95 2.95 0 0 0 .83-2.09V3.41a3.06 3.06 0 0 0-.84-2.1 2.83 2.83 0 0 0-2.01-.86ZM3.35 2.42h13.3c.25 0 .5.1.67.3a1 1 0 0 1 .28.69v1.18l-5.86 4.16a2.93 2.93 0 0 1-3.5 0L2.4 4.59V3.4a1 1 0 0 1 .28-.7.93.93 0 0 1 .67-.29Zm13.3 13.16H3.35c-.25 0-.5-.1-.67-.3a1 1 0 0 1-.28-.69V6.98l4.75 3.37a4.78 4.78 0 0 0 5.68 0l4.77-3.37v7.61a1 1 0 0 1-.28.7.93.93 0 0 1-.67.29Z"
  }));
};

exports.EnvelopeIconNext = EnvelopeIconNext;
EnvelopeIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EnvelopeIconNext.defaultProps = {
  color: '#222',
  title: null
};