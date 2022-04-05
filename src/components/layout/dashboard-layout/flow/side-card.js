"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SideCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../typography/text");

var _next = require("../../../typography/paragraph/next");

var _screenConfig = require("../../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"];

var StyledSideCard = _styledComponents.default.div.withConfig({
  displayName: "side-card__StyledSideCard",
  componentId: "sc-s3armu-0"
})(["background-color:", ";width:100%;box-sizing:border-box;@media (min-width:", "){padding:", ";border-radius:var(--border-radius-m);margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__title{margin-bottom:", ";}.k-DashboardLayout__flow__sideCard__list{list-style:disc;margin-left:", ";padding:0;li{margin-bottom:", ";line-height:", ";font-size:", ";@media (min-width:", "){font-size:", ";}}}"], _colorsConfig.default.primary5, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(22), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.stepToRem)(-1));

var Title = function Title(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    size: "small",
    tag: "h3",
    weight: "bold",
    color: "font1",
    lineHeight: "1.3",
    className: (0, _classnames.default)('k-DashboardLayout__flow__sideCard__title', className)
  }, props));
};

var Paragraph = function Paragraph(_ref2) {
  var className = _ref2.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(_next.Paragraph, (0, _extends2.default)({
    modifier: "tertiary",
    margin: false,
    className: (0, _classnames.default)('k-DashboardLayout__flow__sideCard__paragraph', className)
  }, props));
};

var List = function List(_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__flow__sideCard__list', className)
  }, props));
};

var SideCard = function SideCard(_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement(StyledSideCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__flow__sideCard', className)
  }, props));
};

exports.SideCard = SideCard;
SideCard.Title = Title;
SideCard.Paragraph = Paragraph;
SideCard.List = List;