"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _title = require("../../../components/typography/title");

var _paragraph = require("../../../components/typography/paragraph");

var _horizontalStroke = require("../../../components/layout/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var Img = _styledComponents.default.img.withConfig({
  displayName: "vertical-card__Img",
  componentId: "ys1jp9-0"
})(["width:100%;display:block;margin-bottom:", ";", ""], (0, _typography.pxToRem)(30), function (_ref) {
  var styles = _ref.styles;
  return styles && (0, _styledComponents.css)(["", ""], styles);
});

var Card = _styledComponents.default.div.withConfig({
  displayName: "vertical-card__Card",
  componentId: "ys1jp9-1"
})(["color:", ";", ""], _colorsConfig.default.font1, function (_ref2) {
  var textAlign = _ref2.textAlign;
  return textAlign && (0, _styledComponents.css)(["text-align:", ";"], textAlign);
});

var StyledHorizontalStroke = (0, _styledComponents.default)(_horizontalStroke.HorizontalStroke).withConfig({
  displayName: "vertical-card__StyledHorizontalStroke",
  componentId: "ys1jp9-2"
})(["margin-top:", ";margin-bottom:", ";width:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30));

var justifyContent = function justifyContent(align) {
  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
};

var StrokePosition = _styledComponents.default.div.withConfig({
  displayName: "vertical-card__StrokePosition",
  componentId: "ys1jp9-3"
})(["", ""], function (_ref3) {
  var selfAlign = _ref3.selfAlign;
  return selfAlign && (0, _styledComponents.css)(["display:flex;justify-content:", ";"], justifyContent(selfAlign));
});

var VerticalCard = function VerticalCard(_ref4) {
  var imageProps = _ref4.imageProps,
      title = _ref4.title,
      titleTag = _ref4.titleTag,
      description = _ref4.description,
      descriptionTag = _ref4.descriptionTag,
      withTitleStroke = _ref4.withTitleStroke,
      textAlign = _ref4.textAlign,
      others = (0, _objectWithoutProperties2.default)(_ref4, ["imageProps", "title", "titleTag", "description", "descriptionTag", "withTitleStroke", "textAlign"]);
  var style = imageProps.style,
      imgProps = (0, _objectWithoutProperties2.default)(imageProps, ["style"]);
  return /*#__PURE__*/_react.default.createElement(Card, (0, _extends2.default)({
    textAlign: textAlign
  }, others), /*#__PURE__*/_react.default.createElement(Img, (0, _extends2.default)({}, imgProps, {
    styles: style
  })), /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: "senary",
    tag: titleTag,
    margin: false
  }, title), withTitleStroke && /*#__PURE__*/_react.default.createElement(StrokePosition, {
    selfAlign: textAlign
  }, /*#__PURE__*/_react.default.createElement(StyledHorizontalStroke, null)), description && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: withTitleStroke ? 0 : 1
  }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary",
    tag: descriptionTag,
    margin: false
  }, description)));
};

exports.VerticalCard = VerticalCard;
VerticalCard.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    style: _propTypes.default.object
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionTag: _propTypes.default.string,
  withTitleStroke: _propTypes.default.bool,
  textAlign: _propTypes.default.oneOf(['left', 'center', 'right'])
};
VerticalCard.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  textAlign: 'center',
  withTitleStroke: false
};