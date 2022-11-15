"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RainbowIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const RainbowIllustration = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "160",
    height: "120",
    fill: "none",
    viewBox: "0 0 160 120"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("g", {
    "clip-path": "url(#a)",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    fill: color
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.098 118.651h15.204c.4-34.348 28.312-62.074 62.695-62.074 34.383 0 62.297 27.726 62.698 62.074h15.204c-.402-42.763-35.124-77.306-77.898-77.306-42.775 0-77.501 34.543-77.903 77.306Zm156.558.75v.75H141.2v-.75c0-33.868-27.402-61.324-61.203-61.324-33.802 0-61.2 27.456-61.2 61.324v.75H.595v-.75c0-43.934 35.55-79.556 79.406-79.556 43.855 0 79.401 35.622 79.401 79.556h-.746Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.801 118.655h14.054c.472-25.641 21.322-46.284 47.008-46.36 25.795-.071 46.808 20.614 47.283 46.36h14.053C140.798 85.129 113.552 58.081 80 58.081s-60.798 27.052-61.199 60.574Zm-1.504.75c0-34.693 28.07-62.824 62.703-62.824s62.703 28.127 62.703 62.824v.75h-17.047l-.002-.748c-.075-25.266-20.574-45.682-45.786-45.611-25.108.074-45.447 20.447-45.521 45.611l-.003.748H17.297v-.75Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M34.349 118.651h15.28c.398-16.461 13.84-29.684 30.367-29.684s29.969 13.223 30.367 29.684h15.281c-.4-24.92-20.685-44.994-45.648-44.994-24.962 0-45.247 20.074-45.647 44.994Zm92.051.75h.75c0-26.091-21.11-47.244-47.154-47.244-26.044 0-47.153 21.153-47.153 47.244v.75H51.12v-.75c0-15.981 12.929-28.934 28.875-28.934 15.947 0 28.876 12.953 28.876 28.934v.75H126.4v-.75Z"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    transform: "translate(.75 40)",
    d: "M0 0h158.5v80H0z"
  }))));
};

exports.RainbowIllustration = RainbowIllustration;
RainbowIllustration.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
RainbowIllustration.defaultProps = {
  color: '#fff',
  title: null
};