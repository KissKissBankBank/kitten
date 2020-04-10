"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _text = require("../../../components/typography/text");

var _marger = require("../../../components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var Link = _styledComponents.default.a.withConfig({
  displayName: "link-box__Link",
  componentId: "km85a5-0"
})(["display:flex;color:", ";text-decoration:none;"], _colorsConfig.default.font1);

var ParagraphMarger = (0, _styledComponents.default)(_marger.Marger).withConfig({
  displayName: "link-box__ParagraphMarger",
  componentId: "km85a5-1"
})(["display:flex;flex-direction:column;justify-content:center;flex-grow:1;padding-left:", ";@media (min-width:", "){padding-left:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30));

var Icon = _styledComponents.default.div.withConfig({
  displayName: "link-box__Icon",
  componentId: "km85a5-2"
})(["display:flex;margin-top:", ";margin-left:", ";margin-bottom:", ";align-items:center;justify-content:center;min-width:", ";background-color:", ";"], (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(90), _colorsConfig.default.primary4);

var Arrow = (0, _styledComponents.default)(function (props) {
  return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-ButtonIcon__svg"
  }));
}).withConfig({
  displayName: "link-box__Arrow",
  componentId: "km85a5-3"
})(["display:flex;align-items:center;padding:", " ", " ", " ", ";transition:transform 0.4s ease-in-out;@media (min-width:", "){padding-left:", ";padding-right:", ";}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(32));

var Container = _styledComponents.default.div.withConfig({
  displayName: "link-box__Container",
  componentId: "km85a5-4"
})(["display:flex;min-height:", ";width:100%;box-sizing:border-box;color:", ";background-color:", ";border:", " solid ", ";&:hover{background-color:", ";", "{transform:translate(", ",", ");}}&:active{background-color:", ";}"], (0, _typography.pxToRem)(90), _colorsConfig.default.font1, _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background2, Arrow, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(0), _colorsConfig.default.background3);

var LinkBox = function LinkBox(_ref) {
  var title = _ref.title,
      titleTag = _ref.titleTag,
      isExternal = _ref.isExternal,
      href = _ref.href,
      text = _ref.text,
      textTag = _ref.textTag,
      linkProps = _ref.linkProps,
      viewportIsMobile = _ref.viewportIsMobile,
      displayIcon = _ref.displayIcon,
      children = _ref.children;
  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/_react.default.createElement(Link, (0, _extends2.default)({}, linkProps, {
    href: href
  }, target), /*#__PURE__*/_react.default.createElement(Container, null, !!displayIcon && /*#__PURE__*/_react.default.createElement(Icon, {
    className: "k-u-hidden@xs-down--important"
  }, children), /*#__PURE__*/_react.default.createElement(ParagraphMarger, {
    top: "2",
    bottom: "2"
  }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    bottom: text ? 0.5 : 0
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: titleTag,
    weight: "regular",
    size: viewportIsMobile ? 'tiny' : 'default',
    color: "font1",
    style: {
      lineHeight: 1
    }
  }, title)), text && /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: textTag,
    weight: "light",
    size: "tiny",
    color: "font1",
    style: {
      lineHeight: 1.3
    }
  }, text)), /*#__PURE__*/_react.default.createElement(Arrow, null)));
};

exports.LinkBox = LinkBox;
LinkBox.propTypes = {
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  href: _propTypes.default.string,
  text: _propTypes.default.string,
  textTag: _propTypes.default.string,
  linkProps: _propTypes.default.object,
  viewportIsMobile: _propTypes.default.bool,
  displayIcon: _propTypes.default.bool
};
LinkBox.defaultProps = {
  titleTag: 'span',
  isExternal: false,
  href: '#',
  text: '',
  textTag: 'span',
  linkProps: {},
  viewportIsMobile: false,
  displayIcon: false
}; // DEPRECATED: do not use default export.

var _default = LinkBox;
exports.default = _default;