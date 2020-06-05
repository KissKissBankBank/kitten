"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImageWithText = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _buttonImage = require("../../../components/buttons/button-image");

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var Container = _styledComponents.default.div.withConfig({
  displayName: "button-image-with-text__Container",
  componentId: "sc-18377kn-0"
})(["display:flex;align-items:center;flex:1;"]);

var TextContainer = _styledComponents.default.div.withConfig({
  displayName: "button-image-with-text__TextContainer",
  componentId: "sc-18377kn-1"
})(["margin-left:", ";line-height:1.2;", ""], (0, _typography.pxToRem)(10), function (_ref) {
  var largeGutter = _ref.largeGutter;
  return largeGutter && (0, _styledComponents.css)(["margin-left:", ";"], (0, _typography.pxToRem)(15));
});

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "button-image-with-text__StyledText",
  componentId: "sc-18377kn-2"
})(["display:flex;align-items:center;flex:1;", ""], function (_ref2) {
  var tag = _ref2.tag;
  return tag === 'p' && (0, _styledComponents.css)(["margin:0;"]);
});

var ButtonImageWithText = function ButtonImageWithText(_ref3) {
  var title = _ref3.title,
      description = _ref3.description,
      micro = _ref3.micro,
      tag = _ref3.tag,
      titleRegular = _ref3.titleRegular,
      textRegular = _ref3.textRegular,
      largeGutter = _ref3.largeGutter,
      avatarProps = _ref3.avatarProps;
  var size = micro ? 'micro' : 'tiny';
  var titleWeight = titleRegular ? 'regular' : 'light';
  var textWeight = textRegular ? 'regular' : 'light';
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_buttonImage.ButtonImage, {
    tag: "span",
    img: avatarProps,
    withoutPointerEvents: true
  }), /*#__PURE__*/_react.default.createElement(TextContainer, {
    largeGutter: largeGutter
  }, /*#__PURE__*/_react.default.createElement(StyledText, {
    tag: tag,
    size: size,
    weight: titleWeight
  }, title), /*#__PURE__*/_react.default.createElement(StyledText, {
    tag: tag,
    size: size,
    weight: textWeight
  }, description)));
};

exports.ButtonImageWithText = ButtonImageWithText;
ButtonImageWithText.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  micro: _propTypes.default.bool,
  tag: _propTypes.default.string,
  titleRegular: _propTypes.default.bool,
  textRegular: _propTypes.default.bool,
  largeGutter: _propTypes.default.bool,
  avatarProps: _propTypes.default.object
};
ButtonImageWithText.defaultProps = {
  micro: false,
  tag: 'p',
  titleRegular: false,
  textRegular: false,
  largeGutter: false,
  avatarProps: {
    src: '',
    alt: ''
  }
};