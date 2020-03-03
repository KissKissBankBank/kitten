"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EngagementCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var borderStyle = (0, _styledComponents.css)(["box-shadow:0 0 0 ", " ", ",0 0 0 ", " ", ";"], (0, _typography.pxToRem)(3), _colorsConfig.default.background1, (0, _typography.pxToRem)(6), function (_ref) {
  var hoverBorder = _ref.hoverBorder;
  return hoverBorder;
});

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "engagement-card__StyledCard",
  componentId: "sc-1unf5bb-0"
})(["border-radius:", ";position:relative;overflow:hidden;background-repeat:no-repeat;background-image:url(", ");background-color:", ";background-size:contain;padding:", ";", " ", ""], (0, _typography.pxToRem)(15), function (_ref2) {
  var imageSrc = _ref2.imageSrc;
  return imageSrc;
}, function (_ref3) {
  var backgroundColor = _ref3.backgroundColor;
  return backgroundColor;
}, (0, _typography.pxToRem)(10), function (_ref4) {
  var href = _ref4.href;
  return href && (0, _styledComponents.css)([":hover,:active,:focus{", "}"], borderStyle);
}, function (_ref5) {
  var isActive = _ref5.isActive;
  return isActive && borderStyle;
});

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "engagement-card__StyledText",
  componentId: "sc-1unf5bb-1"
})(["position:absolute;text-align:center;bottom:5%;right:", ";left:", ";line-height:1.2;"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10));

var EngagementCard = function EngagementCard(_ref6) {
  var imageSrc = _ref6.imageSrc,
      backgroundColor = _ref6.backgroundColor,
      href = _ref6.href,
      children = _ref6.children,
      hoverBorder = _ref6.hoverBorder,
      isActive = _ref6.isActive,
      as = _ref6.as,
      others = (0, _objectWithoutProperties2.default)(_ref6, ["imageSrc", "backgroundColor", "href", "children", "hoverBorder", "isActive", "as"]);
  return _react.default.createElement(StyledCard, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    imageSrc: imageSrc,
    backgroundColor: backgroundColor,
    hoverBorder: hoverBorder,
    isActive: isActive
  }), _react.default.createElement(StyledText, {
    size: "micro",
    weight: "regular",
    color: "font1"
  }, children));
};

exports.EngagementCard = EngagementCard;
EngagementCard.propTypes = {
  imageSrc: _propTypes.default.string,
  href: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  hoverBorder: _propTypes.default.string,
  isActive: _propTypes.default.bool
};
EngagementCard.defaultProps = {
  imageSrc: '',
  href: '',
  backgroundColor: '',
  hoverBorder: '',
  isActive: false
};