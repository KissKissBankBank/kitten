"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _ratio = require("../../../../helpers/utils/ratio");

const DEFAULT_WIDTH = 8;
const DEFAULT_HEIGHT = 8;

const CrossIcon = _ref => {
  let {
    color,
    title,
    width,
    height,
    size,
    ...props
  } = _ref;
  const computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });

  if (size === 'large') {
    return /*#__PURE__*/_react.default.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M7 7L17 17",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M17 7L7 17",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round"
    }));
  }

  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8",
    width: computed.width,
    height: computed.height,
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.464 6.12L6.12.465 7.537 1.88 1.88 7.535z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.88.464L7.535 6.12 6.12 7.537.465 1.88z"
  }));
};

exports.CrossIcon = CrossIcon;
CrossIcon.prototype = {
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  size: _propTypes.default.oneOf(['medium', 'large'])
};
CrossIcon.defaultProps = {
  color: _colorsConfig.default.font1,
  size: 'medium'
};