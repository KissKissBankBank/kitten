"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Loader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

const BULLET_SIZE = 5;

const StyledLoader = _styledComponents.default.div.withConfig({
  displayName: "loader__StyledLoader",
  componentId: "sc-kkatuq-0"
})(["display:flex;height:", ";line-height:1;gap:", ";.k-Loader__circle{width:", ";height:", ";border-radius:var(--border-radius-rounded);animation:k-Loader-animation-scale 1.75s 0s infinite cubic-bezier(0.2,0.68,0.18,1.08);animation-fill-mode:both;&:nth-child(1){animation-delay:calc(-1.75s / 3);}&:nth-child(2){animation-delay:calc(-1.75s / 3 / 2);}&:nth-child(3){animation-delay:0s;}}@keyframes k-Loader-animation-scale{0%{transform:scale(1);}45%{transform:scale(0.1);fill:transparent;}80%{transform:scale(1);}}"], (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(BULLET_SIZE));

const Circle = _ref => {
  let {
    color,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + BULLET_SIZE + " " + BULLET_SIZE,
    fill: color
  }, others), /*#__PURE__*/_react.default.createElement("circle", {
    cx: BULLET_SIZE / 2,
    cy: BULLET_SIZE / 2,
    r: BULLET_SIZE
  }));
};

const Loader = _ref2 => {
  let {
    tag,
    className,
    color,
    ...others
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(StyledLoader, (0, _extends2.default)({
    as: tag,
    className: (0, _classnames.default)('k-Loader', className)
  }, others), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }));
};

exports.Loader = Loader;
Loader.defaultProps = {
  tag: 'div',
  color: _colorsConfig.default.font1
};
Loader.propTypes = {
  tag: _propTypes.default.string,
  color: _propTypes.default.string
};