"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LendopolisLogo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratio = require("../../../../helpers/utils/ratio");

const LendopolisLogo = _ref => {
  let {
    primaryColor,
    secondaryColor,
    width,
    height,
    small,
    ...props
  } = _ref;
  const DEFAULT_WIDTH = 150;
  const DEFAULT_HEIGHT = 28;
  const computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });
  const viewBox = {
    x: small ? DEFAULT_HEIGHT : DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": "Lendopolis",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + viewBox.x + " " + viewBox.y,
    width: computed.width,
    height: small ? computed.width : computed.height
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Lendopolis"), !small && /*#__PURE__*/_react.default.createElement("path", {
    fill: primaryColor,
    d: "M89.15 8.49a5.67 5.67 0 0 0-3.69 1.43 5.622 5.622 0 1 0 7.63 8.26 5.51 5.51 0 0 0 1.71-4 5.63 5.63 0 0 0-5.65-5.63zm2 8.89a3.72 3.72 0 0 1-2 .61 3.88 3.88 0 0 1-3-6.23 3.78 3.78 0 0 1 3-1.53 3.88 3.88 0 0 1 2 7.15zm13.28-8.12a4.65 4.65 0 0 0-2.73-.6h-2v10.89h1.81v-4.47h.49a4.08 4.08 0 0 0 2.64-.75 1.14 1.14 0 0 1 .17-.15 3.27 3.27 0 0 0-.39-4.89zm-1.48 3.95a3.49 3.49 0 0 1-1 .13h-.42V10.4h.13c1.55 0 2.32.22 2.32 1.44a1.24 1.24 0 0 1-.99 1.37zm12.74-4.72a5.62 5.62 0 1 0 3.88 9.7 5.51 5.51 0 0 0 1.78-4.07 5.64 5.64 0 0 0-5.66-5.63zm2 8.89a3.72 3.72 0 0 1-2 .61 3.88 3.88 0 0 1-3-6.23 3.76 3.76 0 0 1 3-1.53 3.88 3.88 0 0 1 2 7.15zm10.36.43V8.66h-1.82v10.89h4.63v-1.74zm7.34-9.15v10.89h1.82V8.66zm11.27 4.39l-.67-.3c-.8-.36-1.4-.67-1.4-1.28a1.15 1.15 0 0 1 .07-.39 1.33 1.33 0 0 1 1.28-.86 1.55 1.55 0 0 1 1.46.94l.18.31 1.48-.94-.32-.55a3.25 3.25 0 0 0-2.77-1.49 3.37 3.37 0 0 0-2.31.88 2.74 2.74 0 0 0-.89 2.06c0 1.68 1.19 2.36 2.42 2.92l.63.27h.05c1 .46 1.63.79 1.63 1.69a1.64 1.64 0 0 1-1.08 1.51 1.8 1.8 0 0 1-.68.14 1.72 1.72 0 0 1-1.65-1.37l-.1-.62-1.77.49.05.37a3.49 3.49 0 0 0 3.5 2.86 3.58 3.58 0 0 0 2.43-.93 3.47 3.47 0 0 0 1.12-2.57c0-1.85-1.38-2.61-2.66-3.17zM36.84 17.81V8.66h-1.82v10.89h4.64v-1.74zm7.31-9.15v10.89h6v-1.74h-4.18v-3.33h4v-1.73h-4V10.4h4.16V8.66zm19.31 0v7l-8-7.19v11.11h1.82v-7.12l8 7.27v-11zm13.78 1.3a5.9 5.9 0 0 0-4.2-1.32h-2.27v10.91h2.24a5.77 5.77 0 0 0 4.26-1.37l.3-.29a5.32 5.32 0 0 0 1.48-3.77 5.29 5.29 0 0 0-1.81-4.14zm-1.18 6.88a6.53 6.53 0 0 1-.66.49 4.56 4.56 0 0 1-2.32.47h-.49v-7.4h.49a4.11 4.11 0 0 1 2.94.9 3.72 3.72 0 0 1 1.2 2.8 3.6 3.6 0 0 1-1.16 2.74z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#fff",
    cx: "13.88",
    cy: "13.76",
    r: "13.61"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: secondaryColor,
    d: "M4.38 7.92l-.72-1.09a13.32 13.32 0 0 0-2 5.41 11.93 11.93 0 0 0 .69 6h3.3a1.19 1.19 0 0 1 .53.13v-3.15a1.26 1.26 0 0 1 1.12-1.23h.84zm15.2 6h.85a1.27 1.27 0 0 1 1.12 1.23v3.17a1.19 1.19 0 0 1 .53-.13h3.3a11.94 11.94 0 0 0 .68-6 13.16 13.16 0 0 0-2.09-5.4l-.68 1.13zm-1.92-11l.12-.81a15.19 15.19 0 0 0-4-.61 14.41 14.41 0 0 0-3.86.7l.19 1.21.06.44.81 6.67h.55a1.18 1.18 0 0 1 .5.11v-2a1.25 1.25 0 0 1 1.2-1.22h1.27a1.18 1.18 0 0 1 1.16 1.27v2a1.29 1.29 0 0 1 .48-.1h.6l.83-6.76.09-.9z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.88 0A13.89 13.89 0 0 0 0 13.92a13.72 13.72 0 0 0 1.52 6.3 14.14 14.14 0 0 0 4 4.75 13.82 13.82 0 0 0 16.76 0 14.14 14.14 0 0 0 3.85-4.5A13.88 13.88 0 0 0 13.88 0zm11.31 18.71h-3.15a.58.58 0 0 0-.57.57v4.26c-.16.13-.34.26-.52.38v-8.85a.57.57 0 0 0-.57-.57h-1.3a.58.58 0 0 0-.57.57v10.18s-.32.14-.52.21V11.57a.57.57 0 0 0-.57-.57h-1.3a.57.57 0 0 0-.58.57v14.48l-.51.07V8.54a.58.58 0 0 0-.57-.57h-1.25a.58.58 0 0 0-.57.57v17.58l-.53-.07V11.57a.57.57 0 0 0-.57-.57h-1.27a.57.57 0 0 0-.57.57v13.87l-.57-.22V15.07a.58.58 0 0 0-.57-.57H7.27a.58.58 0 0 0-.57.57v8.85c-.19-.14-.38-.28-.56-.43v-4.21a.58.58 0 0 0-.57-.57h-3a11.35 11.35 0 0 1-1-4.85 12.31 12.31 0 0 1 24.61 0 12 12 0 0 1-1 4.85z"
  }));
};

exports.LendopolisLogo = LendopolisLogo;
LendopolisLogo.propTypes = {
  primaryColor: _propTypes.default.string,
  secondaryColor: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  small: _propTypes.default.bool
};
LendopolisLogo.defaultProps = {
  primaryColor: '#fff',
  secondaryColor: '#caf4fe',
  width: null,
  height: null,
  small: false
};