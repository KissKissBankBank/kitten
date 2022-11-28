"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FlashIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const FlashIllustration = _ref => {
  let {
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "286",
    height: "388",
    fill: "none",
    viewBox: "0 0 286 388"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M231.043 178.662c.017 0 .025.017.008.033L31.361 386.291c-.018.017-.043 0-.034-.017L94.09 231.622c.008-.017 0-.034-.017-.034L3 232.157 128.456 2h154.177L161.471 178.629a.02.02 0 0 0-.003.01c0 .004.001.007.003.011a.018.018 0 0 0 .007.008.03.03 0 0 0 .01.004h69.555Z",
    fill: "#08A777",
    stroke: "#000",
    strokeWidth: "3"
  }));
};

exports.FlashIllustration = FlashIllustration;
FlashIllustration.propTypes = {
  title: _propTypes.default.string
};
FlashIllustration.defaultProps = {
  title: null
};