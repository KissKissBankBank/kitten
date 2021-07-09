"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalProgress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _step = require("./components/step");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "vertical-progress__StyledContainer",
  componentId: "sc-4vkdj5-0"
})(["&:not(.k-VerticalProgress__wrapper--withoutBorder){border:", " solid ", ";padding:", ";border-radius:", ";max-width:", ";@media (min-width:", "px){padding:", ";}}.k-VerticalProgress{position:relative;padding:0;}.k-VerticalProgress__list{margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";content:'';border-left:", " dotted ", ";}}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(400), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var VerticalProgress = function VerticalProgress(_ref) {
  var children = _ref.children,
      withoutBorder = _ref.withoutBorder,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "withoutBorder", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledContainer, {
    className: (0, _classnames.default)('k-VerticalProgress__wrapper', className, {
      'k-VerticalProgress__wrapper--withoutBorder': withoutBorder
    })
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "k-VerticalProgress"
  }, /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    role: "tablist",
    className: "k-VerticalProgress__list"
  }, props), children)));
};

exports.VerticalProgress = VerticalProgress;
VerticalProgress.propTypes = {
  withoutBorder: _propTypes.default.bool
};
VerticalProgress.defaultProps = {
  withoutBorder: false
};
VerticalProgress.Step = _step.Step;