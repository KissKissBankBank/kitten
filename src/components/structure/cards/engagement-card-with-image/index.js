"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EngagementCardWithImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

const StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "engagement-card-with-image__StyledContainer",
  componentId: "sc-4nkj3p-0"
})(["display:flex;flex-direction:column;text-decoration:none;:focus-visible{border-top-left-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);outline:auto;}"]);

const StyledCard = _styledComponents.default.div.withConfig({
  displayName: "engagement-card-with-image__StyledCard",
  componentId: "sc-4nkj3p-1"
})(["border-radius:var(--border-radius-xl);overflow:hidden;"]);

const StyledImage = _styledComponents.default.img.withConfig({
  displayName: "engagement-card-with-image__StyledImage",
  componentId: "sc-4nkj3p-2"
})(["height:", ";display:block;transition:transform 0.4s ease;object-fit:cover;width:100%;:hover,:focus{transform:scale(1.05);}"], _ref => {
  let {
    imageHeight
  } = _ref;
  return (0, _typography.pxToRem)(imageHeight);
});

const StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "engagement-card-with-image__StyledText",
  componentId: "sc-4nkj3p-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(15));

const EngagementCardWithImage = _ref2 => {
  let {
    backgroundImage,
    children,
    href,
    as,
    imageHeight,
    imgProps,
    textProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(StyledContainer, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    href: href
  }), /*#__PURE__*/_react.default.createElement(StyledCard, null, /*#__PURE__*/_react.default.createElement(StyledImage, (0, _extends2.default)({
    src: backgroundImage,
    alt: "",
    imageHeight: imageHeight
  }, imgProps))), /*#__PURE__*/_react.default.createElement(StyledText, (0, _extends2.default)({
    size: "micro",
    weight: "500",
    color: "font1",
    decoration: "none",
    lineHeight: "normal"
  }, textProps), children));
};

exports.EngagementCardWithImage = EngagementCardWithImage;
EngagementCardWithImage.propTypes = {
  href: _propTypes.default.string,
  backgroundImage: _propTypes.default.string.isRequired,
  imageHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  imgProps: _propTypes.default.object,
  textProps: _propTypes.default.object
};
EngagementCardWithImage.defaultProps = {
  href: '',
  imageHeight: ''
};