"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _image = require("./components/image");

var _title = require("./components/title");

var _subtitle = require("./components/subtitle");

var _paragraph = require("./components/paragraph");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var ContainerStyle = _styledComponents.default.a.withConfig({
  displayName: "simple-card__ContainerStyle",
  componentId: "sc-1g5bppt-0"
})(["display:block;overflow:auto;text-decoration:inherit;color:inherit;line-height:1;position:relative;.k-SimpleCard__imageContainer{max-width:100%;position:relative;margin-bottom:", ";transition:opacity ease 600ms;z-index:1;background-color:var(--SimpleCard-image-container-background);overflow:hidden;}.k-SimpleCard__imageContainer--ratio{padding-top:calc(100% / (var(--SimpleCard-image-container-ratio)));& > .k-SimpleCard__image{position:absolute;top:0;height:auto;text-align:center;}}.k-SimpleCard__playerButton{width:var(--SimpleCard-player-button-size);height:var(--SimpleCard-player-button-size);background:", ";position:absolute;top:calc(50% - var(--SimpleCard-player-button-size) / 2);left:calc(50% - var(--SimpleCard-player-button-size) / 2);display:flex;align-items:center;justify-content:center;z-index:2;}.k-SimpleCard__image{width:100%;display:block;transition:transform 0.4s ease-in-out;}.k-SimpleCard__title{transition:color 0.4s ease-in-out;}&[href]:hover,&[href]:focus{.k-SimpleCard__image{transform:scale(1.07);}.k-SimpleCard__title{color:", ";}}&[href]:focus{outline:", " solid ", ";outline-offset:", ";}"], (0, _typography.pxToRem)(20), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2));

var SimpleCard = function SimpleCard(_ref) {
  var imageProps = _ref.imageProps,
      withPlayerButtonOnImage = _ref.withPlayerButtonOnImage,
      arrowColor = _ref.arrowColor,
      ariaLabel = _ref.ariaLabel,
      href = _ref.href,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subtitle = _ref.subtitle,
      paragraph = _ref.paragraph,
      imageContainerRatio = _ref.imageContainerRatio,
      imageContainerBackground = _ref.imageContainerBackground,
      className = _ref.className,
      playerButtonSize = _ref.playerButtonSize,
      others = (0, _objectWithoutProperties2.default)(_ref, ["imageProps", "withPlayerButtonOnImage", "arrowColor", "ariaLabel", "href", "title", "titleProps", "subtitle", "paragraph", "imageContainerRatio", "imageContainerBackground", "className", "playerButtonSize"]);
  return /*#__PURE__*/_react.default.createElement(ContainerStyle, (0, _extends2.default)({
    as: href ? 'a' : 'div'
  }, others, {
    href: href,
    className: (0, _classnames.default)('k-SimpleCard', className)
  }), /*#__PURE__*/_react.default.createElement(_image.Image, {
    imageContainerRatio: imageContainerRatio,
    imageContainerBackground: imageContainerBackground,
    imageProps: imageProps,
    withPlayerButtonOnImage: withPlayerButtonOnImage,
    arrowColor: arrowColor,
    ariaLabel: ariaLabel,
    playerButtonSize: playerButtonSize
  }), title && /*#__PURE__*/_react.default.createElement(_title.Title, {
    title: title,
    titleProps: titleProps
  }), subtitle && /*#__PURE__*/_react.default.createElement(_subtitle.Subtitle, {
    subtitle: subtitle
  }), paragraph && /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
    paragraph: paragraph
  }));
};

exports.SimpleCard = SimpleCard;
SimpleCard.propTypes = {
  imageProps: _propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired
  }),
  withPlayerButtonOnImage: _propTypes.default.bool,
  ariaLabel: _propTypes.default.string,
  arrowColor: _propTypes.default.string,
  href: _propTypes.default.string,
  playerButtonSize: _propTypes.default.number,
  imageContainerBackground: _propTypes.default.string,
  imageContainerRatio: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  title: _propTypes.default.node,
  titleProps: _propTypes.default.object,
  subtitle: _propTypes.default.node,
  paragraph: _propTypes.default.node
};
SimpleCard.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: _colorsConfig.default.line1,
  playerButtonSize: 70,
  imageContainerRatio: null,
  title: null,
  titleProps: {},
  subtitle: null,
  paragraph: null
};