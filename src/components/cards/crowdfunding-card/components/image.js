"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _buttonImage = require("../../../../components/buttons/button-image");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var Image = function Image(_ref) {
  var imageContainerBackground = _ref.imageContainerBackground,
      _ref$imageProps = _ref.imageProps,
      backgroundColor = _ref$imageProps.backgroundColor,
      alt = _ref$imageProps.alt,
      otherImageProps = (0, _objectWithoutProperties2.default)(_ref$imageProps, ["backgroundColor", "alt"]),
      videoProps = _ref.videoProps,
      videoSources = _ref.videoSources,
      avatarProps = _ref.avatarProps,
      ownerDescription = _ref.ownerDescription,
      ownerTitle = _ref.ownerTitle,
      loading = _ref.loading;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CrowdfundingCard__image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CrowdfundingCard__image__imageContainer",
    style: imageContainerBackground ? {
      backgroundColor: imageContainerBackground
    } : null
  }, !loading && videoSources.length == 0 && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, otherImageProps, {
    alt: alt || '',
    className: (0, _classnames.default)('k-Card__image', 'k-CrowdfundingCard__image__image', otherImageProps.className),
    style: backgroundColor ? (0, _extends2.default)({
      backgroundColor: backgroundColor
    }, otherImageProps.style) : otherImageProps.style
  })), !loading && videoSources.length > 0 && /*#__PURE__*/_react.default.createElement("video", (0, _extends2.default)({
    autoPlay: true,
    loop: true,
    muted: true,
    poster: otherImageProps.src
  }, videoProps, {
    className: (0, _classnames.default)('k-Card__image', 'k-CrowdfundingCard__image__image', videoProps.className),
    style: backgroundColor ? (0, _extends2.default)({
      backgroundColor: backgroundColor
    }, videoProps.style) : videoProps.style
  }), videoSources.map(function (sourceProps) {
    return /*#__PURE__*/_react.default.createElement("source", (0, _extends2.default)({
      key: "video_source_".concat(sourceProps.src)
    }, sourceProps));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CrowdfundingCard__image__ownerContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_buttonImage.ButtonImage, {
    className: "k-CrowdfundingCard__image__avatar",
    tag: "span",
    img: !loading ? avatarProps : null,
    withoutPointerEvents: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CrowdfundingCard__image__owner k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-CrowdfundingCard__image__title",
    tag: "div",
    size: "micro",
    weight: "regular",
    color: "font1"
  }, !loading && ownerTitle), /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-CrowdfundingCard__image__description",
    tag: "div",
    size: "micro",
    weight: "light",
    color: "font1"
  }, !loading && ownerDescription))));
};

Image.propTypes = {
  imageProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    src: _propTypes.default.string,
    alt: _propTypes.default.string
  }),
  avatarProps: _propTypes.default.shape({
    src: _propTypes.default.string,
    alt: _propTypes.default.string
  }),
  ownerTitle: _propTypes.default.string,
  ownerDescription: _propTypes.default.string,
  loading: _propTypes.default.bool,
  imageContainerBackground: _propTypes.default.string,
  videoProps: _propTypes.default.object,
  videoSources: _propTypes.default.arrayOf(_propTypes.default.shape({
    src: _propTypes.default.string,
    type: _propTypes.default.string
  }))
};
Image.defaultProps = {
  imageProps: {
    backgroundColor: _colorsConfig.default.line2,
    src: 'https://placehold.it/160x100/caf4fe/caf4fe',
    alt: ''
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  ownerTitle: '',
  ownerDescription: '',
  loading: false,
  imageContainerBackground: '',
  videoProps: {},
  videoSources: []
};
var _default = Image;
exports.default = _default;