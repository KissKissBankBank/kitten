"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarWithTextAndBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../components/typography/text");

var _visuallyHidden = require("../../../components/accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _reactElements = require("../../../helpers/react/react-elements");

var WithoutAvatar = _styledComponents.default.div.withConfig({
  displayName: "avatar-with-text-and-badge__WithoutAvatar",
  componentId: "hgnaim-0"
})(["display:flex;align-items:center;justify-content:center;color:", ";background-color:", ";width:", ";height:", ";"], function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var height = _ref4.height;
  return height;
});

var Image = function Image(_ref5) {
  var src = _ref5.src,
      height = _ref5.height,
      width = _ref5.width,
      textColor = _ref5.textColor,
      backgroundColor = _ref5.backgroundColor,
      alt = _ref5.alt,
      children = _ref5.children,
      text = _ref5.text;
  var badgeElement = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: AvatarWithTextAndBadge.Badge
  });
  var badge = badgeElement && badgeElement[0];
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ButtonWithBadge"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ButtonImage"
  }, src ? /*#__PURE__*/_react.default.createElement("img", {
    className: "k-ButtonImage__img",
    src: src,
    width: width,
    height: height,
    alt: alt
  }) : /*#__PURE__*/_react.default.createElement(WithoutAvatar, {
    color: textColor,
    backgroundColor: backgroundColor,
    width: width,
    height: height
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular"
  }, text))), badge);
};

Image.propTypes = {
  src: _propTypes.default.string,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  textColor: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  alt: _propTypes.default.string
};
Image.defaultProps = {
  src: null,
  height: (0, _typography.pxToRem)(40),
  width: (0, _typography.pxToRem)(40),
  textColor: _colorsConfig.default.background1,
  backgroundColor: _colorsConfig.default.primary3,
  alt: null
};

var Badge = function Badge(_ref6) {
  var backgroundColor = _ref6.backgroundColor,
      children = _ref6.children,
      a11yText = _ref6.a11yText;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "k-ButtonWithBadge__badge k-Badge",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, children), a11yText && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, a11yText));
};

Badge.propTypes = {
  backgroundColor: _propTypes.default.string,
  a11yText: _propTypes.default.string
};
Badge.defaultProps = {
  backgroundColor: _colorsConfig.default.primary1,
  a11yText: 'Notification(s)'
};

var Text = function Text(_ref7) {
  var textClassName = _ref7.textClassName,
      withEllipsisOverflow = _ref7.withEllipsisOverflow,
      children = _ref7.children,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["textClassName", "withEllipsisOverflow", "children"]);
  var textClassNames = (0, _classnames.default)(textClassName, 'k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', 'always-visible', {
    'text--withEllipsis': withEllipsisOverflow
  });
  return /*#__PURE__*/_react.default.createElement("span", {
    className: textClassNames
  }, children);
};

Text.propTypes = {
  withEllipsisOverflow: _propTypes.default.bool
};
Text.defaultProps = {
  withEllipsisOverflow: false
};

var AvatarWithTextAndBadge = function AvatarWithTextAndBadge(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      props = (0, _objectWithoutProperties2.default)(_ref8, ["children", "className"]);
  var componentClassNames = (0, _classnames.default)(className, 'k-ButtonImageWithText', 'k-u-avoid-click');
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: componentClassNames
  }, props), children);
};

exports.AvatarWithTextAndBadge = AvatarWithTextAndBadge;
AvatarWithTextAndBadge.Image = Image;
AvatarWithTextAndBadge.Badge = Badge;
AvatarWithTextAndBadge.Text = Text;