"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Timeline = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = require("../../typography/text");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

const circleSize = 50;

const StyledTimeline = _styledComponents.default.div.withConfig({
  displayName: "timeline__StyledTimeline",
  componentId: "sc-1p3fxbt-0"
})(["position:relative;@media (max-width:", "){margin-left:", ";}.k-Timeline__verticalLine{background-image:linear-gradient( ", " 50%,rgba(255,255,255,0) 0% );background-position:right;background-size:", " ", ";background-repeat:repeat-y;position:absolute;height:100%;top:0;left:", ";width:", ";}.k-Timeline__list{list-style-type:none;padding:0;margin:0;}.k-Timeline__listItem{display:flex;align-items:center;justify-content:space-between;}.k-Timeline__listItem__bullet{box-sizing:border-box;height:", ";width:", ";border:var(--border);background-color:", ";border-radius:var(--border-radius-rounded);display:flex;justify-content:center;align-items:center;margin-right:", ";margin-left:", ";line-height:0;flex:0 0 ", ";position:relative;", ";@media (max-width:", "){margin-right:", ";}}&.k-Timeline--thin .k-Timeline__listItem__bullet{margin-top:", ";margin-bottom:", ";@media (min-width:", ") and (max-width:", "){margin-top:", ";margin-bottom:", ";}}&.k-Timeline--large .k-Timeline__listItem__bullet{margin-top:", ";margin-bottom:", ";@media (min-width:", ") and (max-width:", "){margin-top:", ";margin-bottom:", ";}}.k-Timeline__listItem__content{margin:", " 0;flex-grow:1;align-items:center;}"], _screenConfig.ScreenConfig.XS.max, (0, _typography.pxToRem)(20), _colorsConfig.default.line1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(-1), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(circleSize), (0, _typography.pxToRem)(circleSize), _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(-circleSize / 2), (0, _typography.pxToRem)(circleSize), _typographyConfig.default.fontStyles['700'], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(25));

const Timeline = _ref => {
  let {
    children,
    itemHeight,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledTimeline, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Timeline', "k-Timeline--" + itemHeight)
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Timeline__verticalLine"
  }), /*#__PURE__*/_react.default.createElement("ol", {
    className: "k-Timeline__list"
  }, _react.default.Children.map(children, (child, index) => /*#__PURE__*/_react.default.createElement("li", {
    className: "k-Timeline__listItem"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "small",
    className: "k-Timeline__listItem__bullet",
    "aria-hidden": true
  }, ++index), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Timeline__listItem__content"
  }, child)))));
};

exports.Timeline = Timeline;
Timeline.propTypes = {
  children: _propTypes.default.node.isRequired,
  itemHeight: _propTypes.default.oneOf(['thin', 'large'])
};
Timeline.defaultProps = {
  itemHeight: 'large'
};