"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BlockquoteIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const BlockquoteIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "11",
    height: "8",
    viewBox: "0 0 11 8",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.794 8c1.188 0 2.177-.341 2.968-1.023.79-.682 1.366-1.694 1.724-3.034.341.547.713.948 1.116 1.204.403.255.869.383 1.398.383.194 0 .403-.028.626-.083.224-.056.453-.137.688-.243a3.187 3.187 0 01-1.376 1.667c-.647.388-1.505.626-2.575.714L5.724 8h.31c.493 0 .978-.07 1.454-.212.477-.14.9-.34 1.27-.6a4.643 4.643 0 001.509-1.746c.353-.706.529-1.476.529-2.31 0-.918-.262-1.67-.785-2.254C9.488.293 8.817 0 8 0c-.594 0-1.104.156-1.53.467-.427.312-.796.794-1.107 1.447-.306-.659-.668-1.142-1.085-1.45C3.86.153 3.355 0 2.76 0 1.99 0 1.338.269.803.807A2.679 2.679 0 000 2.77c0 .776.266 1.43.798 1.962s1.187.798 1.963.798c.2 0 .408-.026.626-.08.218-.052.45-.134.697-.246a3.286 3.286 0 01-1.385 1.667c-.64.388-1.5.626-2.576.714L.485 8h.309z",
    fill: color
  }));
};

exports.BlockquoteIcon = BlockquoteIcon;
BlockquoteIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
BlockquoteIcon.defaultProps = {
  color: '#222',
  title: ''
};