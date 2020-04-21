"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EngagementCardWithImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "withImage__StyledContainer",
  componentId: "sc-1jg09sq-0"
})(["display:flex;flex-direction:column;text-decoration:none;"]);

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "withImage__StyledCard",
  componentId: "sc-1jg09sq-1"
})(["border-radius:", ";overflow:hidden;"], (0, _typography.pxToRem)(15));

var StyledImage = _styledComponents.default.img.withConfig({
  displayName: "withImage__StyledImage",
  componentId: "sc-1jg09sq-2"
})(["height:", ";display:block;transition:transform 0.4s ease;:hover,:focus{transform:scale(1.05);}@media (min-width:", "){width:100%;}"], function (_ref) {
  var imageHeight = _ref.imageHeight;
  return (0, _typography.pxToRem)(imageHeight);
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min));

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "withImage__StyledText",
  componentId: "sc-1jg09sq-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(15));

var EngagementCardWithImage = function EngagementCardWithImage(_ref2) {
  var backgroundImage = _ref2.backgroundImage,
      children = _ref2.children,
      isActive = _ref2.isActive,
      href = _ref2.href,
      as = _ref2.as,
      imageHeight = _ref2.imageHeight,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["backgroundImage", "children", "isActive", "href", "as", "imageHeight"]);
  return /*#__PURE__*/_react.default.createElement(StyledContainer, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    isActive: isActive
  }), /*#__PURE__*/_react.default.createElement(StyledCard, null, /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: backgroundImage,
    alt: "",
    imageHeight: imageHeight
  })), /*#__PURE__*/_react.default.createElement(StyledText, {
    size: "micro",
    weight: "regular",
    color: "font1",
    decoration: "none",
    lineHeight: "normal"
  }, children));
};

exports.EngagementCardWithImage = EngagementCardWithImage;
EngagementCardWithImage.propTypes = {
  href: _propTypes.default.string,
  backgroundImage: _propTypes.default.string.isRequired,
  isActive: _propTypes.default.bool,
  imageHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
EngagementCardWithImage.defaultProps = {
  href: '',
  isActive: false,
  imageHeight: ''
};